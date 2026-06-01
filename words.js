// ============================================================
//  六级单词数据文件
//  扩展方法：直接往下面的数组里照着格式加一条即可。
//  字段说明：
//    word     —— 单词
//    phonetic —— 美音音标
//    meaning  —— 中文释义
//    examples —— 历年考过的例句（数组，可放多条）
//                 每条：{ en: 英文例句, zh: 中文翻译, source: 出处/年份 }
//                 没有例句就写 examples: []
// ============================================================

const WORDS = [
  {
    word: "ambition",
    phonetic: "/æmˈbɪʃən/",
    meaning: "n. 雄心，抱负",
    examples: [
      { en: "Her ambition is to become a leading scientist in her field.", zh: "她的抱负是成为本领域的顶尖科学家。", source: "示例例句" }
    ]
  },
  {
    word: "aggressive",
    phonetic: "/əˈɡresɪv/",
    meaning: "adj. 好斗的；有进取心的；积极进取的",
    examples: [
      { en: "The company adopted an aggressive marketing strategy to expand overseas.", zh: "公司采取了积极进取的营销策略以拓展海外市场。", source: "示例例句" }
    ]
  },
  {
    word: "congress",
    phonetic: "/ˈkɑːŋɡrəs/",
    meaning: "n. 国会，议会；代表大会",
    examples: [
      { en: "The new bill was passed by Congress last week.", zh: "这项新法案上周由国会通过。", source: "示例例句" }
    ]
  },
  {
    word: "parliament",
    phonetic: "/ˈpɑːrləmənt/",
    meaning: "n. 国会，议会",
    examples: [
      { en: "Members of Parliament debated the issue for hours.", zh: "议会议员们就这个问题辩论了数小时。", source: "示例例句" }
    ]
  },
  {
    word: "ambassador",
    phonetic: "/æmˈbæsədər/",
    meaning: "n. 大使；使节",
    examples: [
      { en: "She was appointed as the ambassador to France.", zh: "她被任命为驻法国大使。", source: "示例例句" }
    ]
  },
  {
    word: "eminent",
    phonetic: "/ˈemɪnənt/",
    meaning: "adj. 杰出的，著名的；明显的",
    examples: [
      { en: "He is an eminent scholar in the study of ancient history.", zh: "他是研究古代史的杰出学者。", source: "示例例句" }
    ]
  },
  {
    word: "conquer",
    phonetic: "/ˈkɑːŋkər/",
    meaning: "v. 战胜，征服；克服",
    examples: [
      { en: "She finally conquered her fear of speaking in public.", zh: "她终于克服了当众讲话的恐惧。", source: "示例例句" }
    ]
  },
  {
    word: "prominent",
    phonetic: "/ˈprɑːmɪnənt/",
    meaning: "adj. 杰出的，重要的；突出的，显眼的",
    examples: [
      { en: "He played a prominent role in the negotiations.", zh: "他在谈判中扮演了重要角色。", source: "示例例句" }
    ]
  },
  {
    word: "outstanding",
    phonetic: "/aʊtˈstændɪŋ/",
    meaning: "adj. 杰出的，优秀的；未解决的，未付的",
    examples: [
      { en: "She received an award for her outstanding contribution to science.", zh: "她因对科学的杰出贡献而获奖。", source: "示例例句" }
    ]
  },
  {
    word: "remark",
    phonetic: "/rɪˈmɑːrk/",
    meaning: "n./v. 评论，谈论；注意到",
    examples: [
      { en: "He made a few remarks about the current economic situation.", zh: "他就当前经济形势发表了几点评论。", source: "示例例句" }
    ]
  },
  {
    word: "remarkable",
    phonetic: "/rɪˈmɑːrkəbl/",
    meaning: "adj. 显著的，非凡的，引人注目的",
    examples: [
      { en: "The country has made remarkable progress in recent years.", zh: "该国近年来取得了显著的进步。", source: "示例例句" }
    ]
  },
  {
    word: "comment",
    phonetic: "/ˈkɑːment/",
    meaning: "n./v. 评论，意见",
    examples: [
      { en: "The official refused to comment on the matter.", zh: "这位官员拒绝就此事发表评论。", source: "示例例句" }
    ]
  },
  {
    word: "commentary",
    phonetic: "/ˈkɑːmənteri/",
    meaning: "n. 现场解说，实况报道；评论，注释",
    examples: [
      { en: "He provided live commentary on the football match.", zh: "他对这场足球比赛进行了现场解说。", source: "示例例句" }
    ]
  },
  {
    word: "commentator",
    phonetic: "/ˈkɑːmənteɪtər/",
    meaning: "n. 评论员，解说员",
    examples: [
      { en: "The sports commentator described every move in detail.", zh: "体育解说员详细描述了每一个动作。", source: "示例例句" }
    ]
  },
  {
    word: "brilliant",
    phonetic: "/ˈbrɪljənt/",
    meaning: "adj. 明亮的，光辉的；聪颖的，才华横溢的",
    examples: [
      { en: "She came up with a brilliant idea to solve the problem.", zh: "她想出了一个绝妙的主意来解决这个问题。", source: "示例例句" }
    ]
  },
  {
    word: "fabulous",
    phonetic: "/ˈfæbjələs/",
    meaning: "adj. 极好的，绝妙的；难以置信的",
    examples: [
      { en: "We had a fabulous time at the beach.", zh: "我们在海滩度过了一段美好的时光。", source: "示例例句" }
    ]
  },
  {
    word: "terrific",
    phonetic: "/təˈrɪfɪk/",
    meaning: "adj. 极好的，非常棒的；巨大的",
    examples: [
      { en: "You did a terrific job on the presentation.", zh: "你的演讲做得非常出色。", source: "示例例句" }
    ]
  },
  {
    word: "grand",
    phonetic: "/ɡrænd/",
    meaning: "adj. 壮丽的，宏大的；重大的",
    examples: [
      { en: "The palace was a grand and impressive building.", zh: "这座宫殿是一座宏伟而令人印象深刻的建筑。", source: "示例例句" }
    ]
  },
  {
    word: "magnificent",
    phonetic: "/mæɡˈnɪfɪsnt/",
    meaning: "adj. 壮丽的，宏伟的；极好的",
    examples: [
      { en: "From the top of the mountain, we enjoyed a magnificent view.", zh: "从山顶上，我们欣赏到了壮丽的景色。", source: "示例例句" }
    ]
  },
  {
    word: "magnitude",
    phonetic: "/ˈmæɡnɪtuːd/",
    meaning: "n. 巨大；重要性；震级，星等",
    examples: [
      { en: "Few people understood the magnitude of the problem.", zh: "很少有人理解这个问题的严重程度。", source: "示例例句" }
    ]
  },
  {
    word: "magnify",
    phonetic: "/ˈmæɡnɪfaɪ/",
    meaning: "v. 放大，扩大；夸大",
    examples: [
      { en: "The microscope can magnify the cells hundreds of times.", zh: "显微镜能将细胞放大数百倍。", source: "示例例句" }
    ]
  },
  {
    word: "exception",
    phonetic: "/ɪkˈsepʃən/",
    meaning: "n. 例外，除外",
    examples: [
      { en: "Everyone must follow the rules, without exception.", zh: "每个人都必须遵守规则，无一例外。", source: "示例例句" }
    ]
  },
  {
    word: "exceptional",
    phonetic: "/ɪkˈsepʃənl/",
    meaning: "adj. 杰出的，优秀的；异常的，例外的",
    examples: [
      { en: "She has an exceptional talent for music.", zh: "她在音乐方面有着非凡的天赋。", source: "示例例句" }
    ]
  },
  {
    word: "exemplary",
    phonetic: "/ɪɡˈzempləri/",
    meaning: "adj. 模范的，典范的；惩戒性的",
    examples: [
      { en: "His behavior throughout the project was exemplary.", zh: "他在整个项目中的表现堪称模范。", source: "示例例句" }
    ]
  },
  {
    word: "instance",
    phonetic: "/ˈɪnstəns/",
    meaning: "n. 例子，实例；情况",
    examples: [
      { en: "This is just one instance of the company's poor service.", zh: "这只是该公司服务糟糕的一个例子。", source: "示例例句" }
    ]
  },
  {
    word: "tremendous",
    phonetic: "/trəˈmendəs/",
    meaning: "adj. 巨大的，极大的；极好的",
    examples: [
      { en: "The new policy has had a tremendous impact on the economy.", zh: "新政策对经济产生了巨大的影响。", source: "示例例句" }
    ]
  }
];
