// ============================================================
//  六级学习卡片 —— 交互逻辑
//  顶部搜索 + 底部类型导航 + 筛选弹层（单元 / 词性）
// ============================================================

const cardsEl    = document.getElementById("cards");
const searchEl   = document.getElementById("search");
const clearEl    = document.getElementById("clear-search");
const countEl    = document.getElementById("count");
const emptyEl    = document.getElementById("empty");
const player     = document.getElementById("player");
const toTopEl    = document.getElementById("to-top");
const appbarEl   = document.getElementById("appbar");
const tabbarEl   = document.getElementById("tabbar");
const sheetEl    = document.getElementById("sheet");
const backdropEl = document.getElementById("sheet-backdrop");
const openFilterEl = document.getElementById("open-filter");
const sheetCloseEl = document.getElementById("sheet-close");
const sheetApplyEl = document.getElementById("sheet-apply");
const filterBadgeEl = document.getElementById("filter-badge");
const resetEl    = document.getElementById("reset-filter");

const TYPE_LABEL = { word: "单词", phrase: "短语", grammar: "语法" };
const POS_VALUES = ["全部", "名词", "动词", "形容词", "副词"];

// 当前筛选状态
const state = { unit: "全部", type: "全部", pos: "全部", q: "" };

let currentBtn = null; // 正在播放的按钮

// ---------- 发音：优先有道美音 MP3，失败回退浏览器语音合成 ----------
function speak(text, btn) {
  if (!text) return;
  if (currentBtn) currentBtn.classList.remove("playing");
  currentBtn = btn || null;
  if (currentBtn) currentBtn.classList.add("playing");

  const stop = () => { if (currentBtn) currentBtn.classList.remove("playing"); currentBtn = null; };

  const url = "https://dict.youdao.com/dictvoice?type=2&audio=" + encodeURIComponent(text);
  player.src = url;
  player.onended = stop;
  player.onerror = () => { fallbackTTS(text); stop(); };

  const p = player.play();
  if (p && p.catch) p.catch(() => { fallbackTTS(text); stop(); });
}

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

// 取一段文本里靠前的英文部分（用于朗读搭配 / 例句）
function leadingEnglish(s) {
  const m = String(s).match(/^[^一-鿿]+/);
  let t = (m ? m[0] : s).trim();
  t = t.replace(/[；;，,。.\/]+$/, "").trim();
  return t || String(s).trim();
}

// 把 “a；b；c” 拆成数组
function splitList(s) {
  if (!s) return [];
  return String(s).split(/[；;]/).map(x => x.trim()).filter(Boolean);
}

// ---------- 词性归类（用于词性筛选） ----------
function posCategory(item) {
  if (item.type !== "word") return null;
  const raw = (item.pos || "") + " " + (item.meaning || "");
  const has = (re) => re.test(raw);
  const cats = [];
  if (has(/\bn\b|\bn\.|名词/)) cats.push("名词");
  if (has(/\bv\b|\bv\.|v-ed|v-ing|动词/)) cats.push("动词");
  if (has(/\badj\b|\badj\.|形容词/)) cats.push("形容词");
  if (has(/\badv\b|\badv\.|副词/)) cats.push("副词");
  return cats.length ? cats : ["其他"];
}

// ---------- 构建筛选选项（弹层里的单元 / 词性） ----------
function buildFilters() {
  const unitOrder = ["全部", "核心词", "第一单元", "第二单元", "六级核心词汇"];
  const units = unitOrder.filter(u => u === "全部" || DATA.some(d => d.unit === u));
  // 追加任何未在预设顺序里的单元，保证新单元也能出现
  DATA.forEach(d => { if (!units.includes(d.unit)) units.push(d.unit); });
  renderChips("filter-unit", "unit", units, { "全部": "全部单元" });
  renderChips("filter-pos", "pos", POS_VALUES, { "全部": "全部词性" });
}

function renderChips(containerId, key, values, labels = {}) {
  const el = document.getElementById(containerId);
  el.innerHTML = values.map(v => {
    const label = labels[v] || TYPE_LABEL[v] || v;
    const active = state[key] === v ? " active" : "";
    return `<button class="chip${active}" data-key="${key}" data-val="${escapeAttr(v)}">${escapeHtml(label)}</button>`;
  }).join("");
}

// ---------- 过滤逻辑 ----------
function applyFilters() {
  const q = state.q.toLowerCase();
  return DATA.filter(d => {
    if (state.unit !== "全部" && d.unit !== state.unit) return false;
    if (state.type !== "全部" && d.type !== state.type) return false;
    if (state.pos !== "全部") {
      const cats = posCategory(d);
      if (!cats || !cats.includes(state.pos)) return false;
    }
    if (q) {
      const hay = [d.term, d.meaning, d.pos, d.note, d.usage,
                   d.collocations, d.synonyms, d.example, d.explanation]
                   .filter(Boolean).join(" ").toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

// 词性筛选只有在“单词 / 全部”类型下才有意义
function syncPosVisibility() {
  const show = state.type === "全部" || state.type === "word";
  document.getElementById("pos-section").classList.toggle("hidden", !show);
  if (!show && state.pos !== "全部") {
    state.pos = "全部";
    renderChips("filter-pos", "pos", POS_VALUES, { "全部": "全部词性" });
  }
}

// 顶部筛选按钮的徽标 + 结果条的「清除筛选」
function updateFilterIndicators() {
  const n = (state.unit !== "全部" ? 1 : 0) + (state.pos !== "全部" ? 1 : 0);
  filterBadgeEl.hidden = n === 0;
  filterBadgeEl.textContent = n || "";
  openFilterEl.classList.toggle("active", n > 0);

  const anyFilter = state.unit !== "全部" || state.pos !== "全部" || state.type !== "全部" || state.q !== "";
  resetEl.hidden = !anyFilter;
}

// ---------- 渲染卡片 ----------
function render() {
  syncPosVisibility();
  const list = applyFilters();
  cardsEl.innerHTML = list.map(cardHtml).join("");
  countEl.textContent = `共 ${list.length} 条`;
  emptyEl.hidden = list.length !== 0;
  updateFilterIndicators();
}

function badge(text, cls = "") {
  return `<span class="badge ${cls}">${escapeHtml(text)}</span>`;
}

function cardHtml(item) {
  if (item.type === "phrase") return phraseCard(item);
  if (item.type === "grammar") return grammarCard(item);
  return wordCard(item);
}

function wordCard(item) {
  const badges = [badge(item.unit, "unit")];
  if (item.pos) badges.push(badge(item.pos, "pos"));

  const collos = splitList(item.collocations);
  const syns = splitList(item.synonyms);
  const hasExamples = item.examples && item.examples.length;
  const hasDetail = collos.length || syns.length || hasExamples;

  const collosHtml = collos.length ? `
    <div class="detail-block">
      <div class="detail-title">🧷 常考搭配</div>
      ${collos.map(c => `
        <div class="collo">
          <button class="mini-play" data-say="${escapeAttr(leadingEnglish(c))}" title="朗读">🔊</button>
          <span>${escapeHtml(c)}</span>
        </div>`).join("")}
    </div>` : "";

  const synHtml = syns.length ? `
    <div class="detail-block">
      <div class="detail-title">🔄 同义替换</div>
      <div class="syn-list">${syns.map(s => `<span class="syn">${escapeHtml(s)}</span>`).join("")}</div>
    </div>` : "";

  const exHtml = hasExamples ? `
    <div class="detail-block">
      <div class="detail-title">📝 例句</div>
      ${item.examples.map(ex => `
        <div class="ex-item">
          <div class="ex-en">
            <button class="mini-play" data-say="${escapeAttr(ex.en)}" title="朗读例句">🔊</button>
            <span>${escapeHtml(ex.en)}</span>
          </div>
          <div class="ex-zh">${escapeHtml(ex.zh || "")}</div>
          ${ex.source ? `<div class="ex-source">— ${escapeHtml(ex.source)}</div>` : ""}
        </div>`).join("")}
    </div>` : "";

  return `
    <article class="card type-word">
      <div class="card-top">
        <span class="term">${escapeHtml(item.term)}</span>
        <button class="play-btn" data-say="${escapeAttr(item.term)}" title="播放美音">🔊</button>
      </div>
      ${item.phonetic ? `<div class="phonetic">${escapeHtml(item.phonetic)}</div>` : ""}
      <div class="badges">${badges.join("")}</div>
      <div class="meaning">${escapeHtml(item.meaning)}</div>
      ${item.note ? `<div class="note">📌 ${escapeHtml(item.note)}</div>` : ""}
      ${hasDetail ? `
        <button class="detail-toggle">展开搭配 · 同义 ▾</button>
        <div class="details">${collosHtml}${synHtml}${exHtml}</div>` : ""}
    </article>`;
}

function phraseCard(item) {
  const badges = [badge(item.unit, "unit"), badge("短语", "type-phrase-badge")];
  return `
    <article class="card type-phrase">
      <div class="card-top">
        <span class="term term-phrase">${escapeHtml(item.term)}</span>
        <button class="play-btn" data-say="${escapeAttr(leadingEnglish(item.term))}" title="朗读短语">🔊</button>
      </div>
      <div class="badges">${badges.join("")}</div>
      <div class="meaning">${escapeHtml(item.meaning)}</div>
      ${item.usage ? `
        <button class="detail-toggle">用法补充 ▾</button>
        <div class="details"><div class="detail-block"><div class="usage">${escapeHtml(item.usage)}</div></div></div>` : ""}
    </article>`;
}

function grammarCard(item) {
  const badges = [badge(item.unit, "unit"), badge("语法", "type-grammar-badge")];
  return `
    <article class="card type-grammar">
      <div class="card-top">
        <span class="term term-grammar">${escapeHtml(item.term)}</span>
      </div>
      <div class="badges">${badges.join("")}</div>
      ${item.example ? `
        <div class="gram-ex">
          <button class="mini-play" data-say="${escapeAttr(leadingEnglish(item.example))}" title="朗读例句">🔊</button>
          <span>${escapeHtml(item.example)}</span>
        </div>` : ""}
      ${item.explanation ? `
        <button class="detail-toggle">理解方法 ▾</button>
        <div class="details"><div class="detail-block"><div class="explanation">${escapeHtml(item.explanation)}</div></div></div>` : ""}
    </article>`;
}

// ---------- 事件：卡片内（发音 / 展开） ----------
cardsEl.addEventListener("click", (e) => {
  const sayBtn = e.target.closest("[data-say]");
  if (sayBtn) {
    speak(sayBtn.getAttribute("data-say"), sayBtn.classList.contains("play-btn") ? sayBtn : null);
    return;
  }
  const toggle = e.target.closest(".detail-toggle");
  if (toggle) {
    const box = toggle.nextElementSibling;
    const open = box.classList.toggle("open");
    toggle.textContent = toggle.textContent.replace(/[▾▴]/, open ? "▴" : "▾");
    return;
  }
});

// ---------- 事件：底部类型导航 ----------
tabbarEl.addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (!tab) return;
  state.type = tab.dataset.type;
  tabbarEl.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t === tab));
  render();
});

// ---------- 事件：筛选弹层里的 chip ----------
sheetEl.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  const key = chip.dataset.key;
  state[key] = chip.dataset.val;
  chip.parentElement.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c === chip));
  render();
});

// ---------- 弹层开关 ----------
function openSheet() {
  sheetEl.classList.add("open");
  backdropEl.classList.add("open");
}
function closeSheet() {
  sheetEl.classList.remove("open");
  backdropEl.classList.remove("open");
}
openFilterEl.addEventListener("click", openSheet);
sheetCloseEl.addEventListener("click", closeSheet);
sheetApplyEl.addEventListener("click", closeSheet);
backdropEl.addEventListener("click", closeSheet);

// ---------- 清除筛选 ----------
resetEl.addEventListener("click", () => {
  state.unit = "全部"; state.type = "全部"; state.pos = "全部"; state.q = "";
  searchEl.value = ""; clearEl.hidden = true;
  buildFilters();
  tabbarEl.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.type === "全部"));
  render();
});

// ---------- 搜索 ----------
searchEl.addEventListener("input", () => {
  state.q = searchEl.value.trim();
  clearEl.hidden = !state.q;
  render();
});
clearEl.addEventListener("click", () => {
  searchEl.value = ""; state.q = ""; clearEl.hidden = true; render(); searchEl.focus();
});

// ---------- 滚动：回到顶部 + 顶部栏随滚动隐藏 ----------
let lastY = 0;
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  toTopEl.hidden = y < 400;
  // 向下滚且离开顶部 → 收起顶部栏；向上滚 → 显示
  if (y > lastY && y > 140) appbarEl.classList.add("hide");
  else appbarEl.classList.remove("hide");
  lastY = y;
}, { passive: true });
toTopEl.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ---------- 工具：转义 ----------
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}
function escapeAttr(s) { return escapeHtml(s); }

// ---------- 初始化 ----------
buildFilters();
render();

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}
