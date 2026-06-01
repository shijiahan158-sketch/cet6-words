// ============================================================
//  六级单词卡片 —— 交互逻辑
// ============================================================

const cardsEl   = document.getElementById("cards");
const searchEl  = document.getElementById("search");
const countEl   = document.getElementById("count");
const totalEl   = document.getElementById("total");
const emptyEl   = document.getElementById("empty");
const player    = document.getElementById("player");

let currentBtn = null; // 正在播放的按钮，用于动画

// ---------- 发音：优先有道美音 MP3，失败回退浏览器语音合成 ----------
function speak(text, btn) {
  // 动画状态
  if (currentBtn) currentBtn.classList.remove("playing");
  currentBtn = btn || null;
  if (currentBtn) currentBtn.classList.add("playing");

  const stop = () => { if (currentBtn) currentBtn.classList.remove("playing"); currentBtn = null; };

  // type=2 => 美音；type=1 => 英音
  const url = "https://dict.youdao.com/dictvoice?type=2&audio=" + encodeURIComponent(text);
  player.src = url;
  player.onended = stop;
  player.onerror = () => { fallbackTTS(text); stop(); };

  const p = player.play();
  if (p && p.catch) {
    p.catch(() => { fallbackTTS(text); stop(); });
  }
}

// 浏览器内置语音合成（离线兜底，强制美音）
function fallbackTTS(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  const voices = window.speechSynthesis.getVoices();
  const us = voices.find(v => /en[-_]US/i.test(v.lang));
  if (us) u.voice = us;
  window.speechSynthesis.speak(u);
}

// ---------- 渲染卡片 ----------
function render(list) {
  cardsEl.innerHTML = "";
  list.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "card";

    const examplesHtml = (item.examples && item.examples.length)
      ? item.examples.map(ex => `
          <div class="ex-item">
            <div class="ex-en">
              <button class="mini-play" data-say="${escapeAttr(ex.en)}" title="朗读例句">🔊</button>
              <span>${escapeHtml(ex.en)}</span>
            </div>
            <div class="ex-zh">${escapeHtml(ex.zh || "")}</div>
            ${ex.source ? `<div class="ex-source">— ${escapeHtml(ex.source)}</div>` : ""}
          </div>`).join("")
      : `<div class="ex-empty">暂无例句，可在 words.js 中补充。</div>`;

    card.innerHTML = `
      <div class="card-top">
        <span class="word">${escapeHtml(item.word)}</span>
        <button class="play-btn" data-say="${escapeAttr(item.word)}" title="播放美音">🔊</button>
      </div>
      <div class="phonetic">${escapeHtml(item.phonetic || "")}</div>
      <div class="meaning">${escapeHtml(item.meaning || "")}</div>
      <button class="ex-toggle">📖 历年例句</button>
      <div class="examples">${examplesHtml}</div>
    `;
    cardsEl.appendChild(card);
  });

  countEl.textContent = list.length ? `显示 ${list.length} 个` : "";
  emptyEl.hidden = list.length !== 0;
}

// ---------- 事件委托：播放 & 展开例句 ----------
cardsEl.addEventListener("click", (e) => {
  const sayBtn = e.target.closest("[data-say]");
  if (sayBtn) {
    speak(sayBtn.getAttribute("data-say"), sayBtn.classList.contains("play-btn") ? sayBtn : null);
    return;
  }
  const toggle = e.target.closest(".ex-toggle");
  if (toggle) {
    const box = toggle.nextElementSibling;
    box.classList.toggle("open");
    toggle.textContent = box.classList.contains("open") ? "📖 收起例句" : "📖 历年例句";
  }
});

// ---------- 搜索 ----------
searchEl.addEventListener("input", () => {
  const q = searchEl.value.trim().toLowerCase();
  if (!q) { render(WORDS); return; }
  const filtered = WORDS.filter(w =>
    w.word.toLowerCase().includes(q) ||
    (w.meaning || "").toLowerCase().includes(q)
  );
  render(filtered);
});

// ---------- 工具：转义，防止特殊字符出错 ----------
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}
function escapeAttr(s) { return escapeHtml(s); }

// ---------- 初始化 ----------
totalEl.textContent = WORDS.length;
render(WORDS);

// 预加载语音列表（部分浏览器异步加载）
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}
