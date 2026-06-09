// ============================================================
//  六级单词 / 短语 / 语法 数据文件
//  统一结构 DATA：每条记录含 type 与 unit，用于分类筛选。
//  type: 'word' 单词 | 'phrase' 短语 | 'grammar' 语法
//  unit: '核心词' | '第一单元' | '第二单元' | '六级核心词汇'
//  ----------------------------------------------------------
//  word    : { term, phonetic, pos, meaning, note, collocations, synonyms, examples }
//  phrase  : { term, meaning, usage }
//  grammar : { term(知识点), example(例句), explanation(理解方法) }
//  collocations / synonyms 用中文分号“；”分隔多条，渲染时自动拆分。
// ============================================================

const DATA = [
  {
    "type": "word",
    "unit": "核心词",
    "term": "ambition",
    "phonetic": "/æmˈbɪʃən/",
    "pos": "",
    "meaning": "n. 雄心，抱负",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "Her ambition is to become a leading scientist in her field.",
        "zh": "她的抱负是成为本领域的顶尖科学家。",
        "source": "示例例句"
      }
    ],
    "id": 0
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "aggressive",
    "phonetic": "/əˈɡresɪv/",
    "pos": "",
    "meaning": "adj. 好斗的；有进取心的；积极进取的",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "The company adopted an aggressive marketing strategy to expand overseas.",
        "zh": "公司采取了积极进取的营销策略以拓展海外市场。",
        "source": "示例例句"
      }
    ],
    "id": 1
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "congress",
    "phonetic": "/ˈkɑːŋɡrəs/",
    "pos": "",
    "meaning": "n. 国会，议会；代表大会",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "The new bill was passed by Congress last week.",
        "zh": "这项新法案上周由国会通过。",
        "source": "示例例句"
      }
    ],
    "id": 2
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "parliament",
    "phonetic": "/ˈpɑːrləmənt/",
    "pos": "",
    "meaning": "n. 国会，议会",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "Members of Parliament debated the issue for hours.",
        "zh": "议会议员们就这个问题辩论了数小时。",
        "source": "示例例句"
      }
    ],
    "id": 3
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "ambassador",
    "phonetic": "/æmˈbæsədər/",
    "pos": "",
    "meaning": "n. 大使；使节",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "She was appointed as the ambassador to France.",
        "zh": "她被任命为驻法国大使。",
        "source": "示例例句"
      }
    ],
    "id": 4
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "eminent",
    "phonetic": "/ˈemɪnənt/",
    "pos": "",
    "meaning": "adj. 杰出的，著名的；明显的",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "He is an eminent scholar in the study of ancient history.",
        "zh": "他是研究古代史的杰出学者。",
        "source": "示例例句"
      }
    ],
    "id": 5
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "conquer",
    "phonetic": "/ˈkɑːŋkər/",
    "pos": "",
    "meaning": "v. 战胜，征服；克服",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "She finally conquered her fear of speaking in public.",
        "zh": "她终于克服了当众讲话的恐惧。",
        "source": "示例例句"
      }
    ],
    "id": 6
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "prominent",
    "phonetic": "/ˈprɑːmɪnənt/",
    "pos": "",
    "meaning": "adj. 杰出的，重要的；突出的，显眼的",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "He played a prominent role in the negotiations.",
        "zh": "他在谈判中扮演了重要角色。",
        "source": "示例例句"
      }
    ],
    "id": 7
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "outstanding",
    "phonetic": "/aʊtˈstændɪŋ/",
    "pos": "",
    "meaning": "adj. 杰出的，优秀的；未解决的，未付的",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "She received an award for her outstanding contribution to science.",
        "zh": "她因对科学的杰出贡献而获奖。",
        "source": "示例例句"
      }
    ],
    "id": 8
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "remark",
    "phonetic": "/rɪˈmɑːrk/",
    "pos": "",
    "meaning": "n./v. 评论，谈论；注意到",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "He made a few remarks about the current economic situation.",
        "zh": "他就当前经济形势发表了几点评论。",
        "source": "示例例句"
      }
    ],
    "id": 9
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "remarkable",
    "phonetic": "/rɪˈmɑːrkəbl/",
    "pos": "",
    "meaning": "adj. 显著的，非凡的，引人注目的",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "The country has made remarkable progress in recent years.",
        "zh": "该国近年来取得了显著的进步。",
        "source": "示例例句"
      }
    ],
    "id": 10
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "comment",
    "phonetic": "/ˈkɑːment/",
    "pos": "",
    "meaning": "n./v. 评论，意见",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "The official refused to comment on the matter.",
        "zh": "这位官员拒绝就此事发表评论。",
        "source": "示例例句"
      }
    ],
    "id": 11
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "commentary",
    "phonetic": "/ˈkɑːmənteri/",
    "pos": "",
    "meaning": "n. 现场解说，实况报道；评论，注释",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "He provided live commentary on the football match.",
        "zh": "他对这场足球比赛进行了现场解说。",
        "source": "示例例句"
      }
    ],
    "id": 12
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "commentator",
    "phonetic": "/ˈkɑːmənteɪtər/",
    "pos": "",
    "meaning": "n. 评论员，解说员",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "The sports commentator described every move in detail.",
        "zh": "体育解说员详细描述了每一个动作。",
        "source": "示例例句"
      }
    ],
    "id": 13
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "brilliant",
    "phonetic": "/ˈbrɪljənt/",
    "pos": "",
    "meaning": "adj. 明亮的，光辉的；聪颖的，才华横溢的",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "She came up with a brilliant idea to solve the problem.",
        "zh": "她想出了一个绝妙的主意来解决这个问题。",
        "source": "示例例句"
      }
    ],
    "id": 14
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "fabulous",
    "phonetic": "/ˈfæbjələs/",
    "pos": "",
    "meaning": "adj. 极好的，绝妙的；难以置信的",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "We had a fabulous time at the beach.",
        "zh": "我们在海滩度过了一段美好的时光。",
        "source": "示例例句"
      }
    ],
    "id": 15
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "terrific",
    "phonetic": "/təˈrɪfɪk/",
    "pos": "",
    "meaning": "adj. 极好的，非常棒的；巨大的",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "You did a terrific job on the presentation.",
        "zh": "你的演讲做得非常出色。",
        "source": "示例例句"
      }
    ],
    "id": 16
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "grand",
    "phonetic": "/ɡrænd/",
    "pos": "",
    "meaning": "adj. 壮丽的，宏大的；重大的",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "The palace was a grand and impressive building.",
        "zh": "这座宫殿是一座宏伟而令人印象深刻的建筑。",
        "source": "示例例句"
      }
    ],
    "id": 17
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "magnificent",
    "phonetic": "/mæɡˈnɪfɪsnt/",
    "pos": "",
    "meaning": "adj. 壮丽的，宏伟的；极好的",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "From the top of the mountain, we enjoyed a magnificent view.",
        "zh": "从山顶上，我们欣赏到了壮丽的景色。",
        "source": "示例例句"
      }
    ],
    "id": 18
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "magnitude",
    "phonetic": "/ˈmæɡnɪtuːd/",
    "pos": "",
    "meaning": "n. 巨大；重要性；震级，星等",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "Few people understood the magnitude of the problem.",
        "zh": "很少有人理解这个问题的严重程度。",
        "source": "示例例句"
      }
    ],
    "id": 19
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "magnify",
    "phonetic": "/ˈmæɡnɪfaɪ/",
    "pos": "",
    "meaning": "v. 放大，扩大；夸大",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "The microscope can magnify the cells hundreds of times.",
        "zh": "显微镜能将细胞放大数百倍。",
        "source": "示例例句"
      }
    ],
    "id": 20
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "exception",
    "phonetic": "/ɪkˈsepʃən/",
    "pos": "",
    "meaning": "n. 例外，除外",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "Everyone must follow the rules, without exception.",
        "zh": "每个人都必须遵守规则，无一例外。",
        "source": "示例例句"
      }
    ],
    "id": 21
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "exceptional",
    "phonetic": "/ɪkˈsepʃənl/",
    "pos": "",
    "meaning": "adj. 杰出的，优秀的；异常的，例外的",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "She has an exceptional talent for music.",
        "zh": "她在音乐方面有着非凡的天赋。",
        "source": "示例例句"
      }
    ],
    "id": 22
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "exemplary",
    "phonetic": "/ɪɡˈzempləri/",
    "pos": "",
    "meaning": "adj. 模范的，典范的；惩戒性的",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "His behavior throughout the project was exemplary.",
        "zh": "他在整个项目中的表现堪称模范。",
        "source": "示例例句"
      }
    ],
    "id": 23
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "instance",
    "phonetic": "/ˈɪnstəns/",
    "pos": "",
    "meaning": "n. 例子，实例；情况",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "This is just one instance of the company's poor service.",
        "zh": "这只是该公司服务糟糕的一个例子。",
        "source": "示例例句"
      }
    ],
    "id": 24
  },
  {
    "type": "word",
    "unit": "核心词",
    "term": "tremendous",
    "phonetic": "/trəˈmendəs/",
    "pos": "",
    "meaning": "adj. 巨大的，极大的；极好的",
    "note": "",
    "collocations": "",
    "synonyms": "",
    "examples": [
      {
        "en": "The new policy has had a tremendous impact on the economy.",
        "zh": "新政策对经济产生了巨大的影响。",
        "source": "示例例句"
      }
    ],
    "id": 25
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "instruction",
    "pos": "名词 n.",
    "meaning": "指示；说明；教学",
    "note": "",
    "collocations": "follow instructions 按说明做；instructions for use 使用说明；under instruction 在指导下",
    "synonyms": "direction n. 指示；guidance n. 指导；teaching n. 教学",
    "id": 26
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "deplored",
    "pos": "动词 v. 过去式/过去分词",
    "meaning": "谴责；强烈反对；痛惜",
    "note": "",
    "collocations": "deplore the decision 谴责/反对决定；deplore the loss 痛惜损失",
    "synonyms": "condemn v. 谴责；criticize v. 批评；regret v. 对……感到遗憾",
    "id": 27
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "academically",
    "pos": "副词 adv.",
    "meaning": "学术上；学业上",
    "note": "",
    "collocations": "academically successful 学业成功；academically demanding 学术要求高",
    "synonyms": "scholastically adv. 学业上；educationally adv. 教育上",
    "id": 28
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "primary",
    "pos": "形容词 adj.",
    "meaning": "主要的；首要的；初级的；小学的",
    "note": "",
    "collocations": "primary reason 主要原因；primary goal 首要目标；primary concern 首要关切；primary school 小学",
    "synonyms": "main adj. 主要的；chief adj. 首要的；principal adj. 主要的",
    "id": 29
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "communities",
    "pos": "名词 n. 复数",
    "meaning": "社区；群体；共同体",
    "note": "",
    "collocations": "local community 当地社区；scientific community 科学界；international community 国际社会；community service 社区服务",
    "synonyms": "society n. 社会；group n. 群体；neighborhood n. 社区",
    "id": 30
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "excused",
    "pos": "动词 v. 过去式/过去分词",
    "meaning": "原谅；准许免做；为……找借口",
    "note": "",
    "collocations": "be excused from 被准许不参加/免于；excuse oneself 失陪",
    "synonyms": "forgive v. 原谅；exempt v. 免除；justify v. 为……辩解",
    "id": 31
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "investigated",
    "pos": "动词 v. 过去式/过去分词",
    "meaning": "调查；审查；研究",
    "note": "",
    "collocations": "investigate a case 调查案件；investigate the cause 调查原因；under investigation 正在调查中",
    "synonyms": "examine v. 检查/研究；look into v. 调查；inquire v. 调查/询问",
    "id": 32
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "ejected",
    "pos": "动词 v. 过去式/过去分词",
    "meaning": "逐出；弹出；喷出",
    "note": "",
    "collocations": "be ejected from 被逐出/被弹出；eject from 从……弹出/赶出",
    "synonyms": "expel v. 驱逐；remove v. 移除；throw out v. 赶出",
    "id": 33
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "average",
    "pos": "形容词 adj.; 名词 n.; 动词 v.",
    "meaning": "平均的；普通的；平均数；平均为",
    "note": "",
    "collocations": "on average 平均来说；average price 平均价格；average annual consumption 年均消费量",
    "synonyms": "ordinary adj. 普通的；mean n./adj. 平均数/平均的；typical adj. 典型的",
    "id": 34
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "signal",
    "pos": "名词 n.; 动词 v.",
    "meaning": "信号；暗示；发出信号；预示",
    "note": "",
    "collocations": "traffic signal 交通信号；a signal for ……的信号；signal to do sth 示意做某事",
    "synonyms": "sign n. 信号/迹象；indicate v. 表明；suggest v. 暗示",
    "id": 35
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "especially",
    "pos": "副词 adv.",
    "meaning": "尤其；特别",
    "note": "",
    "collocations": "especially important 尤其重要；especially for 对……尤其",
    "synonyms": "particularly adv. 尤其；notably adv. 特别地；in particular 尤其",
    "id": 36
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "policy",
    "pos": "名词 n.",
    "meaning": "政策；方针；原则",
    "note": "",
    "collocations": "government policy 政府政策；company policy 公司政策；policy maker 决策者",
    "synonyms": "strategy n. 策略；principle n. 原则；guideline n. 指导方针",
    "id": 37
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "matter",
    "pos": "动词 v.; 名词 n.",
    "meaning": "重要；有关系；事情",
    "note": "",
    "collocations": "matter for sb/sth 对……重要；What matters is... 重要的是……",
    "synonyms": "count v. 重要；be important v. 重要；issue n. 问题",
    "id": 38
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "accountable",
    "pos": "形容词 adj.",
    "meaning": "负有责任的；有责任说明的",
    "note": "",
    "collocations": "be accountable for 对……负责；hold sb accountable 追究某人责任",
    "synonyms": "responsible adj. 负责的；answerable adj. 有责任说明的",
    "id": 39
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "assume",
    "pos": "动词 v.",
    "meaning": "假设；认为；承担；呈现",
    "note": "",
    "collocations": "assume that... 假设/认为……；It is assumed that... 人们认为……；assume responsibility 承担责任",
    "synonyms": "suppose v. 假设；presume v. 假定；undertake v. 承担",
    "id": 40
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "effectively",
    "pos": "副词 adv.",
    "meaning": "有效地；实际上",
    "note": "",
    "collocations": "work effectively 有效工作；effectively prevent 有效阻止",
    "synonyms": "efficiently adv. 高效地；successfully adv. 成功地；virtually adv. 实际上",
    "id": 41
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "intervene",
    "pos": "动词 v.",
    "meaning": "干预；介入；插手",
    "note": "",
    "collocations": "intervene in 干预……；intervene in a conflict 干预冲突",
    "synonyms": "interfere v. 干涉；step in v. 介入；mediate v. 调停",
    "id": 42
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "encountered",
    "pos": "动词 v. 过去式/过去分词",
    "meaning": "遇到；遭遇；偶然碰见",
    "note": "",
    "collocations": "encounter difficulties/problems 遇到困难/问题；encounter resistance 遭遇阻力；a chance encounter 偶然相遇",
    "synonyms": "meet v. 遇见；face v. 面对；come across v. 偶遇/遇到",
    "id": 43
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "counseled",
    "pos": "动词 v. 过去式/过去分词",
    "meaning": "建议；劝告；提供咨询",
    "note": "",
    "collocations": "counsel sb to do sth 建议某人做某事；counsel caution 劝人谨慎；counseling service 咨询服务",
    "synonyms": "advise v. 建议；recommend v. 推荐；guide v. 指导",
    "id": 44
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "stunned",
    "pos": "形容词 adj.; 动词 v. 过去分词",
    "meaning": "震惊的；惊呆的；使震惊",
    "note": "",
    "collocations": "be stunned by/at 被……震惊；stunned silence 震惊后的沉默",
    "synonyms": "shocked adj. 震惊的；astonished adj. 惊讶的；amazed adj. 惊奇的",
    "id": 45
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "headed",
    "pos": "动词 v. 过去式/过去分词; 形容词 adj.",
    "meaning": "前往；领导；朝……方向发展",
    "note": "",
    "collocations": "head for 前往；head to 前往；head a team 领导团队；be headed for 朝……发展/很可能遭遇",
    "synonyms": "go v. 前往；lead v. 领导；move toward v. 朝……移动",
    "id": 46
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "pursue",
    "pos": "动词 v.",
    "meaning": "追求；从事；继续进行；追捕",
    "note": "",
    "collocations": "pursue a goal/dream 追求目标/梦想；pursue higher education 继续深造；pursue a career 从事职业",
    "synonyms": "seek v. 寻求；follow v. 追随/从事；chase v. 追逐",
    "id": 47
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "loans",
    "pos": "名词 n. 复数",
    "meaning": "贷款；借款",
    "note": "",
    "collocations": "student loans 学生贷款；take out a loan 贷款；repay/pay back a loan 偿还贷款",
    "synonyms": "debt n. 债务；credit n. 信贷；borrowing n. 借款",
    "id": 48
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "unpaid",
    "pos": "形容词 adj.",
    "meaning": "无报酬的；未付款的",
    "note": "",
    "collocations": "unpaid work 无偿工作；unpaid leave 无薪假；unpaid bills 未付账单；unpaid internships 无薪实习",
    "synonyms": "voluntary adj. 自愿的；uncompensated adj. 无报酬的；outstanding adj. 未付的",
    "id": 49
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "internships",
    "pos": "名词 n. 复数",
    "meaning": "实习；实习期",
    "note": "",
    "collocations": "paid internships 有薪实习；unpaid internships 无薪实习；internship opportunities 实习机会",
    "synonyms": "placement n. 实习岗位；training n. 培训；apprenticeship n. 学徒期",
    "id": 50
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "revealed",
    "pos": "动词 v. 过去式/过去分词",
    "meaning": "揭示；透露；显示",
    "note": "",
    "collocations": "reveal that... 揭示……；be revealed by 被……揭示；reveal the truth 揭露真相",
    "synonyms": "show v. 显示；disclose v. 透露；uncover v. 揭露",
    "id": 51
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "microscopic",
    "pos": "形容词 adj.",
    "meaning": "极微小的；显微镜下才能看见的",
    "note": "",
    "collocations": "microscopic organisms 微型生物；microscopic particles 微小颗粒",
    "synonyms": "tiny adj. 微小的；minute adj. 极小的；invisible adj. 看不见的",
    "id": 52
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "crops",
    "pos": "名词 n. 复数",
    "meaning": "农作物；庄稼",
    "note": "",
    "collocations": "food crops 粮食作物；grow crops 种植作物；protect crops from 保护作物免受……",
    "synonyms": "plants n. 植物；harvest n. 收成；produce n. 农产品",
    "id": 53
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "indestructibility",
    "pos": "名词 n.",
    "meaning": "坚不可摧；无法被毁坏的性质",
    "note": "",
    "collocations": "indestructible 坚不可摧的；the indestructibility of... ……的坚不可摧",
    "synonyms": "durability n. 耐久性；resilience n. 适应力/韧性；toughness n. 坚韧",
    "id": 54
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "seemingly",
    "pos": "副词 adv.",
    "meaning": "看似；貌似；表面上",
    "note": "",
    "collocations": "seemingly simple 看似简单；seemingly impossible 看似不可能；seemingly unrelated 看似无关",
    "synonyms": "apparently adv. 表面上；seemingly adv. 看似；ostensibly adv. 表面上",
    "id": 55
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "adaptations",
    "pos": "名词 n. 复数",
    "meaning": "适应；适应性变化；改编",
    "note": "",
    "collocations": "adaptations to the environment 对环境的适应性变化；adapt to change 适应变化；be adapted to 适合……",
    "synonyms": "adjustment n. 调整；modification n. 改变；accommodation n. 适应",
    "id": 56
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "tougher",
    "pos": "形容词 adj. 比较级",
    "meaning": "更坚韧的；更困难的；更强硬的",
    "note": "",
    "collocations": "tougher than 比……更坚韧/更困难；be tougher than expected 比预期更困难",
    "synonyms": "stronger adj. 更强的；harder adj. 更困难的；more resilient adj. 更有韧性的",
    "id": 57
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "rigors",
    "pos": "名词 n. 复数",
    "meaning": "严酷；艰辛；严格要求",
    "note": "",
    "collocations": "the rigors of ……的严酷考验；withstand the rigors of 经受住……",
    "synonyms": "hardship n. 艰难；severity n. 严酷；demands n. 要求",
    "id": 58
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "damp",
    "pos": "形容词 adj.; 名词 n.",
    "meaning": "潮湿的；微湿的；潮气",
    "note": "",
    "collocations": "damp conditions 潮湿环境；damp soil 潮湿土壤；keep sth damp 使某物保持湿润",
    "synonyms": "moist adj. 潮湿的；wet adj. 湿的；humid adj. 潮湿的",
    "id": 59
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "drying",
    "pos": "名词 n.; 现在分词",
    "meaning": "干燥；变干；使干",
    "note": "",
    "collocations": "drying process 干燥过程；during drying 在干燥过程中；drying conditions 干燥条件",
    "synonyms": "dehydration n. 脱水；desiccation n. 干燥；evaporation n. 蒸发",
    "id": 60
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "catastrophic",
    "pos": "形容词 adj.",
    "meaning": "灾难性的；毁灭性的",
    "note": "",
    "collocations": "catastrophic consequences 灾难性后果；catastrophic damage 毁灭性破坏；catastrophic failure 灾难性故障",
    "synonyms": "disastrous adj. 灾难性的；devastating adj. 毁灭性的；severe adj. 严重的",
    "id": 61
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "strategies",
    "pos": "名词 n. 复数",
    "meaning": "策略；方法；应对方式",
    "note": "",
    "collocations": "effective strategies 有效策略；survival strategies 生存策略；coping strategies 应对策略；develop strategies 制定策略",
    "synonyms": "approaches n. 方法；methods n. 方法；plans n. 计划",
    "id": 62
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "proteins",
    "pos": "名词 n. 复数",
    "meaning": "蛋白质",
    "note": "",
    "collocations": "protein structure 蛋白质结构；protective proteins 保护性蛋白质；produce proteins 产生蛋白质",
    "synonyms": "nutrient n. 营养物；enzyme n. 酶；amino acid n. 氨基酸",
    "id": 63
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "interior",
    "pos": "名词 n.; 形容词 adj.",
    "meaning": "内部；里面的；内陆的",
    "note": "",
    "collocations": "the interior of... ……的内部；interior design 室内设计；interior space 内部空间",
    "synonyms": "inside n./adj. 内部/里面的；inner adj. 内部的；internal adj. 内部的",
    "id": 64
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "scale",
    "pos": "名词 n.; 动词 v.",
    "meaning": "规模；程度；范围；等级；攀登/按比例调整",
    "note": "",
    "collocations": "large scale 大规模；on a global scale 在全球范围内；the scale of the problem 问题的规模",
    "synonyms": "scope n. 范围；extent n. 程度；size n. 规模",
    "id": 65
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "alarming",
    "pos": "形容词 adj.",
    "meaning": "令人担忧的；惊人的",
    "note": "",
    "collocations": "an alarming rate 惊人的速度；alarming increase 令人担忧的增长",
    "synonyms": "worrying adj. 令人担忧的；disturbing adj. 令人不安的；shocking adj. 令人震惊的",
    "id": 66
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "destruction",
    "pos": "名词 n.",
    "meaning": "破坏；毁灭",
    "note": "",
    "collocations": "environmental destruction 环境破坏；the destruction of forests 森林破坏",
    "synonyms": "damage n. 损害；devastation n. 毁灭；ruin n. 毁坏",
    "id": 67
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "claim",
    "pos": "名词 n.; 动词 v.",
    "meaning": "声称；主张；索赔；说法",
    "note": "",
    "collocations": "claim that... 声称……；make a claim 提出主张/索赔；claim responsibility for 声称对……负责",
    "synonyms": "assert v. 断言；argue v. 主张；statement n. 陈述",
    "id": 68
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "underlying",
    "pos": "形容词 adj.",
    "meaning": "根本的；潜在的；深层的",
    "note": "",
    "collocations": "underlying cause 根本原因；underlying problem 深层问题；underlying assumption 潜在假设",
    "synonyms": "fundamental adj. 根本的；basic adj. 基本的；hidden adj. 潜在的",
    "id": 69
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "globally",
    "pos": "副词 adv.",
    "meaning": "全球范围内；全世界地",
    "note": "",
    "collocations": "globally significant 具有全球意义的；operate globally 全球运营；on a global scale 在全球范围内",
    "synonyms": "worldwide adv. 全球地；internationally adv. 国际上；universally adv. 普遍地",
    "id": 70
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "generates",
    "pos": "动词 v. 第三人称单数",
    "meaning": "产生；造成；生成",
    "note": "",
    "collocations": "generate income 创造收入；generate waste 产生废物；generate emissions 产生排放；generate electricity 发电",
    "synonyms": "produce v. 产生；create v. 创造；cause v. 造成",
    "id": 71
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "sector",
    "pos": "名词 n.",
    "meaning": "行业；部门；领域",
    "note": "",
    "collocations": "public sector 公共部门；private sector 私营部门；agricultural sector 农业部门；transport sector 交通运输部门",
    "synonyms": "field n. 领域；industry n. 行业；department n. 部门",
    "id": 72
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "demonstrably",
    "pos": "副词 adv.",
    "meaning": "可证明地；明显地",
    "note": "",
    "collocations": "demonstrably false 明显错误的；demonstrably effective 已证明有效的",
    "synonyms": "provably adv. 可证明地；clearly adv. 明显地；evidently adv. 显然地",
    "id": 73
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "persistence",
    "pos": "名词 n.",
    "meaning": "持续存在；坚持；持久性",
    "note": "",
    "collocations": "the persistence of poverty 贫困的持续存在；the persistence of inequality 不平等的持续存在；persistence in doing sth 坚持做某事",
    "synonyms": "continuation n. 持续；endurance n. 持久；perseverance n. 坚持",
    "id": 74
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "consequences",
    "pos": "名词 n. 复数",
    "meaning": "后果；结果",
    "note": "",
    "collocations": "serious consequences 严重后果；negative consequences 负面后果；unintended consequences 意外后果；environmental consequences 环境后果",
    "synonyms": "effects n. 影响；results n. 结果；outcomes n. 结果",
    "id": 75
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "negative",
    "pos": "形容词 adj.; 名词 n.",
    "meaning": "负面的；消极的；否定",
    "note": "",
    "collocations": "negative effects 负面影响；negative consequences 负面后果；negative reputation 负面名声",
    "synonyms": "adverse adj. 不利的；harmful adj. 有害的；unfavorable adj. 不利的",
    "id": 76
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "reputation",
    "pos": "名词 n.",
    "meaning": "名声；声誉；评价",
    "note": "",
    "collocations": "negative reputation 负面名声；good reputation 好名声；reputation centers on 名声集中在……上",
    "synonyms": "fame n. 名声；standing n. 声望；image n. 形象",
    "id": 77
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "assertion",
    "pos": "名词 n.",
    "meaning": "断言；主张；说法",
    "note": "",
    "collocations": "make an assertion 作出断言；support an assertion 支持某个说法；challenge an assertion 质疑某个说法",
    "synonyms": "claim n. 主张；statement n. 陈述；argument n. 论点",
    "id": 78
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "asserted",
    "pos": "动词 v. 过去式/过去分词",
    "meaning": "断言；声称；坚持认为",
    "note": "",
    "collocations": "assert that... 断言……；assert one's rights 维护自己的权利",
    "synonyms": "claim v. 声称；state v. 陈述；maintain v. 坚持认为",
    "id": 79
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "emissions",
    "pos": "名词 n. 复数",
    "meaning": "排放物；排放量",
    "note": "",
    "collocations": "carbon emissions 碳排放；greenhouse gas emissions 温室气体排放；reduce emissions 减少排放",
    "synonyms": "discharge n. 排放；release n. 释放；pollution n. 污染",
    "id": 80
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "rearing",
    "pos": "名词 n.; 现在分词",
    "meaning": "饲养；养育",
    "note": "",
    "collocations": "rearing livestock 饲养牲畜；animal rearing 动物饲养；child-rearing 育儿",
    "synonyms": "raising n./v. 饲养/养育；breeding n. 繁育；nurturing n. 养育",
    "id": 81
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "processing",
    "pos": "名词 n.; 现在分词",
    "meaning": "加工；处理",
    "note": "",
    "collocations": "food processing 食品加工；meat processing 肉类加工；data processing 数据处理",
    "synonyms": "handling n. 处理；treatment n. 处理；manufacturing n. 制造",
    "id": 82
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "livestock",
    "pos": "名词 n.",
    "meaning": "牲畜；家畜",
    "note": "",
    "collocations": "raise livestock 饲养牲畜；rear livestock 饲养牲畜；livestock farming 畜牧业；livestock production 牲畜生产；livestock emissions 牲畜排放",
    "synonyms": "cattle n. 牛；farm animals n. 农场动物；animals n. 动物",
    "id": 83
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "agriculture",
    "pos": "名词 n.",
    "meaning": "农业",
    "note": "",
    "collocations": "modern agriculture 现代农业；industrial agriculture 工业化农业；sustainable agriculture 可持续农业；agricultural sector 农业部门",
    "synonyms": "farming n. 农业/耕作；cultivation n. 耕种；agribusiness n. 农业企业",
    "id": 84
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "representing",
    "pos": "现在分词; 动词 v.",
    "meaning": "代表；表示；占比为",
    "note": "",
    "collocations": "representing 20% of... 占……的20%；representing a major share of... 占主要份额",
    "synonyms": "standing for v. 代表；accounting for v. 占比；symbolizing v. 象征",
    "id": 85
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "misconception",
    "pos": "名词 n.",
    "meaning": "误解；错误观念",
    "note": "",
    "collocations": "common misconception 常见误解；popular misconception 普遍误解；misconception about... 关于……的误解",
    "synonyms": "misunderstanding n. 误解；false belief n. 错误观念；myth n. 错误说法",
    "id": 86
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "startling",
    "pos": "形容词 adj.",
    "meaning": "令人震惊的；惊人的",
    "note": "",
    "collocations": "startling result 惊人的结果；startling discovery 惊人的发现；startling fact 令人震惊的事实",
    "synonyms": "surprising adj. 令人惊讶的；shocking adj. 令人震惊的；astonishing adj. 惊人的",
    "id": 87
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "process",
    "pos": "名词 n.; 动词 v.",
    "meaning": "过程；流程；加工；处理",
    "note": "",
    "collocations": "the process of... ……的过程；in the process of doing sth 正在做……；process data 处理数据；processed food 加工食品",
    "synonyms": "procedure n. 程序；method n. 方法；handle v. 处理",
    "id": 88
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "comprehensive",
    "pos": "形容词 adj.",
    "meaning": "全面的；综合的；详尽的",
    "note": "",
    "collocations": "comprehensive study 全面研究；comprehensive assessment 综合评估；comprehensive plan 全面计划；comprehensive reform 全面改革",
    "synonyms": "complete adj. 完整的；thorough adj. 彻底的；extensive adj. 广泛的",
    "id": 89
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "associated",
    "pos": "形容词 adj.; 过去分词",
    "meaning": "有关联的；相关的",
    "note": "",
    "collocations": "be associated with 与……有关；risks associated with... 与……相关的风险；costs associated with... 相关成本",
    "synonyms": "linked adj. 相关的；connected adj. 有联系的；related adj. 相关的",
    "id": 90
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "maintaining",
    "pos": "现在分词; 动名词",
    "meaning": "维持；保持；维护；主张",
    "note": "",
    "collocations": "maintain health 保持健康；maintain balance 保持平衡；maintain order 维持秩序；maintain that... 坚持认为……",
    "synonyms": "keep v. 保持；preserve v. 维护；sustain v. 维持",
    "id": 91
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "technological",
    "pos": "形容词 adj.",
    "meaning": "技术的；科技的",
    "note": "",
    "collocations": "technological changes 技术变化；technological development 技术发展；technological innovation 技术创新",
    "synonyms": "technical adj. 技术的；scientific adj. 科学的；digital adj. 数字技术的",
    "id": 92
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "genetic",
    "pos": "形容词 adj.",
    "meaning": "基因的；遗传的",
    "note": "",
    "collocations": "genetic changes 遗传/基因变化；genetic factors 遗传因素；genetic engineering 基因工程",
    "synonyms": "hereditary adj. 遗传的；biological adj. 生物的；inherited adj. 遗传的",
    "id": 93
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "management",
    "pos": "名词 n.",
    "meaning": "管理；管理层",
    "note": "",
    "collocations": "management changes 管理方面的变化；management strategy 管理策略；senior management 高层管理",
    "synonyms": "administration n. 管理；leadership n. 领导层；supervision n. 监督",
    "id": 94
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "annual",
    "pos": "形容词 adj.; 名词 n.",
    "meaning": "每年的；年度的；年刊",
    "note": "",
    "collocations": "average annual meat consumption 人均年肉类消费量；annual income 年收入；annual report 年报",
    "synonyms": "yearly adj./adv. 每年的；per-year adj. 每年的",
    "id": 95
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "rising",
    "pos": "形容词 adj.; 现在分词",
    "meaning": "上升的；增长的；正在兴起的",
    "note": "",
    "collocations": "rising prices 上涨的价格；rising demand 增长的需求；rising incomes 增加的收入；rising temperatures 上升的气温",
    "synonyms": "increasing adj. 增加的；growing adj. 增长的；climbing adj. 上升的",
    "id": 96
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "developing",
    "pos": "形容词 adj.; 现在分词",
    "meaning": "发展中的；正在发展的",
    "note": "",
    "collocations": "developing economies 发展中经济体；developing countries 发展中国家",
    "synonyms": "emerging adj. 新兴的；growing adj. 发展的；less-developed adj. 欠发达的",
    "id": 97
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "emerging",
    "pos": "形容词 adj.; 现在分词",
    "meaning": "新兴的；出现中的",
    "note": "",
    "collocations": "emerging economies 新兴经济体；emerging markets 新兴市场；emerging trend 新兴趋势",
    "synonyms": "developing adj. 发展中的；new adj. 新的；rising adj. 兴起的",
    "id": 98
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "economies",
    "pos": "名词 n. 复数",
    "meaning": "经济体；经济；节约",
    "note": "",
    "collocations": "developing and emerging economies 发展中和新兴经济体；advanced economies 发达经济体；global economy 全球经济",
    "synonyms": "markets n. 市场；countries n. 国家；economic systems n. 经济体系",
    "id": 99
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "raising",
    "pos": "现在分词; 动名词",
    "meaning": "提高；筹集；提出；饲养；抚养",
    "note": "",
    "collocations": "raise prices 提高价格；raise awareness 提高意识；raise funds 筹集资金；raise livestock 饲养牲畜；raise a question 提出问题",
    "synonyms": "increase v. 提高；collect v. 筹集；bring up v. 提出/抚养",
    "id": 100
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "lags",
    "pos": "动词 v. 第三人称单数; 名词 n.",
    "meaning": "落后；滞后；延迟",
    "note": "",
    "collocations": "lag behind 落后于；lag far behind 远远落后于；a time lag 时间滞后",
    "synonyms": "fall behind v. 落后；delay v./n. 延迟；trail v. 落后",
    "id": 101
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "relatively",
    "pos": "副词 adv.",
    "meaning": "相对地；比较而言",
    "note": "",
    "collocations": "relatively small 相对较小；relatively simple 相对简单；relatively speaking 相对而言",
    "synonyms": "comparatively adv. 相对地；fairly adv. 相当；somewhat adv. 有点",
    "id": 102
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "psychological",
    "pos": "形容词 adj.",
    "meaning": "心理的；心理学的",
    "note": "",
    "collocations": "psychological aspect 心理层面；psychological pressure 心理压力；psychological effect 心理影响",
    "synonyms": "mental adj. 心理的；emotional adj. 情感的；cognitive adj. 认知的",
    "id": 103
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "aspect",
    "pos": "名词 n.",
    "meaning": "方面；层面",
    "note": "",
    "collocations": "psychological aspect 心理层面；important aspect 重要方面；various aspects 各个方面",
    "synonyms": "dimension n. 维度；side n. 方面；element n. 要素",
    "id": 104
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "suspect",
    "pos": "动词 v.; 名词 n.; 形容词 adj.",
    "meaning": "怀疑；嫌疑人；可疑的",
    "note": "",
    "collocations": "suspect that... 怀疑……；suspect sb of doing sth 怀疑某人做某事",
    "synonyms": "doubt v. 怀疑；believe v. 认为；question v. 质疑",
    "id": 105
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "frightening",
    "pos": "形容词 adj.",
    "meaning": "令人恐惧的；吓人的",
    "note": "",
    "collocations": "a frightening sort of person 一种令人恐惧的人；frightening experience 可怕经历",
    "synonyms": "scary adj. 可怕的；terrifying adj. 恐怖的；alarming adj. 令人担忧的",
    "id": 106
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "judge",
    "pos": "动词 v.; 名词 n.",
    "meaning": "评判；判断；法官",
    "note": "",
    "collocations": "judge sb ruthlessly 无情地评判某人；judge by/from 根据……判断",
    "synonyms": "evaluate v. 评价；assess v. 评估；criticize v. 批评",
    "id": 107
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "ruthlessly",
    "pos": "副词 adv.",
    "meaning": "无情地；冷酷地",
    "note": "",
    "collocations": "judge ruthlessly 无情地评判；compete ruthlessly 残酷竞争",
    "synonyms": "cruelly adv. 残忍地；mercilessly adv. 无情地；harshly adv. 严厉地",
    "id": 108
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "swiftly",
    "pos": "副词 adv.",
    "meaning": "迅速地；很快地",
    "note": "",
    "collocations": "judge swiftly 迅速评判；act swiftly 迅速行动",
    "synonyms": "quickly adv. 快速地；rapidly adv. 迅速地；promptly adv. 立即",
    "id": 109
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "snob",
    "pos": "名词 n.",
    "meaning": "势利小人；势利者",
    "note": "",
    "collocations": "a social snob 社交势利者；intellectual snob 知识势利者",
    "synonyms": "elitist n. 精英主义者；social climber n. 攀附权贵者",
    "id": 110
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "rigid",
    "pos": "形容词 adj.",
    "meaning": "僵硬的；死板的；不灵活的",
    "note": "",
    "collocations": "come to a rigid conclusion 得出武断结论；rigid rules 死板规则；rigid thinking 僵化思维",
    "synonyms": "inflexible adj. 不灵活的；stiff adj. 僵硬的；strict adj. 严格的",
    "id": 111
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "deserve",
    "pos": "动词 v.",
    "meaning": "值得；应得",
    "note": "",
    "collocations": "deserve attention 值得关注；deserve respect 值得尊重；deserve sympathy 值得同情",
    "synonyms": "merit v. 值得；earn v. 赢得；be worthy of 值得",
    "id": 112
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "greed",
    "pos": "名词 n.",
    "meaning": "贪婪；贪心",
    "note": "",
    "collocations": "human greed 人类贪婪；corporate greed 企业贪婪；driven by greed 受贪婪驱使",
    "synonyms": "avarice n. 贪婪；selfishness n. 自私；desire n. 欲望",
    "id": 113
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "vanity",
    "pos": "名词 n.",
    "meaning": "虚荣；自负",
    "note": "",
    "collocations": "out of vanity 出于虚荣；personal vanity 个人虚荣；appeal to vanity 迎合虚荣心",
    "synonyms": "pride n. 自负；conceit n. 自负；self-importance n. 自大",
    "id": 114
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "materialism",
    "pos": "名词 n.",
    "meaning": "物质主义",
    "note": "",
    "collocations": "modern materialism 现代物质主义；consumer materialism 消费物质主义；materialistic values 物质主义价值观",
    "synonyms": "consumerism n. 消费主义；materialistic thinking n. 物质主义思维",
    "id": 115
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "hunger",
    "pos": "名词 n.",
    "meaning": "饥饿；渴望",
    "note": "",
    "collocations": "have nothing to do with hunger 与饥饿/基本需求无关；hunger for recognition 渴望认可",
    "synonyms": "starvation n. 饥饿；appetite n. 食欲；desire n. 渴望",
    "id": 116
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "esteem",
    "pos": "名词 n.; 动词 v.",
    "meaning": "尊重；敬重；评价；尊敬",
    "note": "",
    "collocations": "social esteem 社会尊重；hold sb in high esteem 高度尊敬某人；gain esteem 获得尊重",
    "synonyms": "respect n./v. 尊重；regard n./v. 尊重/看待；admiration n. 钦佩",
    "id": 117
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "societies",
    "pos": "名词 n. 复数",
    "meaning": "社会；群体",
    "note": "",
    "collocations": "modern societies 现代社会；human societies 人类社会；consumer societies 消费社会",
    "synonyms": "communities n. 群体/社区；cultures n. 文化；civilizations n. 文明",
    "id": 118
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "acquisition",
    "pos": "名词 n.",
    "meaning": "获得；取得；收购；习得",
    "note": "",
    "collocations": "the acquisition of wealth 财富的获得；language acquisition 语言习得；company acquisition 公司收购",
    "synonyms": "obtaining n. 获得；gain n. 获得；purchase n. 购买",
    "id": 119
  },
  {
    "type": "word",
    "unit": "第一单元",
    "term": "seek",
    "pos": "动词 v.",
    "meaning": "寻求；追求；试图",
    "note": "",
    "collocations": "seek approval 寻求认可；seek status 追求地位；seek respect 寻求尊重；seek to do sth 试图做某事",
    "synonyms": "pursue v. 追求；look for v. 寻找；search for v. 搜寻",
    "id": 120
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "regardless of",
    "meaning": "不管；无论",
    "usage": "regardless of age/gender/income 不论年龄/性别/收入",
    "id": 121
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "regardless of whether...",
    "meaning": "不管是否……",
    "usage": "The plan will proceed regardless of whether... 不管是否……计划都会继续",
    "id": 122
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "in the meantime",
    "meaning": "与此同时；在此期间",
    "usage": "近义：meanwhile 与此同时",
    "id": 123
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "get one's foot in the door",
    "meaning": "获得初步机会；进入某行业/组织的第一步",
    "usage": "常用于求职、实习、职业发展语境",
    "id": 124
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "be better situated to do sth",
    "meaning": "更有条件/更有利于做某事",
    "usage": "近义：be in a better position to do sth",
    "id": 125
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "have access to",
    "meaning": "可以获得；可以使用；有机会接触",
    "usage": "have access to education/information/resources 有机会获得教育/信息/资源",
    "id": 126
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "social networks",
    "meaning": "社交网络；社会关系网/人脉",
    "usage": "build social networks 建立人脉；strong social networks 强大人脉",
    "id": 127
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "are more likely than... to do sth",
    "meaning": "比……更有可能做某事",
    "usage": "A is more likely than B to do sth A 比 B 更可能做某事",
    "id": 128
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "the rigors of",
    "meaning": "……的严酷考验；……的艰辛",
    "usage": "the rigors of space travel 太空旅行的严酷考验",
    "id": 129
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "are looking to",
    "meaning": "打算；寻求；寄希望于",
    "usage": "look to do sth 打算做某事；look to sb/sth for help 寄希望于……",
    "id": 130
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "stems from",
    "meaning": "源于；由……导致",
    "usage": "stem from a lack of... 源于缺乏……；同义：result from/arise from",
    "id": 131
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "dry out",
    "meaning": "变干；使干透",
    "usage": "prevent sth from drying out 防止某物变干；dry out completely 完全干透",
    "id": 132
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "It turns out that...",
    "meaning": "结果证明；事实证明",
    "usage": "turn out to be... 结果证明是……",
    "id": 133
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "protection of... from...",
    "meaning": "保护……免受……",
    "usage": "protection of forests from destruction 保护森林免受破坏",
    "id": 134
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "urge sb to do sth",
    "meaning": "敦促某人做某事",
    "usage": "urge governments to act 敦促政府采取行动",
    "id": 135
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "taxing consumption",
    "meaning": "对消费征税",
    "usage": "taxing meat consumption 对肉类消费征税",
    "id": 136
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "have called for",
    "meaning": "已经呼吁；要求",
    "usage": "have called for action 呼吁采取行动；have called for stricter rules 呼吁更严格规则",
    "id": 137
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "holds that...",
    "meaning": "认为；主张",
    "usage": "The theory/argument holds that... 该理论/论点认为……",
    "id": 138
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "the linkage between A and B",
    "meaning": "A 和 B 之间的联系",
    "usage": "the linkage between diet and health 饮食与健康之间的联系",
    "id": 139
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "A key claim",
    "meaning": "一个关键主张",
    "usage": "A key claim is that... 一个关键主张是……",
    "id": 140
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "animal agriculture",
    "meaning": "畜牧业；动物农业",
    "usage": "industrial animal agriculture 工业化畜牧业",
    "id": 141
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "either... or...",
    "meaning": "要么……要么……；不是……就是……",
    "usage": "either reduce consumption or face consequences 要么减少消费，要么面对后果",
    "id": 142
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "opting for animal protein",
    "meaning": "选择动物蛋白",
    "usage": "opt for sth 选择某物；opt to do sth 选择做某事",
    "id": 143
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "vegetarian selection/options",
    "meaning": "素食选择/素食选项",
    "usage": "vegetarian options 更常见；plant-based choices 植物性选择",
    "id": 144
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "would have sb do sth",
    "meaning": "会让/使某人做某事",
    "usage": "have sb do sth 后接动词原形；would have consumers pay... 会让消费者支付……",
    "id": 145
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "a healthy portion of",
    "meaning": "相当大一部分；不少",
    "usage": "a healthy portion of the population 相当大一部分人口",
    "id": 146
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "reputation centers on",
    "meaning": "名声/评价集中在……上",
    "usage": "center on/upon 以……为中心；集中于……",
    "id": 147
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "be associated with",
    "meaning": "与……有关；与……相联系",
    "usage": "risks/problems/costs associated with... 与……相关的风险/问题/成本",
    "id": 148
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "life-cycle assessment",
    "meaning": "生命周期评估",
    "usage": "comprehensive life-cycle assessment 全面的生命周期评估",
    "id": 149
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "the climate impact of livestock",
    "meaning": "牲畜/畜牧业对气候造成的影响",
    "usage": "impact of A 常可理解为 A 造成的影响",
    "id": 150
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "technological, genetic and management changes",
    "meaning": "技术、遗传和管理方面的变化",
    "usage": "展开为 technological changes, genetic changes and management changes",
    "id": 151
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "average annual meat consumption per person",
    "meaning": "人均年肉类消费量",
    "usage": "average + annual + meat + consumption，多重前置定语结构",
    "id": 152
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "developing and emerging economies",
    "meaning": "发展中和新兴经济体",
    "usage": "economies 在这里指经济体/国家或地区经济",
    "id": 153
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "lag behind",
    "meaning": "落后于；滞后于",
    "usage": "food production lags behind rising demand 食品生产落后于增长的需求",
    "id": 154
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "Partly..., but...",
    "meaning": "部分是……，但……",
    "usage": "平衡结构，表示原因不止一个",
    "id": 155
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "it's to do with",
    "meaning": "与……有关",
    "usage": "等于 it is related to...",
    "id": 156
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "psychological aspect",
    "meaning": "心理层面",
    "usage": "aspect 方面；层面",
    "id": 157
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "suspect - not wrongly - that",
    "meaning": "怀疑……，而且这种怀疑并非错误",
    "usage": "not wrongly 是插入语，表示判断有道理",
    "id": 158
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "a frightening sort of person",
    "meaning": "一种令人恐惧的人",
    "usage": "sort of person 某一类人",
    "id": 159
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "judge us ruthlessly and swiftly",
    "meaning": "无情且迅速地评判我们",
    "usage": "ruthlessly 无情地；swiftly 迅速地",
    "id": 160
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "takes a relatively small part of us",
    "meaning": "抓住我们身上相对很小的一部分",
    "usage": "指只看人的一个局部特征",
    "id": 161
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "come to a rigid conclusion",
    "meaning": "得出僵化/武断的结论",
    "usage": "rigid 僵硬的；死板的",
    "id": 162
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "how much of their attention we deserve",
    "meaning": "我们值得他们投入多少注意力",
    "usage": "deserve attention 值得关注",
    "id": 163
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "be mistaken for",
    "meaning": "被误认为……",
    "usage": "A is mistaken for B A 被误认为 B；mistake A for B 把 A 误认为 B",
    "id": 164
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "it is more than this",
    "meaning": "它不止于此；事情不只是这样",
    "usage": "常用于转折，引出更深层解释",
    "id": 165
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "have nothing to do with",
    "meaning": "与……无关",
    "usage": "have nothing to do with hunger 与饥饿/基本需求无关",
    "id": 166
  },
  {
    "type": "phrase",
    "unit": "第一单元",
    "term": "stand for",
    "meaning": "代表；象征",
    "usage": "possessions stand for status 财物象征地位",
    "id": 167
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "snobbery",
    "pos": "n.",
    "meaning": "势利；势利态度",
    "note": "",
    "collocations": "social snobbery 社交势利",
    "synonyms": "elitism n. 精英主义；class prejudice n. 阶级偏见",
    "id": 168
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "brutally",
    "pos": "adv.",
    "meaning": "残酷地；无情地",
    "note": "",
    "collocations": "brutally honest 直白得近乎残酷",
    "synonyms": "ruthlessly adv. 无情地；harshly adv. 严厉地",
    "id": 169
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "misguided",
    "pos": "adj.",
    "meaning": "错误的；被误导的",
    "note": "",
    "collocations": "misguided belief 错误信念；misguided attempt 错误尝试",
    "synonyms": "mistaken adj. 错误的；ill-advised adj. 不明智的",
    "id": 170
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "slavish",
    "pos": "adj.",
    "meaning": "盲从的；奴性的",
    "note": "",
    "collocations": "slavish imitation 盲目模仿；slavish obedience 盲目服从",
    "synonyms": "blind adj. 盲目的；uncritical adj. 不加批判的",
    "id": 171
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "acclaimed",
    "pos": "adj./v-ed",
    "meaning": "备受赞誉的",
    "note": "原形 acclaim",
    "collocations": "widely acclaimed 广受赞誉的；critically acclaimed 受到评论界赞誉的",
    "synonyms": "praised adj. 受称赞的；renowned adj. 有名的",
    "id": 172
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "overlooked",
    "pos": "v-ed",
    "meaning": "被忽视",
    "note": "原形 overlook",
    "collocations": "be overlooked 被忽视；overlook an important fact 忽视重要事实",
    "synonyms": "ignored adj./v-ed 被忽视；neglected adj./v-ed 被忽略",
    "id": 173
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "rigid",
    "pos": "adj.",
    "meaning": "僵硬的；死板的",
    "note": "",
    "collocations": "rigid thinking 僵化思维；rigid conclusion 武断结论",
    "synonyms": "inflexible adj. 不灵活的；fixed adj. 固定的",
    "id": 174
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "occupation",
    "pos": "n.",
    "meaning": "职业；占领",
    "note": "",
    "collocations": "full-time occupation 全职职业；military occupation 军事占领",
    "synonyms": "job n. 工作；profession n. 职业",
    "id": 175
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "condemnationv",
    "pos": "n.",
    "meaning": "谴责；指责",
    "note": ". condemn",
    "collocations": "public condemnation 公众谴责；strong condemnation 强烈谴责",
    "synonyms": "criticism n. 批评；disapproval n. 不赞成",
    "id": 176
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "fame",
    "pos": "n.",
    "meaning": "名声",
    "note": "",
    "collocations": "gain fame 成名；rise to fame 走红；fame and fortune 名利",
    "synonyms": "reputation n. 名声；renown n. 声誉",
    "id": 177
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "fortune",
    "pos": "n.",
    "meaning": "财富；命运；好运",
    "note": "",
    "collocations": "make a fortune 发财；fame and fortune 名利；good fortune 好运",
    "synonyms": "wealth n. 财富；luck n. 运气",
    "id": 178
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "cause",
    "pos": "n./v.",
    "meaning": "原因；导致",
    "note": "",
    "collocations": "cause damage 造成损害；cause and effect 因果；a good cause 正当事业",
    "synonyms": "reason n. 原因；lead to v. 导致",
    "id": 179
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "pity",
    "pos": "n.",
    "meaning": "怜悯；遗憾",
    "note": "",
    "collocations": "arouse pity 引起怜悯",
    "synonyms": "sympathy n. 同情；compassion n. 怜悯",
    "id": 180
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "recognitionv",
    "pos": "n.",
    "meaning": "认可；承认",
    "note": ". recognize",
    "collocations": "crave recognition 渴望认可；seek recognition 寻求认可；gain recognition 获得认可",
    "synonyms": "approval n. 认可；acknowledgement n. 承认",
    "id": 181
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "gap",
    "pos": "n.",
    "meaning": "差距；缺口",
    "note": "",
    "collocations": "gender pay/wage gap 性别薪酬/工资差距；close/narrow the gap 缩小差距",
    "synonyms": "disparity n. 差距/不平等；divide n. 差距/分歧",
    "id": 182
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "wage",
    "pos": "n.",
    "meaning": "工资",
    "note": "",
    "collocations": "minimum wage 最低工资；wage growth 工资增长；gender wage gap 性别工资差距",
    "synonyms": "pay n. 薪酬；salary n. 薪水",
    "id": 183
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "remain",
    "pos": "v.",
    "meaning": "保持；仍然是",
    "note": "",
    "collocations": "remain unchanged 保持不变；remain a problem 仍是问题；remain there 维持在那个水平",
    "synonyms": "stay v. 保持；persist v. 持续存在",
    "id": 184
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "yawning",
    "pos": "adj.",
    "meaning": "巨大的；裂开的",
    "note": "",
    "collocations": "a yawning gap 巨大差距；a yawning divide 巨大分歧",
    "synonyms": "huge adj. 巨大的；vast adj. 巨大的",
    "id": 185
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "academics",
    "pos": "n.",
    "meaning": "学者；大学教师",
    "note": "原形 academic",
    "collocations": "academics at Harvard 哈佛学者；leading academics 顶尖学者",
    "synonyms": "scholars n. 学者；researchers n. 研究人员",
    "id": 186
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "stagnationv",
    "pos": "n.",
    "meaning": "停滞",
    "note": ". stagnate；adj. stagnant",
    "collocations": "economic stagnation 经济停滞；wage stagnation 工资停滞",
    "synonyms": "standstill n. 停顿；lack of growth n. 缺乏增长",
    "id": 187
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "counterintuitively",
    "pos": "adv.",
    "meaning": "反直觉地",
    "note": "",
    "collocations": "perhaps counterintuitively 也许有点反直觉",
    "synonyms": "unexpectedly adv. 出乎意料地；surprisingly adv. 令人惊讶地",
    "id": 188
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "state",
    "pos": "adj./n./v.",
    "meaning": "州的；州；状态；陈述",
    "note": "",
    "collocations": "state policies 州级政策；state government 州政府；state that... 陈述……",
    "synonyms": "regional adj. 地区的；condition n. 状态",
    "id": 189
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "federal",
    "pos": "adj.",
    "meaning": "联邦的",
    "note": "",
    "collocations": "federal government 联邦政府；federal law 联邦法律",
    "synonyms": "national adj. 全国的；central adj. 中央的",
    "id": 190
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "leave",
    "pos": "n./v.",
    "meaning": "休假；离开",
    "note": "",
    "collocations": "family leave 家庭休假；paid leave 带薪休假；maternity leave 产假",
    "synonyms": "absence n. 缺席；vacation n. 假期",
    "id": 191
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "policies",
    "pos": "n.",
    "meaning": "政策；方针",
    "note": "原形 policy；复数 y→ies",
    "collocations": "leave policies 休假政策；government policies 政府政策",
    "synonyms": "measures n. 措施；guidelines n. 指导方针",
    "id": 192
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "introduced",
    "pos": "v-ed",
    "meaning": "引入；推出；介绍",
    "note": "原形 introduce；+d",
    "collocations": "introduce policies 推出政策；introduce reforms 推出改革",
    "synonyms": "bring in v. 引入；launch v. 推出",
    "id": 193
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "convergencev",
    "pos": "n.",
    "meaning": "趋同；逐渐接近",
    "note": ". converge",
    "collocations": "gender wage convergence 性别工资趋同；economic convergence 经济趋同",
    "synonyms": "narrowing n. 缩小；alignment n. 趋于一致",
    "id": 194
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "fell",
    "pos": "v.",
    "meaning": "下降；落下",
    "note": "原形 fall；过去式 fell",
    "collocations": "fall to 下降到；fall by 下降了；fall behind 落后",
    "synonyms": "drop v. 下降；decline v. 下降",
    "id": 195
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "monitoring",
    "pos": "v-ing/n.",
    "meaning": "监测；跟踪",
    "note": "原形 monitor；+ing",
    "collocations": "monitor progress 监测进展；monitor the process 跟踪进程",
    "synonyms": "track v. 跟踪；observe v. 观察",
    "id": 196
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "process",
    "pos": "n./v.",
    "meaning": "过程；处理",
    "note": "",
    "collocations": "the process of... ……的过程；in the process of doing sth 正在做……；process data 处理数据",
    "synonyms": "procedure n. 程序；handle v. 处理",
    "id": 197
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "equity",
    "pos": "n.",
    "meaning": "公平；公正",
    "note": "",
    "collocations": "salary equity 薪酬公平；gender equity 性别公平；social equity 社会公平",
    "synonyms": "fairness n. 公平；parity n. 平等",
    "id": 198
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "progress",
    "pos": "n./v.",
    "meaning": "进展；推进",
    "note": "",
    "collocations": "make progress 取得进展；progress slowed 进展放缓",
    "synonyms": "advance n./v. 进展/推进；improvement n. 改善",
    "id": 199
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "reverse",
    "pos": "v./n.",
    "meaning": "逆转；倒退",
    "note": "",
    "collocations": "begin to reverse 开始逆转；reverse a trend 扭转趋势",
    "synonyms": "turn back v. 逆转；undo v. 撤销",
    "id": 200
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "pandemic",
    "pos": "n./adj.",
    "meaning": "大流行病",
    "note": "",
    "collocations": "during the pandemic 在大流行期间；pandemic impact 大流行影响",
    "synonyms": "epidemic n. 流行病；outbreak n. 暴发",
    "id": 201
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "outstanding",
    "pos": "adj.",
    "meaning": "突出的；杰出的；未解决的",
    "note": "",
    "collocations": "outstanding example 突出例子；outstanding achievement 杰出成就",
    "synonyms": "prominent adj. 突出的；remarkable adj. 显著的",
    "id": 202
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "parity",
    "pos": "n.",
    "meaning": "平等；同等",
    "note": "",
    "collocations": "lack of parity 缺乏平等；wage parity 工资平等；pay parity 薪酬平等",
    "synonyms": "equality n. 平等；equity n. 公平",
    "id": 203
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "motherhood",
    "pos": "n.",
    "meaning": "母亲身份；母职",
    "note": "",
    "collocations": "motherhood penalty 母职惩罚；motherhood responsibilities 母职责任",
    "synonyms": "maternity n. 母性/产妇状态；parenthood n. 父母身份",
    "id": 204
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "penalty",
    "pos": "n.",
    "meaning": "惩罚；不利影响；代价",
    "note": "复数 penalties；y→ies",
    "collocations": "motherhood penalty 母职惩罚；pay a penalty 付出代价",
    "synonyms": "punishment n. 惩罚；cost n. 代价",
    "id": 205
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "shorthand",
    "pos": "n.",
    "meaning": "简略说法；速记",
    "note": "",
    "collocations": "shorthand for... ……的简略说法",
    "synonyms": "label n. 标签；term n. 术语",
    "id": 206
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "childbearing",
    "pos": "n./adj.",
    "meaning": "生育；生育的",
    "note": "",
    "collocations": "childbearing years 生育年龄阶段",
    "synonyms": "reproductive adj. 生殖的",
    "id": 207
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "salary",
    "pos": "n.",
    "meaning": "薪水",
    "note": "复数 salaries；y→ies",
    "collocations": "salary equity 薪酬公平；salary increase 加薪；annual salary 年薪",
    "synonyms": "wage n. 工资；pay n. 薪酬",
    "id": 208
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "counterparts",
    "pos": "n.",
    "meaning": "对应的人/物",
    "note": "原形 counterpart",
    "collocations": "male counterparts 男性同行/对应群体；foreign counterparts 外国同行",
    "synonyms": "peer n. 同行；equivalent n. 对应物",
    "id": 209
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "available",
    "pos": "adj.",
    "meaning": "可用的；可获得的",
    "note": "",
    "collocations": "time available for work 可用于工作的时间；resources available 可用资源",
    "synonyms": "accessible adj. 可获得的；obtainable adj. 可得到的",
    "id": 210
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "promotion",
    "pos": "n.",
    "meaning": "晋升；推广",
    "note": "",
    "collocations": "be passed over for promotion 晋升时被忽视；promotion opportunities 晋升机会",
    "synonyms": "advancement n. 晋升/发展",
    "id": 211
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "voluntarily",
    "pos": "adv.",
    "meaning": "自愿地",
    "note": "",
    "collocations": "taken voluntarily 自愿休假；act voluntarily 自愿行动",
    "synonyms": "willingly adv. 自愿地；freely adv. 自由地",
    "id": 212
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "stalled",
    "pos": "v-ed",
    "meaning": "停滞；暂停",
    "note": "原形 stall；+ed",
    "collocations": "progress stalled 进展停滞；the journey stalled 进程停滞",
    "synonyms": "stagnate v. 停滞；halt v. 停止",
    "id": 213
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "gains",
    "pos": "n.",
    "meaning": "进展；收益；改善",
    "note": "原形 gain",
    "collocations": "women's gains 女性取得的进展；economic gains 经济收益",
    "synonyms": "progress n. 进展；improvements n. 改善",
    "id": 214
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "bias",
    "pos": "n./v.",
    "meaning": "偏见；使有偏见",
    "note": "",
    "collocations": "gender bias 性别偏见；bias against women 对女性的偏见",
    "synonyms": "prejudice n. 偏见；discrimination n. 歧视",
    "id": 215
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "addressed",
    "pos": "v-ed",
    "meaning": "处理；解决；发表演说；写地址",
    "note": "原形 address；+ed",
    "collocations": "address problems 处理问题；address concerns 处理担忧",
    "synonyms": "tackle v. 处理；deal with v. 处理",
    "id": 216
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "biological",
    "pos": "adj.",
    "meaning": "生物的；生理的",
    "note": "",
    "collocations": "biological factors 生理/生物因素；biological differences 生理差异",
    "synonyms": "physiological adj. 生理的；natural adj. 自然的",
    "id": 217
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "breastfeed",
    "pos": "v.",
    "meaning": "哺乳；母乳喂养",
    "note": "",
    "collocations": "the ability to breastfeed 哺乳能力",
    "synonyms": "nurse v. 哺乳",
    "id": 218
  },
  {
    "type": "word",
    "unit": "第二单元",
    "term": "mandated",
    "pos": "adj./v-ed",
    "meaning": "强制要求的；规定的",
    "note": "原形 mandate；+d",
    "collocations": "mandated breaks 被规定的休假/中断；government-mandated 政府规定的",
    "synonyms": "required adj. 被要求的；compulsory adj. 强制的",
    "id": 219
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "At the root of X is Y",
    "meaning": "X 的根源是 Y",
    "usage": "倒装表达，强调根源。例：At the root of snobbery is a craving for recognition.",
    "id": 220
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "arouse pity/sympathy",
    "meaning": "引起怜悯/同情",
    "usage": "arouse concern 引起担忧也常见。",
    "id": 221
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "arise from",
    "meaning": "源于；由……产生",
    "usage": "同义：stem from, result from。",
    "id": 222
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "craving recognition",
    "meaning": "渴望认可",
    "usage": "crave recognition / seek recognition 都常见。",
    "id": 223
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "gender pay gap / gender wage gap",
    "meaning": "性别薪酬/工资差距",
    "usage": "三个名词连用，中心词是 gap。",
    "id": 224
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "close the gap",
    "meaning": "缩小/消除差距",
    "usage": "the gap closed = 差距缩小。",
    "id": 225
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "by one percentage point",
    "meaning": "变化了一个百分点",
    "usage": "by 表变化幅度。",
    "id": 226
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "be put down to",
    "meaning": "被归因于",
    "usage": "同义：be attributed to。",
    "id": 227
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "state and federal family leave policies",
    "meaning": "州级和联邦家庭休假政策",
    "usage": "多重前置定语，中心词 policies。",
    "id": 228
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "take advantage of",
    "meaning": "利用；使用",
    "usage": "在政策语境里多为中性。",
    "id": 229
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "stay in the workplace",
    "meaning": "留在职场",
    "usage": "workplace = 职场。",
    "id": 230
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "drop out / dropping out",
    "meaning": "退出；退学；退出职场",
    "usage": "drop out of school 退学；drop out of the workforce 退出劳动力市场。",
    "id": 231
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "fell to",
    "meaning": "下降到",
    "usage": "fall to 看终点。",
    "id": 232
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "fell by",
    "meaning": "下降了",
    "usage": "fall by 看变化幅度。",
    "id": 233
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "has remained there ever since",
    "meaning": "从那以后一直维持在那里",
    "usage": "there 指前文提到的水平。",
    "id": 234
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "salary equity",
    "meaning": "薪酬公平",
    "usage": "equity 强调公平合理。",
    "id": 235
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "progress slowed",
    "meaning": "进展放缓",
    "usage": "新闻/议论文常见表达。",
    "id": 236
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "begin to reverse",
    "meaning": "开始逆转",
    "usage": "指原本改善的趋势倒退。",
    "id": 237
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "lack of parity",
    "meaning": "缺乏平等",
    "usage": "parity 强调达到同一水平。",
    "id": 238
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "just about everywhere",
    "meaning": "几乎到处",
    "usage": "just about = almost。",
    "id": 239
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "motherhood penalty",
    "meaning": "母职惩罚",
    "usage": "指女性因生育育儿在工资或职业发展上受不利影响。",
    "id": 240
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "shorthand for",
    "meaning": "……的简略说法",
    "usage": "become a shorthand for describing why 成为解释原因的一种简略说法。",
    "id": 241
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "reach childbearing years",
    "meaning": "到达生育年龄阶段",
    "usage": "childbearing years = 生育年龄阶段。",
    "id": 242
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "slip behind",
    "meaning": "逐渐落后",
    "usage": "salaries slip behind 薪水逐渐落后。",
    "id": 243
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "male counterparts",
    "meaning": "男性同行/对应群体",
    "usage": "counterpart = 对应的人/物。",
    "id": 244
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "take on unpaid labor",
    "meaning": "承担无偿劳动",
    "usage": "take on = 承担。",
    "id": 245
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "eat into time",
    "meaning": "侵占时间",
    "usage": "也可说 eat into savings 消耗存款。",
    "id": 246
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "career advancement",
    "meaning": "职业发展/晋升",
    "usage": "同义：career development。",
    "id": 247
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "be passed over for raises and promotion",
    "meaning": "在加薪和晋升上被忽视",
    "usage": "pass over = 跳过/忽视。",
    "id": 248
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "set sb back",
    "meaning": "阻碍某人进步；使某人受挫",
    "usage": "time out of the workplace sets women back 离开职场会让女性受挫。",
    "id": 249
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "go into that question",
    "meaning": "深入讨论那个问题",
    "usage": "go into detail = 详细说明。",
    "id": 250
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "other than to say that...",
    "meaning": "除了说……之外",
    "usage": "other than = except/apart from。",
    "id": 251
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "be at parity by now",
    "meaning": "到现在已经达到平等",
    "usage": "虚拟语气中常见。",
    "id": 252
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "stall either way",
    "meaning": "无论哪种情况都停滞",
    "usage": "either way = 无论如何/无论哪种情况。",
    "id": 253
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "the erasure of bias",
    "meaning": "消除偏见",
    "usage": "erasure = 消除/抹去。",
    "id": 254
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "bear children",
    "meaning": "生育孩子",
    "usage": "也可说 have children / give birth to children。",
    "id": 255
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "take breaks",
    "meaning": "休息；中断",
    "usage": "forcing them to take breaks 迫使她们中断。",
    "id": 256
  },
  {
    "type": "phrase",
    "unit": "第二单元",
    "term": "whether or not",
    "meaning": "无论是否",
    "usage": "whether or not those breaks were mandated 无论休假是否被规定。",
    "id": 257
  },
  {
    "type": "grammar",
    "unit": "第二单元",
    "term": "Had 的虚拟倒装",
    "example": "Had that trend continued, the gender wage gap would have been closed by 2017.",
    "explanation": "等于 If that trend had continued... 结构：Had + 主语 + done, 主语 + would have done。意思是“如果过去……，本来会……”。这是对过去事实的虚拟。",
    "id": 258
  },
  {
    "type": "grammar",
    "unit": "第二单元",
    "term": "the gap closed by...",
    "example": "the gender pay gap closed by about one percentage point a year",
    "explanation": "closed 在这里是“缩小”，不是“关闭”。by 表变化幅度：closed by one percentage point = 缩小了 1 个百分点。",
    "id": 259
  },
  {
    "type": "grammar",
    "unit": "第二单元",
    "term": "fall to 和 fall by",
    "example": "fell to 0.03 / fell by 0.03",
    "explanation": "fall to 看终点：下降到 0.03。fall by 看变化幅度：下降了 0.03。",
    "id": 260
  },
  {
    "type": "grammar",
    "unit": "第二单元",
    "term": "三个名词连用",
    "example": "gender pay gap",
    "explanation": "先找中心词 gap，再从右往左：pay gap = 薪酬差距；gender pay gap = 性别薪酬差距。",
    "id": 261
  },
  {
    "type": "grammar",
    "unit": "第二单元",
    "term": "多重前置定语",
    "example": "state and federal family leave policies",
    "explanation": "中心词是 policies。从右往左：leave policies 休假政策；family leave policies 家庭休假政策；state and federal family leave policies 州级和联邦家庭休假政策。",
    "id": 262
  },
  {
    "type": "grammar",
    "unit": "第二单元",
    "term": "现在分词作后置定语",
    "example": "Those monitoring the process towards salary equity...",
    "explanation": "Those monitoring... = Those who monitor...，monitoring 修饰 Those。",
    "id": 263
  },
  {
    "type": "grammar",
    "unit": "第二单元",
    "term": "see 的“经历/发现”用法",
    "example": "Women begin to see their salaries slip behind...",
    "explanation": "see 不是“看见”，而是“经历/发现某种情况发生”。see their salaries slip behind = 发现/经历自己的薪水逐渐落后。",
    "id": 264
  },
  {
    "type": "grammar",
    "unit": "第二单元",
    "term": "would have been at parity by now",
    "example": "we would have been at parity by now",
    "explanation": "虚拟语气，意思是“我们到现在本来已经达到平等了”。by now = 到现在为止。",
    "id": 265
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "aggressive",
    "phonetic": "ə'ɡrɛsɪv",
    "pos": "adj.",
    "meaning": "挑衅的",
    "id": 266
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "congress",
    "phonetic": "'kɑŋɡrəs",
    "pos": "n.",
    "meaning": "代表大会； 国会， 议会",
    "id": 267
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "conquer",
    "phonetic": "'kɑŋkɚ",
    "pos": "v.",
    "meaning": "征服",
    "id": 268
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "eminent",
    "phonetic": "'ɛmɪnənt",
    "pos": "adj.",
    "meaning": "杰出的；有名的；明显的",
    "id": 269
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prominent",
    "phonetic": "'prɑmɪnənt",
    "pos": "adj.",
    "meaning": "卓越的，突出的",
    "id": 270
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "barrier",
    "phonetic": "'bærɪɚ",
    "pos": "n.",
    "meaning": "障碍，阻碍",
    "id": 271
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "barren",
    "phonetic": "'bærən",
    "pos": "adj.",
    "meaning": "贫瘠的；不孕的",
    "id": 272
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "embarrass",
    "phonetic": "ɪm'bærəs",
    "pos": "v.",
    "meaning": "使…陷入困境",
    "id": 273
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "embarrassment",
    "phonetic": "",
    "pos": "n.",
    "meaning": "困窘，局促不安",
    "id": 274
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "awkward",
    "phonetic": "'ɔkwɚd",
    "pos": "adj.",
    "meaning": "尴尬的，棘手的，笨拙的",
    "id": 275
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bald",
    "phonetic": "bɔld",
    "pos": "adj.",
    "meaning": "秃头的；无毛的",
    "id": 276
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bold",
    "phonetic": "bold",
    "pos": "adj.",
    "meaning": "大胆的；冒失的",
    "id": 277
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "disguise",
    "phonetic": "dɪs'ɡaɪz",
    "pos": "vt.",
    "meaning": "假扮，化装，伪装；掩盖，掩饰；n. 用来伪装的东西； 伪装， 掩饰",
    "id": 278
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ecological",
    "phonetic": "'ikə'lɑdʒɪkl",
    "pos": "adj.",
    "meaning": "生态学的",
    "id": 279
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "system",
    "phonetic": "'sɪstəm",
    "pos": "n.",
    "meaning": "系统； 制度， 体制； 方法， 做法； 身体",
    "id": 280
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "scene",
    "phonetic": "sin",
    "pos": "n.",
    "meaning": "场面；情景；景象；事件",
    "id": 281
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "scenario",
    "phonetic": "sə'nærɪo",
    "pos": "n.",
    "meaning": "情境 “；剧本",
    "id": 282
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "terrific",
    "phonetic": "tə'rɪfɪk",
    "pos": "adj.",
    "meaning": "极妙的； 极大的； 令人恐惧的",
    "id": 283
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "magnificent",
    "phonetic": "mæg'nɪfəsnt",
    "pos": "adj.",
    "meaning": "壮丽的， 华丽的； 极好的",
    "id": 284
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "grand",
    "phonetic": "ɡrænd",
    "pos": "adj.",
    "meaning": "壮丽的，极好的",
    "id": 285
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "magnitude",
    "phonetic": "'mæɡnɪtud",
    "pos": "n.",
    "meaning": "重大；星等",
    "id": 286
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "magnify",
    "phonetic": "'mæɡnɪfaɪ",
    "pos": "v.",
    "meaning": "放大",
    "id": 287
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "emerge",
    "phonetic": "ɪ'mɝdʒ",
    "pos": "v.",
    "meaning": "出现",
    "id": 288
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "emergency",
    "phonetic": "ɪ'mɝdʒənsi",
    "pos": "n.",
    "meaning": "紧急情况， 突然事件",
    "id": 289
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "submerge",
    "phonetic": "səb'mɝdʒ",
    "pos": "v.",
    "meaning": "淹没",
    "id": 290
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "submarine",
    "phonetic": ",sʌbmə'rin",
    "pos": "adj.",
    "meaning": "水底的， 海底的；n. 潜水艇",
    "id": 291
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "marine",
    "phonetic": "mə'rin",
    "pos": "adj.",
    "meaning": "海洋的",
    "id": 292
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "swamp",
    "phonetic": "swɑmp",
    "pos": "n.",
    "meaning": "沼泽；vt. 淹没， 浸没； 难倒， 压倒",
    "id": 293
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "overwhelm",
    "phonetic": ",ovɚ'wɛlm",
    "pos": "v.",
    "meaning": "压倒，战胜",
    "id": 294
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "compound",
    "phonetic": "'kɑmpaʊnd",
    "pos": "adj.",
    "meaning": "复合的，化合的；n. 化合物，复合物；复合词；vt. 使恶化， 加重； 使化合， 使合成",
    "id": 295
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "hybrid",
    "phonetic": "",
    "pos": "n.",
    "meaning": "杂种动物；杂交植物；（不同事物的)混合物，合成物",
    "id": 296
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "chronic",
    "phonetic": "'krɑnɪk",
    "pos": "adj.",
    "meaning": "长期的；慢性的",
    "id": 297
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "benign",
    "phonetic": "bɪ'naɪn",
    "pos": "adj.",
    "meaning": "良性的；和蔼的，亲切的；吉利的；n. (Benign)人名；(俄)贝尼根",
    "id": 298
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "acute",
    "phonetic": "ə'kjut",
    "pos": "adj.",
    "meaning": "严重的； 急性的； 灵敏的， 敏锐的； 精明的",
    "id": 299
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "diagnose",
    "phonetic": ",daɪəɡ'nos",
    "pos": "v.",
    "meaning": "诊断",
    "id": 300
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "remedy",
    "phonetic": "'rɛmədi",
    "pos": "n.",
    "meaning": "补救办法，纠正办法；药品，治疗法；vt. 补救， 纠正； 医治， 治疗",
    "id": 301
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "clinic",
    "phonetic": "'klɪnɪk",
    "pos": "n.",
    "meaning": "诊所，医务室；会诊；会诊时间；门诊时间",
    "id": 302
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "chronicle",
    "phonetic": "'krɑnɪkl",
    "pos": "v.",
    "meaning": "记录",
    "id": 303
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "hydrate",
    "phonetic": "",
    "pos": "v.",
    "meaning": "（使）吸人水分；（使）水合",
    "id": 304
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "saturate",
    "phonetic": "'sætʃərɪt",
    "pos": "vt.",
    "meaning": "使湿透， 浸透； 使充满， 使饱和",
    "id": 305
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mud",
    "phonetic": "mʌd",
    "pos": "n.",
    "meaning": "软泥，泥浆",
    "id": 306
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "trench",
    "phonetic": "trɛntʃ",
    "pos": "n.",
    "meaning": "深沟；壕沟，战壕",
    "id": 307
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "resource",
    "phonetic": "'risɔrs",
    "pos": "n.",
    "meaning": "资源； 财力； 应付办法， 谋略",
    "id": 308
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "recyclable",
    "phonetic": ",ri'saɪkləbl",
    "pos": "adj.",
    "meaning": "可回收利用的",
    "id": 309
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "triple",
    "phonetic": "'trɪpl",
    "pos": "adj.",
    "meaning": "三部分的，三方的；三倍的，三重的；v. 增至三倍",
    "id": 310
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "silicon",
    "phonetic": "'sɪlɪkən",
    "pos": "n.",
    "meaning": "硅（旧名矽）",
    "id": 311
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "spot",
    "phonetic": "spɑt",
    "pos": "n.",
    "meaning": "点；v. 发现",
    "id": 312
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pottery",
    "phonetic": "",
    "pos": "n.",
    "meaning": "陶器；陶土；制陶手艺；制陶厂",
    "id": 313
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "potential",
    "phonetic": "pə'tɛnʃl",
    "pos": "adj.",
    "meaning": "潜在的；n. 潜力",
    "id": 314
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "spotlight",
    "phonetic": "",
    "pos": "n.",
    "meaning": "聚光灯v.特别关注，突出报道（以使公众注意）",
    "id": 315
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "budget",
    "phonetic": "'bʌdʒɪt",
    "pos": "n.",
    "meaning": "预算；〔政府的〕",
    "id": 316
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "stalk",
    "phonetic": "stɔk",
    "pos": "n.",
    "meaning": "主茎，叶柄",
    "id": 317
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "insect",
    "phonetic": "'ɪnsɛkt",
    "pos": "n.",
    "meaning": "昆虫， 虫",
    "id": 318
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vegetation",
    "phonetic": "'vɛdʒə'teʃən",
    "pos": "n.",
    "meaning": "植物， 草木",
    "id": 319
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bleak",
    "phonetic": "blik",
    "pos": "adj.",
    "meaning": "荒凉的",
    "id": 320
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "humid",
    "phonetic": "'hjumɪd",
    "pos": "adj.",
    "meaning": "湿的，湿气重的",
    "id": 321
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "humble",
    "phonetic": "'hʌmbl",
    "pos": "adj.",
    "meaning": "谦逊的；地位低下的；简陋的；vt. 使谦恭； 使卑下",
    "id": 322
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tumble",
    "phonetic": "'tʌmbl",
    "pos": "vi.",
    "meaning": "跌倒，摔下，滚下；翻滚；暴跌；不由自主地卷入；n. 跌倒， 摔倒",
    "id": 323
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "humiliate",
    "phonetic": "hju'mɪlɪet",
    "pos": "v.",
    "meaning": "羞辱；使…丢脸；耻辱",
    "id": 324
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "humane",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "善良的；仁慈的；人道的",
    "id": 325
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "turbulent",
    "phonetic": "'tɝbjələnt",
    "pos": "adj.",
    "meaning": "动荡的，骚乱的",
    "id": 326
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fierce",
    "phonetic": "fɪrs",
    "pos": "adj.",
    "meaning": "激烈的",
    "id": 327
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "harsh",
    "phonetic": "hɑrʃ",
    "pos": "adj.",
    "meaning": "严酷的，严峻的",
    "id": 328
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "adjacent",
    "phonetic": "ə'dʒesnt",
    "pos": "adj.",
    "meaning": "毗连的；紧接着的",
    "id": 329
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "adore",
    "phonetic": "ə'dɔr",
    "pos": "v.",
    "meaning": "崇拜，爱慕；很喜欢",
    "id": 330
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fore",
    "phonetic": "fɔr",
    "pos": "adv.",
    "meaning": "在（或向）船头；在（或向）飞行器头部",
    "id": 331
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "foresee",
    "phonetic": "fɔr'si",
    "pos": "v.",
    "meaning": "预见，预知，看穿",
    "id": 332
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sight",
    "phonetic": "saɪt",
    "pos": "n.",
    "meaning": "景象；名胜，风景",
    "id": 333
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "foresight",
    "phonetic": "",
    "pos": "n.",
    "meaning": "深谋远虑；先见之明",
    "id": 334
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "oversight",
    "phonetic": "",
    "pos": "n.",
    "meaning": "监督；疏忽；失察",
    "id": 335
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "forth",
    "phonetic": "fɔrθ",
    "pos": "adv.",
    "meaning": "向前；向外，往外",
    "id": 336
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "forthcoming",
    "phonetic": ",fɔrθ'kʌmɪŋ",
    "pos": "adj.",
    "meaning": "即将来临的",
    "id": 337
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "forecast",
    "phonetic": "'fɔrkæst",
    "pos": "n.",
    "meaning": "预报，预测",
    "id": 338
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "foretell",
    "phonetic": "",
    "pos": "v.",
    "meaning": "预言",
    "id": 339
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "forerunner",
    "phonetic": "",
    "pos": "n.",
    "meaning": "先驱；预兆",
    "id": 340
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "foremost",
    "phonetic": "'fɔr'most",
    "pos": "adj.",
    "meaning": "最好的， 最著名的， 最重要的",
    "id": 341
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "beforehand",
    "phonetic": "bɪ'fɔrhænd",
    "pos": "adv.",
    "meaning": "预先；提前地",
    "id": 342
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "orient",
    "phonetic": "'orɪənt",
    "pos": "v.",
    "meaning": "使适应，使确定方向",
    "id": 343
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "authority",
    "phonetic": "ə'θɔrəti",
    "pos": "n.",
    "meaning": "权威",
    "id": 344
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "capital",
    "phonetic": "'kæpɪtl",
    "pos": "adj.",
    "meaning": "资金的，资本的",
    "id": 345
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bureau",
    "phonetic": "'bjʊro",
    "pos": "n.",
    "meaning": "局",
    "id": 346
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bureaucrat",
    "phonetic": "",
    "pos": "n.",
    "meaning": "官僚主义者；官僚",
    "id": 347
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "commission",
    "phonetic": "kə'mɪʃən",
    "pos": "n.",
    "meaning": "委托，委任；委托状",
    "id": 348
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "committee",
    "phonetic": "kə'mɪti",
    "pos": "n.",
    "meaning": "委员会， 全体委员",
    "id": 349
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "headquarters",
    "phonetic": "'hɛdkwɔrtɚz",
    "pos": "n.",
    "meaning": "总部",
    "id": 350
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "council",
    "phonetic": "'kaʊnsl",
    "pos": "n.",
    "meaning": "理事会， 委员会",
    "id": 351
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "institute",
    "phonetic": "'ɪnstɪtut",
    "pos": "n.",
    "meaning": "研究所，学会，学院",
    "id": 352
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "institution",
    "phonetic": ",ɪnstɪ'tuʃən",
    "pos": "n.",
    "meaning": "机构",
    "id": 353
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "substitute",
    "phonetic": "'sʌbstɪtut",
    "pos": "n.",
    "meaning": "代替人，代用品；vt. 用…代替",
    "id": 354
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "constitute",
    "phonetic": "'kɑnstətut",
    "pos": "v.",
    "meaning": "构成，组成",
    "id": 355
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "constituent",
    "phonetic": "kən'stɪtʃuənt",
    "pos": "adj.",
    "meaning": "构成的；n. 选民",
    "id": 356
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "court",
    "phonetic": "kɔrt",
    "pos": "n.",
    "meaning": "法院， 法庭； 庭院； 宫廷； 球场",
    "id": 357
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "courtesy",
    "phonetic": "'kɝtəsi",
    "pos": "n.",
    "meaning": "礼貌，谦恭",
    "id": 358
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "federal",
    "phonetic": "'fɛdərəl",
    "pos": "adj.",
    "meaning": "联邦的， 联盟的",
    "id": 359
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "commonwealth",
    "phonetic": "'kɑmən'wɛlθ",
    "pos": "n.",
    "meaning": "联邦",
    "id": 360
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "minister",
    "phonetic": "'mɪnɪstɚ",
    "pos": "n.",
    "meaning": "部长，大臣；公使",
    "id": 361
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "administer",
    "phonetic": "əd'mɪnɪstɚ",
    "pos": "v.",
    "meaning": "管理；执行；给予",
    "id": 362
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "administration",
    "phonetic": "əd,mɪnɪ'streʃən",
    "pos": "n.",
    "meaning": "管理，政府",
    "id": 363
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ministry",
    "phonetic": "'mɪnɪstri",
    "pos": "n.",
    "meaning": "(政府的)部",
    "id": 364
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "lawful",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "法定的；合法的",
    "id": 365
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "legal",
    "phonetic": "'ligl",
    "pos": "adj.",
    "meaning": "法律的； 合法的",
    "id": 366
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "legalization",
    "phonetic": "",
    "pos": "n.",
    "meaning": "合法化；法律认可",
    "id": 367
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "legislate",
    "phonetic": "",
    "pos": "v.",
    "meaning": "制定法律；立法",
    "id": 368
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "legislator",
    "phonetic": "'lɛdʒɪsletɚ",
    "pos": "n.",
    "meaning": "立法者",
    "id": 369
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "legislative",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "立法的；制定法律的",
    "id": 370
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "parliament",
    "phonetic": "'pɑrləmənt",
    "pos": "n.",
    "meaning": "议会，国会",
    "id": 371
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "propagate",
    "phonetic": "'prɑpə'get",
    "pos": "v.",
    "meaning": "传播，普及；繁殖",
    "id": 372
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "propaganda",
    "phonetic": "'prɑpə'gændə",
    "pos": "n.",
    "meaning": "宣传",
    "id": 373
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "contribute",
    "phonetic": "kən'trɪbjut",
    "pos": "v.",
    "meaning": "有助于",
    "id": 374
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tribute",
    "phonetic": "'trɪbjut",
    "pos": "n.",
    "meaning": "献礼；贡物",
    "id": 375
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "attribute",
    "phonetic": "ə'trɪbjut",
    "pos": "v.",
    "meaning": "归因于",
    "id": 376
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "distribute",
    "phonetic": "dɪ'strɪbjut",
    "pos": "v.",
    "meaning": "分发",
    "id": 377
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "redistribute",
    "phonetic": "",
    "pos": "v.",
    "meaning": "重新分配",
    "id": 378
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "distribution",
    "phonetic": "'dɪstrə'bjʊʃən",
    "pos": "n.",
    "meaning": "分布，分配",
    "id": 379
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "regime",
    "phonetic": "re'ʒim",
    "pos": "n.",
    "meaning": "制度，管理体制",
    "id": 380
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reign",
    "phonetic": "ren",
    "pos": "n.",
    "meaning": "（某君主的）统治时期",
    "id": 381
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reinforce",
    "phonetic": ",riɪn'fɔrs",
    "pos": "v.",
    "meaning": "增强，提高",
    "id": 382
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "enhance",
    "phonetic": "ɪn'hæns",
    "pos": "v.",
    "meaning": "提高，增加；改进",
    "id": 383
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "loyal",
    "phonetic": "'lɔɪəl",
    "pos": "adj.",
    "meaning": "忠诚的， 忠心的",
    "id": 384
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "royal",
    "phonetic": "'rɔɪəl",
    "pos": "adj.",
    "meaning": "王的；皇家的",
    "id": 385
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sovereign",
    "phonetic": "sɑvrɪn",
    "pos": "n.",
    "meaning": "君主；adj. 统治的",
    "id": 386
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "state",
    "phonetic": "stet",
    "pos": "n.",
    "meaning": "状态， 情况；国， 州；vt. 陈述， 说明；规定",
    "id": 387
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "admit",
    "phonetic": "əd'mɪt",
    "pos": "vi.",
    "meaning": "承认；vt. 承认，供认；准许…进入",
    "id": 388
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "admittedly",
    "phonetic": "",
    "pos": "adv.",
    "meaning": "诚然，无可否认",
    "id": 389
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "permit",
    "phonetic": "pɚ'mɪt",
    "pos": "v.",
    "meaning": "允许；n. 执照",
    "id": 390
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "transmit",
    "phonetic": "trænzˈmɪt",
    "pos": "v.",
    "meaning": "传播，传导",
    "id": 391
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "transmission",
    "phonetic": "træns'mɪʃən",
    "pos": "n.",
    "meaning": "传播，传染",
    "id": 392
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "submit",
    "phonetic": "səb'mɪt",
    "pos": "v.",
    "meaning": "提交",
    "id": 393
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "submissive",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "唯命是从的；驯服的",
    "id": 394
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "summit",
    "phonetic": "'sʌmɪt",
    "pos": "n.",
    "meaning": "顶点，最高点；极度",
    "id": 395
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "peak",
    "phonetic": "pik",
    "pos": "n.",
    "meaning": "（物体的）尖端",
    "id": 396
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "emit",
    "phonetic": "ɪ'mɪt",
    "pos": "v.",
    "meaning": "发出，排出",
    "id": 397
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "emitter",
    "phonetic": "",
    "pos": "n.",
    "meaning": "发出者；发射体",
    "id": 398
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "omit",
    "phonetic": "ə'mɪt",
    "pos": "v.",
    "meaning": "省略，省去；遗漏",
    "id": 399
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intermittent",
    "phonetic": ",ɪntɚ'mɪtənt",
    "pos": "adj.",
    "meaning": "间歇的， 断断续续的",
    "id": 400
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "commit",
    "phonetic": "kə'mɪt",
    "pos": "vt.",
    "meaning": "犯， 干； 使承诺； 把…托付给； 调拨…供使用， 拨出",
    "id": 401
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "maintain",
    "phonetic": "men'ten",
    "pos": "vt.",
    "meaning": "维持； 维修， 保养； 主张； 赡养",
    "id": 402
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "maintenance",
    "phonetic": "'mentənəns",
    "pos": "n.",
    "meaning": "维修",
    "id": 403
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "retain",
    "phonetic": "rɪ'ten",
    "pos": "vt.",
    "meaning": "保留， 保持",
    "id": 404
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "detain",
    "phonetic": "dɪ'ten",
    "pos": "v.",
    "meaning": "扣押，拘留；耽搁",
    "id": 405
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sustain",
    "phonetic": "sə'sten",
    "pos": "vt.",
    "meaning": "保持， 使持续下去； 供养， 维持； 支持， 支撑； 经受， 遭受",
    "id": 406
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pertain",
    "phonetic": "",
    "pos": "vi.",
    "meaning": "属于；适合；关于",
    "id": 407
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "attain",
    "phonetic": "ə'ten",
    "pos": "vt.",
    "meaning": "达到， 获得； 完成",
    "id": 408
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "offend",
    "phonetic": "ə'fɛnd",
    "pos": "v.",
    "meaning": "冒犯；v. 犯过错",
    "id": 409
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "offender",
    "phonetic": "",
    "pos": "n.",
    "meaning": "罪犯；妨害…的人（或事物）",
    "id": 410
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "defend",
    "phonetic": "dɪ'fɛnd",
    "pos": "v.",
    "meaning": "保卫，防守",
    "id": 411
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "defensive",
    "phonetic": "dɪ'fɛnsɪv",
    "pos": "adj.",
    "meaning": "防守的，防御的",
    "id": 412
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "defender",
    "phonetic": "",
    "pos": "n.",
    "meaning": "防守队员；守卫者；保护人;防御者",
    "id": 413
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pretext",
    "phonetic": "'pritɛkst",
    "pos": "n.",
    "meaning": "借口， 托辞",
    "id": 414
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "protest",
    "phonetic": "prəˈtɛst;protɛst",
    "pos": "v.",
    "meaning": "['prəutest]；n. 抗议， 反对",
    "id": 415
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "provoke",
    "phonetic": "prə'vok",
    "pos": "v.",
    "meaning": "激怒",
    "id": 416
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "provocative",
    "phonetic": "prə'vɑkətɪv",
    "pos": "adj.",
    "meaning": "挑衅的， 煽动的， 刺激的； 挑逗的",
    "id": 417
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "evoke",
    "phonetic": "ɪ'vok",
    "pos": "vt.",
    "meaning": "唤起， 引起， 使人想起",
    "id": 418
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "irrigate",
    "phonetic": "'ɪrəget",
    "pos": "v.",
    "meaning": "灌溉；冲洗；使清新",
    "id": 419
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "irritable",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "急躁的，易怒的",
    "id": 420
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inevitable",
    "phonetic": "ɪn'ɛvɪtəbl",
    "pos": "adj.",
    "meaning": "不可避免的",
    "id": 421
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "safeguard",
    "phonetic": "'sefɡɑrd",
    "pos": "n.",
    "meaning": "保护措施",
    "id": 422
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "guard",
    "phonetic": "ɡɑrd",
    "pos": "v.",
    "meaning": "保护",
    "id": 423
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "secure",
    "phonetic": "sə'kjʊr",
    "pos": "v.",
    "meaning": "确保……安全",
    "id": 424
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "consecutive",
    "phonetic": "kən'sɛkjətɪv",
    "pos": "adj.",
    "meaning": "连续的， 连贯的",
    "id": 425
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "shield",
    "phonetic": "ʃild",
    "pos": "n.",
    "meaning": "防护物，护罩；盾；vt. 保护， 防护",
    "id": 426
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "endanger",
    "phonetic": "ɪn'dendʒɚ",
    "pos": "v.",
    "meaning": "使……危险",
    "id": 427
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "hazard",
    "phonetic": "'hæzɚd",
    "pos": "n.",
    "meaning": "危险",
    "id": 428
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "stake",
    "phonetic": "stek",
    "pos": "n.",
    "meaning": "风险",
    "id": 429
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "jeopardy",
    "phonetic": "",
    "pos": "n.",
    "meaning": "危险，风险；危险处境",
    "id": 430
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "peril",
    "phonetic": "'pɛrəl",
    "pos": "n.",
    "meaning": "危机；危险的事物",
    "id": 431
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fortune",
    "phonetic": "'fɔrtʃən",
    "pos": "n.",
    "meaning": "命运，运气；财产",
    "id": 432
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "misfortune",
    "phonetic": "'mɪs'fɔrtʃən",
    "pos": "n.",
    "meaning": "不幸地",
    "id": 433
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "savage",
    "phonetic": "'sævɪdʒ",
    "pos": "adj.",
    "meaning": "残暴的，凶猛的，粗鲁的；未开化的，野蛮的；n. 野蛮人，粗鲁的人；vt. 乱咬； 激烈抨击",
    "id": 434
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "surpass",
    "phonetic": "sə'pæs",
    "pos": "v.",
    "meaning": "超过",
    "id": 435
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "transcend",
    "phonetic": "træn'sɛnd",
    "pos": "v.",
    "meaning": "超越",
    "id": 436
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tangle",
    "phonetic": "'tæŋɡl",
    "pos": "v.",
    "meaning": "使缠结，使纠缠",
    "id": 437
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tank",
    "phonetic": "tæŋk",
    "pos": "n.",
    "meaning": "水箱",
    "id": 438
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "attack",
    "phonetic": "ə'tæk",
    "pos": "",
    "meaning": "n&vt. 攻击， 进攻； 突然发作",
    "id": 439
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "terror",
    "phonetic": "'tɛrɚ",
    "pos": "n.",
    "meaning": "恐怖，惊骇",
    "id": 440
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "terrify",
    "phonetic": "ˈtɛrəˌfaɪ",
    "pos": "v.",
    "meaning": "使恐怖，使惊吓",
    "id": 441
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "terrified",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "感到恐惧的；非常害怕的",
    "id": 442
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "agony",
    "phonetic": "'æɡəni",
    "pos": "n.",
    "meaning": "痛苦",
    "id": 443
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "alert",
    "phonetic": "ə'lɝt",
    "pos": "adj.",
    "meaning": "机警的；v. 提醒",
    "id": 444
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "trophy",
    "phonetic": "",
    "pos": "n.",
    "meaning": "奖品，奖杯；战利品",
    "id": 445
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "catastrophe",
    "phonetic": "kə'tæstrəfi",
    "pos": "n.",
    "meaning": "大灾难， 灾祸",
    "id": 446
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "arise",
    "phonetic": "ə'raɪz",
    "pos": "v.",
    "meaning": "出现",
    "id": 447
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "raise",
    "phonetic": "rez",
    "pos": "v.",
    "meaning": "提出，发起，发出",
    "id": 448
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "uprising",
    "phonetic": "",
    "pos": "n.",
    "meaning": "起义；暴动；造反",
    "id": 449
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "victory",
    "phonetic": "'vɪktəri",
    "pos": "n.",
    "meaning": "胜利",
    "id": 450
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "triumph",
    "phonetic": "ˈtraɪəmf",
    "pos": "vi.",
    "meaning": "成功；n. 凯旋，胜利",
    "id": 451
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "virtual",
    "phonetic": "[ˈvɜ:rtʃuəl]",
    "pos": "adj.",
    "meaning": "实际的，虚拟的",
    "id": 452
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "compulsory",
    "phonetic": "kəm'pʌlsəri",
    "pos": "adj.",
    "meaning": "强迫的，义务的",
    "id": 453
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "grade",
    "phonetic": "ɡred",
    "pos": "v.",
    "meaning": "给…分等级；n. 等级",
    "id": 454
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "rating",
    "phonetic": "'retɪŋ",
    "pos": "n.",
    "meaning": "等级， 品级， 评定结果； 收视率， 收听率",
    "id": 455
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "idealism",
    "phonetic": "'aɪ'diə'lɪzəm",
    "pos": "n.",
    "meaning": "唯心主义；理想主义",
    "id": 456
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "methodology",
    "phonetic": "",
    "pos": "n.",
    "meaning": "方法论；方法学",
    "id": 457
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "profound",
    "phonetic": "prə'faʊnd",
    "pos": "adj.",
    "meaning": "深刻的，博学的",
    "id": 458
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "proficient",
    "phonetic": "prə'fɪʃnt",
    "pos": "adj.",
    "meaning": "熟练的，精通的",
    "id": 459
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "artificial",
    "phonetic": ",ɑrtɪ'fɪʃl",
    "pos": "adj.",
    "meaning": "人造的，虚伪的",
    "id": 460
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sufficient",
    "phonetic": "səˈfɪʃənt",
    "pos": "adj.",
    "meaning": "足够的， 充分的",
    "id": 461
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "suffice",
    "phonetic": "sə'faɪs",
    "pos": "v.",
    "meaning": "足够",
    "id": 462
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "efficient",
    "phonetic": "ɪ'fɪʃnt",
    "pos": "adj.",
    "meaning": "效率高的； 有能力的",
    "id": 463
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "efficiency",
    "phonetic": "ɪˈfɪʃənsɪ",
    "pos": "n.",
    "meaning": "效率； 功效， 效能",
    "id": 464
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "deficient",
    "phonetic": "dɪ'fɪʃnt",
    "pos": "adj.",
    "meaning": "不足的，缺乏的",
    "id": 465
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "deficiency",
    "phonetic": "dɪ'fɪʃənsi",
    "pos": "n.",
    "meaning": "缺乏；不足",
    "id": 466
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "flaw",
    "phonetic": "flɔ",
    "pos": "n.",
    "meaning": "缺点，瑕疵",
    "id": 467
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "drawback",
    "phonetic": "'drɔbæk",
    "pos": "n.",
    "meaning": "妨碍；弊端",
    "id": 468
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "setback",
    "phonetic": "'sɛtbæk",
    "pos": "n.",
    "meaning": "挫折， 倒退， 失败",
    "id": 469
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "handicap",
    "phonetic": "'hændɪ'kæp",
    "pos": "v.",
    "meaning": "妨碍，使不利",
    "id": 470
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "handicapped",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "有生理缺陷的；残疾的;弱智的",
    "id": 471
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "refer",
    "phonetic": "rɪ'fɝ",
    "pos": "v.",
    "meaning": "使求助于；v. 谈到",
    "id": 472
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "referee",
    "phonetic": ",rɛfə'ri",
    "pos": "n.",
    "meaning": "（足球等）裁判员",
    "id": 473
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "confer",
    "phonetic": "kən'fɝ",
    "pos": "v.",
    "meaning": "授予",
    "id": 474
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "infer",
    "phonetic": "ɪn'fɝ",
    "pos": "v.",
    "meaning": "推断",
    "id": 475
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fertile",
    "phonetic": "ˈfɝtəl; (canadian) ˈfɝˌtaɪl",
    "pos": "adj.",
    "meaning": "（创造力）丰富的",
    "id": 476
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "introduce",
    "phonetic": "ˌɪntrə'dus",
    "pos": "v.",
    "meaning": "提出（议案等）",
    "id": 477
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "deduce",
    "phonetic": "dɪ'dʊs",
    "pos": "vt.",
    "meaning": "推论， 推断， 演绎",
    "id": 478
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "deduct",
    "phonetic": "dɪ'dʌkt",
    "pos": "v.",
    "meaning": "减去， 扣除",
    "id": 479
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "induce",
    "phonetic": "ɪn'dus",
    "pos": "v.",
    "meaning": "劝诱；引起",
    "id": 480
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "seduce",
    "phonetic": "",
    "pos": "v.",
    "meaning": "诱惑；引诱，吸引",
    "id": 481
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "lure",
    "phonetic": "lʊr",
    "pos": "vt.",
    "meaning": "吸引，引诱，诱惑；n. 吸引力， 诱惑物； 诱饵， 鱼饵",
    "id": 482
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tempt",
    "phonetic": "tɛmpt",
    "pos": "v.",
    "meaning": "引诱，诱惑，劝诱",
    "id": 483
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "attempt",
    "phonetic": "ə'tɛmpt",
    "pos": "vt.",
    "meaning": "尝试， 试图， 努力",
    "id": 484
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "temptation",
    "phonetic": "tɛmp'teʃən",
    "pos": "n.",
    "meaning": "诱惑",
    "id": 485
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inject",
    "phonetic": "ɪn'dʒɛkt",
    "pos": "v.",
    "meaning": "注射；注满；喷射",
    "id": 486
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "project",
    "phonetic": "prəˈdʒɛkt; prɑdʒɛkt",
    "pos": "v.",
    "meaning": "伸出； 投射； 放映；n. 方案， 计划； 课题， 项目； 工程",
    "id": 487
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reject",
    "phonetic": "rɪ'dʒɛkt",
    "pos": "v.",
    "meaning": "舍弃，抛弃；排斥",
    "id": 488
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "refusal",
    "phonetic": "rɪ'fjuzl",
    "pos": "n.",
    "meaning": "拒绝",
    "id": 489
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "object",
    "phonetic": "'ɑbdʒɛkt",
    "pos": "vi.",
    "meaning": "反对， 不赞成；n. 实物， 物体； 目的， 目标； 对象， 客体； 宾语",
    "id": 490
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "subject",
    "phonetic": "ˈsʌbdʒekt",
    "pos": "v.",
    "meaning": "使隶属",
    "id": 491
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "eject",
    "phonetic": "ɪ'dʒɛkt",
    "pos": "v.",
    "meaning": "逐出，排斥；喷射",
    "id": 492
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "gamble",
    "phonetic": "'ɡæmbl",
    "pos": "n.",
    "meaning": "赌博；v. 冒…的险",
    "id": 493
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "previous",
    "phonetic": "'privɪəs",
    "pos": "adj.",
    "meaning": "之前的",
    "id": 494
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prevail",
    "phonetic": "pri'vel",
    "pos": "v.",
    "meaning": "流行，普遍",
    "id": 495
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pervasive",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "遍布的；弥漫的",
    "id": 496
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prevalent",
    "phonetic": "'prɛvələnt",
    "pos": "adj.",
    "meaning": "流行的；盛行的",
    "id": 497
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "practicable",
    "phonetic": "'præktɪkəbl",
    "pos": "adj.",
    "meaning": "能实行的；适用的",
    "id": 498
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prevent",
    "phonetic": "pri'vɛnt",
    "pos": "v.",
    "meaning": "预防",
    "id": 499
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "refrain",
    "phonetic": "rɪ'fren",
    "pos": "v.",
    "meaning": "抑制，避免",
    "id": 500
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "constrain",
    "phonetic": "kən'stren",
    "pos": "v.",
    "meaning": "限制",
    "id": 501
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "stifle",
    "phonetic": "",
    "pos": "v.",
    "meaning": "压制；扼杀；阻止；抑制；（使）室息",
    "id": 502
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "primary",
    "phonetic": "'praɪmɛri",
    "pos": "adj.",
    "meaning": "首要的， 主要的； 基本的； 最初的， 初级的",
    "id": 503
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "primitive",
    "phonetic": "'prɪmətɪv",
    "pos": "adj.",
    "meaning": "原始的，简单的",
    "id": 504
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prime",
    "phonetic": "praɪm",
    "pos": "adj.",
    "meaning": "首要的；最好的；n. 青春；全盛时期；vt. 使准备好",
    "id": 505
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prior",
    "phonetic": "'praɪɚ",
    "pos": "adj.",
    "meaning": "优先的，先前的",
    "id": 506
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "priority",
    "phonetic": "praɪ'ɔrəti",
    "pos": "n.",
    "meaning": "先，前；优先，重点",
    "id": 507
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prototype",
    "phonetic": "'protə'taɪp",
    "pos": "n.",
    "meaning": "原型；典型，范例",
    "id": 508
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "remind",
    "phonetic": "rɪ'maɪnd",
    "pos": "v.",
    "meaning": "提醒，使想起",
    "id": 509
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "revise",
    "phonetic": "rɪ'vaɪz",
    "pos": "v.",
    "meaning": "修订",
    "id": 510
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "envisage",
    "phonetic": "ɪn'vɪzɪdʒ",
    "pos": "vt.",
    "meaning": "想象， 设想",
    "id": 511
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vision",
    "phonetic": "'vɪʒən",
    "pos": "n.",
    "meaning": "视力；眼力，想象力",
    "id": 512
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "visible",
    "phonetic": "'vɪzəbl",
    "pos": "adj.",
    "meaning": "看得见的",
    "id": 513
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "invisible",
    "phonetic": "ɪn'vɪzəbl",
    "pos": "adj.",
    "meaning": "看不见的， 无形的",
    "id": 514
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "supervise",
    "phonetic": "'sʊpɚ'vaɪz",
    "pos": "v.",
    "meaning": "监督，监视",
    "id": 515
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "supervisor",
    "phonetic": "'supɚvaɪzɚ",
    "pos": "n.",
    "meaning": "督导",
    "id": 516
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "academy",
    "phonetic": "ə'kædəmi",
    "pos": "n.",
    "meaning": "私立中学；专科院校",
    "id": 517
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "academic",
    "phonetic": ",ækə'dɛmɪk",
    "pos": "adj.",
    "meaning": "学院的；学术的；纯理论的，不切实际的；n. 大学教师",
    "id": 518
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "epidemic",
    "phonetic": ",ɛpɪ'dɛmɪk",
    "pos": "n.",
    "meaning": "流行病",
    "id": 519
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vaccine",
    "phonetic": "væk'sin",
    "pos": "n.",
    "meaning": "疫苗",
    "id": 520
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "immune",
    "phonetic": "ɪ'mjʊn",
    "pos": "adj.",
    "meaning": "免疫的， 有免疫力的， 不受影响的； 免除的， 豁免的",
    "id": 521
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "immunize",
    "phonetic": "",
    "pos": "v.",
    "meaning": "（尤指通过注射疫苗）使免疫",
    "id": 522
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "scholar",
    "phonetic": "'skɑlɚ",
    "pos": "n.",
    "meaning": "学者(尤指文学方面)",
    "id": 523
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "secondary",
    "phonetic": "'sɛkəndɛri",
    "pos": "adj.",
    "meaning": "第二的；次要的",
    "id": 524
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "section",
    "phonetic": "'sɛkʃən",
    "pos": "n.",
    "meaning": "部分",
    "id": 525
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intersection",
    "phonetic": ",ɪntɚ'sɛkʃən",
    "pos": "n.",
    "meaning": "道路交叉口， 交点",
    "id": 526
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sector",
    "phonetic": "'sɛktɚ",
    "pos": "n.",
    "meaning": "部门",
    "id": 527
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "segment",
    "phonetic": "'sɛɡmənt",
    "pos": "n.",
    "meaning": "切片，部分；段，节",
    "id": 528
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "senior",
    "phonetic": "'sinɪɚ",
    "pos": "n.",
    "meaning": "老年人",
    "id": 529
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "entitle",
    "phonetic": "ɪn'taɪtl",
    "pos": "v.",
    "meaning": "使具有资格",
    "id": 530
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "subtitle",
    "phonetic": "",
    "pos": "n.",
    "meaning": "字幕；副标题；加副标题；加字幕",
    "id": 531
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "scope",
    "phonetic": "skop",
    "pos": "n.",
    "meaning": "（学科、活动、书籍等的）范围；（发挥能力的）机会，施展余地；眼界",
    "id": 532
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "terrain",
    "phonetic": "tɛˈren",
    "pos": "n.",
    "meaning": "地形， 地势",
    "id": 533
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "realm",
    "phonetic": "rɛlm",
    "pos": "n.",
    "meaning": "领域，方面",
    "id": 534
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sphere",
    "phonetic": "sfɪr",
    "pos": "n.",
    "meaning": "球体, 范围",
    "id": 535
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "domain",
    "phonetic": "do'men",
    "pos": "n.",
    "meaning": "领域",
    "id": 536
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "hemisphere",
    "phonetic": "'hɛmɪsfɪr",
    "pos": "n.",
    "meaning": "半球",
    "id": 537
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "atmosphere",
    "phonetic": "'ætməsfɪr",
    "pos": "n.",
    "meaning": "气氛，空气",
    "id": 538
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "universal",
    "phonetic": "'jʊnə'vɝsl",
    "pos": "adj.",
    "meaning": "普遍的，宇宙的，全世界的",
    "id": 539
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "anniversary",
    "phonetic": ",ænɪ'vɝsəri",
    "pos": "n.",
    "meaning": "周年纪念日",
    "id": 540
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "versatile",
    "phonetic": "'vɝsətl",
    "pos": "adj.",
    "meaning": "多方面的；通用的",
    "id": 541
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "annual",
    "phonetic": "'ænjuəl",
    "pos": "adj.",
    "meaning": "每年的，一年一次的；n. 年报， 年鉴； 一年生的植物",
    "id": 542
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "diverse",
    "phonetic": "daɪ'vɝs",
    "pos": "adj.",
    "meaning": "各种各样的",
    "id": 543
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "diversion",
    "phonetic": "dəˈvɝʒən; dəˈvɝʃən; daɪˈvɝʒən; daɪˈvɝʃən",
    "pos": "n.",
    "meaning": "转移；娱乐",
    "id": 544
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "converse",
    "phonetic": "",
    "pos": "n.",
    "meaning": "相反的事物；（事实或陈述的)反面V.交谈；谈话",
    "id": 545
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "controversy",
    "phonetic": "ˈkɑːntrəvɜːrsi",
    "pos": "n.",
    "meaning": "争议",
    "id": 546
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "controversial",
    "phonetic": ",kɑntrə'vɝʃl",
    "pos": "adj.",
    "meaning": "受到争议的",
    "id": 547
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "conversation",
    "phonetic": ",kɑnvɚ'seʃən",
    "pos": "n.",
    "meaning": "会话，非正式会谈",
    "id": 548
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "convert",
    "phonetic": "kən'vɝt",
    "pos": "v.",
    "meaning": "转换，改变",
    "id": 549
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reverse",
    "phonetic": "rɪ'vɝs",
    "pos": "adj.",
    "meaning": "相反的",
    "id": 550
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "revert",
    "phonetic": "",
    "pos": "v.",
    "meaning": "归还；回复；恢复",
    "id": 551
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reversible",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "可逆的；可医治的；可翻转的",
    "id": 552
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "adverse",
    "phonetic": "ædˈvɚs, ˈædˌvɚs",
    "pos": "adj.",
    "meaning": "相反的，敌对的",
    "id": 553
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "convenience",
    "phonetic": "kən'vinɪəns",
    "pos": "n.",
    "meaning": "方便； 便利设施",
    "id": 554
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inconvenience",
    "phonetic": "",
    "pos": "n.",
    "meaning": "麻烦，不方便之处",
    "id": 555
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "handy",
    "phonetic": "'hændi",
    "pos": "adj.",
    "meaning": "方便的；便于使用的",
    "id": 556
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "convince",
    "phonetic": "kən'vɪns",
    "pos": "v.",
    "meaning": "使……相信",
    "id": 557
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "verbal",
    "phonetic": "'vɝbl",
    "pos": "adj.",
    "meaning": "口头的； 用言辞的， 用文字的； 动词的",
    "id": 558
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vocal",
    "phonetic": "'vokl",
    "pos": "adj.",
    "meaning": "喜欢畅所欲言的，直言不讳的；嗓音的，发声的；n. 声乐节目",
    "id": 559
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "automate",
    "phonetic": "'ɔtəmet",
    "pos": "v.",
    "meaning": "使自动化",
    "id": 560
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "automatic",
    "phonetic": "'ɔtə'mætɪk",
    "pos": "adj.",
    "meaning": "自动的",
    "id": 561
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vehicle",
    "phonetic": "'viːɪkl",
    "pos": "n.",
    "meaning": "车辆",
    "id": 562
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "gene",
    "phonetic": "dʒin",
    "pos": "n.",
    "meaning": "基因",
    "id": 563
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "genre",
    "phonetic": "'ʒɑnrə",
    "pos": "n.",
    "meaning": "体载， 类型",
    "id": 564
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "generate",
    "phonetic": "'dʒɛnəret",
    "pos": "v.",
    "meaning": "产生",
    "id": 565
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "homogeneous",
    "phonetic": ",homə'dʒinɪəs",
    "pos": "adj.",
    "meaning": "同类的",
    "id": 566
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "expertise",
    "phonetic": "'ɛkspɝ'tiz",
    "pos": "n.",
    "meaning": "专业知识",
    "id": 567
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "expert",
    "phonetic": "'ɛkspɝt; (for adj., also) ɛksˈpɝt ; ɪkˈspɝt",
    "pos": "adj.",
    "meaning": "熟练的；n. 专家",
    "id": 568
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "innovate",
    "phonetic": "'ɪnəvet",
    "pos": "v.",
    "meaning": "创新，革新",
    "id": 569
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "innovative",
    "phonetic": "'ɪnəvetɪv",
    "pos": "adj.",
    "meaning": "创新的， 革新的",
    "id": 570
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "innovator",
    "phonetic": "",
    "pos": "n.",
    "meaning": "创新者；革新者",
    "id": 571
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "renovation",
    "phonetic": "",
    "pos": "n.",
    "meaning": "修复；翻新",
    "id": 572
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "evolve",
    "phonetic": "ɪ'vɑlv",
    "pos": "v.",
    "meaning": "进化",
    "id": 573
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "involve",
    "phonetic": "ɪn'vɑlv",
    "pos": "vt.",
    "meaning": "使卷入， 牵涉； 包含， 含有",
    "id": 574
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "revolution",
    "phonetic": "'rɛvə'lʊʃən",
    "pos": "n.",
    "meaning": "革命",
    "id": 575
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "locate",
    "phonetic": "ˈloˌket; loˈket",
    "pos": "v.",
    "meaning": "位于，定位",
    "id": 576
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inspect",
    "phonetic": "ɪn'spɛkt",
    "pos": "v.",
    "meaning": "检查，审查；检阅",
    "id": 577
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inspector",
    "phonetic": "ɪn'spɛktɚ",
    "pos": "n.",
    "meaning": "检查员；巡官",
    "id": 578
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "expect",
    "phonetic": "ɪk'spɛkt",
    "pos": "v.",
    "meaning": "料想，认为",
    "id": 579
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "unexpected",
    "phonetic": "'ʌnɪk'spɛktɪd",
    "pos": "adj.",
    "meaning": "意想不到的",
    "id": 580
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "expectancy",
    "phonetic": "ɪk'spɛktənsi",
    "pos": "n.",
    "meaning": "预料； 期待； 盼望",
    "id": 581
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "longevity",
    "phonetic": "lɔn'dʒɛvəti",
    "pos": "n.",
    "meaning": "长寿， 寿命",
    "id": 582
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "aspect",
    "phonetic": "'æspɛkt",
    "pos": "n.",
    "meaning": "方面",
    "id": 583
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "suspect",
    "phonetic": "sʌspɛkt; (for v.) səˈspɛkt",
    "pos": "v.",
    "meaning": "怀疑；n. 嫌疑犯",
    "id": 584
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "suspicion",
    "phonetic": "sə'spɪʃən",
    "pos": "n.",
    "meaning": "怀疑， 疑心， 猜疑； 一点儿， 少量",
    "id": 585
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "susceptible",
    "phonetic": "sə'sɛptəbl",
    "pos": "adj.",
    "meaning": "易受影响的； 过敏的； 能经受的， 容许的",
    "id": 586
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "spectator",
    "phonetic": "'spɛktetɚ",
    "pos": "n.",
    "meaning": "参观者，观众",
    "id": 587
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "respect",
    "phonetic": "rɪ'spɛkt",
    "pos": "n.",
    "meaning": "尊敬；尊重；问候；方面；vt. 尊敬； 尊重",
    "id": 588
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "respective",
    "phonetic": "rɪ'spɛktɪv",
    "pos": "adj.",
    "meaning": "各自的",
    "id": 589
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "spectacular",
    "phonetic": "spɛk'tækjəlɚ",
    "pos": "adj.",
    "meaning": "壮观的，引人注目的；n. 壮观的演出； 惊人之举",
    "id": 590
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "spectacle",
    "phonetic": "'spɛktəkl",
    "pos": "n.",
    "meaning": "景象",
    "id": 591
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prosperity",
    "phonetic": "prɑ'spɛrəti",
    "pos": "n.",
    "meaning": "繁荣",
    "id": 592
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "spectrum",
    "phonetic": "'spɛktrəm",
    "pos": "n.",
    "meaning": "系列，范围；波谱",
    "id": 593
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "conspicuous",
    "phonetic": "kən'spɪkjʊəs",
    "pos": "adj.",
    "meaning": "显著的",
    "id": 594
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "despise",
    "phonetic": "dɪ'spaɪz",
    "pos": "vt.",
    "meaning": "鄙视， 看不起",
    "id": 595
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "perspective",
    "phonetic": "pɚ'spɛktɪv",
    "pos": "n.",
    "meaning": "视角，观点",
    "id": 596
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "stance",
    "phonetic": "",
    "pos": "n.",
    "meaning": "（公开表明的）观点，态度，立场",
    "id": 597
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "speculate",
    "phonetic": "'spɛkjə'let",
    "pos": "v.",
    "meaning": "猜测，推测；投机",
    "id": 598
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prospect",
    "phonetic": "'prɑspɛkt",
    "pos": "n.",
    "meaning": "前景",
    "id": 599
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prospective",
    "phonetic": "prə'spɛktɪv",
    "pos": "adj.",
    "meaning": "未来的，预期的",
    "id": 600
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "retrospect",
    "phonetic": "'rɛtrəspɛkt",
    "pos": "n.",
    "meaning": "回顾",
    "id": 601
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inferior",
    "phonetic": "ɪn'fɪrɪɚ",
    "pos": "adj.",
    "meaning": "比……差",
    "id": 602
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "superior",
    "phonetic": "sʊˈpɪrɪɚ",
    "pos": "adj.",
    "meaning": "上级的，较高的；优越的；有优越感的，高傲的；n. 上级， 长官",
    "id": 603
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "superb",
    "phonetic": "/suːˈpɜːrb/",
    "pos": "adj.",
    "meaning": "壮丽的；超等的",
    "id": 604
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "supreme",
    "phonetic": "suˈprim",
    "pos": "adj.",
    "meaning": "最高的， 最大的； 极度的， 最重要的",
    "id": 605
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "superstition",
    "phonetic": ",supɚ'stɪʃən",
    "pos": "n.",
    "meaning": "迷信，迷信行为",
    "id": 606
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "supersonic",
    "phonetic": ",supɚ'sɑnɪk",
    "pos": "adj.",
    "meaning": "超声的，超声速的",
    "id": 607
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "precede",
    "phonetic": "prɪ'sid",
    "pos": "v.",
    "meaning": "先于…，领先",
    "id": 608
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "precedent",
    "phonetic": "'prɛsɪdənt",
    "pos": "n.",
    "meaning": "先例",
    "id": 609
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "unprecedented",
    "phonetic": "ʌn'prɛsɪdɛntɪd",
    "pos": "adj.",
    "meaning": "史无前例的",
    "id": 610
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "predecessor",
    "phonetic": "'prɛdəsɛsɚ",
    "pos": "n.",
    "meaning": "前辈，前任者",
    "id": 611
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "concede",
    "phonetic": "kən'sid",
    "pos": "vi.",
    "meaning": "让步， 认输；vt. 承认，承认…为真；承认失败；允许，让予",
    "id": 612
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "succession",
    "phonetic": "sək'sɛʃən",
    "pos": "n.",
    "meaning": "继承（权）",
    "id": 613
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "successor",
    "phonetic": "sək'sɛsɚ",
    "pos": "n.",
    "meaning": "继承人，继任者",
    "id": 614
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "exceed",
    "phonetic": "ɪk'sid",
    "pos": "v.",
    "meaning": "超过",
    "id": 615
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "exceedingly",
    "phonetic": "ɪk'sidɪŋli",
    "pos": "adv.",
    "meaning": "极端地， 非常",
    "id": 616
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "recede",
    "phonetic": "rɪ'sid",
    "pos": "vi.",
    "meaning": "退， 退去， 渐渐远去； 向后倾斜， 缩进",
    "id": 617
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "proceed",
    "phonetic": "pro'sid",
    "pos": "v.",
    "meaning": "进行；继续进行",
    "id": 618
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "procession",
    "phonetic": "prə'sɛʃən",
    "pos": "n.",
    "meaning": "队伍，行列",
    "id": 619
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "procedure",
    "phonetic": "prə'sidʒɚ",
    "pos": "n.",
    "meaning": "程序",
    "id": 620
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ancestor",
    "phonetic": "'ænsɛstɚ",
    "pos": "n.",
    "meaning": "祖宗， 祖先； 原型； 先驱",
    "id": 621
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ascend",
    "phonetic": "ə'sɛnd",
    "pos": "v.",
    "meaning": "上升",
    "id": 622
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "descend",
    "phonetic": "dɪ'sɛnd",
    "pos": "vi.",
    "meaning": "下来，下降；vt. 走下， 爬下",
    "id": 623
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "descent",
    "phonetic": "dɪ'sɛnt",
    "pos": "n.",
    "meaning": "血统, 后裔",
    "id": 624
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "descendant",
    "phonetic": "dɪ'sɛndənt",
    "pos": "n.",
    "meaning": "子孙后代",
    "id": 625
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "offspring",
    "phonetic": "'ɔfsprɪŋ",
    "pos": "n.",
    "meaning": "儿女，子孙，后代",
    "id": 626
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "excess",
    "phonetic": "'ɛk'sɛs",
    "pos": "n.",
    "meaning": "过量，过度",
    "id": 627
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "excessive",
    "phonetic": "ɪkˈsɛsɪv",
    "pos": "adj.",
    "meaning": "过度的",
    "id": 628
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "slump",
    "phonetic": "slʌmp",
    "pos": "vi.",
    "meaning": "大幅度下降，暴跌；突然倒下；n. 萧条期， 低潮",
    "id": 629
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "lump",
    "phonetic": "lʌmp",
    "pos": "v.",
    "meaning": "（使）成团，结块",
    "id": 630
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bump",
    "phonetic": "bʌmp",
    "pos": "v.",
    "meaning": "颠簸",
    "id": 631
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "update",
    "phonetic": ",ʌp'det",
    "pos": "vt.",
    "meaning": "更新；使现代化；n. 最新信息",
    "id": 632
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "renew",
    "phonetic": "rɪ'nʊ",
    "pos": "v.",
    "meaning": "更新",
    "id": 633
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "refresh",
    "phonetic": "ri'frɛʃ",
    "pos": "v.",
    "meaning": "振作精神， 恢复活力",
    "id": 634
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pop",
    "phonetic": "pɑp",
    "pos": "v.",
    "meaning": "（意外地）出现",
    "id": 635
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "antique",
    "phonetic": "æn'tik",
    "pos": "adj.",
    "meaning": "古代的；n. 古物",
    "id": 636
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "participate",
    "phonetic": "pɑr'tɪsə'pet",
    "pos": "v.",
    "meaning": "参与",
    "id": 637
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "anticipate",
    "phonetic": "æn'tɪsə'pet",
    "pos": "v.",
    "meaning": "期望，预期",
    "id": 638
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "anticipatory",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "预期的；期待的",
    "id": 639
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "renaissance",
    "phonetic": "ˈrenəsɑ:ns; ˌrɛnəˈsɑns",
    "pos": "n.",
    "meaning": "文艺复兴， 文艺复兴时期； 复兴， 再生",
    "id": 640
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vivid",
    "phonetic": "'vɪvɪd",
    "pos": "adj.",
    "meaning": "生动的",
    "id": 641
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "survive",
    "phonetic": "sɚ'vaɪv",
    "pos": "vi.",
    "meaning": "活下来，继续存在；幸免于；vt. 从中挺过来； 从…逃出； 比…活得长",
    "id": 642
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "survival",
    "phonetic": "sɚ'vaɪvl",
    "pos": "n.",
    "meaning": "幸存；残存；幸存者",
    "id": 643
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "revive",
    "phonetic": "rɪ'vaɪv",
    "pos": "v.",
    "meaning": "复苏",
    "id": 644
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "surface",
    "phonetic": "'sɝfɪs",
    "pos": "n.",
    "meaning": "表面；表层；外观；adj. 表面的，肤浅的；v. 浮出水面",
    "id": 645
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "describe",
    "phonetic": "dɪ'skraɪb",
    "pos": "vt.",
    "meaning": "形容， 描写； 画出",
    "id": 646
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ascribe",
    "phonetic": "ə'skraɪb",
    "pos": "v.",
    "meaning": "把…归于",
    "id": 647
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prescribe",
    "phonetic": "prɪ'skraɪb",
    "pos": "v.",
    "meaning": "开处方",
    "id": 648
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "subscribe",
    "phonetic": "səb'skraɪb",
    "pos": "v.",
    "meaning": "订购；认购；预订",
    "id": 649
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "subscription",
    "phonetic": "səb'skrɪpʃən",
    "pos": "n.",
    "meaning": "订阅（费）；用户费（的缴纳）",
    "id": 650
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "script",
    "phonetic": "skrɪpt",
    "pos": "n.",
    "meaning": "脚本，剧本",
    "id": 651
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "manuscript",
    "phonetic": "'mænjuskrɪpt",
    "pos": "n.",
    "meaning": "手稿",
    "id": 652
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "manual",
    "phonetic": "'mænjuəl",
    "pos": "adj.",
    "meaning": "手工的；体力的",
    "id": 653
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "manufacturer",
    "phonetic": ",mænju'fæktʃərɚ",
    "pos": "n.",
    "meaning": "制造商， 制造厂",
    "id": 654
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "affection",
    "phonetic": "ə'fɛkʃən",
    "pos": "n.",
    "meaning": "喜爱",
    "id": 655
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "infect",
    "phonetic": "ɪn'fɛkt",
    "pos": "v.",
    "meaning": "感染",
    "id": 656
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "defect",
    "phonetic": "‘dɪfɛkt",
    "pos": "n.",
    "meaning": "缺点",
    "id": 657
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "effect",
    "phonetic": "ɪ'fɛkt",
    "pos": "n.",
    "meaning": "影响",
    "id": 658
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "void",
    "phonetic": "vɔɪd",
    "pos": "adj.",
    "meaning": "无效的；空的",
    "id": 659
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sculpture",
    "phonetic": "'skʌlptʃɚ",
    "pos": "n.",
    "meaning": "雕塑",
    "id": 660
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "allege",
    "phonetic": "ə'lɛdʒ",
    "pos": "vt.",
    "meaning": "断言， 宣称， 硬说",
    "id": 661
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pledge",
    "phonetic": "plɛdʒ",
    "pos": "n.",
    "meaning": "誓言；v. 使发誓",
    "id": 662
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "breach",
    "phonetic": "britʃ",
    "pos": "n.",
    "meaning": "破坏，违反；破裂，不和；缺口，裂口；vt. 攻破， 在…造成缺口； 破坏， 违反",
    "id": 663
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "infringe",
    "phonetic": "",
    "pos": "",
    "meaning": "违背；触犯（法规）；侵犯",
    "id": 664
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "blackmail",
    "phonetic": "'blækmel",
    "pos": "n.",
    "meaning": "勒索，敲诈；勒索所得之款；v. 勒索，敲诈",
    "id": 665
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "idle",
    "phonetic": "'aɪdl",
    "pos": "adj.",
    "meaning": "空闲的；懒散的",
    "id": 666
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "deceive",
    "phonetic": "dɪ'siv",
    "pos": "vi.",
    "meaning": "行骗；vt. 欺骗，蒙蔽",
    "id": 667
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "perceive",
    "phonetic": "pɚ'siv",
    "pos": "v.",
    "meaning": "察觉",
    "id": 668
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "conceive",
    "phonetic": "kən'siv",
    "pos": "v.",
    "meaning": "设想，以为；怀孕",
    "id": 669
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "conception",
    "phonetic": "kən'sɛpʃən",
    "pos": "n.",
    "meaning": "概念，观念，想法",
    "id": 670
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "verdict",
    "phonetic": "'vɝdɪkt",
    "pos": "n.",
    "meaning": "裁定； 定论， 判断性意见",
    "id": 671
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "convict",
    "phonetic": "kən'vɪkt",
    "pos": "v.",
    "meaning": "证明……有罪",
    "id": 672
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "guilt",
    "phonetic": "ɡɪlt",
    "pos": "n.",
    "meaning": "内疚；有罪，犯罪",
    "id": 673
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "crime",
    "phonetic": "kraɪm",
    "pos": "n.",
    "meaning": "罪， 罪行， 犯罪",
    "id": 674
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prison",
    "phonetic": "'prɪzn",
    "pos": "n.",
    "meaning": "监狱，监禁",
    "id": 675
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "imprison",
    "phonetic": "ɪm'prɪzn",
    "pos": "v.",
    "meaning": "监禁",
    "id": 676
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "kidnap",
    "phonetic": "'kɪdnæp",
    "pos": "v.",
    "meaning": "绑架",
    "id": 677
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "boycott",
    "phonetic": "'bɔɪkɑt",
    "pos": "v.",
    "meaning": "联合抵制；n. 抵制行动，受抵制时期",
    "id": 678
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "malpractice",
    "phonetic": "",
    "pos": "n.",
    "meaning": "渎职；玩忽职守；不端行为，不法行为",
    "id": 679
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sue",
    "phonetic": "su",
    "pos": "v.",
    "meaning": "控告， 起诉； 要求， 请求",
    "id": 680
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pursue",
    "phonetic": "pə'sʊ",
    "pos": "v.",
    "meaning": "追求",
    "id": 681
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ensue",
    "phonetic": "ɪn'su",
    "pos": "vi.",
    "meaning": "接着发生， 接踵而来， 因而产生",
    "id": 682
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "lawsuit",
    "phonetic": "'lɔsut",
    "pos": "n.",
    "meaning": "诉讼",
    "id": 683
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "outrage",
    "phonetic": "'aʊtredʒ",
    "pos": "n.",
    "meaning": "义愤，愤慨；暴行，骇人听闻的事件；vt. 激起…的义愤， 激怒",
    "id": 684
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "proof",
    "phonetic": "pruf",
    "pos": "adj.",
    "meaning": "耐…的， 能防…的；n. 证据，证明；校样，样张",
    "id": 685
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "testimony",
    "phonetic": "'tɛstə'moni",
    "pos": "n.",
    "meaning": "证词",
    "id": 686
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "testify",
    "phonetic": "'tɛstɪfaɪ",
    "pos": "v.",
    "meaning": "证明，检验",
    "id": 687
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "professor",
    "phonetic": "",
    "pos": "n.",
    "meaning": "教授",
    "id": 688
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "profess",
    "phonetic": "prə'fɛs",
    "pos": "vt.",
    "meaning": "表示， 承认； 宣称信仰",
    "id": 689
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "profession",
    "phonetic": "prə'fɛʃən",
    "pos": "n.",
    "meaning": "职业； 公开表示",
    "id": 690
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "confession",
    "phonetic": "",
    "pos": "n.",
    "meaning": "认罪；供认；坦白",
    "id": 691
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "rebel",
    "phonetic": "rɪ'bɛl",
    "pos": "vi.",
    "meaning": "反叛， 造反； 反对， 不服从；n. 反叛分子，反对者",
    "id": 692
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "rob",
    "phonetic": "rɑb",
    "pos": "vt.",
    "meaning": "抢劫， 盗窃",
    "id": 693
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "smuggle",
    "phonetic": "'smʌgl",
    "pos": "v.",
    "meaning": "走私",
    "id": 694
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "justice",
    "phonetic": "'dʒʌstɪs",
    "pos": "n.",
    "meaning": "公平",
    "id": 695
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "adjust",
    "phonetic": "ə'dʒʌst",
    "pos": "vi.",
    "meaning": "适应；vt. 调整，调节；校正",
    "id": 696
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "warrant",
    "phonetic": "'wɔrənt",
    "pos": "n.",
    "meaning": "（法院授权警方采取行动的）令状；许可证",
    "id": 697
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "warranty",
    "phonetic": "",
    "pos": "n.",
    "meaning": "（商品）保用卡，保修单",
    "id": 698
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "blast",
    "phonetic": "blæst",
    "pos": "n.",
    "meaning": "管乐器的声音",
    "id": 699
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "elastic",
    "phonetic": "ɪ'læstɪk",
    "pos": "adj.",
    "meaning": "有弹性的； 灵活的；n. 松紧带",
    "id": 700
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "flexible",
    "phonetic": "'flɛksəbl",
    "pos": "adj.",
    "meaning": "灵活的",
    "id": 701
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reflect",
    "phonetic": "rɪ'flɛkt",
    "pos": "v.",
    "meaning": "思考，反映，反射",
    "id": 702
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "salvation",
    "phonetic": "sæl'veʃən",
    "pos": "n.",
    "meaning": "拯救， 解救； 解救措施",
    "id": 703
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "urgent",
    "phonetic": "'ɝdʒənt",
    "pos": "adj.",
    "meaning": "急迫的",
    "id": 704
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "haste",
    "phonetic": "hest",
    "pos": "n.",
    "meaning": "急速，急忙；草率",
    "id": 705
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "hasty",
    "phonetic": "'hesti",
    "pos": "adj.",
    "meaning": "匆忙的",
    "id": 706
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "acquaint",
    "phonetic": "ə'kwent",
    "pos": "v.",
    "meaning": "使认识，使了解",
    "id": 707
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bankrupt",
    "phonetic": "'bæŋkrʌpt",
    "pos": "adj.",
    "meaning": "破产的；v. 使破产",
    "id": 708
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "rupture",
    "phonetic": "'rʌptʃɚ",
    "pos": "v.",
    "meaning": "破裂；n. 破裂，裂开；决裂，断绝",
    "id": 709
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "interrupt",
    "phonetic": "'ɪntə'rʌpt",
    "pos": "v.",
    "meaning": "打断， 中止； 打扰",
    "id": 710
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "erupt",
    "phonetic": "ɪ'rʌpt",
    "pos": "v.",
    "meaning": "喷出, 爆发",
    "id": 711
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "disrupt",
    "phonetic": "dɪs'rʌpt",
    "pos": "vt.",
    "meaning": "使中断； 扰乱",
    "id": 712
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "abrupt",
    "phonetic": "ə'brʌpt",
    "pos": "adj.",
    "meaning": "突然的， 意外的； 唐突的， 鲁莽的",
    "id": 713
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "corrupt",
    "phonetic": "kə'rʌpt",
    "pos": "v.",
    "meaning": "使腐化；adj. 腐败的",
    "id": 714
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "rot",
    "phonetic": "rɑt",
    "pos": "v.",
    "meaning": "腐烂，腐朽；n. 腐烂， 腐朽",
    "id": 715
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "rotate",
    "phonetic": "'rotet",
    "pos": "v.",
    "meaning": "（使）旋转",
    "id": 716
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bribe",
    "phonetic": "braɪb",
    "pos": "v.",
    "meaning": "贿赂",
    "id": 717
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "debt",
    "phonetic": "dɛt",
    "pos": "n.",
    "meaning": "债务",
    "id": 718
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "indebted",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "负债的；感激的；蒙恩的",
    "id": 719
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "levy",
    "phonetic": "'lɛvi",
    "pos": "vt.",
    "meaning": "征收；n. 征税， 税款",
    "id": 720
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "deposit",
    "phonetic": "dɪ'pɑzɪt",
    "pos": "v.",
    "meaning": "存放；n. 存款",
    "id": 721
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "compose",
    "phonetic": "kəm'poz",
    "pos": "vt.",
    "meaning": "组成， 构成； 创作， 为…谱曲； 使平静， 使镇静",
    "id": 722
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "composite",
    "phonetic": "kɑm'pɑzɪt",
    "pos": "adj.",
    "meaning": "合成的；n. 合成物",
    "id": 723
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "posture",
    "phonetic": "'pɑstʃɚ",
    "pos": "vi.",
    "meaning": "摆出姿势， 装模作样；n. 姿势，姿态；看法，态度",
    "id": 724
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "propose",
    "phonetic": "prə'poz",
    "pos": "v.",
    "meaning": "提出",
    "id": 725
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "proposition",
    "phonetic": ",prɑpə'zɪʃən",
    "pos": "n.",
    "meaning": "提议，主题",
    "id": 726
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "positive",
    "phonetic": "'pɑzətɪv",
    "pos": "adj.",
    "meaning": "正的，阳性的；正的，正极的，阳性的；正的，正数的",
    "id": 727
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "position",
    "phonetic": "pə'zɪʃən",
    "pos": "n.",
    "meaning": "定位，安放；位置，职位",
    "id": 728
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "expose",
    "phonetic": "ɪk'spoz；ek-",
    "pos": "vt.",
    "meaning": "使暴露， 揭露",
    "id": 729
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dispose",
    "phonetic": "dɪ'spoz",
    "pos": "v.",
    "meaning": "去掉， 销毁； 处理， 解决； 使倾向于",
    "id": 730
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "disposable",
    "phonetic": "dɪ'spozəbl",
    "pos": "adj.",
    "meaning": "可任意使用的；n. 一次性物品， 不回收物品",
    "id": 731
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "impose",
    "phonetic": "ɪm'poz",
    "pos": "v.",
    "meaning": "强加于",
    "id": 732
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "oppose",
    "phonetic": "ə'poz",
    "pos": "v.",
    "meaning": "反对",
    "id": 733
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "opponent",
    "phonetic": "ə'ponənt",
    "pos": "n.",
    "meaning": "反对者",
    "id": 734
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "rival",
    "phonetic": "'raɪvl",
    "pos": "n.",
    "meaning": "对手",
    "id": 735
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "trivial",
    "phonetic": "'trɪvɪəl",
    "pos": "adj.",
    "meaning": "琐碎的；平常的",
    "id": 736
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "buck",
    "phonetic": "",
    "pos": "v.",
    "meaning": "反对；n. 美元",
    "id": 737
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "portable",
    "phonetic": "'pɔrtəbl",
    "pos": "adj.",
    "meaning": "可移动的",
    "id": 738
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "export",
    "phonetic": "ˈekspɔːrt；ɪkˈ-",
    "pos": "v.",
    "meaning": "输出，出口；运走",
    "id": 739
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "import",
    "phonetic": "'ɪmpɔt",
    "pos": "",
    "meaning": "n & v. 进口",
    "id": 740
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "deport",
    "phonetic": "dɪ'pɔrt",
    "pos": "vt.",
    "meaning": "把…驱逐出境",
    "id": 741
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "support",
    "phonetic": "sə'pɔrt",
    "pos": "v.",
    "meaning": "经受，承受",
    "id": 742
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "supporter",
    "phonetic": "",
    "pos": "n.",
    "meaning": "支持者；拥护者",
    "id": 743
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "supportive",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "给予帮助的；支持的；鼓励的",
    "id": 744
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "transport",
    "phonetic": "'trænspɔrt",
    "pos": "vt.",
    "meaning": "运输；n. 运输， 运输工具",
    "id": 745
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "portion",
    "phonetic": "'pɔrʃən",
    "pos": "n.",
    "meaning": "部分",
    "id": 746
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "proportion",
    "phonetic": "prə'pɔrʃən",
    "pos": "n.",
    "meaning": "比例，部分",
    "id": 747
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fraction",
    "phonetic": "'frækʃən",
    "pos": "n.",
    "meaning": "分数",
    "id": 748
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fracture",
    "phonetic": "'fræktʃɚ",
    "pos": "n.",
    "meaning": "破裂；裂痕；v. 破裂",
    "id": 749
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "endorse",
    "phonetic": "ɪn'dɔrs",
    "pos": "vt.",
    "meaning": "赞同， 认可；代言；背书； 在背面签名<",
    "id": 750
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mortgage",
    "phonetic": "'mɔrɡɪdʒ",
    "pos": "n.",
    "meaning": "抵押贷款；v. 抵押",
    "id": 751
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "profit",
    "phonetic": "'prɑfɪt",
    "pos": "n.",
    "meaning": "益处；利润；v. 得益",
    "id": 752
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "non-profit",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "不以营利为目的的；非营利的",
    "id": 753
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "benefit",
    "phonetic": "'bɛnɪfɪt",
    "pos": "vi.",
    "meaning": "得益；n. 利益，恩惠；救济金，保险金，津贴；vt. 有益于",
    "id": 754
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pension",
    "phonetic": "'pɛnʃən",
    "pos": "n.",
    "meaning": "养老金",
    "id": 755
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "premium",
    "phonetic": "'primɪəm",
    "pos": "n.",
    "meaning": "奖金",
    "id": 756
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "deem",
    "phonetic": "dim",
    "pos": "v.",
    "meaning": "认为",
    "id": 757
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "claim",
    "phonetic": "klem",
    "pos": "v.",
    "meaning": "索取，声称",
    "id": 758
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "proclaim",
    "phonetic": "prə'klem",
    "pos": "vt.",
    "meaning": "宣告， 宣布， 声明； 显示",
    "id": 759
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "proclamation",
    "phonetic": "",
    "pos": "n.",
    "meaning": "宣言；公告；声明",
    "id": 760
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "exclaim",
    "phonetic": "ɪk'sklem",
    "pos": "vi.",
    "meaning": "呼喊， 惊叫",
    "id": 761
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "acclaim",
    "phonetic": "ə'klem",
    "pos": "v.",
    "meaning": "称赞；为…喝彩，向…欢呼；n. 欢呼，喝彩；称赞",
    "id": 762
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reclaim",
    "phonetic": "rɪ'klem",
    "pos": "v.",
    "meaning": "开垦，开拓；回收",
    "id": 763
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "finite",
    "phonetic": "'faɪnaɪt",
    "pos": "adj.",
    "meaning": "有限的；有尽的",
    "id": 764
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "confine",
    "phonetic": "kən'faɪn",
    "pos": "v.",
    "meaning": "限制",
    "id": 765
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "define",
    "phonetic": "dɪ'faɪn",
    "pos": "v.",
    "meaning": "规定；立（界限）",
    "id": 766
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "definite",
    "phonetic": "'dɛfɪnət",
    "pos": "adj.",
    "meaning": "一定的，确切的",
    "id": 767
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "definition",
    "phonetic": ",dɛfɪ'nɪʃən",
    "pos": "n.",
    "meaning": "定义， 释义， 定界； 清晰， 鲜明",
    "id": 768
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "definitive",
    "phonetic": "dɪ'fɪnətɪv",
    "pos": "adj.",
    "meaning": "最可靠的， 权威性的； 决定性的",
    "id": 769
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "indefinite",
    "phonetic": "ɪn'dɛfɪnət",
    "pos": "adj.",
    "meaning": "无限期的",
    "id": 770
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "refine",
    "phonetic": "rɪ'faɪn",
    "pos": "v.",
    "meaning": "精炼；使……文雅",
    "id": 771
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "refinery",
    "phonetic": "rɪ'faɪnəri",
    "pos": "n.",
    "meaning": "精炼厂，提炼厂",
    "id": 772
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bloc",
    "phonetic": "",
    "pos": "n.",
    "meaning": "集团；国家集团",
    "id": 773
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "company",
    "phonetic": "'kʌmpəni",
    "pos": "n.",
    "meaning": "公司，商号；同伴",
    "id": 774
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "accompany",
    "phonetic": "ə'kʌmpəni",
    "pos": "v.",
    "meaning": "陪同， 伴随； 为…伴奏",
    "id": 775
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "firm",
    "phonetic": "fɝm",
    "pos": "n.",
    "meaning": "商行，商号，公司",
    "id": 776
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "affirm",
    "phonetic": "ə'fɝm",
    "pos": "v.",
    "meaning": "断言，证实",
    "id": 777
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "enterprise",
    "phonetic": "'ɛntɚ'praɪz",
    "pos": "n.",
    "meaning": "艰巨的事业；事业心",
    "id": 778
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "entrepreneur",
    "phonetic": "ˌɑntrəprəˈnɝ​",
    "pos": "n.",
    "meaning": "企业家",
    "id": 779
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "board",
    "phonetic": "bɔrd",
    "pos": "n.",
    "meaning": "董事会",
    "id": 780
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "corporation",
    "phonetic": ",kɔrpə'reʃən",
    "pos": "n.",
    "meaning": "公司，企业；社团",
    "id": 781
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "incorporate",
    "phonetic": "",
    "pos": "v.",
    "meaning": "合并；体现",
    "id": 782
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "operate",
    "phonetic": "'ɑpə'ret",
    "pos": "v.",
    "meaning": "操作；施行手术",
    "id": 783
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "cooperative",
    "phonetic": "ko'ɑpərətɪv",
    "pos": "adj.",
    "meaning": "合作的；n. 合作社",
    "id": 784
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "territory",
    "phonetic": "'tɛrətɔri",
    "pos": "n.",
    "meaning": "领域，领土",
    "id": 785
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "multinational",
    "phonetic": "",
    "pos": "",
    "meaning": "跨国公司；跨国的；涉及多国的",
    "id": 786
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "multiply",
    "phonetic": "'mʌltɪplaɪ",
    "pos": "v.",
    "meaning": "增加， 繁殖； 乘",
    "id": 787
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "multiple",
    "phonetic": "'mʌltəpl",
    "pos": "adj.",
    "meaning": "复合的；多重的，多样的；n. 倍数",
    "id": 788
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "multitude",
    "phonetic": "ˈmʌltɪˌtud, -ˌtjud",
    "pos": "n.",
    "meaning": "大批，大群；大量",
    "id": 789
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "affiliate",
    "phonetic": "ə'fɪlɪet",
    "pos": "v.",
    "meaning": "使隶属于",
    "id": 790
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "auxiliary",
    "phonetic": "ɔːɡ'zɪlɪəri",
    "pos": "adj.",
    "meaning": "辅助的",
    "id": 791
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "subside",
    "phonetic": "",
    "pos": "v.",
    "meaning": "减弱；消退；下沉",
    "id": 792
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "subsidy",
    "phonetic": "'sʌbsədi",
    "pos": "n.",
    "meaning": "补助",
    "id": 793
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "subsidiary",
    "phonetic": "səb'sɪdɪɛri",
    "pos": "adj.",
    "meaning": "辅助的，补充的",
    "id": 794
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "allowance",
    "phonetic": "ə'laʊəns",
    "pos": "n.",
    "meaning": "津贴，补助费",
    "id": 795
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bonus",
    "phonetic": "'bonəs",
    "pos": "n.",
    "meaning": "奖金， 红利； 额外给予的东西",
    "id": 796
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "penalty",
    "phonetic": "'pɛnəlti",
    "pos": "n.",
    "meaning": "惩罚",
    "id": 797
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "avenue",
    "phonetic": "'ævənu",
    "pos": "n.",
    "meaning": "林荫道，道路；大街",
    "id": 798
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "revenue",
    "phonetic": "'rɛvənu",
    "pos": "n.",
    "meaning": "收入",
    "id": 799
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "revenge",
    "phonetic": "rɪ'vɛndʒ",
    "pos": "n.",
    "meaning": "报复，报仇；vt. 为…报仇， 报…之仇",
    "id": 800
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "regulate",
    "phonetic": "'rɛɡjulet",
    "pos": "v.",
    "meaning": "调整，调节，校准",
    "id": 801
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "irregular",
    "phonetic": "ɪ'rɛɡjəlɚ",
    "pos": "adj.",
    "meaning": "不规律的",
    "id": 802
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "deregulation",
    "phonetic": "",
    "pos": "n.",
    "meaning": "解除管制；放松控制",
    "id": 803
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dole",
    "phonetic": "dol",
    "pos": "n.",
    "meaning": "救济，救济金；vt. 发放， 发给",
    "id": 804
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "privilege",
    "phonetic": "ˈprɪvəlɪdʒ",
    "pos": "n.",
    "meaning": "特权",
    "id": 805
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "privileged",
    "phonetic": "'prɪvəlɪdʒd",
    "pos": "adj.",
    "meaning": "有特权的",
    "id": 806
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reciprocal",
    "phonetic": "rɪ'sɪprəkl",
    "pos": "adj.",
    "meaning": "相互的；互利的",
    "id": 807
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "current",
    "phonetic": "kɝ​ənt",
    "pos": "adj.",
    "meaning": "当前的，通用的；流行的，流传的；n. 潮流； 电流； 趋势， 倾向",
    "id": 808
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "currency",
    "phonetic": "ˈkɜrənsi",
    "pos": "n.",
    "meaning": "货币",
    "id": 809
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "estate",
    "phonetic": "ɪ'stet",
    "pos": "n.",
    "meaning": "财产，产业；房地产",
    "id": 810
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "finance",
    "phonetic": "'faɪnæns",
    "pos": "v.",
    "meaning": "提供资金",
    "id": 811
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "merchant",
    "phonetic": "'mɝtʃənt",
    "pos": "n.",
    "meaning": "商人；零售商",
    "id": 812
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "merchandise",
    "phonetic": "'mɝtʃəndaɪs",
    "pos": "n.",
    "meaning": "商品，货物",
    "id": 813
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "monopoly",
    "phonetic": "mə'nɑpəli",
    "pos": "n.",
    "meaning": "垄断",
    "id": 814
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "stockholder",
    "phonetic": "",
    "pos": "n.",
    "meaning": "股票持有人；股东",
    "id": 815
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "stock",
    "phonetic": "stɑk",
    "pos": "v.",
    "meaning": "储备；adj. 常用的， 常备的；n. 原料，库存品；股本，公债；世系，血统；汤汁；家畜，牲畜",
    "id": 816
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "stack",
    "phonetic": "stæk",
    "pos": "n.",
    "meaning": "堆，垛；vt. 堆积， 堆放于",
    "id": 817
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "valuable",
    "phonetic": "ˈvæljuəbəl; ˈvæljə-",
    "pos": "n.",
    "meaning": "贵重物品，财宝",
    "id": 818
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "evaluate",
    "phonetic": "ɪ'væljʊ'et",
    "pos": "v.",
    "meaning": "评价",
    "id": 819
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "wealth",
    "phonetic": "wɛlθ",
    "pos": "n.",
    "meaning": "财富； 财产； 丰富",
    "id": 820
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fund",
    "phonetic": "fʌnd",
    "pos": "n.",
    "meaning": "资金，基金；存款；vt. 为…提供资金",
    "id": 821
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "refund",
    "phonetic": "ˈrifʌnd",
    "pos": "n.",
    "meaning": "退款；vt. 退还",
    "id": 822
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "grave",
    "phonetic": "ɡrev",
    "pos": "adj.",
    "meaning": "严重的",
    "id": 823
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "aggravate",
    "phonetic": "'æɡrəvet",
    "pos": "v.",
    "meaning": "加重，加剧",
    "id": 824
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "grant",
    "phonetic": "ɡrænt",
    "pos": "n.",
    "meaning": "拨款",
    "id": 825
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "grind",
    "phonetic": "ɡraɪnd",
    "pos": "v.",
    "meaning": "磨碎，碾碎，把……磨成粉",
    "id": 826
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "grid",
    "phonetic": "ɡrɪd",
    "pos": "n.",
    "meaning": "输电网",
    "id": 827
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "grieve",
    "phonetic": "griv",
    "pos": "vi.",
    "meaning": "感到悲痛，伤心；vt. 使伤心， 为…而伤心",
    "id": 828
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "relieve",
    "phonetic": "rɪ'liv",
    "pos": "v.",
    "meaning": "减轻，缓解",
    "id": 829
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "alleviate",
    "phonetic": "ə'livɪ'et",
    "pos": "v.",
    "meaning": "减轻，缓解",
    "id": 830
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "soar",
    "phonetic": "sɔr",
    "pos": "v.",
    "meaning": "高飞",
    "id": 831
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "stable",
    "phonetic": "'stebl",
    "pos": "adj.",
    "meaning": "稳定的，不变的；沉稳的，持重的；n. 厩， 马厩， 牛棚",
    "id": 832
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "surge",
    "phonetic": "sɝdʒ",
    "pos": "vi.",
    "meaning": "蜂拥而出；洋溢，奔放；汹涌，奔腾；n. 洋溢， 奔放； 急剧上升， 猛增； 浪涛般汹涌奔腾",
    "id": 833
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "surgery",
    "phonetic": "'sɝdʒəri",
    "pos": "n.",
    "meaning": "外科， 外科手术； 手术室",
    "id": 834
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "commerce",
    "phonetic": "'kɑmɝs",
    "pos": "n.",
    "meaning": "商业",
    "id": 835
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "commodity",
    "phonetic": "kə'mɑdəti",
    "pos": "n.",
    "meaning": "商品",
    "id": 836
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "counter",
    "phonetic": "'kaʊntɚ",
    "pos": "adv.",
    "meaning": "相反地；adj. 相反的",
    "id": 837
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "counterpart",
    "phonetic": "'kaʊntɚpɑrt",
    "pos": "n.",
    "meaning": "对等物",
    "id": 838
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "counteract",
    "phonetic": "",
    "pos": "v.",
    "meaning": "抵制；抵消；抵抗",
    "id": 839
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "encounter",
    "phonetic": "ɪn'kaʊntɚ",
    "pos": "v.",
    "meaning": "遭遇",
    "id": 840
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "confront",
    "phonetic": "kən'frʌnt",
    "pos": "v.",
    "meaning": "使面对；使对证",
    "id": 841
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sale",
    "phonetic": "",
    "pos": "n.",
    "meaning": "出售；销售；销售量；特价销售；大减价",
    "id": 842
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "wholesale",
    "phonetic": "",
    "pos": "n.",
    "meaning": "批发adj.大规模的adv.批发地",
    "id": 843
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "retail",
    "phonetic": "'ritel",
    "pos": "n.",
    "meaning": "零售",
    "id": 844
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "entail",
    "phonetic": "ɪn'tel",
    "pos": "v.",
    "meaning": "使需要，使必须",
    "id": 845
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "scarce",
    "phonetic": "skɛrs",
    "pos": "adj.",
    "meaning": "缺乏的， 不足的； 稀少的， 罕见的",
    "id": 846
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "scarcity",
    "phonetic": "'skɛrsəti",
    "pos": "n.",
    "meaning": "缺乏",
    "id": 847
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "quality",
    "phonetic": "'kwɑləti",
    "pos": "n.",
    "meaning": "品质",
    "id": 848
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "quantity",
    "phonetic": "'kwɑntəti",
    "pos": "n.",
    "meaning": "数量",
    "id": 849
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "transact",
    "phonetic": "",
    "pos": "v.",
    "meaning": "（与人或组织）做业务，做交易",
    "id": 850
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "transit",
    "phonetic": "'træzɪt",
    "pos": "n.",
    "meaning": "运输， 载运",
    "id": 851
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "transform",
    "phonetic": "træns'fɔrm",
    "pos": "v.",
    "meaning": "转变",
    "id": 852
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "transplant",
    "phonetic": "træns'plænt",
    "pos": "v.",
    "meaning": "移植（器官、皮肤等）；移植，移种（植物）",
    "id": 853
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "transfer",
    "phonetic": "træns'fɝ",
    "pos": "v.",
    "meaning": "搬， 转移； 调动， 转学； 转让， 过户； 乘车， 转乘",
    "id": 854
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "transient",
    "phonetic": "ˈtrænʃnt; trænʃənt",
    "pos": "adj.",
    "meaning": "短暂的， 转瞬即逝的； 临时的， 暂住的",
    "id": 855
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "transparent",
    "phonetic": "træns'pærənt",
    "pos": "adj.",
    "meaning": "透明的；易识破的",
    "id": 856
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "opaque",
    "phonetic": "o'pek",
    "pos": "adj.",
    "meaning": "不透明的",
    "id": 857
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "consume",
    "phonetic": "kənˈsum",
    "pos": "vi.",
    "meaning": "消灭， 毁灭；vt. 消费；吃完，喝光",
    "id": 858
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "consumption",
    "phonetic": "kən'sʌmpʃən",
    "pos": "n.",
    "meaning": "消费, 消耗",
    "id": 859
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "resume",
    "phonetic": "",
    "pos": "n.",
    "meaning": "简历",
    "id": 860
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "presume",
    "phonetic": "prɪ'zum",
    "pos": "v.",
    "meaning": "假定，假设，揣测",
    "id": 861
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "presumably",
    "phonetic": "prɪ'zuməbli",
    "pos": "adv.",
    "meaning": "推测起来，大概",
    "id": 862
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "hypothesis",
    "phonetic": "haɪ'pɑθəsɪs",
    "pos": "n.",
    "meaning": "假设，假说",
    "id": 863
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "assume",
    "phonetic": "ə'sum",
    "pos": "v.",
    "meaning": "假定，认为",
    "id": 864
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "accustom",
    "phonetic": "ə'kʌstəm",
    "pos": "v.",
    "meaning": "使习惯",
    "id": 865
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "client",
    "phonetic": "'klaɪənt",
    "pos": "n.",
    "meaning": "顾客；诉讼委托人",
    "id": 866
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "assure",
    "phonetic": "ə'ʃʊr",
    "pos": "vt.",
    "meaning": "使确信； 确保， 向…保证",
    "id": 867
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reassure",
    "phonetic": ",riə'ʃʊr",
    "pos": "vt.",
    "meaning": "使放心",
    "id": 868
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ensure",
    "phonetic": "ɪn'ʃʊr",
    "pos": "v.",
    "meaning": "确保",
    "id": 869
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "guarantee",
    "phonetic": ",ɡærən'ti",
    "pos": "v.",
    "meaning": "保证",
    "id": 870
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "approve",
    "phonetic": "ə'prʊv",
    "pos": "v.",
    "meaning": "赞同",
    "id": 871
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "absolute",
    "phonetic": "'æbsəlut",
    "pos": "adj.",
    "meaning": "绝对的；纯粹的",
    "id": 872
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "appropriate",
    "phonetic": "əˈpropriɪt",
    "pos": "adj.",
    "meaning": "适当的",
    "id": 873
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "approximate",
    "phonetic": "ə'prɑksɪmət",
    "pos": "adj.",
    "meaning": "近似的；v. 近似",
    "id": 874
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "proximity",
    "phonetic": "prɑk'sɪməti",
    "pos": "n.",
    "meaning": "接近， 邻近",
    "id": 875
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "rough",
    "phonetic": "rʌf",
    "pos": "adj.",
    "meaning": "表面不平的；粗略的",
    "id": 876
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tough",
    "phonetic": "tʌf",
    "pos": "adj.",
    "meaning": "困难的，粗暴的",
    "id": 877
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "radiate",
    "phonetic": "'redɪet",
    "pos": "v.",
    "meaning": "发出， 辐射； 流露， 显示",
    "id": 878
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "radiant",
    "phonetic": "'redɪənt",
    "pos": "adj.",
    "meaning": "容光焕发的；灿烂的",
    "id": 879
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "eradicate",
    "phonetic": "ɪ'rædɪket",
    "pos": "v.",
    "meaning": "根除",
    "id": 880
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "snap",
    "phonetic": "snæp",
    "pos": "v.",
    "meaning": "猛咬；突然折断",
    "id": 881
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "snapshot",
    "phonetic": "",
    "pos": "n.",
    "meaning": "快照；简短的描述",
    "id": 882
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "spark",
    "phonetic": "spɑrk",
    "pos": "n.",
    "meaning": "火花",
    "id": 883
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sparkle",
    "phonetic": "'spɑrkl",
    "pos": "vi.",
    "meaning": "发光，闪耀，闪烁；活跃，焕发；n. 闪光， 闪耀， 闪烁； 活力， 生气",
    "id": 884
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "blush",
    "phonetic": "blʌʃ",
    "pos": "v.",
    "meaning": "脸红，害臊；n. 脸红",
    "id": 885
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "flush",
    "phonetic": "flʌʃ",
    "pos": "n.",
    "meaning": "脸红；一阵强烈情感；（流露出的）一阵激情",
    "id": 886
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "splash",
    "phonetic": "splæʃ",
    "pos": "v.",
    "meaning": "溅泼；泼水；n. 溅泼声",
    "id": 887
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "resemble",
    "phonetic": "rɪ'zɛmbl",
    "pos": "v.",
    "meaning": "像，相似",
    "id": 888
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "assemble",
    "phonetic": "ə'sɛmbl",
    "pos": "v.",
    "meaning": "收集，组装",
    "id": 889
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "appeal",
    "phonetic": "ə'pil",
    "pos": "n.",
    "meaning": "请求，呼吁, 上诉",
    "id": 890
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "console",
    "phonetic": "'kɑnsol",
    "pos": "v.",
    "meaning": "安慰",
    "id": 891
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "appease",
    "phonetic": "ə'piz",
    "pos": "vt.",
    "meaning": "平息， 抚慰； 姑息",
    "id": 892
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "absorb",
    "phonetic": "æbˈsɔrb; æbˈzɔrb; əbˈsɔrb",
    "pos": "vt.",
    "meaning": "吸收； 吸引…的注意， 使全神贯注； 把…并入， 同化",
    "id": 893
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "absurd",
    "phonetic": "əbˈsɚd, -ˈzɚd",
    "pos": "adj.",
    "meaning": "不合理的，荒唐的",
    "id": 894
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "assist",
    "phonetic": "ə'sɪst",
    "pos": "v.",
    "meaning": "援助，帮助；搀扶",
    "id": 895
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "persist",
    "phonetic": "pɚ'sɪst",
    "pos": "v.",
    "meaning": "持续，存留",
    "id": 896
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "consist",
    "phonetic": "kən'sɪst",
    "pos": "vi.",
    "meaning": "由…组成； 在于； 一致",
    "id": 897
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "resist",
    "phonetic": "rɪ'zɪst",
    "pos": "v.",
    "meaning": "抵制",
    "id": 898
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "consistent",
    "phonetic": "kən'sɪstənt",
    "pos": "adj.",
    "meaning": "一致的",
    "id": 899
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "consistency",
    "phonetic": "",
    "pos": "n.",
    "meaning": "一致性；连贯性；粘稠度",
    "id": 900
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "subsist",
    "phonetic": "",
    "pos": "v.",
    "meaning": "（尤指靠有限的食物或钱）维持生活,度日；存在,有效",
    "id": 901
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "transistor",
    "phonetic": "træn'zɪstɚ",
    "pos": "n.",
    "meaning": "晶体管， 晶体管收音机",
    "id": 902
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "assign",
    "phonetic": "ə'saɪn",
    "pos": "vt.",
    "meaning": "指派， 分配； 布置； 指定",
    "id": 903
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "resign",
    "phonetic": "rɪ'zaɪn",
    "pos": "v.",
    "meaning": "辞职",
    "id": 904
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "appoint",
    "phonetic": "ə'pɔɪnt",
    "pos": "v.",
    "meaning": "任命",
    "id": 905
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "praise",
    "phonetic": "prez",
    "pos": "v.",
    "meaning": "赞扬，赞美",
    "id": 906
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "appraise",
    "phonetic": "",
    "pos": "v.",
    "meaning": "估量；估价；（对某人的工作）做出评价",
    "id": 907
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prize",
    "phonetic": "praɪz",
    "pos": "n.",
    "meaning": "奖赏，奖金；v. 珍视",
    "id": 908
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "award",
    "phonetic": "ə'wɔrd",
    "pos": "n.",
    "meaning": "奖，奖品；判定；vt. 授予， 给予； 判给， 裁定",
    "id": 909
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reward",
    "phonetic": "rɪ'wɔrd",
    "pos": "n.",
    "meaning": "报答，奖赏；报酬，酬金；vt. 报答， 酬谢， 奖励",
    "id": 910
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "applaud",
    "phonetic": "ə'plɔd",
    "pos": "v.",
    "meaning": "鼓掌；喝彩",
    "id": 911
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "abuse",
    "phonetic": "ə'bjus",
    "pos": "n.",
    "meaning": "虐待；v. 滥用",
    "id": 912
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "abolish",
    "phonetic": "ə'bɑlɪʃ",
    "pos": "v.",
    "meaning": "废除，取消",
    "id": 913
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "appreciate",
    "phonetic": "ə'priʃɪet",
    "pos": "v.",
    "meaning": "感激，欣赏",
    "id": 914
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "accelerate",
    "phonetic": "əkˈsɛləˌret",
    "pos": "v.",
    "meaning": "加速",
    "id": 915
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "alter",
    "phonetic": "'ɔltɚ",
    "pos": "vt.",
    "meaning": "改变， 变更， 变动",
    "id": 916
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "alternate",
    "phonetic": "'ɔltɚnət",
    "pos": "v.",
    "meaning": "使交替；adj. 交替的",
    "id": 917
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "approach",
    "phonetic": "ə'protʃ",
    "pos": "n.",
    "meaning": "方法",
    "id": 918
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "attach",
    "phonetic": "ə'tætʃ",
    "pos": "vt.",
    "meaning": "缚， 系， 贴， 附加； 使依恋， 使喜爱； 使附属； 认为有",
    "id": 919
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "detach",
    "phonetic": "dɪ'tætʃ",
    "pos": "v.",
    "meaning": "分开；派遣（军队）",
    "id": 920
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sticky",
    "phonetic": "'stɪki",
    "pos": "adj.",
    "meaning": "黏性的， 胶粘的； 湿热的",
    "id": 921
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "contact",
    "phonetic": "'kɑntækt",
    "pos": "n.",
    "meaning": "接触，联系，交往；vt. 与…接触， 与…取得联系",
    "id": 922
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "abide",
    "phonetic": "ə'baɪd",
    "pos": "v.",
    "meaning": "忍受；遵守",
    "id": 923
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "adhere",
    "phonetic": "əd'hɪr",
    "pos": "v.",
    "meaning": "粘附；追随；坚持",
    "id": 924
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "cling",
    "phonetic": "klɪŋ",
    "pos": "v.",
    "meaning": "粘住；依附；坚持",
    "id": 925
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "affix",
    "phonetic": "",
    "pos": "n.",
    "meaning": "词缀v.粘上；贴上；附上",
    "id": 926
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "accommodate",
    "phonetic": "ə'kɑmədet",
    "pos": "v.",
    "meaning": "适应，容纳",
    "id": 927
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "amend",
    "phonetic": "ə'mɛnd",
    "pos": "v.",
    "meaning": "修订",
    "id": 928
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "recommend",
    "phonetic": "'rɛkə'mɛnd",
    "pos": "v.",
    "meaning": "推荐",
    "id": 929
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "commend",
    "phonetic": "kə'mɛnd",
    "pos": "v.",
    "meaning": "称赞，表扬；推荐",
    "id": 930
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "exhaust",
    "phonetic": "ɪɡ'zɔst",
    "pos": "vt.",
    "meaning": "使筋疲力尽，用尽；详尽论述；n. 排气装置； 废气",
    "id": 931
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "exhausting",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "令人疲惫不堪的",
    "id": 932
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "weary",
    "phonetic": "'wɪri",
    "pos": "vi.",
    "meaning": "厌烦， 不耐烦；adj. 疲劳的，疲倦的；使人疲劳的，令人厌倦的",
    "id": 933
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fatigue",
    "phonetic": "fə'tig",
    "pos": "n.",
    "meaning": "疲惫",
    "id": 934
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "obese",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "肥胖的；过度肥胖的",
    "id": 935
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "adopt",
    "phonetic": "ə'dɑpt",
    "pos": "v.",
    "meaning": "采纳",
    "id": 936
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "adapt",
    "phonetic": "ə'dæpt",
    "pos": "vt.",
    "meaning": "使适应； 改编",
    "id": 937
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "accomplish",
    "phonetic": "ə'kɑmplɪʃ",
    "pos": "v.",
    "meaning": "实现",
    "id": 938
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "achieve",
    "phonetic": "ə'tʃiv",
    "pos": "v.",
    "meaning": "达到，实现",
    "id": 939
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fulfill",
    "phonetic": "",
    "pos": "v.",
    "meaning": "实现",
    "id": 940
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tend",
    "phonetic": "tɛnd",
    "pos": "v.",
    "meaning": "照管，照料，护理",
    "id": 941
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "attend",
    "phonetic": "ə'tɛnd",
    "pos": "v.",
    "meaning": "出席；照顾，护理",
    "id": 942
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "attendant",
    "phonetic": "ə'tɛndənt",
    "pos": "n.",
    "meaning": "服务人员",
    "id": 943
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "contend",
    "phonetic": "kən'tɛnd",
    "pos": "v.",
    "meaning": "竞争；坚决主张",
    "id": 944
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "contention",
    "phonetic": "kən'tɛnʃən",
    "pos": "n.",
    "meaning": "争论",
    "id": 945
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intend",
    "phonetic": "ɪn'tɛnd",
    "pos": "v.",
    "meaning": "打算",
    "id": 946
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intent",
    "phonetic": "ɪn'tɛnt",
    "pos": "adj.",
    "meaning": "目不转睛的，热切的",
    "id": 947
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intention",
    "phonetic": "ɪn'tɛnʃən",
    "pos": "n.",
    "meaning": "打算，意图",
    "id": 948
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "extend",
    "phonetic": "ɪk'stɛnd",
    "pos": "v.",
    "meaning": "延伸；延期",
    "id": 949
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "extensive",
    "phonetic": "ɪk'stɛnsɪv",
    "pos": "adj.",
    "meaning": "广阔的； 广泛的",
    "id": 950
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "extent",
    "phonetic": "ɪk'stɛnt",
    "pos": "n.",
    "meaning": "程度",
    "id": 951
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "deliberate",
    "phonetic": "dɪ'lɪbərət",
    "pos": "adj.",
    "meaning": "故意的",
    "id": 952
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "advocate",
    "phonetic": "ˈædvəkeɪt；-et",
    "pos": "v.",
    "meaning": "拥护；n. 辩护律师",
    "id": 953
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "accuse",
    "phonetic": "ə'kjuz",
    "pos": "v.",
    "meaning": "指控",
    "id": 954
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "blame",
    "phonetic": "blem",
    "pos": "v.",
    "meaning": "谴责",
    "id": 955
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "acquire",
    "phonetic": "ə'kwaɪr",
    "pos": "vt.",
    "meaning": "取得， 获得； 学到",
    "id": 956
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "acquisition",
    "phonetic": ",ækwɪ'zɪʃən",
    "pos": "n.",
    "meaning": "取得， 获得， 习得； 获得物， 增添的人",
    "id": 957
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "require",
    "phonetic": "rɪ'kwaɪr",
    "pos": "v.",
    "meaning": "要求，命令",
    "id": 958
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "requirement",
    "phonetic": "rɪ'kwaɪɚmənt",
    "pos": "n.",
    "meaning": "需要；要求",
    "id": 959
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inquire",
    "phonetic": "ɪn'kwaɪr",
    "pos": "v.",
    "meaning": "询问",
    "id": 960
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "afford",
    "phonetic": "ə'fɔrd",
    "pos": "vt.",
    "meaning": "担负得起； 提供",
    "id": 961
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ascertain",
    "phonetic": "'æsɚ'ten",
    "pos": "vt.",
    "meaning": "查明，确定，弄清",
    "id": 962
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "certify",
    "phonetic": "'sɝtə'fai",
    "pos": "v.",
    "meaning": "保证，证明",
    "id": 963
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "certificate",
    "phonetic": "sɚˈtɪfɪkɪt; (for v.,) sɚˈtɪfɪˌket",
    "pos": "n.",
    "meaning": "证书，证件，执照",
    "id": 964
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "boost",
    "phonetic": "bʊst",
    "pos": "v.",
    "meaning": "提高",
    "id": 965
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "booster",
    "phonetic": "",
    "pos": "n.",
    "meaning": "（尤指政治上的）支持者，拥护者；助推器",
    "id": 966
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "boast",
    "phonetic": "bost",
    "pos": "v.",
    "meaning": "自夸",
    "id": 967
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "compete",
    "phonetic": "kəm'pit",
    "pos": "vi.",
    "meaning": "比赛， 竞争， 对抗",
    "id": 968
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "competition",
    "phonetic": ",kɑmpə'tɪʃən",
    "pos": "n.",
    "meaning": "比赛； 竞争",
    "id": 969
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "competitive",
    "phonetic": "kəm'pɛtətɪv",
    "pos": "adj.",
    "meaning": "竞争的，比赛的",
    "id": 970
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "competent",
    "phonetic": "'kɑmpɪtənt",
    "pos": "adj.",
    "meaning": "能胜任的，有能力的",
    "id": 971
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "competence",
    "phonetic": "'kɑmpɪtəns",
    "pos": "n.",
    "meaning": "能力",
    "id": 972
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "compile",
    "phonetic": "kəm'paɪl",
    "pos": "vt.",
    "meaning": "汇编； 编制， 编纂",
    "id": 973
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pile",
    "phonetic": "paɪl",
    "pos": "n.",
    "meaning": "堆；v. 堆叠，累积",
    "id": 974
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "file",
    "phonetic": "faɪl",
    "pos": "n.",
    "meaning": "档案；v. 把…归档",
    "id": 975
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "celebrate",
    "phonetic": "'sɛlɪbret",
    "pos": "v.",
    "meaning": "庆祝；歌颂，赞美",
    "id": 976
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "celebrity",
    "phonetic": "sə'lɛbrəti",
    "pos": "n.",
    "meaning": "名人，名流；著名，名声，名望",
    "id": 977
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "comply",
    "phonetic": "kəm'plaɪ",
    "pos": "v.",
    "meaning": "应允，遵照，照做",
    "id": 978
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "commemorate",
    "phonetic": "kə'mɛməret",
    "pos": "vt.",
    "meaning": "纪念， 庆祝",
    "id": 979
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "memory",
    "phonetic": "'mɛməri",
    "pos": "n.",
    "meaning": "记忆；回忆；存储",
    "id": 980
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "memorial",
    "phonetic": "mə'morɪəl",
    "pos": "adj.",
    "meaning": "纪念的；记忆的",
    "id": 981
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "memo",
    "phonetic": "'mɛmo",
    "pos": "n.",
    "meaning": "备忘录",
    "id": 982
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "recall",
    "phonetic": "'rikɔl",
    "pos": "v.",
    "meaning": "回忆起，想起",
    "id": 983
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "coordinate",
    "phonetic": "ko'ɔrdɪnet",
    "pos": "adj.",
    "meaning": "同等的",
    "id": 984
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "subordinate",
    "phonetic": "səˈbɔːdɪnɪt (for n. &adj.) ; səˈbɔːdɪˌnet (for v.)",
    "pos": "adj.",
    "meaning": "次要的，从属的",
    "id": 985
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "assault",
    "phonetic": "ə'sɔlt",
    "pos": "n.",
    "meaning": "攻击",
    "id": 986
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "consult",
    "phonetic": "kən'sʌlt",
    "pos": "v.",
    "meaning": "咨询",
    "id": 987
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "consultant",
    "phonetic": "kən'sʌltənt",
    "pos": "n.",
    "meaning": "顾问； 会诊医师， 专科医生",
    "id": 988
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "counsel",
    "phonetic": "'kaʊnsl",
    "pos": "v.",
    "meaning": "建议，忠告",
    "id": 989
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "condolence",
    "phonetic": "",
    "pos": "n.",
    "meaning": "吊唁；慰问",
    "id": 990
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "convention",
    "phonetic": "kən'vɛnʃən",
    "pos": "n.",
    "meaning": "公约，（换俘等）协定",
    "id": 991
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "convene",
    "phonetic": "kən'vin",
    "pos": "vi.",
    "meaning": "开会，集合；vt. 召集",
    "id": 992
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "observe",
    "phonetic": "əb'zɝv",
    "pos": "v.",
    "meaning": "说，评述，评论",
    "id": 993
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "observation",
    "phonetic": ",ɑbzɚ'veʃən",
    "pos": "n.",
    "meaning": "意见，短评，按语",
    "id": 994
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "conserve",
    "phonetic": "kən'sɝv",
    "pos": "v.",
    "meaning": "保留，保护",
    "id": 995
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "conservative",
    "phonetic": "kən'sɝvətɪv",
    "pos": "adj.",
    "meaning": "保守的",
    "id": 996
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "deserve",
    "phonetic": "dɪ'zɝv",
    "pos": "v.",
    "meaning": "值得",
    "id": 997
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "preserve",
    "phonetic": "prɪ'zɝv",
    "pos": "v.",
    "meaning": "保存，保护",
    "id": 998
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reserve",
    "phonetic": "rɪ'zɝv",
    "pos": "n.",
    "meaning": "缄默，自我克制",
    "id": 999
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "servant",
    "phonetic": "'sɝvənt",
    "pos": "n.",
    "meaning": "仆人，佣人；公务员；雇工",
    "id": 1000
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "disservice",
    "phonetic": "dɪs'sɝvɪs",
    "pos": "n.",
    "meaning": "帮倒忙，危害",
    "id": 1001
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "deploy",
    "phonetic": "",
    "pos": "v.",
    "meaning": "部署，调度（军队或武器）；有效地利用",
    "id": 1002
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "employ",
    "phonetic": "ɪm'plɔɪ",
    "pos": "v.",
    "meaning": "雇用；用；使忙于",
    "id": 1003
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "convey",
    "phonetic": "kən've",
    "pos": "v.",
    "meaning": "传达；传播；转让",
    "id": 1004
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "survey",
    "phonetic": "ˈsɝˌve; (for v.) sɝˈve",
    "pos": "v.",
    "meaning": "俯瞰， 眺望； 全面审视， 调查； 测量， 勘定；n. [sə'veɪ]",
    "id": 1005
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "propel",
    "phonetic": "prə'pɛl",
    "pos": "v.",
    "meaning": "推进，推动",
    "id": 1006
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "enforce",
    "phonetic": "ɪn'fɔrs",
    "pos": "v.",
    "meaning": "强迫，迫使",
    "id": 1007
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "disclose",
    "phonetic": "dɪs'kloz",
    "pos": "vt.",
    "meaning": "揭露， 泄露， 透露",
    "id": 1008
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "enclose",
    "phonetic": "ɪn'kloz",
    "pos": "v.",
    "meaning": "围住，圈起；附上",
    "id": 1009
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "enclosure",
    "phonetic": "ɪn'kloʒɚ",
    "pos": "n.",
    "meaning": "围场，围栏；围绕",
    "id": 1010
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dismiss",
    "phonetic": "dɪs'mɪs",
    "pos": "v.",
    "meaning": "忽视",
    "id": 1011
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dismissal",
    "phonetic": "",
    "pos": "n.",
    "meaning": "解雇；开除；撤职；不予考虑",
    "id": 1012
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dispatch",
    "phonetic": "dɪ'spætʃ",
    "pos": "v.",
    "meaning": "发送，派遣",
    "id": 1013
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "expenditure",
    "phonetic": "ɪk'spɛndɪtʃɚ",
    "pos": "n.",
    "meaning": "费用，花销",
    "id": 1014
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "indispensable",
    "phonetic": "'ɪndɪ'spɛnsəbl",
    "pos": "adj.",
    "meaning": "必不可少的",
    "id": 1015
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "essential",
    "phonetic": "ɪ'sɛnʃl",
    "pos": "adj.",
    "meaning": "本质的，必须的",
    "id": 1016
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fundamental",
    "phonetic": ",fʌndə'mɛntl",
    "pos": "adj.",
    "meaning": "基础的，基本的；n. 基本原则",
    "id": 1017
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "foundation",
    "phonetic": "faʊn'deʃən",
    "pos": "n.",
    "meaning": "基金会",
    "id": 1018
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "crucial",
    "phonetic": "'krʊʃəl",
    "pos": "adj.",
    "meaning": "关键的",
    "id": 1019
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "cardinal",
    "phonetic": "'kɑrdɪnl",
    "pos": "adj.",
    "meaning": "最重要的； 基本的；n. 红衣主教；【数】基数",
    "id": 1020
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "elevate",
    "phonetic": "'ɛlɪvet",
    "pos": "v.",
    "meaning": "提升，举起；使高兴",
    "id": 1021
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "element",
    "phonetic": "'ɛləmənt",
    "pos": "n.",
    "meaning": "成分， 要素， 元素； 基础， 纲要； 自然力",
    "id": 1022
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "factor",
    "phonetic": "'fæktɚ",
    "pos": "n.",
    "meaning": "因素， 因子； 系数",
    "id": 1023
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ingredient",
    "phonetic": "ɪn'ɡridɪənt",
    "pos": "n.",
    "meaning": "配料，成分",
    "id": 1024
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "regarding",
    "phonetic": "rɪ'ɡɑrdɪŋ",
    "pos": "prep.",
    "meaning": "关于",
    "id": 1025
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "regardless",
    "phonetic": "rɪ'ɡɑrdləs",
    "pos": "adj.",
    "meaning": "不管，不顾",
    "id": 1026
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "emigrate",
    "phonetic": "'ɛmɪɡret",
    "pos": "v.",
    "meaning": "永久移居国外",
    "id": 1027
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "migrate",
    "phonetic": "'maɪɡret",
    "pos": "v.",
    "meaning": "移民，迁徙",
    "id": 1028
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "migrant",
    "phonetic": "'maɪɡrənt",
    "pos": "n.",
    "meaning": "移居者， 移民； 候鸟， 迁移动物",
    "id": 1029
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "candidate",
    "phonetic": "ˈkændɪˌdet, -dɪt",
    "pos": "n.",
    "meaning": "候选人， 投考者， 申请求职者",
    "id": 1030
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "estimate",
    "phonetic": "'ɛstə,met",
    "pos": "vt.",
    "meaning": "估计； 评价；n. 估计； 评价； 看法",
    "id": 1031
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "underestimate",
    "phonetic": "/ˌʌndərˈestɪmeɪt/",
    "pos": "v.",
    "meaning": "低估",
    "id": 1032
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "overestimate",
    "phonetic": ",ovər'ɛstɪmət",
    "pos": "v.",
    "meaning": "高估",
    "id": 1033
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intimate",
    "phonetic": "ˈɪntəmɪt",
    "pos": "adj.",
    "meaning": "亲密的",
    "id": 1034
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "enact",
    "phonetic": "",
    "pos": "v.",
    "meaning": "通过（法律）扮演；演出",
    "id": 1035
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "flap",
    "phonetic": "flæp",
    "pos": "v.",
    "meaning": "拍打；n. 拍打，拍动",
    "id": 1036
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "flip",
    "phonetic": "flɪp",
    "pos": "adj.",
    "meaning": "〈口〉无理的， 轻率的， 轻浮的；vt. 快速翻动，转动；n. 捻掷，轻抛；轻拍",
    "id": 1037
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "grip",
    "phonetic": "ɡrɪp",
    "pos": "n.",
    "meaning": "抓住",
    "id": 1038
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "grope",
    "phonetic": "ɡrop",
    "pos": "v.",
    "meaning": "（暗中）摸索，探索",
    "id": 1039
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "groan",
    "phonetic": "ɡron",
    "pos": "vi.",
    "meaning": "呻吟，抱怨；发出呻吟般的声音；n. 呻吟， 抱怨； 呻吟般的声音",
    "id": 1040
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "moan",
    "phonetic": "mon",
    "pos": "vi.",
    "meaning": "呻吟，呜咽；抱怨，发牢骚；vt. 抱怨；n. 呻吟声， 呜咽声； 怨声， 牢骚",
    "id": 1041
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "grasp",
    "phonetic": "ɡræsp",
    "pos": "v.",
    "meaning": "抓住，理解",
    "id": 1042
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fabricate",
    "phonetic": "'fæbrɪket",
    "pos": "v.",
    "meaning": "捏造；制作",
    "id": 1043
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "lubricate",
    "phonetic": "'lubrɪket",
    "pos": "v.",
    "meaning": "使润滑，加润滑油",
    "id": 1044
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "execute",
    "phonetic": "'ɛksɪkjut",
    "pos": "vt.",
    "meaning": "将…处死； 实施",
    "id": 1045
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "executive",
    "phonetic": "ɪɡ'zɛkjətɪv",
    "pos": "n.",
    "meaning": "执行官",
    "id": 1046
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "hack",
    "phonetic": "hæk",
    "pos": "v.",
    "meaning": "黑客攻击",
    "id": 1047
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "feat",
    "phonetic": "fit",
    "pos": "n.",
    "meaning": "功绩，壮举；技艺表演；adj. 合适的；灵巧的",
    "id": 1048
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "defeat",
    "phonetic": "dɪ'fit",
    "pos": "",
    "meaning": "n&vt. 战胜， 挫败",
    "id": 1049
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "glance",
    "phonetic": "ɡlæns",
    "pos": "vi.",
    "meaning": "看一下；n. 一瞥",
    "id": 1050
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "glitter",
    "phonetic": "'ɡlɪtɚ",
    "pos": "vi.",
    "meaning": "闪闪发光，闪耀；n. 闪光， 灿烂的光辉； 耀眼， 辉煌",
    "id": 1051
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "glorious",
    "phonetic": "'ɡlɔriəs; 'ɡloriəs",
    "pos": "adj.",
    "meaning": "辉煌的",
    "id": 1052
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "gaze",
    "phonetic": "ɡeɪz",
    "pos": "",
    "meaning": "n&vi. 凝视， 盯， 注视",
    "id": 1053
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "glare",
    "phonetic": "ɡlɛr",
    "pos": "vi.",
    "meaning": "怒目而视；发射强光，发出刺眼的光线；n. 强光； 怒视， 瞪眼； 炫耀， 张扬",
    "id": 1054
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "glimpse",
    "phonetic": "ɡlɪmps",
    "pos": "v.",
    "meaning": "瞥见；n. 一瞥，一看",
    "id": 1055
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "stare",
    "phonetic": "stɛr",
    "pos": "",
    "meaning": "n&vi. 盯， 凝视",
    "id": 1056
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dazzle",
    "phonetic": "'dæzl",
    "pos": "v.",
    "meaning": "使目眩；使倾倒",
    "id": 1057
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "contemplate",
    "phonetic": "'kɑntəmplet",
    "pos": "vt.",
    "meaning": "盘算， 计议； 思量， 对…周密考虑； 注视， 凝视",
    "id": 1058
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "plate",
    "phonetic": "pleɪt",
    "pos": "n.",
    "meaning": "板，片，盘；v. 电镀",
    "id": 1059
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "foster",
    "phonetic": "'fɔstɚ",
    "pos": "v.",
    "meaning": "促进；培养",
    "id": 1060
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "grab",
    "phonetic": "ɡræb",
    "pos": "v.",
    "meaning": "攫取，抓取",
    "id": 1061
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "interview",
    "phonetic": "'ɪntɚvju",
    "pos": "v.",
    "meaning": "接见，会见，会谈",
    "id": 1062
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intervene",
    "phonetic": ",ɪntɚ'vin",
    "pos": "v.",
    "meaning": "干涉",
    "id": 1063
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "interfere",
    "phonetic": ",ɪntɚ'fɪr",
    "pos": "adj.",
    "meaning": "干涉，妨碍",
    "id": 1064
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "highlight",
    "phonetic": "'haɪlaɪt",
    "pos": "vt.",
    "meaning": "强调，突出，使显著；n. 最精彩的部分， 最重要的事件",
    "id": 1065
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "investigate",
    "phonetic": "ɪn'vɛstɪɡet",
    "pos": "v.",
    "meaning": "调查， 研究",
    "id": 1066
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "investigator",
    "phonetic": "",
    "pos": "n.",
    "meaning": "调查者；侦查员",
    "id": 1067
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "delegate",
    "phonetic": "ˈdɛləgɪt; (for v.,) ˈdɛləˌgeɪt",
    "pos": "n.",
    "meaning": "代表，委员，特派员",
    "id": 1068
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "threshold",
    "phonetic": "'θrɛʃhold",
    "pos": "n.",
    "meaning": "门槛",
    "id": 1069
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "justify",
    "phonetic": "'dʒʌstə'fai",
    "pos": "vt.",
    "meaning": "证明…是正当的",
    "id": 1070
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "rectify",
    "phonetic": "'rɛktɪfaɪ",
    "pos": "v.",
    "meaning": "纠正；调整",
    "id": 1071
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "modify",
    "phonetic": "'mɑdɪfaɪ",
    "pos": "v.",
    "meaning": "改变",
    "id": 1072
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "verify",
    "phonetic": "'vɛrɪfaɪ",
    "pos": "vt.",
    "meaning": "证实， 查证， 证明",
    "id": 1073
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "persuade",
    "phonetic": "pɚ'swed",
    "pos": "v.",
    "meaning": "说服",
    "id": 1074
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "monitor",
    "phonetic": "'mɔnɪtɚ",
    "pos": "n.",
    "meaning": "班长；监视器，检测器；显示器；vt. 监听， 检测",
    "id": 1075
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "nominate",
    "phonetic": "'nɑmɪnet",
    "pos": "v.",
    "meaning": "提名",
    "id": 1076
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "nominal",
    "phonetic": "'nɑmɪnl",
    "pos": "adj.",
    "meaning": "名义上的， 有名无实的； 很少的， 象征性的； 名词性的",
    "id": 1077
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "postpone",
    "phonetic": "po'spon",
    "pos": "v.",
    "meaning": "延迟，推迟，延缓",
    "id": 1078
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "scrape",
    "phonetic": "skrep",
    "pos": "v.",
    "meaning": "刮，擦；勉强过日子；n. 刮， 擦； 刮擦声",
    "id": 1079
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "scrap",
    "phonetic": "skræp",
    "pos": "n.",
    "meaning": "碎片；废料；v. 废弃",
    "id": 1080
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "scratch",
    "phonetic": "skrætʃ",
    "pos": "n.",
    "meaning": "（某人皮肤上的）划痕，划伤",
    "id": 1081
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "democratic",
    "phonetic": "'dɛmə'krætɪk",
    "pos": "adj.",
    "meaning": "民主的",
    "id": 1082
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "category",
    "phonetic": "'kætəɡɔri",
    "pos": "n.",
    "meaning": "种类",
    "id": 1083
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "catalogue",
    "phonetic": "'kætəlɔɡ",
    "pos": "v.",
    "meaning": "为…编目录",
    "id": 1084
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "appetite",
    "phonetic": "'æpɪtaɪt",
    "pos": "n.",
    "meaning": "欲望, 胃口",
    "id": 1085
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "petition",
    "phonetic": "pə'tɪʃən",
    "pos": "n.",
    "meaning": "请愿；v. 向…请愿",
    "id": 1086
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "centralize",
    "phonetic": "",
    "pos": "v.",
    "meaning": "集权控制；实行集中",
    "id": 1087
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "preside",
    "phonetic": "prɪ'zaɪd",
    "pos": "v.",
    "meaning": "主持；主奏",
    "id": 1088
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reside",
    "phonetic": "rɪ'zaɪd",
    "pos": "v.",
    "meaning": "居住，驻扎；属于",
    "id": 1089
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "residential",
    "phonetic": ",rɛzɪ'dɛnʃl",
    "pos": "adj.",
    "meaning": "居住的， 住宅的； 寄宿的， 住在住所的",
    "id": 1090
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "residence",
    "phonetic": "'rɛzɪdəns",
    "pos": "n.",
    "meaning": "居住；驻扎；住处",
    "id": 1091
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dwell",
    "phonetic": "dwɛl",
    "pos": "v.",
    "meaning": "居住；凝思，细想",
    "id": 1092
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dwelling",
    "phonetic": "'dwɛlɪŋ",
    "pos": "n.",
    "meaning": "住处，寓所",
    "id": 1093
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "punch",
    "phonetic": "",
    "pos": "v.",
    "meaning": "打孔；n. 冲压机",
    "id": 1094
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "quest",
    "phonetic": "kwɛst",
    "pos": "v.",
    "meaning": "寻找，追求",
    "id": 1095
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "request",
    "phonetic": "rɪ'kwɛst",
    "pos": "n.",
    "meaning": "要求",
    "id": 1096
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "questionnaire",
    "phonetic": "ˌkwɛstʃənˈɛr",
    "pos": "n.",
    "meaning": "调查表，征求意见表",
    "id": 1097
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prerequisite",
    "phonetic": "",
    "pos": "n.",
    "meaning": "先决条件",
    "id": 1098
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "retrieve",
    "phonetic": "rɪ'triv",
    "pos": "vi.",
    "meaning": "重新得到， 取回， 收回； 挽回， 补救； 检索",
    "id": 1099
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "recur",
    "phonetic": "rɪ'kɝ",
    "pos": "vi.",
    "meaning": "再发生， 重现",
    "id": 1100
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "occur",
    "phonetic": "ə'kɝ",
    "pos": "v.",
    "meaning": "发生",
    "id": 1101
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "incur",
    "phonetic": "ɪn'kɝ",
    "pos": "v.",
    "meaning": "引起，导致",
    "id": 1102
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "simulate",
    "phonetic": "'sɪmjulet",
    "pos": "v.",
    "meaning": "模拟，模仿",
    "id": 1103
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "stimulate",
    "phonetic": "'stɪmjə'let",
    "pos": "v.",
    "meaning": "刺激，激励",
    "id": 1104
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "situation",
    "phonetic": ",sɪtʃu'eʃən",
    "pos": "n.",
    "meaning": "（建筑物等的）位置",
    "id": 1105
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "situate",
    "phonetic": "",
    "pos": "v.",
    "meaning": "使位于……；将……置于",
    "id": 1106
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "snatch",
    "phonetic": "snætʃ",
    "pos": "vi.",
    "meaning": "一把抓住；vt. 夺，夺走，抢走；一下子拉，一把抓住；抓住机会做，抽空做；n. 片断",
    "id": 1107
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "silence",
    "phonetic": "'saɪləns",
    "pos": "n.",
    "meaning": "沉默；v. 使沉默",
    "id": 1108
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "suspend",
    "phonetic": "sə'spɛnd",
    "pos": "v.",
    "meaning": "暂停",
    "id": 1109
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "suspension",
    "phonetic": "sə'spɛnʃən",
    "pos": "n.",
    "meaning": "暂停， 中止； 暂令停止参加， 暂时剥夺； 悬架， 悬置机构； 悬浮液； 悬， 挂， 吊",
    "id": 1110
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pendulum",
    "phonetic": "'pɛndʒələm",
    "pos": "n.",
    "meaning": "（钟等的）摆",
    "id": 1111
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tow",
    "phonetic": "to",
    "pos": "v.",
    "meaning": "拖引，牵引；n. 拖引，牵引",
    "id": 1112
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fold",
    "phonetic": "fold",
    "pos": "vt.",
    "meaning": "折叠，合拢；n. 褶， 折叠的部分",
    "id": 1113
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "unfold",
    "phonetic": "ʌn'fold",
    "pos": "v.",
    "meaning": "展开",
    "id": 1114
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "overload",
    "phonetic": ",ovɚ'lod",
    "pos": "v.",
    "meaning": "使超载",
    "id": 1115
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "overlap",
    "phonetic": "'ovəlæp",
    "pos": "v.",
    "meaning": "重叠",
    "id": 1116
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "loan",
    "phonetic": "lon",
    "pos": "n.",
    "meaning": "贷款",
    "id": 1117
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vanish",
    "phonetic": "'vænɪʃ",
    "pos": "v.",
    "meaning": "消失",
    "id": 1118
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ventilate",
    "phonetic": "'vɛntɪlet",
    "pos": "v.",
    "meaning": "使通风",
    "id": 1119
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "whirl",
    "phonetic": "wɝrl",
    "pos": "vi.",
    "meaning": "旋转，急转；发晕，变混乱；n. 旋转， 回旋； 混乱； 一连串的事",
    "id": 1120
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "crawl",
    "phonetic": "krɔl",
    "pos": "",
    "meaning": "n&v. 爬行， 蠕动； 缓慢行进",
    "id": 1121
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inhabit",
    "phonetic": "ɪn'hæbɪt",
    "pos": "vt.",
    "meaning": "居住于， 栖居于",
    "id": 1122
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inhabitant",
    "phonetic": "ɪn'hæbɪtənt",
    "pos": "n.",
    "meaning": "居民， 住户",
    "id": 1123
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "habitat",
    "phonetic": "'hæbə'tæt",
    "pos": "n.",
    "meaning": "栖息地； 住处",
    "id": 1124
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prey",
    "phonetic": "pre",
    "pos": "n.",
    "meaning": "猎物；v. 捕获",
    "id": 1125
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "agency",
    "phonetic": "'edʒənsi",
    "pos": "n.",
    "meaning": "机构",
    "id": 1126
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "athlete",
    "phonetic": "'æθlit",
    "pos": "n.",
    "meaning": "运动员， 体育家",
    "id": 1127
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "feminine",
    "phonetic": "'fɛmənɪn",
    "pos": "adj.",
    "meaning": "女性的；女子气的",
    "id": 1128
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "idol",
    "phonetic": "",
    "pos": "n.",
    "meaning": "受到热爱和崇拜的人（或物）；偶像",
    "id": 1129
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "holder",
    "phonetic": "'holdɚ",
    "pos": "n.",
    "meaning": "持有人；所有人；固定器；（台、架等）支持物",
    "id": 1130
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "shareholder",
    "phonetic": "'ʃɛrholdɚ",
    "pos": "n.",
    "meaning": "股东",
    "id": 1131
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "humanist",
    "phonetic": "",
    "pos": "n.",
    "meaning": "人文主义者；人文学者",
    "id": 1132
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "jury",
    "phonetic": "'dʒʊri",
    "pos": "n.",
    "meaning": "陪审团",
    "id": 1133
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mayor",
    "phonetic": "'meɚ",
    "pos": "n.",
    "meaning": "市长",
    "id": 1134
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mentor",
    "phonetic": "",
    "pos": "n.",
    "meaning": "导师；顾问；指导者",
    "id": 1135
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "partner",
    "phonetic": "'pɑrtnɚ",
    "pos": "n.",
    "meaning": "伙伴；搭挡；配偶",
    "id": 1136
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "patron",
    "phonetic": "'petrən",
    "pos": "n.",
    "meaning": "庇护人；赞助人",
    "id": 1137
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "patrol",
    "phonetic": "pə'trol",
    "pos": "n.",
    "meaning": "巡逻，巡查",
    "id": 1138
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "cruise",
    "phonetic": "krʊz",
    "pos": "v.",
    "meaning": "巡航，巡航于…",
    "id": 1139
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "knight",
    "phonetic": "naɪt",
    "pos": "n.",
    "meaning": "骑士，武士；爵士",
    "id": 1140
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "master",
    "phonetic": "'mæstɚ",
    "pos": "n.",
    "meaning": "主人；能手；硕士",
    "id": 1141
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "masterpiece",
    "phonetic": "'mæstəpis",
    "pos": "n.",
    "meaning": "杰作",
    "id": 1142
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "lay",
    "phonetic": "le",
    "pos": "v.",
    "meaning": "置放；铺设；设置",
    "id": 1143
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "lay-off",
    "phonetic": "",
    "pos": "n.",
    "meaning": "解雇，裁员",
    "id": 1144
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "layer",
    "phonetic": "'leɪr",
    "pos": "n.",
    "meaning": "层， 层次",
    "id": 1145
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "layman",
    "phonetic": "'lemən",
    "pos": "n.",
    "meaning": "门外汉",
    "id": 1146
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "amateur",
    "phonetic": "ˈæmətər",
    "pos": "adj.",
    "meaning": "业余的；n. 业余爱好者",
    "id": 1147
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "layout",
    "phonetic": "'leaʊt",
    "pos": "n.",
    "meaning": "陈列",
    "id": 1148
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "relay",
    "phonetic": "rɪ'le",
    "pos": "v.",
    "meaning": "接替，转播",
    "id": 1149
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "outline",
    "phonetic": "'aʊtlaɪn",
    "pos": "v.",
    "meaning": "概述，概括",
    "id": 1150
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "linear",
    "phonetic": "'lɪnɪɚ",
    "pos": "adj.",
    "meaning": "线的；长度的",
    "id": 1151
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sponsor",
    "phonetic": "'spɑnsɚ",
    "pos": "v.",
    "meaning": "赞助, 赞助商",
    "id": 1152
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "harness",
    "phonetic": "'hɑrnɪs",
    "pos": "v.",
    "meaning": "管理，控制",
    "id": 1153
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "comment",
    "phonetic": "'kɑmɛnt",
    "pos": "n.",
    "meaning": "评论",
    "id": 1154
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "commentary",
    "phonetic": "'kɑməntɛri",
    "pos": "n.",
    "meaning": "实况报道， 解说词； 评论， 评论文章",
    "id": 1155
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "commentator",
    "phonetic": "'kɑmən'tetɚ",
    "pos": "n.",
    "meaning": "评论员",
    "id": 1156
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "diploma",
    "phonetic": "dɪ'plomə",
    "pos": "n.",
    "meaning": "毕业文凭，学位证书",
    "id": 1157
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "diplomat",
    "phonetic": "'dɪpləmæt",
    "pos": "n.",
    "meaning": "外交官， 外交家； 有交际手腕的人， 圆滑的人",
    "id": 1158
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "editor",
    "phonetic": "'ɛdɪtɚ",
    "pos": "n.",
    "meaning": "编辑，编者，校订者",
    "id": 1159
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "edition",
    "phonetic": "ɪ'dɪʃən",
    "pos": "n.",
    "meaning": "版，版本，版次",
    "id": 1160
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "judge",
    "phonetic": "dʒʌdʒ",
    "pos": "n.",
    "meaning": "法官；裁判员",
    "id": 1161
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "judgment",
    "phonetic": "'dʒʌdʒmənt",
    "pos": "n.",
    "meaning": "审判， 判决；判断力， 识别力； 看法， 意见",
    "id": 1162
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "judicial",
    "phonetic": "dʒʊ'dɪʃəl",
    "pos": "adj.",
    "meaning": "司法的",
    "id": 1163
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "suitable",
    "phonetic": "'sutəbl",
    "pos": "adj.",
    "meaning": "适当的；相配的",
    "id": 1164
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "suit",
    "phonetic": "sut",
    "pos": "v.",
    "meaning": "使配合，彼此协调",
    "id": 1165
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "outfit",
    "phonetic": "'aʊtfɪt",
    "pos": "n.",
    "meaning": "全套服装； 一组人； 全套装备， 全套工具",
    "id": 1166
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "suite",
    "phonetic": "sut; swit",
    "pos": "n.",
    "meaning": "套间； 一套家具； 套， 组， 系列",
    "id": 1167
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "technical",
    "phonetic": "'tɛknɪkl",
    "pos": "adj.",
    "meaning": "技术的",
    "id": 1168
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vacant",
    "phonetic": "'vekənt",
    "pos": "adj.",
    "meaning": "空的， 未被占用的； 空缺的； 茫然的， 空虚的",
    "id": 1169
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "blank",
    "phonetic": "blæŋk",
    "pos": "adj.",
    "meaning": "空白的；茫然的，无表情的；n. 空白； 空白表格",
    "id": 1170
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vacuum",
    "phonetic": "'vækjʊəm",
    "pos": "v.",
    "meaning": "收集； 用真空吸尘器打扫；n. 真空；真空吸尘器",
    "id": 1171
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vacation",
    "phonetic": "veˈkeʃən",
    "pos": "n.",
    "meaning": "假期， 休假",
    "id": 1172
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vocation",
    "phonetic": "vo'keʃən",
    "pos": "n.",
    "meaning": "职业，行业",
    "id": 1173
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "excursion",
    "phonetic": "ɪk'skɝʒn",
    "pos": "n.",
    "meaning": "（尤指集体）远足，短途旅行",
    "id": 1174
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "trek",
    "phonetic": "",
    "pos": "n.",
    "meaning": "长途跋涉，艰难的旅程（尤指在山区）V.徒步旅行，远足",
    "id": 1175
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "wreck",
    "phonetic": "rɛk",
    "pos": "n.",
    "meaning": "失事，残骸；精神或身体已垮的人；vt. 破坏",
    "id": 1176
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "address",
    "phonetic": "ə'drɛs",
    "pos": "v.",
    "meaning": "解决",
    "id": 1177
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tackle",
    "phonetic": "'tækl",
    "pos": "v.",
    "meaning": "解决，处理",
    "id": 1178
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "resolve",
    "phonetic": "rɪ'zɑlv",
    "pos": "v.",
    "meaning": "决定；解决；分解；n. 决心",
    "id": 1179
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "solution",
    "phonetic": "sə'luʃən",
    "pos": "n.",
    "meaning": "解决，溶液",
    "id": 1180
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dissolve",
    "phonetic": "dɪ'zɑlv",
    "pos": "v.",
    "meaning": "解除（婚约等）",
    "id": 1181
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "disperse",
    "phonetic": "dɪ'spɝs",
    "pos": "v.",
    "meaning": "（使）分散；驱散",
    "id": 1182
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "commute",
    "phonetic": "kə'mjʊt",
    "pos": "vi.",
    "meaning": "乘公交车上下班，经常乘车往返于两地；vt. 减； 折合， 折偿； 上下班交通",
    "id": 1183
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "cosmetic",
    "phonetic": "",
    "pos": "",
    "meaning": "化妆品；表面的，装饰性的",
    "id": 1184
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "make-up",
    "phonetic": "",
    "pos": "n.",
    "meaning": "化妆品；组成成分；构成方式；性格；气质",
    "id": 1185
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "edible",
    "phonetic": "'ɛdəbl",
    "pos": "adj.",
    "meaning": "可以吃的， 可食用的",
    "id": 1186
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "nutrition",
    "phonetic": "nu'trɪʃən",
    "pos": "n.",
    "meaning": "营养",
    "id": 1187
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "nurture",
    "phonetic": "'nɝtʃɚ",
    "pos": "",
    "meaning": "n&vt. 养育， 培育， 滋养",
    "id": 1188
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "nourish",
    "phonetic": "'nɜrɪʃ",
    "pos": "v.",
    "meaning": "提供养分，养育",
    "id": 1189
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pasta",
    "phonetic": "",
    "pos": "n.",
    "meaning": "意大利面食；面团",
    "id": 1190
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "recipe",
    "phonetic": "'rɛsəpi",
    "pos": "n.",
    "meaning": "秘方，食谱",
    "id": 1191
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "relish",
    "phonetic": "'rɛlɪʃ",
    "pos": "vt.",
    "meaning": "享受，从…中获得乐趣；n. 享受， 滋味， 乐趣； 调味品",
    "id": 1192
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "scent",
    "phonetic": "sɛnt",
    "pos": "n.",
    "meaning": "味道",
    "id": 1193
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tread",
    "phonetic": "trɛd",
    "pos": "v.",
    "meaning": "踩，踏，践踏",
    "id": 1194
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "wander",
    "phonetic": "'wɑndɚ",
    "pos": "v.",
    "meaning": "漫游；迷路；离题",
    "id": 1195
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "linger",
    "phonetic": "'lɪŋɡɚ",
    "pos": "v.",
    "meaning": "逗留，徘徊",
    "id": 1196
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "stroll",
    "phonetic": "strol",
    "pos": "n.",
    "meaning": "散步，溜达，闲逛",
    "id": 1197
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "roll",
    "phonetic": "rol",
    "pos": "",
    "meaning": "vi&vt. 滚动；转动",
    "id": 1198
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "stumble",
    "phonetic": "'stʌmbl",
    "pos": "vi.",
    "meaning": "绊脚， 绊倒； 跌跌撞撞地走； 结结巴巴",
    "id": 1199
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "stump",
    "phonetic": "stʌmp",
    "pos": "vi.",
    "meaning": "脚步沉重地走；n. 树桩；残根，残余部分；vt. 把…难住，使为难；在…做巡回演说",
    "id": 1200
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "supply",
    "phonetic": "sə'plaɪ",
    "pos": "",
    "meaning": "n&vt. 供给， 供应",
    "id": 1201
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "supplement",
    "phonetic": "'sʌplɪmənt",
    "pos": "n.",
    "meaning": "补角",
    "id": 1202
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "supplementary",
    "phonetic": ",sʌplɪ'mɛntri",
    "pos": "adj.",
    "meaning": "增补的， 补充的",
    "id": 1203
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "complement",
    "phonetic": "ˈkɑːmplɪment",
    "pos": "n.",
    "meaning": "补充",
    "id": 1204
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "implement",
    "phonetic": "'ɪmplɪmɛnt",
    "pos": "n.",
    "meaning": "工具；v. 贯彻",
    "id": 1205
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "terminal",
    "phonetic": "ˈtɜːrmɪnl",
    "pos": "n.",
    "meaning": "计算机终端；线接头",
    "id": 1206
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tie",
    "phonetic": "taɪ",
    "pos": "v.",
    "meaning": "系；约束；打结；与…成平局；n. 领带；平局；鞋带；领结；不分胜负",
    "id": 1207
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "track",
    "phonetic": "træk",
    "pos": "v.",
    "meaning": "追踪；n. 轨迹，踪迹",
    "id": 1208
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inborn",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "天生的；先天的",
    "id": 1209
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "abort",
    "phonetic": "",
    "pos": "v.",
    "meaning": "（使）流产；（使）夭折，中止；放弃",
    "id": 1210
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "suicide",
    "phonetic": "'suɪsaɪd",
    "pos": "n.",
    "meaning": "自杀",
    "id": 1211
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pesticide",
    "phonetic": "",
    "pos": "n.",
    "meaning": "杀虫剂",
    "id": 1212
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tablet",
    "phonetic": "'tæblət",
    "pos": "n.",
    "meaning": "碑；药片；写字板；小块；平板电脑；vt. 用碑牌纪念；将(备忘录等)写在板上；将…制成小片或小块",
    "id": 1213
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vitamin",
    "phonetic": "'vaɪtəmɪn",
    "pos": "n.",
    "meaning": "维他命",
    "id": 1214
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "well-being",
    "phonetic": "",
    "pos": "n.",
    "meaning": "健康；安乐；康乐",
    "id": 1215
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "versus",
    "phonetic": "'vɝsəs",
    "pos": "prep.",
    "meaning": "（比赛等中）对",
    "id": 1216
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "version",
    "phonetic": "'vɝʒn",
    "pos": "n.",
    "meaning": "解释",
    "id": 1217
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "collaborate",
    "phonetic": "kə'læbəret",
    "pos": "v.",
    "meaning": "合作",
    "id": 1218
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "commonplace",
    "phonetic": "'kɑmən'ples",
    "pos": "adj.",
    "meaning": "平凡的；n. 平常话",
    "id": 1219
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "indulge",
    "phonetic": "ɪn'dʌldʒ",
    "pos": "v.",
    "meaning": "放纵",
    "id": 1220
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "obsess",
    "phonetic": "",
    "pos": "v.",
    "meaning": "迷住，缠住；使..…着迷;使困扰",
    "id": 1221
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "addict",
    "phonetic": "'ædɪkt (for n.); əˈdɪkt (for v.)",
    "pos": "v.",
    "meaning": "上瘾，沉溺",
    "id": 1222
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "predict",
    "phonetic": "prɪ'dɪkt",
    "pos": "v.",
    "meaning": "预测",
    "id": 1223
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dictate",
    "phonetic": "'dɪktet",
    "pos": "v.",
    "meaning": "['dIkteIt]；n. 口授； 命令， 规定， 要求",
    "id": 1224
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dictator",
    "phonetic": "'dɪktetɚ",
    "pos": "n.",
    "meaning": "独裁者，专政者",
    "id": 1225
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "contradict",
    "phonetic": "'kɑntrə'dɪkt",
    "pos": "v.",
    "meaning": "反驳，否认",
    "id": 1226
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "contradiction",
    "phonetic": ",kɑntrə'dɪkʃən",
    "pos": "n.",
    "meaning": "矛盾， 不一致； 否认， 反驳",
    "id": 1227
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "contrary",
    "phonetic": "'kɑntrɛri",
    "pos": "adj.",
    "meaning": "相反的",
    "id": 1228
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "deny",
    "phonetic": "dɪ'nai",
    "pos": "v.",
    "meaning": "否认",
    "id": 1229
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "defy",
    "phonetic": "'difaɪ",
    "pos": "v.",
    "meaning": "违背，违抗",
    "id": 1230
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "insulate",
    "phonetic": "ˈɪnsəˌleɪt ; ˈɪnsjʊˌleɪt",
    "pos": "v.",
    "meaning": "使绝缘，使绝热",
    "id": 1231
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reconcile",
    "phonetic": "'rɛkənsaɪl",
    "pos": "v.",
    "meaning": "使和解，使一致；调解",
    "id": 1232
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "private",
    "phonetic": "'praɪvət",
    "pos": "adj.",
    "meaning": "私人的",
    "id": 1233
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "regard",
    "phonetic": "rɪ'ɡɑrd",
    "pos": "v.",
    "meaning": "把…看作；尊敬",
    "id": 1234
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "disregard",
    "phonetic": ",dɪsrɪ'ɡɑrd",
    "pos": "v.",
    "meaning": "不管，不顾；n. 忽视",
    "id": 1235
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "renown",
    "phonetic": "",
    "pos": "n.",
    "meaning": "名誉；声望",
    "id": 1236
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "unanimous",
    "phonetic": "jʊ'nænəməs",
    "pos": "adj.",
    "meaning": "（全体）一致的",
    "id": 1237
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "patriotic",
    "phonetic": "ˈpeɪtriˈɑtɪk",
    "pos": "adj.",
    "meaning": "爱国的",
    "id": 1238
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "radical",
    "phonetic": "'rædɪkl",
    "pos": "adj.",
    "meaning": "基本的；激进的",
    "id": 1239
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "repel",
    "phonetic": "rɪ'pɛl",
    "pos": "v.",
    "meaning": "使厌恶；拒绝",
    "id": 1240
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "press",
    "phonetic": "prɛs",
    "pos": "n.",
    "meaning": "出版社；印刷所；印刷机",
    "id": 1241
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "oppress",
    "phonetic": "ə'prɛs",
    "pos": "vt.",
    "meaning": "压迫， 压制； 使沉重， 使烦恼",
    "id": 1242
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "repress",
    "phonetic": "",
    "pos": "v.",
    "meaning": "克制;抑制;压制；镇压",
    "id": 1243
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "repressive",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "压制的；专制的；抑制的",
    "id": 1244
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "depress",
    "phonetic": "dɪ'prɛs",
    "pos": "vt.",
    "meaning": "使沮丧， 使不景气； 按下",
    "id": 1245
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "suppress",
    "phonetic": "sə'prɛs",
    "pos": "v.",
    "meaning": "镇压，压制",
    "id": 1246
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "distress",
    "phonetic": "dɪ'strɛs",
    "pos": "v.",
    "meaning": "使痛苦，悲痛",
    "id": 1247
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dense",
    "phonetic": "dɛns",
    "pos": "adj.",
    "meaning": "密集的；浓厚的",
    "id": 1248
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "compassion",
    "phonetic": "kəm'pæʃən",
    "pos": "n.",
    "meaning": "同情， 怜悯",
    "id": 1249
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "compact",
    "phonetic": "'kɑmpækt",
    "pos": "adj.",
    "meaning": "紧密的，紧凑的",
    "id": 1250
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "resent",
    "phonetic": "rɪ'zɛnt",
    "pos": "v.",
    "meaning": "对…不满，怨恨",
    "id": 1251
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sober",
    "phonetic": "'sobɚ",
    "pos": "adj.",
    "meaning": "未醉的，有节制的；严肃的，持重的；素淡的，暗淡的；v. 醒酒， 清醒",
    "id": 1252
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "soda",
    "phonetic": "'sodə",
    "pos": "n.",
    "meaning": "碳酸钠， 纯碱； 汽水， 苏打水",
    "id": 1253
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sole",
    "phonetic": "sol",
    "pos": "n.",
    "meaning": "脚底，鞋底，袜底",
    "id": 1254
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "solemn",
    "phonetic": "'sɑləm",
    "pos": "adj.",
    "meaning": "庄严的， 隆重的； 严肃的",
    "id": 1255
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "stun",
    "phonetic": "stʌn",
    "pos": "vt.",
    "meaning": "使震惊， 使目瞪口呆； 把…打昏， 使昏迷",
    "id": 1256
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "temper",
    "phonetic": "'tɛmpɚ",
    "pos": "n.",
    "meaning": "韧度；心情，情绪；vt. 调和， 使缓和； 回火",
    "id": 1257
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "temperament",
    "phonetic": "'tɛmprəmənt",
    "pos": "n.",
    "meaning": "气质， 性格",
    "id": 1258
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "withstand",
    "phonetic": "wɪð'stænd",
    "pos": "v.",
    "meaning": "抵挡，反抗",
    "id": 1259
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pasture",
    "phonetic": "'pæstʃɚ",
    "pos": "n.",
    "meaning": "牧场",
    "id": 1260
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "access",
    "phonetic": "'æksɛs",
    "pos": "v.",
    "meaning": "取得，获取",
    "id": 1261
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "accessible",
    "phonetic": "ək'sɛsəbl",
    "pos": "adj.",
    "meaning": "易接近的",
    "id": 1262
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "accessory",
    "phonetic": "ək'sɛsəri",
    "pos": "n.",
    "meaning": "同谋，帮凶；adj. 附属的",
    "id": 1263
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "blunt",
    "phonetic": "blʌnt",
    "pos": "adj.",
    "meaning": "钝的；率直的，直言不讳的；vt. 使迟钝； 使减弱； 使钝",
    "id": 1264
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "blunder",
    "phonetic": "'blʌndɚ",
    "pos": "v.",
    "meaning": "犯大错；n. 大错",
    "id": 1265
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "clip",
    "phonetic": "klɪp",
    "pos": "v.",
    "meaning": "剪；剪辑报刊",
    "id": 1266
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "closet",
    "phonetic": "'klɑzət",
    "pos": "n.",
    "meaning": "小房间；壁碗橱",
    "id": 1267
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bat",
    "phonetic": "bæt",
    "pos": "n.",
    "meaning": "球拍；短棍；蝙蝠",
    "id": 1268
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "battery",
    "phonetic": "'bæt(ə)rɪ",
    "pos": "n.",
    "meaning": "电池",
    "id": 1269
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "directory",
    "phonetic": "dəˈrɛktəri; (also) daɪˈrɛktəri",
    "pos": "n.",
    "meaning": "姓名地址录",
    "id": 1270
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "document",
    "phonetic": "dɑkjəmənt",
    "pos": "n.",
    "meaning": "文件",
    "id": 1271
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "exquisite",
    "phonetic": "ɪk'skwɪzɪt",
    "pos": "adj.",
    "meaning": "精美的， 精致的； 敏锐的， 有高度鉴赏力的； 剧烈的， 感觉强烈的",
    "id": 1272
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fuse",
    "phonetic": "fjuz",
    "pos": "n.",
    "meaning": "保险丝；导火线",
    "id": 1273
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "confuse",
    "phonetic": "kən'fjʊz",
    "pos": "v.",
    "meaning": "使混淆，迷惑",
    "id": 1274
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fabric",
    "phonetic": "'fæbrɪk",
    "pos": "n.",
    "meaning": "布料",
    "id": 1275
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "helmet",
    "phonetic": "'hɛlmɪt",
    "pos": "n.",
    "meaning": "头盔，钢盔",
    "id": 1276
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "index",
    "phonetic": "'ɪndɛks",
    "pos": "n.",
    "meaning": "指数",
    "id": 1277
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "rim",
    "phonetic": "rɪm",
    "pos": "n.",
    "meaning": "边；边缘，（眼镜）框",
    "id": 1278
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "grim",
    "phonetic": "ɡrɪm",
    "pos": "adj.",
    "meaning": "严厉的",
    "id": 1279
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "boundary",
    "phonetic": "'baʊndri",
    "pos": "n.",
    "meaning": "分界线，边界",
    "id": 1280
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "margin",
    "phonetic": "'mɑrdʒən",
    "pos": "n.",
    "meaning": "利润",
    "id": 1281
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "edge",
    "phonetic": "ɛdʒ",
    "pos": "n.",
    "meaning": "边缘，边；刀口",
    "id": 1282
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "verge",
    "phonetic": "vɝdʒ",
    "pos": "n.",
    "meaning": "边缘，边界",
    "id": 1283
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bound",
    "phonetic": "baʊnd",
    "pos": "adj.",
    "meaning": "应当的；必定的",
    "id": 1284
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sheet",
    "phonetic": "ʃit",
    "pos": "n.",
    "meaning": "被单；纸张；薄板",
    "id": 1285
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "shell",
    "phonetic": "ʃɛl",
    "pos": "n.",
    "meaning": "炮弹，猎枪子弹",
    "id": 1286
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "saddle",
    "phonetic": "'sædl",
    "pos": "n.",
    "meaning": "鞍子，马鞍",
    "id": 1287
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "scale",
    "phonetic": "skel",
    "pos": "n.",
    "meaning": "大小，规模；等级，级别；天平，磅秤；比例；刻度，标度；鳞；vt. 攀登， 爬越",
    "id": 1288
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "statue",
    "phonetic": "'stætʃu",
    "pos": "n.",
    "meaning": "塑像，雕像，铸像",
    "id": 1289
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "stuff",
    "phonetic": "stʌf",
    "pos": "n.",
    "meaning": "材料，东西",
    "id": 1290
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "staff",
    "phonetic": "stæf",
    "pos": "n.",
    "meaning": "工作人员；参谋",
    "id": 1291
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tap",
    "phonetic": "tæp",
    "pos": "v.",
    "meaning": "轻敲, 导出",
    "id": 1292
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tub",
    "phonetic": "tʌb",
    "pos": "n.",
    "meaning": "桶， 塑料杯， 纸杯； 盆， 洗澡盆， 浴缸",
    "id": 1293
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "veil",
    "phonetic": "vel",
    "pos": "v.",
    "meaning": "以面纱遮掩；遮盖",
    "id": 1294
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "unveil",
    "phonetic": "",
    "pos": "v.",
    "meaning": "为.揭幕；公布",
    "id": 1295
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bypass",
    "phonetic": "'baɪpæs",
    "pos": "n.",
    "meaning": "旁通管；v. 绕过",
    "id": 1296
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "cornerstone",
    "phonetic": "'kɔrnɚston",
    "pos": "n.",
    "meaning": "基石",
    "id": 1297
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "milestone",
    "phonetic": "'maɪlston",
    "pos": "n.",
    "meaning": "里程碑",
    "id": 1298
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "equip",
    "phonetic": "ɪ'kwɪp",
    "pos": "vt.",
    "meaning": "装备， 配备； 使有准备",
    "id": 1299
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "freeway",
    "phonetic": "",
    "pos": "n.",
    "meaning": "（美国）高速公路",
    "id": 1300
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "haven",
    "phonetic": "",
    "pos": "n.",
    "meaning": "安全的地方；保护区；避难所",
    "id": 1301
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "landmark",
    "phonetic": "'lændmɑrk",
    "pos": "adj.",
    "meaning": "有重大意义或影响的",
    "id": 1302
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "metropolitan",
    "phonetic": ",mɛtrə'pɑlɪtən",
    "pos": "adj.",
    "meaning": "大都市的",
    "id": 1303
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "motel",
    "phonetic": "mo'tɛl",
    "pos": "n.",
    "meaning": "汽车旅馆",
    "id": 1304
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "lounge",
    "phonetic": "laʊndʒ",
    "pos": "n.",
    "meaning": "休息室",
    "id": 1305
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pipeline",
    "phonetic": "",
    "pos": "n.",
    "meaning": "输油管道；输气管道；输送管线",
    "id": 1306
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ranch",
    "phonetic": "ræntʃ",
    "pos": "n.",
    "meaning": "（北美洲的）大牧场",
    "id": 1307
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "restore",
    "phonetic": "rɪ'stɔr",
    "pos": "vt.",
    "meaning": "恢复， 使恢复； 修复， 整修； 归还， 交还",
    "id": 1308
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "shelter",
    "phonetic": "'ʃɛltɚ",
    "pos": "v.",
    "meaning": "掩蔽， 躲避， 庇护；n. 掩蔽处，躲避处；掩蔽，保护",
    "id": 1309
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "slum",
    "phonetic": "slʌm",
    "pos": "n.",
    "meaning": "贫民窟",
    "id": 1310
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "utility",
    "phonetic": "ju'tɪləti",
    "pos": "n.",
    "meaning": "效用， 有用",
    "id": 1311
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "appliance",
    "phonetic": "ə'plaɪəns",
    "pos": "n.",
    "meaning": "用具， 器具， 器械",
    "id": 1312
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mechanism",
    "phonetic": "'mɛkənɪzəm",
    "pos": "n.",
    "meaning": "机制",
    "id": 1313
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "confident",
    "phonetic": "'kɑnfɪdənt",
    "pos": "adj.",
    "meaning": "确信的， 肯定的； 自信的",
    "id": 1314
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "confidential",
    "phonetic": ",kɑnfɪ'dɛnʃl",
    "pos": "adj.",
    "meaning": "机密的",
    "id": 1315
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "classify",
    "phonetic": "'klæsɪfaɪ",
    "pos": "v.",
    "meaning": "分类",
    "id": 1316
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "classified",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "分类的；归类的；机密的;保密的",
    "id": 1317
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dedicate",
    "phonetic": "'dɛdɪket",
    "pos": "v.",
    "meaning": "奉献；献身",
    "id": 1318
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "delicate",
    "phonetic": "ˈdɛlɪkɪt",
    "pos": "adj.",
    "meaning": "精细的，细微的",
    "id": 1319
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "crunchy",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "脆的",
    "id": 1320
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "cordial",
    "phonetic": "'kɔrdʒəl",
    "pos": "adj.",
    "meaning": "热情友好的， 热诚的",
    "id": 1321
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prejudice",
    "phonetic": "'prɛdʒədɪs",
    "pos": "n.",
    "meaning": "偏见",
    "id": 1322
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bias",
    "phonetic": "'baɪəs",
    "pos": "n.",
    "meaning": "偏见",
    "id": 1323
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "arrogant",
    "phonetic": "'ærəɡənt",
    "pos": "adj.",
    "meaning": "傲慢无礼的",
    "id": 1324
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "eloquent",
    "phonetic": "'ɛləkwənt",
    "pos": "adj.",
    "meaning": "口才好的，雄辩的",
    "id": 1325
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "shrewd",
    "phonetic": "ʃrud",
    "pos": "adj.",
    "meaning": "精明的",
    "id": 1326
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "shred",
    "phonetic": "",
    "pos": "n.",
    "meaning": "（撕或切的）细条，碎片；极少量；些许V.切碎；撕碎",
    "id": 1327
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "greasy",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "油腻的；滑的；油污的；圆滑的",
    "id": 1328
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "courageous",
    "phonetic": "kə'redʒəs",
    "pos": "adj.",
    "meaning": "勇敢的，无畏的",
    "id": 1329
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "elegant",
    "phonetic": "'ɛləgənt",
    "pos": "adj.",
    "meaning": "高雅的，雅致的",
    "id": 1330
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "luxury",
    "phonetic": "'lʌɡʒəri",
    "pos": "n.",
    "meaning": "奢侈； 奢侈品",
    "id": 1331
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "extravagant",
    "phonetic": "ɪk'strævəgənt",
    "pos": "adj.",
    "meaning": "奢侈的；过度的",
    "id": 1332
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "generous",
    "phonetic": "'dʒɛnərəs",
    "pos": "adj.",
    "meaning": "慷慨的",
    "id": 1333
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "liable",
    "phonetic": "'laɪəbl",
    "pos": "adj.",
    "meaning": "有（法律）责任的",
    "id": 1334
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "credible",
    "phonetic": "'krɛdəbl",
    "pos": "adj.",
    "meaning": "可信的， 可靠的",
    "id": 1335
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "oblige",
    "phonetic": "ə'blaɪdʒ",
    "pos": "v.",
    "meaning": "迫使",
    "id": 1336
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "malicious",
    "phonetic": "mə'lɪʃəs",
    "pos": "adj.",
    "meaning": "恶毒的",
    "id": 1337
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "moderate",
    "phonetic": "ˈmɑdərɪt; (for v.,) ˈmɑdərˌeɪt",
    "pos": "adj.",
    "meaning": "温和的；有节制的",
    "id": 1338
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "optimistic",
    "phonetic": ",ɑptɪ'mɪstɪk",
    "pos": "adj.",
    "meaning": "乐观的",
    "id": 1339
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "outstanding",
    "phonetic": "'aʊt'stændɪŋ",
    "pos": "adj.",
    "meaning": "突出的，杰出的",
    "id": 1340
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "notorious",
    "phonetic": "no'tɔrɪəs",
    "pos": "adj.",
    "meaning": "臭名昭著的",
    "id": 1341
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "cult",
    "phonetic": "",
    "pos": "",
    "meaning": "狂热，崇拜；受到狂热崇拜的",
    "id": 1342
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "punctual",
    "phonetic": "'pʌŋtʃʊəl",
    "pos": "adj.",
    "meaning": "准时的",
    "id": 1343
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "premature",
    "phonetic": ",primə'tʃʊr",
    "pos": "adj.",
    "meaning": "比预期时间早的； 不成熟的， 仓促的",
    "id": 1344
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mature",
    "phonetic": "mə'tʃʊr",
    "pos": "v.",
    "meaning": "使成熟，成熟",
    "id": 1345
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "maturity",
    "phonetic": "mə'tʃʊrəti",
    "pos": "n.",
    "meaning": "成熟",
    "id": 1346
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "moral",
    "phonetic": "'mɔrəl",
    "pos": "adj.",
    "meaning": "道德的，有道德的；n. 品行， 道德规范； 寓意",
    "id": 1347
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mortal",
    "phonetic": "'mɔrtl",
    "pos": "adj.",
    "meaning": "终有一死的；致命的；你死我活的，不共戴天的；n. 凡人， 人类",
    "id": 1348
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "immortal",
    "phonetic": "ɪ'mɔrtl",
    "pos": "adj.",
    "meaning": "不朽的；永生的",
    "id": 1349
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "rigorous",
    "phonetic": "'rɪɡərəs",
    "pos": "adj.",
    "meaning": "严格的",
    "id": 1350
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "rigor",
    "phonetic": "'rɪgɚ",
    "pos": "n.",
    "meaning": "严格",
    "id": 1351
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "robust",
    "phonetic": "ro'bʌst",
    "pos": "adj.",
    "meaning": "强健的",
    "id": 1352
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "solitary",
    "phonetic": "'sɑlətɛri",
    "pos": "adj.",
    "meaning": "单独的， 独自的； 单个的， 唯一的； 孤独的， 隐居的",
    "id": 1353
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "conflict",
    "phonetic": "'kɑnflɪkt",
    "pos": "n.",
    "meaning": "冲突",
    "id": 1354
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tender",
    "phonetic": "'tɛndɚ",
    "pos": "adj.",
    "meaning": "嫩的；脆弱的",
    "id": 1355
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tolerate",
    "phonetic": "'tɑləret",
    "pos": "v.",
    "meaning": "忍受，容忍，宽恕",
    "id": 1356
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tolerance",
    "phonetic": "'tɑlərəns",
    "pos": "n.",
    "meaning": "宽容，容忍",
    "id": 1357
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "endure",
    "phonetic": "ɪn'dʊr",
    "pos": "v.",
    "meaning": "忍受",
    "id": 1358
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vary",
    "phonetic": "ˈveri",
    "pos": "v.",
    "meaning": "变化",
    "id": 1359
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "variation",
    "phonetic": ",vɛrɪ'eʃən",
    "pos": "n.",
    "meaning": "变化",
    "id": 1360
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vain",
    "phonetic": "ven",
    "pos": "adj.",
    "meaning": "徒劳的； 自负的",
    "id": 1361
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vice",
    "phonetic": "vaɪs",
    "pos": "n.",
    "meaning": "恶意，恶习",
    "id": 1362
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vicious",
    "phonetic": "'vɪʃəs",
    "pos": "adj.",
    "meaning": "邪恶的；恶性的",
    "id": 1363
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "virgin",
    "phonetic": "'vɝdʒɪn",
    "pos": "n.",
    "meaning": "处女；adj. 处女的",
    "id": 1364
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "virtue",
    "phonetic": "'vɝtʃʊ",
    "pos": "n.",
    "meaning": "善， 美德； 优点， 长处",
    "id": 1365
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vulgar",
    "phonetic": "'vʌlɡɚ",
    "pos": "adj.",
    "meaning": "粗俗的，庸俗的",
    "id": 1366
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vulnerable",
    "phonetic": "'vʌlnərəbl",
    "pos": "adj.",
    "meaning": "脆弱的, 易受影响的",
    "id": 1367
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "associate",
    "phonetic": "ə'soʃɪet",
    "pos": "v.",
    "meaning": "把…联系在一起；使联合，结合；交往 [ə'səuʃiət]；adj. 副的；n. 伙伴，同事",
    "id": 1368
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "aware",
    "phonetic": "ə'wɛr",
    "pos": "adj.",
    "meaning": "知道的， 意识到的",
    "id": 1369
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "beware",
    "phonetic": "bɪ'wɛr",
    "pos": "v.",
    "meaning": "谨防，当心",
    "id": 1370
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "conscious",
    "phonetic": "'kɑnʃəs",
    "pos": "adj.",
    "meaning": "意识到的， 自觉的； 神志清醒的； 有意的， 存心的",
    "id": 1371
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "subconscious",
    "phonetic": ",sʌb'kɑnʃəs",
    "pos": "adj.",
    "meaning": "下意识的，潜意识的",
    "id": 1372
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "cognitive",
    "phonetic": "'kɑɡnətɪv",
    "pos": "adj.",
    "meaning": "认知的",
    "id": 1373
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "desire",
    "phonetic": "dɪ'zaɪɚ",
    "pos": "vt.",
    "meaning": "想要，渴望；n. 愿望， 欲望",
    "id": 1374
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "desirable",
    "phonetic": "dɪ'zaɪərəbl",
    "pos": "adj.",
    "meaning": "吸引人的， 可取的",
    "id": 1375
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "desirability",
    "phonetic": "",
    "pos": "n.",
    "meaning": "愿望；有利条件；合意的人(东西)",
    "id": 1376
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "despair",
    "phonetic": "dɪ'spɛr",
    "pos": "n.",
    "meaning": "绝望；v. 绝望",
    "id": 1377
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "impair",
    "phonetic": "ɪm'pɛr",
    "pos": "v.",
    "meaning": "损害",
    "id": 1378
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "desperate",
    "phonetic": "'dɛspərət",
    "pos": "adj.",
    "meaning": "绝望的，不顾一切的",
    "id": 1379
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "esteem",
    "phonetic": "ɪ'stim",
    "pos": "v.",
    "meaning": "尊重",
    "id": 1380
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prestige",
    "phonetic": "prɛ'stidʒ",
    "pos": "n.",
    "meaning": "名声，声望",
    "id": 1381
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reputation",
    "phonetic": ",rɛpju'teʃən",
    "pos": "n.",
    "meaning": "名誉， 名气， 名声",
    "id": 1382
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "logical",
    "phonetic": "'lɑdʒɪkl",
    "pos": "adj.",
    "meaning": "逻辑的， 合乎常理的",
    "id": 1383
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ideology",
    "phonetic": ",aidi'ɔlədʒi, ,idi-",
    "pos": "n.",
    "meaning": "意识形态",
    "id": 1384
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "spirit",
    "phonetic": "'spɪrɪt",
    "pos": "n.",
    "meaning": "精神;志气;(pl.)情绪,心情;(pl.)酒精",
    "id": 1385
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "expire",
    "phonetic": "ɪk'spaɪɚ",
    "pos": "v.",
    "meaning": "满期，到期；断气",
    "id": 1386
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inspire",
    "phonetic": "ɪn'spaɪɚ",
    "pos": "v.",
    "meaning": "鼓励",
    "id": 1387
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inspiration",
    "phonetic": "ˌɪnspəˈreʃən",
    "pos": "n.",
    "meaning": "灵感；妙想；鼓舞",
    "id": 1388
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "aspire",
    "phonetic": "ə'spaɪr",
    "pos": "v.",
    "meaning": "(to，after)渴望，追求，有志于",
    "id": 1389
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "conspire",
    "phonetic": "",
    "pos": "v.",
    "meaning": "共谋；密谋；阴谋；共同导致",
    "id": 1390
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "assert",
    "phonetic": "ə'sɝt",
    "pos": "v.",
    "meaning": "主张，断言",
    "id": 1391
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "articulate",
    "phonetic": "ɑr'tɪkjulet",
    "pos": "adj.",
    "meaning": "善于表达的， 发音清晰的； 表达得清楚有力的；vt. 明确有力地表达； 清楚地吐， 清晰地发",
    "id": 1392
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "muttering",
    "phonetic": "",
    "pos": "n.",
    "meaning": "喃喃自语",
    "id": 1393
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "remark",
    "phonetic": "rɪ'mɑrk",
    "pos": "",
    "meaning": "vt&vi&n. 评论，谈论",
    "id": 1394
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reveal",
    "phonetic": "rɪ'vil",
    "pos": "v.",
    "meaning": "揭露",
    "id": 1395
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "revelation",
    "phonetic": "'rɛvə'leʃən",
    "pos": "n.",
    "meaning": "被提示的真相， 新发现； 揭示， 透露， 显示",
    "id": 1396
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vow",
    "phonetic": "vaʊ",
    "pos": "n.",
    "meaning": "誓言，誓约，许愿",
    "id": 1397
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "whisper",
    "phonetic": "'wɪspɚ",
    "pos": "v.",
    "meaning": "低声地讲；私下说",
    "id": 1398
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "gossip",
    "phonetic": "'ɡɑsɪp",
    "pos": "n.",
    "meaning": "闲谈；碎嘴子；漫笔",
    "id": 1399
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "accord",
    "phonetic": "ə'kɔrd",
    "pos": "n.",
    "meaning": "符合；协议",
    "id": 1400
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "accordingly",
    "phonetic": "ə'kɔrdɪŋli",
    "pos": "adv.",
    "meaning": "因此，所以；照着",
    "id": 1401
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "accordance",
    "phonetic": "ə'kɔrdns",
    "pos": "n.",
    "meaning": "一致， 和谐， 符合",
    "id": 1402
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "comprehensive",
    "phonetic": "ˌkɑːmprɪˈhensɪv",
    "pos": "adj.",
    "meaning": "综合的，全面的",
    "id": 1403
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "decision",
    "phonetic": "dɪ'sɪʒn",
    "pos": "n.",
    "meaning": "决定，决心；果断",
    "id": 1404
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "decided",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "明显的；确实无疑的",
    "id": 1405
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "imply",
    "phonetic": "ɪm'plai",
    "pos": "vt.",
    "meaning": "暗示， 意指",
    "id": 1406
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "implication",
    "phonetic": "'ɪmplɪ'keʃən",
    "pos": "n.",
    "meaning": "含意， 暗示， 暗指； 卷入， 牵连",
    "id": 1407
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "indicate",
    "phonetic": "'ɪndɪket",
    "pos": "v.",
    "meaning": "表明",
    "id": 1408
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "manifest",
    "phonetic": "'mænɪfɛst",
    "pos": "v.",
    "meaning": "表明",
    "id": 1409
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "indicative",
    "phonetic": "ɪn'dɪkətɪv",
    "pos": "adj.",
    "meaning": "指示的",
    "id": 1410
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "indicator",
    "phonetic": "",
    "pos": "n.",
    "meaning": "指示器；指针；转向灯；方向灯",
    "id": 1411
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "denote",
    "phonetic": "dɪ'not",
    "pos": "v.",
    "meaning": "指示，意味着",
    "id": 1412
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "signify",
    "phonetic": "'sɪɡnɪfaɪ",
    "pos": "v.",
    "meaning": "表明，象征",
    "id": 1413
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "significant",
    "phonetic": "sɪɡ'nɪfɪkənt",
    "pos": "adj.",
    "meaning": "重要的",
    "id": 1414
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "implicit",
    "phonetic": "ɪm'plɪsɪt",
    "pos": "adj.",
    "meaning": "不言明的， 含蓄的； 内含的， 固有的； 无疑问的",
    "id": 1415
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "explicit",
    "phonetic": "ɪk'splɪsɪt",
    "pos": "adj.",
    "meaning": "明晰的；直率的",
    "id": 1416
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "elicit",
    "phonetic": "ɪ'lɪsɪt",
    "pos": "vt.",
    "meaning": "诱出， 探出",
    "id": 1417
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dignity",
    "phonetic": "'dɪɡnəti",
    "pos": "n.",
    "meaning": "庄重；尊严；体面",
    "id": 1418
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "indignant",
    "phonetic": "ɪn'dɪɡnənt",
    "pos": "adj.",
    "meaning": "愤怒的， 愤慨的， 义愤的",
    "id": 1419
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "indigenous",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "本地的；当地的",
    "id": 1420
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ponder",
    "phonetic": "'pɑndɚ",
    "pos": "v.",
    "meaning": "仔细考虑",
    "id": 1421
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ponderous",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "缓慢的；笨拙的",
    "id": 1422
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "promise",
    "phonetic": "'prɑmɪs",
    "pos": "n.",
    "meaning": "诺言；指望；v. 允诺",
    "id": 1423
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "promising",
    "phonetic": "'prɑmɪsɪŋ",
    "pos": "adj.",
    "meaning": "有希望的， 有前途的",
    "id": 1424
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "compromise",
    "phonetic": "'kɑmprəmaɪz",
    "pos": "v.",
    "meaning": "妥协；危害",
    "id": 1425
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "premise",
    "phonetic": "ˈpremɪs",
    "pos": "n.",
    "meaning": "房屋和地基， 经营场址； 前提， 假设",
    "id": 1426
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "remain",
    "phonetic": "rɪ'men",
    "pos": "vi.",
    "meaning": "剩下，余留，保持；仍然是；n. 残余； 残骸； 遗迹",
    "id": 1427
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "remainder",
    "phonetic": "rɪ'mendɚ",
    "pos": "n.",
    "meaning": "剩余（物）；余数",
    "id": 1428
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "scorn",
    "phonetic": "skɔrn",
    "pos": "n.",
    "meaning": "轻蔑，鄙视；vt. 轻蔑， 鄙视； 拒绝， 不屑",
    "id": 1429
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "uphold",
    "phonetic": "ʌpˈhoʊld",
    "pos": "v.",
    "meaning": "维护",
    "id": 1430
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "hoist",
    "phonetic": "hɔɪst",
    "pos": "v.",
    "meaning": "升起，扯起来",
    "id": 1431
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "valid",
    "phonetic": "'vælɪd",
    "pos": "adj.",
    "meaning": "有效的， 正当的； 有根据的， 有理的",
    "id": 1432
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "invalid",
    "phonetic": "ˈɪnvəlɪd；ɪnˈvælɪd",
    "pos": "n.",
    "meaning": "病人",
    "id": 1433
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "temporal",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "世间的；世俗的；时间的；太阳穴的",
    "id": 1434
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "temporary",
    "phonetic": "'tɛmpə'rɛri",
    "pos": "adj.",
    "meaning": "暂时的，临时的",
    "id": 1435
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "contemporary",
    "phonetic": "kən'tɛmpərɛri",
    "pos": "adj.",
    "meaning": "现代的， 当代的； 同时代的",
    "id": 1436
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "medium",
    "phonetic": "'midɪəm",
    "pos": "adj.",
    "meaning": "中等的；n. 媒质，媒介物；传导体",
    "id": 1437
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "amid",
    "phonetic": "ə'mɪd",
    "pos": "prep.",
    "meaning": "在…中间， 在…之中， 被…围绕",
    "id": 1438
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "midst",
    "phonetic": "mɪdst",
    "pos": "n.",
    "meaning": "中部； 中间； 当中",
    "id": 1439
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "medieval",
    "phonetic": ",midɪ'ivəl",
    "pos": "adj.",
    "meaning": "中世纪的； 中古的",
    "id": 1440
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "overtime",
    "phonetic": ",ovə'taɪm",
    "pos": "adj.",
    "meaning": "超时的，加班的",
    "id": 1441
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "equity",
    "phonetic": "",
    "pos": "n.",
    "meaning": "公平公正；股本；资产净值",
    "id": 1442
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "equate",
    "phonetic": "",
    "pos": "v.",
    "meaning": "同等看待；使等同",
    "id": 1443
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "adequate",
    "phonetic": "ˈædɪkwət",
    "pos": "adj.",
    "meaning": "足够的； 可以胜任的",
    "id": 1444
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inadequate",
    "phonetic": "ɪn'ædɪkwət",
    "pos": "adj.",
    "meaning": "不足的",
    "id": 1445
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inequality",
    "phonetic": "",
    "pos": "n.",
    "meaning": "不平等；不平衡；不平均",
    "id": 1446
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "equivalent",
    "phonetic": "ɪ'kwɪvələnt",
    "pos": "adj.",
    "meaning": "等面（体）积的",
    "id": 1447
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "equation",
    "phonetic": "ɪ'kweʒn",
    "pos": "n.",
    "meaning": "平衡；反应式",
    "id": 1448
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ambiguous",
    "phonetic": "æm'bɪɡjuəs",
    "pos": "adj.",
    "meaning": "模棱两可的；分歧的",
    "id": 1449
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ambiguity",
    "phonetic": "",
    "pos": "n.",
    "meaning": "模棱两可；歧义；一语多义",
    "id": 1450
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "apt",
    "phonetic": "æpt",
    "pos": "adj.",
    "meaning": "恰当的；聪明的",
    "id": 1451
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "opt",
    "phonetic": "ɑpt",
    "pos": "v.",
    "meaning": "选择",
    "id": 1452
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "optional",
    "phonetic": "'ɑpʃənl",
    "pos": "adj.",
    "meaning": "可以任意选择的",
    "id": 1453
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fluent",
    "phonetic": "'fluənt",
    "pos": "adj.",
    "meaning": "流利的，流畅的",
    "id": 1454
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "affluent",
    "phonetic": "'æfluənt",
    "pos": "adj.",
    "meaning": "富裕的；丰富的；流畅的；n. 支流；富人",
    "id": 1455
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "anonymous",
    "phonetic": "ə'nɑnəməs",
    "pos": "adj.",
    "meaning": "匿名的",
    "id": 1456
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "complex",
    "phonetic": "ˈkɑmplɛks;kəmˈplɛks",
    "pos": "adj.",
    "meaning": "由许多部分组成的，复合的；复杂的，难懂的；n. 综合体， 集合体； 情结， 夸大的情绪反应",
    "id": 1457
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "complexity",
    "phonetic": "kəm'plɛksəti",
    "pos": "n.",
    "meaning": "复杂（性）",
    "id": 1458
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "complexion",
    "phonetic": "kəm'plɛkʃən",
    "pos": "n.",
    "meaning": "肤色， 面色； 局面； 性质",
    "id": 1459
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "perplex",
    "phonetic": "pɚ'plɛks",
    "pos": "v.",
    "meaning": "迷惑，困惑，难住",
    "id": 1460
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "complicate",
    "phonetic": "",
    "pos": "vt.",
    "meaning": "使复杂；使陷入",
    "id": 1461
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "complication",
    "phonetic": ",kɑmplɪ'keʃən",
    "pos": "n.",
    "meaning": "复杂，混乱；并发症",
    "id": 1462
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "identify",
    "phonetic": "aɪ'dɛntɪfaɪ",
    "pos": "v.",
    "meaning": "认出，识别",
    "id": 1463
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "identity",
    "phonetic": "aɪ'dɛntəti",
    "pos": "n.",
    "meaning": "身份",
    "id": 1464
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "identical",
    "phonetic": "aɪ'dɛntɪkl",
    "pos": "adj.",
    "meaning": "相同的",
    "id": 1465
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "constant",
    "phonetic": "'kɑnstənt",
    "pos": "adj.",
    "meaning": "不断的",
    "id": 1466
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "instant",
    "phonetic": "'ɪnstənt",
    "pos": "adj.",
    "meaning": "立即的",
    "id": 1467
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "instantaneous",
    "phonetic": ",ɪnstən'tenɪəs",
    "pos": "adj.",
    "meaning": "即时的，瞬间的",
    "id": 1468
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "cracked",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "破裂的；有裂纹的；沙哑的",
    "id": 1469
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "diffuse",
    "phonetic": "dɪ'fjus",
    "pos": "v.",
    "meaning": "扩散， 弥漫； 传播， 散布；adj. 冗长的， 漫无边际的； 四散的， 弥漫的",
    "id": 1470
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "disciplinary",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "有关纪律的;惩戒性的",
    "id": 1471
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "elaborate",
    "phonetic": "ɪ'læbəret",
    "pos": "adj.",
    "meaning": "复杂的； 精心制作的；v. 详述， 详细制定",
    "id": 1472
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dome",
    "phonetic": "dom",
    "pos": "n.",
    "meaning": "圆屋顶，拱顶",
    "id": 1473
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "domestic",
    "phonetic": "də'mɛstɪk",
    "pos": "adj.",
    "meaning": "国内的",
    "id": 1474
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dominant",
    "phonetic": "'dɑmɪnənt",
    "pos": "adj.",
    "meaning": "统治的；n. 主因",
    "id": 1475
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "eligible",
    "phonetic": "'ɛlɪdʒəbl",
    "pos": "adj.",
    "meaning": "适合的；胜任的",
    "id": 1476
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dual",
    "phonetic": "'dʊəl",
    "pos": "adj.",
    "meaning": "双的， 两重的",
    "id": 1477
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "graph",
    "phonetic": "ɡræf",
    "pos": "n.",
    "meaning": "(曲线)图，图表",
    "id": 1478
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "graphic",
    "phonetic": "'græfɪk",
    "pos": "adj.",
    "meaning": "生动的， 形象的； 绘画的， 文字的， 图表的",
    "id": 1479
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "exceptional",
    "phonetic": "ɪk'sɛpʃənl",
    "pos": "adj.",
    "meaning": "例外的",
    "id": 1480
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fabulous",
    "phonetic": "'fæbjələs",
    "pos": "adj.",
    "meaning": "寓言式的；极为巨大的；极好的",
    "id": 1481
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "exemplary",
    "phonetic": "ɪɡ'zɛmpləri",
    "pos": "adj.",
    "meaning": "可作楷模的， 典范的",
    "id": 1482
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "authentic",
    "phonetic": "ɔ'θɛntɪk",
    "pos": "adj.",
    "meaning": "真的， 真正的； 可靠的， 可信的",
    "id": 1483
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "authenticity",
    "phonetic": "",
    "pos": "n.",
    "meaning": "真实性；确实性",
    "id": 1484
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "genuine",
    "phonetic": "'dʒɛnjʊɪn",
    "pos": "adj.",
    "meaning": "真的；由衷的",
    "id": 1485
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "genius",
    "phonetic": "'dʒinjəs",
    "pos": "n.",
    "meaning": "天才",
    "id": 1486
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "elite",
    "phonetic": "ɪˈliːt",
    "pos": "n.",
    "meaning": "精英",
    "id": 1487
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ingenious",
    "phonetic": "ɪn'dʒinɪəs",
    "pos": "adj.",
    "meaning": "精巧制成的；机灵的",
    "id": 1488
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intelligent",
    "phonetic": "ɪn'tɛlɪdʒənt",
    "pos": "adj.",
    "meaning": "聪明的",
    "id": 1489
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intellect",
    "phonetic": "'ɪntəlɛkt",
    "pos": "n.",
    "meaning": "理智，智力，才智",
    "id": 1490
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intelligence",
    "phonetic": "ɪn'tɛlɪdʒəns",
    "pos": "n.",
    "meaning": "智力，智慧，理解力",
    "id": 1491
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intelligible",
    "phonetic": "ɪn'tɛlɪdʒəbl",
    "pos": "adj.",
    "meaning": "可理解的， 明白易懂的， 清楚的",
    "id": 1492
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "existential",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "与人类存在有关的；存在主义的",
    "id": 1493
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "existence",
    "phonetic": "ɪɡ'zɪstəns",
    "pos": "n.",
    "meaning": "存在，生存",
    "id": 1494
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "giant",
    "phonetic": "'dʒaɪənt",
    "pos": "n.",
    "meaning": "巨人；巨物",
    "id": 1495
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "gigantic",
    "phonetic": "dʒaɪ'ɡæntɪk",
    "pos": "adj.",
    "meaning": "巨大的；巨人似的",
    "id": 1496
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "immense",
    "phonetic": "ɪ'mɛns",
    "pos": "adj.",
    "meaning": "巨大的",
    "id": 1497
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "immerse",
    "phonetic": "ɪ'mɝs",
    "pos": "v.",
    "meaning": "沉浸；给…施洗礼",
    "id": 1498
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "commence",
    "phonetic": "kə'mɛns",
    "pos": "v.",
    "meaning": "开始；获得学位",
    "id": 1499
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "enormous",
    "phonetic": "ɪ'nɔrməs",
    "pos": "adj.",
    "meaning": "巨大的",
    "id": 1500
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "abnormal",
    "phonetic": "æbˈnɔːrml",
    "pos": "adj.",
    "meaning": "反常的， 异常的",
    "id": 1501
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "harmony",
    "phonetic": "'hɑrməni",
    "pos": "n.",
    "meaning": "调和； 协调； 和谐",
    "id": 1502
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "harbour",
    "phonetic": "hɑrbɚ",
    "pos": "v.",
    "meaning": "怀着（不好的想法、恐惧或希望）；包含，藏有；窝藏",
    "id": 1503
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fragment",
    "phonetic": "'fræɡmənt",
    "pos": "n.",
    "meaning": "碎片，破片，碎块",
    "id": 1504
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fragmentary",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "残缺不全的；不完整的",
    "id": 1505
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fragile",
    "phonetic": "'frædʒəl",
    "pos": "adj.",
    "meaning": "脆弱的；体质弱的",
    "id": 1506
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "frantic",
    "phonetic": "'fræntɪk",
    "pos": "adj.",
    "meaning": "疯狂的",
    "id": 1507
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "completely",
    "phonetic": "kəm'plitli",
    "pos": "adv.",
    "meaning": "十分，完全地",
    "id": 1508
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "incomplete",
    "phonetic": "'ɪnkəm'plit",
    "pos": "adj.",
    "meaning": "不完全的，未完成的",
    "id": 1509
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "honorary",
    "phonetic": "'ɑnərɛri",
    "pos": "adj.",
    "meaning": "荣誉的",
    "id": 1510
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "imperative",
    "phonetic": "ɪm'pɛrətɪv",
    "pos": "adj.",
    "meaning": "必须的,必要的",
    "id": 1511
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "rational",
    "phonetic": "'ræʃnəl",
    "pos": "adj.",
    "meaning": "合理的；适度的",
    "id": 1512
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "irrational",
    "phonetic": "ɪ'ræʃənl",
    "pos": "adj.",
    "meaning": "不合理的，不理性的",
    "id": 1513
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tangible",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "有形的；实际的；可触摸的;可感知的",
    "id": 1514
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intangible",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "难以形容（或理解）的；不易度量的；无形的",
    "id": 1515
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "impractical",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "不明智的；不现实的",
    "id": 1516
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "joint",
    "phonetic": "dʒɔɪnt",
    "pos": "adj.",
    "meaning": "联合的",
    "id": 1517
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "adjoin",
    "phonetic": "ə'dʒɔɪn",
    "pos": "v.",
    "meaning": "贴近，毗连；靠近",
    "id": 1518
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "junction",
    "phonetic": "'dʒʌŋkʃən",
    "pos": "n.",
    "meaning": "连接点，汇合处",
    "id": 1519
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "conjunction",
    "phonetic": "kən'dʒʌŋkʃən",
    "pos": "n.",
    "meaning": "接合，连接；连接词",
    "id": 1520
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "lofty",
    "phonetic": "'lɔfti",
    "pos": "adj.",
    "meaning": "崇高的",
    "id": 1521
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mighty",
    "phonetic": "'maɪti",
    "pos": "adj.",
    "meaning": "强大的；巨大的",
    "id": 1522
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "novel",
    "phonetic": "ˈnɑːvl",
    "pos": "adj.",
    "meaning": "新颖的",
    "id": 1523
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fiction",
    "phonetic": "'fɪkʃən",
    "pos": "n.",
    "meaning": "小说； 虚构， 杜撰",
    "id": 1524
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "stale",
    "phonetic": "stel",
    "pos": "adj.",
    "meaning": "乏味的，没有新意的",
    "id": 1525
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "namely",
    "phonetic": "'nemli",
    "pos": "adv.",
    "meaning": "即，也就是",
    "id": 1526
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "nickname",
    "phonetic": "'nɪk'nem",
    "pos": "n.",
    "meaning": "绰号，诨号",
    "id": 1527
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "permanent",
    "phonetic": "'pɝmənənt",
    "pos": "adj.",
    "meaning": "永久的",
    "id": 1528
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "perpetual",
    "phonetic": "pɚ'pɛtʃuəl",
    "pos": "adj.",
    "meaning": "永久的",
    "id": 1529
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "eternal",
    "phonetic": "ɪ'tɝnl",
    "pos": "adj.",
    "meaning": "永久的；不朽的",
    "id": 1530
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "necessary",
    "phonetic": "ˈnɛsəˌsɛri",
    "pos": "adj.",
    "meaning": "必要的；必然的",
    "id": 1531
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "necessitate",
    "phonetic": "nə'sɛsɪtet",
    "pos": "vt.",
    "meaning": "成为必要， 需要",
    "id": 1532
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "obscure",
    "phonetic": "əb'skjʊr",
    "pos": "adj.",
    "meaning": "无名的；鲜为人知的",
    "id": 1533
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "rescue",
    "phonetic": "'rɛskju",
    "pos": "v.",
    "meaning": "营救，援救",
    "id": 1534
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "original",
    "phonetic": "ə'rɪdʒənl",
    "pos": "adj.",
    "meaning": "最初的；新颖的；原版的；n. 原件， 原作",
    "id": 1535
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "originate",
    "phonetic": "əˈrɪdʒəˌnet",
    "pos": "v.",
    "meaning": "发源；首创",
    "id": 1536
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "region",
    "phonetic": "'ridʒən",
    "pos": "n.",
    "meaning": "地区， 地带， 区域； 范围， 幅度",
    "id": 1537
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sacred",
    "phonetic": "'sekrɪd",
    "pos": "adj.",
    "meaning": "神圣的； 宗教的； 神圣不可侵犯的",
    "id": 1538
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ignore",
    "phonetic": "ɪɡ'nɔr",
    "pos": "v.",
    "meaning": "忽视",
    "id": 1539
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ignorant",
    "phonetic": "'ɪɡnərənt",
    "pos": "adj.",
    "meaning": "无知的",
    "id": 1540
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "annoy",
    "phonetic": "ə'nɔɪ",
    "pos": "vt.",
    "meaning": "使恼怒； 打搅",
    "id": 1541
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "neglect",
    "phonetic": "nɪ'glɛkt",
    "pos": "v.",
    "meaning": "忽视",
    "id": 1542
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "negligible",
    "phonetic": "'nɛɡlɪdʒəbl",
    "pos": "adj.",
    "meaning": "微不足道的",
    "id": 1543
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "negligent",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "疏忽的；不拘谨的",
    "id": 1544
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "outdated",
    "phonetic": "'aʊt'detɪd",
    "pos": "adj.",
    "meaning": "过时的",
    "id": 1545
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "whereby",
    "phonetic": "wɛr'bai",
    "pos": "adv.",
    "meaning": "靠什么；靠那个",
    "id": 1546
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "overall",
    "phonetic": ",ovə'rɔl",
    "pos": "adj.",
    "meaning": "总的",
    "id": 1547
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "peculiar",
    "phonetic": "pɪ'kjulɪɚ",
    "pos": "adj.",
    "meaning": "特有的，奇怪的",
    "id": 1548
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "exotic",
    "phonetic": "ɪɡ'zɑtɪk",
    "pos": "adj.",
    "meaning": "异域的，外国的",
    "id": 1549
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "precise",
    "phonetic": "prɪ'saɪs",
    "pos": "adj.",
    "meaning": "精确的， 准确的； 严谨的",
    "id": 1550
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "concise",
    "phonetic": "kən'saɪs",
    "pos": "adj.",
    "meaning": "简明的， 简要的",
    "id": 1551
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "subtle",
    "phonetic": "'sʌtl",
    "pos": "adj.",
    "meaning": "微妙的",
    "id": 1552
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "similar",
    "phonetic": "'sɪməlɚ",
    "pos": "adj.",
    "meaning": "相似的， 类似的",
    "id": 1553
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "similarity",
    "phonetic": ",sɪmə'lærəti",
    "pos": "n.",
    "meaning": "类似，相似；类似点",
    "id": 1554
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "assimilate",
    "phonetic": "ə'sɪməlet",
    "pos": "v.",
    "meaning": "同化",
    "id": 1555
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "simplify",
    "phonetic": "'sɪmplɪfaɪ",
    "pos": "v.",
    "meaning": "简化",
    "id": 1556
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "simplistic",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "（把问题、局面等）过分简单化的",
    "id": 1557
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "simultaneous",
    "phonetic": ",saɪml'tenɪəs",
    "pos": "adj.",
    "meaning": "同步的",
    "id": 1558
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "slippery",
    "phonetic": "'slɪpəri",
    "pos": "adj.",
    "meaning": "滑的； 狡猾的",
    "id": 1559
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "spacious",
    "phonetic": "'speʃəs",
    "pos": "adj.",
    "meaning": "宽敞的",
    "id": 1560
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "symphony",
    "phonetic": "'sɪmfəni",
    "pos": "n.",
    "meaning": "交响乐；交响乐团",
    "id": 1561
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "synonymous",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "同义的；紧密联系的",
    "id": 1562
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tentative",
    "phonetic": "'tɛntətɪv",
    "pos": "adj.",
    "meaning": "试探的， 试验的",
    "id": 1563
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "terrible",
    "phonetic": "'tɛrəbl",
    "pos": "adj.",
    "meaning": "可怕的；极度的",
    "id": 1564
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tragedy",
    "phonetic": "'trædʒədi",
    "pos": "n.",
    "meaning": "悲剧",
    "id": 1565
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "comedy",
    "phonetic": "'kɑmədi",
    "pos": "n.",
    "meaning": "喜剧；喜剧场面",
    "id": 1566
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "drama",
    "phonetic": "'drɑmə",
    "pos": "n.",
    "meaning": "戏剧性事件；戏剧性",
    "id": 1567
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dramatically",
    "phonetic": "drə'mætɪkli",
    "pos": "adv.",
    "meaning": "大幅度地；戏剧性地",
    "id": 1568
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dramatist",
    "phonetic": "",
    "pos": "n.",
    "meaning": "剧作家",
    "id": 1569
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "drag",
    "phonetic": "dræg",
    "pos": "v.",
    "meaning": "拖，拉；迫使，硬拉；拖着脚步走；n. 累赘； 一吸， 一抽",
    "id": 1570
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "haul",
    "phonetic": "hɔl",
    "pos": "v.",
    "meaning": "拖曳；拖运",
    "id": 1571
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "adolescent",
    "phonetic": ",ædə'lɛsnt",
    "pos": "adj.",
    "meaning": "青春期的； 青少年的；n. 青少年",
    "id": 1572
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "adolescence",
    "phonetic": "",
    "pos": "n.",
    "meaning": "青春期；青春",
    "id": 1573
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "avail",
    "phonetic": "ə'vel",
    "pos": "v.",
    "meaning": "有益于，有用；n. 效用",
    "id": 1574
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "availability",
    "phonetic": "ə,velə'bɪləti",
    "pos": "n.",
    "meaning": "有效（性）；可得性",
    "id": 1575
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "average",
    "phonetic": "'ævərɪdʒ",
    "pos": "adj.",
    "meaning": "平常的",
    "id": 1576
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "abundant",
    "phonetic": "ə'bʌndənt",
    "pos": "adj.",
    "meaning": "丰富的， 富裕的； 大量的， 充足的",
    "id": 1577
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "abundance",
    "phonetic": "ə'bʌndəns",
    "pos": "n.",
    "meaning": "丰富，充裕",
    "id": 1578
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ample",
    "phonetic": "'æmpl",
    "pos": "adj.",
    "meaning": "足够的；宽敞的",
    "id": 1579
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "analogy",
    "phonetic": "ə'nælədʒi",
    "pos": "n.",
    "meaning": "相似，类似；比拟",
    "id": 1580
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "caption",
    "phonetic": "'kæpʃən",
    "pos": "n.",
    "meaning": "说明文字， 字幕",
    "id": 1581
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "compensate",
    "phonetic": "'kɑmpɛnset",
    "pos": "v.",
    "meaning": "弥补",
    "id": 1582
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "breast",
    "phonetic": "brɛst",
    "pos": "n.",
    "meaning": "乳房；胸脯，胸膛",
    "id": 1583
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "belly",
    "phonetic": "'bɛli",
    "pos": "n.",
    "meaning": "肚子， 腹部",
    "id": 1584
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bust",
    "phonetic": "bʌst",
    "pos": "vi.",
    "meaning": "爆裂，坏掉；vt. 打破，打碎；n. 胸像， 半身像； 胸部， 胸围",
    "id": 1585
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "circuit",
    "phonetic": "'sɝkɪt",
    "pos": "n.",
    "meaning": "电路；环行；巡行",
    "id": 1586
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "contrast",
    "phonetic": "'kɑntræst",
    "pos": "v.",
    "meaning": "使对比；形成对比",
    "id": 1587
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "strain",
    "phonetic": "stren",
    "pos": "n.",
    "meaning": "压力",
    "id": 1588
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "craft",
    "phonetic": "kræft",
    "pos": "n.",
    "meaning": "手艺；v. 精巧地制作",
    "id": 1589
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "handicraft",
    "phonetic": "",
    "pos": "n.",
    "meaning": "手工艺；手工艺品",
    "id": 1590
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "jet",
    "phonetic": "dʒɛt",
    "pos": "n.",
    "meaning": "喷气式飞机；喷嘴",
    "id": 1591
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "jerk",
    "phonetic": "dʒɝk",
    "pos": "v.",
    "meaning": "猛地一拉，急拉",
    "id": 1592
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dimension",
    "phonetic": "dɪ'mɛnʃ(ə)n; daɪ-",
    "pos": "n.",
    "meaning": "尺寸；维",
    "id": 1593
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "discipline",
    "phonetic": "'dɪsəplɪn",
    "pos": "n.",
    "meaning": "学科",
    "id": 1594
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "disturb",
    "phonetic": "dɪ'stɝb",
    "pos": "v.",
    "meaning": "打扰，扰乱；弄乱",
    "id": 1595
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "disturbance",
    "phonetic": "dɪ'stɝbəns",
    "pos": "n.",
    "meaning": "动乱；干扰",
    "id": 1596
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "discrepancy",
    "phonetic": "dɪs'krɛpənsi",
    "pos": "n.",
    "meaning": "不符合， 不一致",
    "id": 1597
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "doctrine",
    "phonetic": "'dɑktrɪn",
    "pos": "n.",
    "meaning": "教义，主义；学说",
    "id": 1598
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "destiny",
    "phonetic": "'dɛstəni",
    "pos": "n.",
    "meaning": "命运，天数",
    "id": 1599
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "destined",
    "phonetic": "'dɛstɪnd",
    "pos": "adj.",
    "meaning": "命中注定的， 预定的； 以…为目的地的",
    "id": 1600
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "duplicate",
    "phonetic": "'duplɪket",
    "pos": "n.",
    "meaning": "副本，复制品",
    "id": 1601
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reproduce",
    "phonetic": ",riprə'dus",
    "pos": "v.",
    "meaning": "仿造",
    "id": 1602
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "flame",
    "phonetic": "flem",
    "pos": "n.",
    "meaning": "火焰",
    "id": 1603
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fluid",
    "phonetic": "'fluɪd",
    "pos": "n.",
    "meaning": "流体，液体",
    "id": 1604
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "flutter",
    "phonetic": "'flʌtɚ",
    "pos": "v.",
    "meaning": "（鸟）振翼；飘动",
    "id": 1605
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fluctuate",
    "phonetic": "'flʌktʃʊ'et",
    "pos": "v.",
    "meaning": "波动",
    "id": 1606
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fault",
    "phonetic": "fɔlt",
    "pos": "n.",
    "meaning": "过失",
    "id": 1607
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "default",
    "phonetic": "dɪ'fɔlt",
    "pos": "n.",
    "meaning": "不履行义务；v. 不履行义务",
    "id": 1608
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "feasible",
    "phonetic": "'fizəbl",
    "pos": "adj.",
    "meaning": "可行的",
    "id": 1609
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "feasibility",
    "phonetic": ",fizə'bɪləti",
    "pos": "n.",
    "meaning": "可行",
    "id": 1610
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "feeble",
    "phonetic": "'fibl",
    "pos": "adj.",
    "meaning": "虚弱的， 衰弱的， 无力的； 无效的， 无益的",
    "id": 1611
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "expedition",
    "phonetic": ",ɛkspə'dɪʃən",
    "pos": "n.",
    "meaning": "探险，远征",
    "id": 1612
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "feature",
    "phonetic": "'fitʃɚ",
    "pos": "n.",
    "meaning": "特征，特色；面貌；特写，专题节目；故事片；vt. 突出； 由…主演",
    "id": 1613
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "gleam",
    "phonetic": "ɡlim",
    "pos": "n.",
    "meaning": "微光；v. 发微光",
    "id": 1614
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "experience",
    "phonetic": "ɪk'spɪrɪəns",
    "pos": "n.",
    "meaning": "经验，感受；经历",
    "id": 1615
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bacteria",
    "phonetic": "bæk'tɪrɪə",
    "pos": "n.",
    "meaning": "细菌",
    "id": 1616
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "insight",
    "phonetic": "'ɪn'saɪt",
    "pos": "n.",
    "meaning": "洞察力；洞悉，见识",
    "id": 1617
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "instance",
    "phonetic": "'ɪnstəns",
    "pos": "n.",
    "meaning": "例子， 实例， 事例",
    "id": 1618
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "spontaneous",
    "phonetic": "spɑn'tenɪəs",
    "pos": "adj.",
    "meaning": "自发的， 无意识的； 自然的， 天真率直的",
    "id": 1619
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "impetus",
    "phonetic": "'ɪmpɪtəs",
    "pos": "n.",
    "meaning": "推动， 促进， 刺激； 推动力",
    "id": 1620
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "impulse",
    "phonetic": "'ɪmpʌls",
    "pos": "n.",
    "meaning": "冲动；推动",
    "id": 1621
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mean",
    "phonetic": "min",
    "pos": "v.",
    "meaning": "作…解释；意指",
    "id": 1622
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "influence",
    "phonetic": "'ɪnfluəns",
    "pos": "n.",
    "meaning": "势力，权势",
    "id": 1623
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "influential",
    "phonetic": ",ɪnflu'ɛnʃl",
    "pos": "adj.",
    "meaning": "有影响力的",
    "id": 1624
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "incidental",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "附带发生的；次要的n.附带的次要事情，杂费",
    "id": 1625
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "incidence",
    "phonetic": "'ɪnsɪdəns",
    "pos": "n.",
    "meaning": "发生率",
    "id": 1626
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "initiate",
    "phonetic": "ɪ'nɪʃɪet",
    "pos": "v.",
    "meaning": "开始，创始；启蒙",
    "id": 1627
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "initiative",
    "phonetic": "ɪ'nɪʃətɪv",
    "pos": "n.",
    "meaning": "主动性",
    "id": 1628
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "initial",
    "phonetic": "ɪ'nɪʃəl",
    "pos": "adj.",
    "meaning": "初步的，最初的",
    "id": 1629
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "permeate",
    "phonetic": "'pɝmɪet",
    "pos": "v.",
    "meaning": "渗透",
    "id": 1630
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "minimum",
    "phonetic": "'mɪnɪməm",
    "pos": "adj.",
    "meaning": "最低的， 最小的；n. 最低限度，最小量",
    "id": 1631
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "maximum",
    "phonetic": "ˈmæksəməm",
    "pos": "adj.",
    "meaning": "最大的； 最高的； 顶点的；n. 最大量；顶点",
    "id": 1632
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "minimal",
    "phonetic": "'mɪnɪməl",
    "pos": "adj.",
    "meaning": "最低的，最小限度的",
    "id": 1633
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "miniature",
    "phonetic": "ˈmɪniətʃɚ; ˈmɪnɪtʃɚ",
    "pos": "adj.",
    "meaning": "微型的",
    "id": 1634
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "minority",
    "phonetic": "maɪ'nɔrəti",
    "pos": "n.",
    "meaning": "少数，少数民族",
    "id": 1635
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "maximize",
    "phonetic": "",
    "pos": "v.",
    "meaning": "使增加到最大限度；充分利用",
    "id": 1636
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "major",
    "phonetic": "'medʒɚ",
    "pos": "adj.",
    "meaning": "主要的；v. 主修",
    "id": 1637
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "majority",
    "phonetic": "mə'dʒɔrəti",
    "pos": "n.",
    "meaning": "大多数",
    "id": 1638
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mask",
    "phonetic": "mæsk",
    "pos": "n.",
    "meaning": "面具；v. 掩饰 掩盖",
    "id": 1639
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mass",
    "phonetic": "mæs",
    "pos": "adj.",
    "meaning": "大量的，大规模的；v. 聚集， 集中；n. 众多，大量；团，块，堆；群众；质量",
    "id": 1640
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "massive",
    "phonetic": "'mæsɪv",
    "pos": "adj.",
    "meaning": "粗大的；大而重的",
    "id": 1641
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "legend",
    "phonetic": "'lɛdʒənd",
    "pos": "n.",
    "meaning": "传奇",
    "id": 1642
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pedestrian",
    "phonetic": "pə'dɛstrɪən",
    "pos": "n.",
    "meaning": "行人，步行者",
    "id": 1643
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ordeal",
    "phonetic": "",
    "pos": "n.",
    "meaning": "磨难；折磨；煎熬；严酷的考验",
    "id": 1644
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mission",
    "phonetic": "'mɪʃən",
    "pos": "n.",
    "meaning": "使命， 任务； 使团",
    "id": 1645
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "paradise",
    "phonetic": "'pærə'daɪs",
    "pos": "n.",
    "meaning": "天堂",
    "id": 1646
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "paradox",
    "phonetic": "'pærədɑks",
    "pos": "n.",
    "meaning": "悖论",
    "id": 1647
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "orthodox",
    "phonetic": "'ɔrθədɑks",
    "pos": "adj.",
    "meaning": "传统的； 正统的， 正宗的",
    "id": 1648
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "cemetery",
    "phonetic": "'sɛmə'tɛri",
    "pos": "n.",
    "meaning": "墓地， 公墓",
    "id": 1649
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "diameter",
    "phonetic": "daɪ'æmɪtɚ",
    "pos": "n.",
    "meaning": "直径",
    "id": 1650
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "parameter",
    "phonetic": "pə'ræmɪtɚ",
    "pos": "n.",
    "meaning": "参（变）数；参量",
    "id": 1651
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "parade",
    "phonetic": "pə'red",
    "pos": "v.",
    "meaning": "夸耀（才能等）",
    "id": 1652
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "outbreak",
    "phonetic": "'aʊtbrek",
    "pos": "n.",
    "meaning": "（战争、愤怒等）爆发",
    "id": 1653
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "patch",
    "phonetic": "pætʃ",
    "pos": "n.",
    "meaning": "补钉；碎片；v. 补缀",
    "id": 1654
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sense",
    "phonetic": "sɛns",
    "pos": "n.",
    "meaning": "感官;感觉;判断力;意义；v. 觉得,意识到",
    "id": 1655
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sensible",
    "phonetic": "'sɛnsəbl",
    "pos": "adj.",
    "meaning": "理智的",
    "id": 1656
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sensitive",
    "phonetic": "'sɛnsətɪv",
    "pos": "adj.",
    "meaning": "敏感的， 灵敏的； 神经过敏的， 容易生气的； 易受伤害的",
    "id": 1657
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intensive",
    "phonetic": "ɪn'tɛnsɪv",
    "pos": "adj.",
    "meaning": "加强的； 精耕细作的",
    "id": 1658
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intense",
    "phonetic": "ɪn'tɛns",
    "pos": "adj.",
    "meaning": "激烈的，强烈的",
    "id": 1659
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sensation",
    "phonetic": "sɛn'seʃən",
    "pos": "n.",
    "meaning": "感觉，知觉；轰动",
    "id": 1660
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sentiment",
    "phonetic": "'sɛntɪmənt",
    "pos": "n.",
    "meaning": "感情；情绪",
    "id": 1661
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "nonsense",
    "phonetic": "'nɑnsɛns",
    "pos": "n.",
    "meaning": "胡说，废话",
    "id": 1662
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pattern",
    "phonetic": "'pætɚn",
    "pos": "n.",
    "meaning": "模式",
    "id": 1663
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "soluble",
    "phonetic": "'sɑljəbl",
    "pos": "adj.",
    "meaning": "可溶的； 可解决的",
    "id": 1664
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "texture",
    "phonetic": "'tɛkstʃɚ",
    "pos": "v.",
    "meaning": "质地",
    "id": 1665
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "breakdown",
    "phonetic": "'brek'daʊn",
    "pos": "n.",
    "meaning": "崩溃，倒塌，失败",
    "id": 1666
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "animate",
    "phonetic": "",
    "pos": "v.",
    "meaning": "使具活力；使生气勃勃adj.有生命的；有活力的；有生气的",
    "id": 1667
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "activate",
    "phonetic": "'æktə'vet",
    "pos": "v.",
    "meaning": "激活",
    "id": 1668
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "agitate",
    "phonetic": "ˈædʒɪˌteɪt",
    "pos": "v.",
    "meaning": "摇动(液体)；使焦虑不安；困扰；鼓动",
    "id": 1669
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "blink",
    "phonetic": "blɪŋk",
    "pos": "vi.",
    "meaning": "眨眼睛；闪亮，闪烁；n. 眨眼睛； 一瞬间",
    "id": 1670
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "brisk",
    "phonetic": "brɪsk",
    "pos": "adj.",
    "meaning": "轻快的， 生气勃勃的； 兴隆的， 繁忙活跃的； 寒冷而清新的",
    "id": 1671
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "capture",
    "phonetic": "'kæptʃɚ",
    "pos": "v.",
    "meaning": "捕捉",
    "id": 1672
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "captive",
    "phonetic": "'kæptɪv",
    "pos": "adj.",
    "meaning": "被俘虏的",
    "id": 1673
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "clutch",
    "phonetic": "klʌtʃ",
    "pos": "v.",
    "meaning": "抓住，掌握，攫",
    "id": 1674
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "beat",
    "phonetic": "bit",
    "pos": "",
    "meaning": "vt&vi. 打，敲；打败",
    "id": 1675
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "coincide",
    "phonetic": ",koɪn'saɪd",
    "pos": "v.",
    "meaning": "相巧合；相符合",
    "id": 1676
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "coincidence",
    "phonetic": "ko'ɪnsɪdəns",
    "pos": "n.",
    "meaning": "巧合， 巧事； 一致， 符合",
    "id": 1677
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "challenge",
    "phonetic": "'tʃælɪndʒ",
    "pos": "n.",
    "meaning": "艰巨任务",
    "id": 1678
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bewilder",
    "phonetic": "bɪ'wɪldɚ",
    "pos": "v.",
    "meaning": "迷惑，把…弄糊涂",
    "id": 1679
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "comprise",
    "phonetic": "kəm'praɪz",
    "pos": "v.",
    "meaning": "包含，包括；构成",
    "id": 1680
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "blend",
    "phonetic": "blɛnd",
    "pos": "",
    "meaning": "vt&vi&n. 混和",
    "id": 1681
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "crumble",
    "phonetic": "'krʌmbl",
    "pos": "vi.",
    "meaning": "崩溃， 瓦解；vt. 弄碎",
    "id": 1682
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "response",
    "phonetic": "rɪ'spɑns",
    "pos": "n.",
    "meaning": "回应",
    "id": 1683
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "respondent",
    "phonetic": "rɪ'spɑndənt",
    "pos": "n.",
    "meaning": "回答者； 响应者； 被告",
    "id": 1684
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "responsible",
    "phonetic": "rɪ'spɑnsəbl",
    "pos": "adj.",
    "meaning": "可靠的；责任重大的",
    "id": 1685
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "responsibility",
    "phonetic": "rɪˌspɑːnsəˈbɪləti",
    "pos": "n.",
    "meaning": "责任",
    "id": 1686
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "responsive",
    "phonetic": "rɪ'spɑnsɪv",
    "pos": "adj.",
    "meaning": "灵敏的，反应的",
    "id": 1687
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "correspond",
    "phonetic": ",kɔrə'spɑnd",
    "pos": "v.",
    "meaning": "相符合；相当",
    "id": 1688
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "feedback",
    "phonetic": "'fidbæk",
    "pos": "n.",
    "meaning": "反馈",
    "id": 1689
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "culminate",
    "phonetic": "'kʌlmɪnet",
    "pos": "vi.",
    "meaning": "告终",
    "id": 1690
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "baffle",
    "phonetic": "'bæfl",
    "pos": "v.",
    "meaning": "使迷惑，困惑",
    "id": 1691
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "refute",
    "phonetic": "ri'fjʊt",
    "pos": "vt.",
    "meaning": "驳斥， 驳倒",
    "id": 1692
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "control",
    "phonetic": "kən'trol",
    "pos": "v.",
    "meaning": "控制，克制；n. 控制",
    "id": 1693
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dart",
    "phonetic": "dɑrt",
    "pos": "vi.",
    "meaning": "猛冲，飞奔；vt. 投射；n. 飞镖， 飞镖游戏； 急驰， 飞奔",
    "id": 1694
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "consolidate",
    "phonetic": "kən'sɑlɪdet",
    "pos": "v.",
    "meaning": "巩固；合并",
    "id": 1695
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "solidarity",
    "phonetic": ",sɑlɪ'dærəti",
    "pos": "n.",
    "meaning": "团结；休戚相关",
    "id": 1696
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "crash",
    "phonetic": "kræʃ",
    "pos": "v.",
    "meaning": "（发出巨响的） 猛撞",
    "id": 1697
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "crush",
    "phonetic": "krʌʃ",
    "pos": "v.",
    "meaning": "压碎，压榨",
    "id": 1698
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "smash",
    "phonetic": "smæʃ",
    "pos": "v.",
    "meaning": "打碎，打破，粉碎",
    "id": 1699
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "distinguish",
    "phonetic": "dɪ'stɪŋɡwɪʃ",
    "pos": "v.",
    "meaning": "使显出特色，使杰出",
    "id": 1700
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "distinguished",
    "phonetic": "dɪ'stɪŋgwɪʃt",
    "pos": "adj.",
    "meaning": "显著的，杰出的",
    "id": 1701
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "distinction",
    "phonetic": "dɪ'stɪŋkʃən",
    "pos": "n.",
    "meaning": "区分",
    "id": 1702
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "distinct",
    "phonetic": "dɪ'stɪŋkt",
    "pos": "adj.",
    "meaning": "清楚的",
    "id": 1703
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "distinctive",
    "phonetic": "dɪ'stɪŋktɪv",
    "pos": "adj.",
    "meaning": "与众不同的",
    "id": 1704
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "extinguish",
    "phonetic": "ɪk'stɪŋɡwɪʃ",
    "pos": "v.",
    "meaning": "熄灭；使消亡",
    "id": 1705
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "extinct",
    "phonetic": "ɪk'stɪŋkt",
    "pos": "adj.",
    "meaning": "绝种的",
    "id": 1706
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "differentiate",
    "phonetic": ",dɪfə'rɛnʃɪet",
    "pos": "vi.",
    "meaning": "区分，区别；vt. 区分， 区别； 使不同， 使有差异",
    "id": 1707
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "derive",
    "phonetic": "dɪ'raɪv",
    "pos": "v.",
    "meaning": "获得",
    "id": 1708
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "deprive",
    "phonetic": "dɪ'praɪv",
    "pos": "v.",
    "meaning": "剥夺",
    "id": 1709
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "strive",
    "phonetic": "straɪv",
    "pos": "v.",
    "meaning": "努力，奋斗，力求",
    "id": 1710
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "thrive",
    "phonetic": "θraɪv",
    "pos": "v.",
    "meaning": "繁荣，兴旺",
    "id": 1711
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "distort",
    "phonetic": "dɪ'stɔrt",
    "pos": "v.",
    "meaning": "扭曲",
    "id": 1712
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "diminish",
    "phonetic": "dɪ'mɪnɪʃ",
    "pos": "v.",
    "meaning": "减少",
    "id": 1713
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "collapse",
    "phonetic": "kə'læps",
    "pos": "v.",
    "meaning": "坍塌，崩塌",
    "id": 1714
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "elapse",
    "phonetic": "ɪ'læps",
    "pos": "v.",
    "meaning": "（时间）过去，消逝",
    "id": 1715
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "deteriorate",
    "phonetic": "dɪ'tɪrɪəret",
    "pos": "v.",
    "meaning": "恶化",
    "id": 1716
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "develop",
    "phonetic": "dɪ'vɛləp",
    "pos": "v.",
    "meaning": "使（底片）显影",
    "id": 1717
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dominate",
    "phonetic": "'dɑmɪnet",
    "pos": "v.",
    "meaning": "主导，主宰",
    "id": 1718
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dominance",
    "phonetic": "",
    "pos": "n.",
    "meaning": "优势；统治；支配",
    "id": 1719
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "predominate",
    "phonetic": "",
    "pos": "v.",
    "meaning": "（在数量上）占优势；占主导地位",
    "id": 1720
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "predominant",
    "phonetic": "prɪ'dɑmənənt",
    "pos": "adj.",
    "meaning": "占优势的；主要的",
    "id": 1721
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dormant",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "冬眠的；休眠的；静止的；(疾病)潜伏期的",
    "id": 1722
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "stationary",
    "phonetic": "'steʃənɛri",
    "pos": "adj.",
    "meaning": "固定的， 静止不动的",
    "id": 1723
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "static",
    "phonetic": "'stætɪk",
    "pos": "adj.",
    "meaning": "静的；静态的",
    "id": 1724
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "deviate",
    "phonetic": "'divɪet",
    "pos": "v.",
    "meaning": "偏离",
    "id": 1725
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "erode",
    "phonetic": "",
    "pos": "v.",
    "meaning": "侵蚀；腐蚀；风化；逐渐毁坏；削弱;损害",
    "id": 1726
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "decay",
    "phonetic": "dɪ'ke",
    "pos": "v.",
    "meaning": "使腐朽，使腐烂",
    "id": 1727
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "embed",
    "phonetic": "ɪm'bɛd",
    "pos": "vt.",
    "meaning": "把…嵌入， 扎牢； 使深留脑中",
    "id": 1728
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "embody",
    "phonetic": "ɪm'bɑdi",
    "pos": "v.",
    "meaning": "体现",
    "id": 1729
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "evacuate",
    "phonetic": "ɪ'vækjuet",
    "pos": "v.",
    "meaning": "撤离，疏散，排泄，剥夺",
    "id": 1730
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "evaporate",
    "phonetic": "ɪ'væpəret",
    "pos": "v.",
    "meaning": "使脱水，发散蒸气",
    "id": 1731
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "exaggerate",
    "phonetic": "ɪɡ'zædʒəret",
    "pos": "v.",
    "meaning": "夸张",
    "id": 1732
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "overstate",
    "phonetic": ",ovɚ'stet",
    "pos": "v.",
    "meaning": "夸张",
    "id": 1733
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "exit",
    "phonetic": "'ɛɡzɪt",
    "pos": "n.",
    "meaning": "出口；退场；v. 退出",
    "id": 1734
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "hamper",
    "phonetic": "'hæmpɚ",
    "pos": "v.",
    "meaning": "妨碍，阻碍，牵制",
    "id": 1735
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "hinder",
    "phonetic": "'hɪndɚ",
    "pos": "v.",
    "meaning": "阻碍",
    "id": 1736
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "isolate",
    "phonetic": "aɪslˌet",
    "pos": "v.",
    "meaning": "使隔离",
    "id": 1737
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "alien",
    "phonetic": "ˈeliən,ˈeljən",
    "pos": "adj.",
    "meaning": "陌生的",
    "id": 1738
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "alienate",
    "phonetic": "'eiljəneit",
    "pos": "vt.",
    "meaning": "使疏远， 使不友好， 离间； 转让， 让渡",
    "id": 1739
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "integrate",
    "phonetic": "'ɪntɪɡret",
    "pos": "v.",
    "meaning": "使结合，使并入",
    "id": 1740
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "integrity",
    "phonetic": "ɪn'tɛɡrəti",
    "pos": "n.",
    "meaning": "正直",
    "id": 1741
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "disintegrate",
    "phonetic": "",
    "pos": "v.",
    "meaning": "碎裂；解体；分裂",
    "id": 1742
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "discrete",
    "phonetic": "dɪ'skrit",
    "pos": "adj.",
    "meaning": "分离的， 不相关联的",
    "id": 1743
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "allegiance",
    "phonetic": "ə'lidʒəns",
    "pos": "n.",
    "meaning": "拥护； 忠诚",
    "id": 1744
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ambition",
    "phonetic": "æm'bɪʃən",
    "pos": "n.",
    "meaning": "野心，报复",
    "id": 1745
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "array",
    "phonetic": "ə're",
    "pos": "v.",
    "meaning": "（美观地）排列；n. 陈列",
    "id": 1746
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "exhibit",
    "phonetic": "ɪɡ'zɪbɪt",
    "pos": "vt.",
    "meaning": "显示；陈列，展览；n. 展览品",
    "id": 1747
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inhibit",
    "phonetic": "ɪn'hɪbɪt",
    "pos": "vt.",
    "meaning": "阻止， 妨碍， 抑制",
    "id": 1748
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prohibit",
    "phonetic": "prə'hɪbɪt",
    "pos": "vt.",
    "meaning": "禁止， 不准",
    "id": 1749
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "interact",
    "phonetic": ",ɪntɚ'ækt",
    "pos": "v.",
    "meaning": "互动",
    "id": 1750
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "embrace",
    "phonetic": "ɪm'bres",
    "pos": "v.",
    "meaning": "采纳，接受",
    "id": 1751
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prolong",
    "phonetic": "prəˈlɑːŋ",
    "pos": "v.",
    "meaning": "延长",
    "id": 1752
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "lengthen",
    "phonetic": "'lɛŋθən",
    "pos": "v.",
    "meaning": "使延长，变长",
    "id": 1753
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "lengthy",
    "phonetic": "'lɛŋθi",
    "pos": "adj.",
    "meaning": "长的，漫长的",
    "id": 1754
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "lighten",
    "phonetic": "'laɪtn",
    "pos": "v.",
    "meaning": "照亮，使明亮",
    "id": 1755
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "enlighten",
    "phonetic": "ɪn'laɪtn",
    "pos": "v.",
    "meaning": "启发，开导；启蒙",
    "id": 1756
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "plight",
    "phonetic": "plaɪt",
    "pos": "n.",
    "meaning": "困境；境况；誓约；v. 保证；约定",
    "id": 1757
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dilemma",
    "phonetic": "dəˈlɛmə, daɪ-",
    "pos": "n.",
    "meaning": "窘境， 困境",
    "id": 1758
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ignite",
    "phonetic": "ɪɡ'naɪt",
    "pos": "v.",
    "meaning": "引燃，着火",
    "id": 1759
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "illuminate",
    "phonetic": "ɪ'lumɪnet",
    "pos": "v.",
    "meaning": "阐释，阐明",
    "id": 1760
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "illusion",
    "phonetic": "ɪ'luʒn",
    "pos": "n.",
    "meaning": "幻想；错觉；假象",
    "id": 1761
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "manipulate",
    "phonetic": "mə'nɪpjulet",
    "pos": "v.",
    "meaning": "操纵",
    "id": 1762
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "launch",
    "phonetic": "lɔntʃ",
    "pos": "v.",
    "meaning": "发布，推出",
    "id": 1763
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mobile",
    "phonetic": "ˈməʊbl;mobil",
    "pos": "adj.",
    "meaning": "运动的；流动的；多变的；n. 移动电话",
    "id": 1764
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "emotion",
    "phonetic": "ɪ'moʃən",
    "pos": "n.",
    "meaning": "情感， 感情； 激动",
    "id": 1765
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "motivate",
    "phonetic": "'motə'vet",
    "pos": "vt.",
    "meaning": "作为…的动机； 激励， 激发",
    "id": 1766
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "promote",
    "phonetic": "prə'mot",
    "pos": "v.",
    "meaning": "促进",
    "id": 1767
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "prompt",
    "phonetic": "prɑmpt",
    "pos": "v.",
    "meaning": "敦促",
    "id": 1768
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "locomotive",
    "phonetic": ",lokə'motɪv",
    "pos": "adj.",
    "meaning": "运动的；机动",
    "id": 1769
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "incentive",
    "phonetic": "ɪn'sɛntɪv",
    "pos": "n.",
    "meaning": "刺激",
    "id": 1770
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "decent",
    "phonetic": "'disnt",
    "pos": "adj.",
    "meaning": "体面的",
    "id": 1771
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "loom",
    "phonetic": "lum",
    "pos": "vi.",
    "meaning": "阴森地逼近， 隐现； 即将来临；n. 织布机",
    "id": 1772
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "boom",
    "phonetic": "buːm",
    "pos": "n.",
    "meaning": "繁荣",
    "id": 1773
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bloom",
    "phonetic": "blum",
    "pos": "v.",
    "meaning": "开花，茂盛",
    "id": 1774
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "gloom",
    "phonetic": "ɡlum",
    "pos": "n.",
    "meaning": "昏暗， 阴暗； 忧郁， 沮丧",
    "id": 1775
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mingle",
    "phonetic": "'mɪŋɡl",
    "pos": "vt.",
    "meaning": "使混合，混合起来",
    "id": 1776
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mute",
    "phonetic": "mjut",
    "pos": "n.",
    "meaning": "弱音器",
    "id": 1777
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "overtake",
    "phonetic": ",ovɚ'tek",
    "pos": "v.",
    "meaning": "突然发生；压倒",
    "id": 1778
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "overthrow",
    "phonetic": ",ovɚ'θro",
    "pos": "v.",
    "meaning": "推翻；n. 推翻，瓦解",
    "id": 1779
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "overflow",
    "phonetic": ",ovɚ'flo",
    "pos": "v.",
    "meaning": "从…中溢出",
    "id": 1780
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "overturn",
    "phonetic": "'ovətɝn",
    "pos": "v.",
    "meaning": "推翻",
    "id": 1781
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "downturn",
    "phonetic": "",
    "pos": "n.",
    "meaning": "（商业经济的）衰退",
    "id": 1782
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "perish",
    "phonetic": "'pɛrɪʃ",
    "pos": "v.",
    "meaning": "死亡",
    "id": 1783
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "elect",
    "phonetic": "ɪ'lɛkt",
    "pos": "v.",
    "meaning": "选举，推选；选择",
    "id": 1784
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "selection",
    "phonetic": "sɪ'lɛkʃən",
    "pos": "n.",
    "meaning": "选择；精选的东西",
    "id": 1785
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "lecture",
    "phonetic": "'lɛktʃɚ",
    "pos": "",
    "meaning": "n&vi. 演讲，讲课",
    "id": 1786
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dialect",
    "phonetic": "'daɪə'lɛkt",
    "pos": "n.",
    "meaning": "方言，土语，地方话",
    "id": 1787
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "negotiate",
    "phonetic": "nɪ'ɡoʃɪet",
    "pos": "v.",
    "meaning": "谈判，交涉，议定",
    "id": 1788
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "occupy",
    "phonetic": "'ɑkjupaɪ",
    "pos": "vt.",
    "meaning": "占领； 占； 占有",
    "id": 1789
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "except",
    "phonetic": "ɪk'sɛpt",
    "pos": "v.",
    "meaning": "把…除外，除去",
    "id": 1790
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "via",
    "phonetic": "ˈvaɪə, ˈviə",
    "pos": "prep.",
    "meaning": "通过",
    "id": 1791
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "analyze",
    "phonetic": "'ænə,laɪz",
    "pos": "v.",
    "meaning": "分析",
    "id": 1792
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "database",
    "phonetic": "'detəbes",
    "pos": "n.",
    "meaning": "数据库",
    "id": 1793
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reform",
    "phonetic": "rɪ'fɔrm",
    "pos": "",
    "meaning": "n&v. 改革， 改良， 改造； 改正， 改过自新",
    "id": 1794
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "conform",
    "phonetic": "kən'fɔrm",
    "pos": "v.",
    "meaning": "使遵守；一致",
    "id": 1795
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "extreme",
    "phonetic": "ɪk'strim",
    "pos": "adj.",
    "meaning": "极端的",
    "id": 1796
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "census",
    "phonetic": "'sɛnsəs",
    "pos": "n.",
    "meaning": "人口普查， 统计",
    "id": 1797
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "consensus",
    "phonetic": "kən'sɛnsəs",
    "pos": "n.",
    "meaning": "共识，一致",
    "id": 1798
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "predator",
    "phonetic": "",
    "pos": "n.",
    "meaning": "捕食性动物；掠夺者",
    "id": 1799
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "image",
    "phonetic": "'ɪmɪdʒ",
    "pos": "n.",
    "meaning": "形象，声誉，印象",
    "id": 1800
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "skeptical",
    "phonetic": "'skɛptɪkl",
    "pos": "adj.",
    "meaning": "怀疑的",
    "id": 1801
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dubious",
    "phonetic": "'dubɪəs",
    "pos": "adj.",
    "meaning": "怀疑的， 犹豫不决的， 无把握的； 有问题的； 靠不住的",
    "id": 1802
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dull",
    "phonetic": "dʌl",
    "pos": "adj.",
    "meaning": "枯燥的；不鲜明的",
    "id": 1803
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "eliminate",
    "phonetic": "ɪ'lɪmɪnet",
    "pos": "v.",
    "meaning": "消除",
    "id": 1804
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dispute",
    "phonetic": "'dɪs'pjʊt",
    "pos": "",
    "meaning": "n & v. 辩论，争论",
    "id": 1805
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "debate",
    "phonetic": "dɪ'bet",
    "pos": "",
    "meaning": "n&v. 争论， 辩论",
    "id": 1806
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "undergraduate",
    "phonetic": ",ʌndɚ'ɡrædʒuət",
    "pos": "n.",
    "meaning": "大学在校生",
    "id": 1807
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bachelor",
    "phonetic": "'bætʃəlɚ",
    "pos": "n.",
    "meaning": "未婚男子；学士",
    "id": 1808
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "seminar",
    "phonetic": "'sɛmɪnɑr",
    "pos": "n.",
    "meaning": "研究班， 研讨会",
    "id": 1809
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "symposium",
    "phonetic": "sɪm'pozɪəm",
    "pos": "n.",
    "meaning": "座谈会",
    "id": 1810
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mention",
    "phonetic": "'mɛnʃən",
    "pos": "v.",
    "meaning": "提及",
    "id": 1811
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "monument",
    "phonetic": "'mɑnjumənt",
    "pos": "n.",
    "meaning": "纪念碑；纪念馆",
    "id": 1812
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sophisticated",
    "phonetic": "sə'fɪstɪketɪd",
    "pos": "adj.",
    "meaning": "复杂的，老于世故的",
    "id": 1813
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "engage",
    "phonetic": "ɪn'ɡedʒ",
    "pos": "v.",
    "meaning": "忙于，从事；雇佣",
    "id": 1814
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "divorce",
    "phonetic": "dɪ'vɔrs",
    "pos": "n.",
    "meaning": "离婚，离异；vt. 离婚； 分离， 脱离",
    "id": 1815
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "embark",
    "phonetic": "ɪm'bɑrk",
    "pos": "vi.",
    "meaning": "上船； 着手， 开始工作",
    "id": 1816
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "enrich",
    "phonetic": "ɪn'rɪtʃ",
    "pos": "v.",
    "meaning": "丰富，使富裕",
    "id": 1817
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "clarify",
    "phonetic": "'klærəfaɪ",
    "pos": "v.",
    "meaning": "澄清，明确",
    "id": 1818
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "compatible",
    "phonetic": "kəm'pætəbl",
    "pos": "adj.",
    "meaning": "兼容的",
    "id": 1819
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reckless",
    "phonetic": "'rɛkləs",
    "pos": "adj.",
    "meaning": "鲁莽的",
    "id": 1820
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "overnight",
    "phonetic": "'ovənaɪt",
    "pos": "adv.",
    "meaning": "一夜；突然",
    "id": 1821
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "cultivate",
    "phonetic": "'kʌltɪvet",
    "pos": "v.",
    "meaning": "培养",
    "id": 1822
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "cultivated",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "栽培的；培植的；有教养的；举止文雅的V.栽培，种植，培育",
    "id": 1823
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "breed",
    "phonetic": "brid",
    "pos": "v.",
    "meaning": "繁殖；导致",
    "id": 1824
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "withdraw",
    "phonetic": "wɪð'drɔ",
    "pos": "v.",
    "meaning": "撤销，撤退",
    "id": 1825
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inorganic",
    "phonetic": "'ɪnɔr'gænɪk",
    "pos": "adj.",
    "meaning": "无生物的；无机的",
    "id": 1826
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "flat",
    "phonetic": "flæt",
    "pos": "adj.",
    "meaning": "平的；n. 公寓",
    "id": 1827
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inflation",
    "phonetic": "ɪn'fleʃən",
    "pos": "n.",
    "meaning": "通货膨胀",
    "id": 1828
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "flatter",
    "phonetic": "'flætɚ",
    "pos": "v.",
    "meaning": "奉承，阿谀，谄媚",
    "id": 1829
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "indifferent",
    "phonetic": "ɪn'dɪfrənt",
    "pos": "adj.",
    "meaning": "冷漠的",
    "id": 1830
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "impart",
    "phonetic": "ɪm'pɑrt",
    "pos": "v.",
    "meaning": "传授，教授",
    "id": 1831
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "partial",
    "phonetic": "'pɑrʃəl",
    "pos": "adj.",
    "meaning": "部分的； 不公平的； 偏爱的， 偏袒的",
    "id": 1832
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "department",
    "phonetic": "dɪ'pɑrtmənt",
    "pos": "n.",
    "meaning": "部门",
    "id": 1833
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tuition",
    "phonetic": "tʊ'ɪʃən",
    "pos": "n.",
    "meaning": "学费",
    "id": 1834
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intuition",
    "phonetic": ",ɪntu'ɪʃən",
    "pos": "n.",
    "meaning": "直觉； 由直觉获知的信息",
    "id": 1835
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "install",
    "phonetic": "ɪn'stɔl",
    "pos": "vt.",
    "meaning": "安装， 设置； 使就职， 任命",
    "id": 1836
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "coward",
    "phonetic": "'kaʊɚd",
    "pos": "adj.",
    "meaning": "懦怯的，胆小的",
    "id": 1837
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "timid",
    "phonetic": "'tɪmɪd",
    "pos": "adj.",
    "meaning": "羞怯的， 胆小的",
    "id": 1838
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intimidate",
    "phonetic": "ɪn'tɪmɪdet",
    "pos": "vt.",
    "meaning": "恐吓， 威胁",
    "id": 1839
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "illustrate",
    "phonetic": "'ɪləstret",
    "pos": "v.",
    "meaning": "阐明，说明",
    "id": 1840
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "navigate",
    "phonetic": "'nævə'get",
    "pos": "v.",
    "meaning": "航行，驾驶",
    "id": 1841
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "underway",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "在进行中的",
    "id": 1842
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "underlie",
    "phonetic": ",ʌndɚ'laɪ",
    "pos": "v.",
    "meaning": "成为……的基础；位于……之下",
    "id": 1843
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "underline",
    "phonetic": "'ʌndəlaɪn",
    "pos": "v.",
    "meaning": "着重；强调；n. 预告",
    "id": 1844
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "undermine",
    "phonetic": "'ʌndɚ'maɪn",
    "pos": "v.",
    "meaning": "暗中削弱",
    "id": 1845
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "immediate",
    "phonetic": "ɪ'midɪət",
    "pos": "adj.",
    "meaning": "立即的；直接的",
    "id": 1846
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mediate",
    "phonetic": "'midɪet",
    "pos": "vi.",
    "meaning": "调解，斡旋；vt. 经调解解决； 经斡旋促成",
    "id": 1847
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "profile",
    "phonetic": "'profaɪl",
    "pos": "n.",
    "meaning": "侧面；人物简介；轮廓，形象；姿态，引人注目的状态；vt. 为…描绘； 写…的传略",
    "id": 1848
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "crisis",
    "phonetic": "'kraɪsɪs",
    "pos": "n.",
    "meaning": "危机；转折点",
    "id": 1849
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pit",
    "phonetic": "pɪt",
    "pos": "n.",
    "meaning": "坑，地坑；煤矿",
    "id": 1850
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "core",
    "phonetic": "kɔr",
    "pos": "n.",
    "meaning": "果实的心，核心",
    "id": 1851
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "decorate",
    "phonetic": "'dɛkəret",
    "pos": "vt.",
    "meaning": "装饰， 装潢， 修饰",
    "id": 1852
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ornament",
    "phonetic": "'ɔrnəmənt",
    "pos": "n.",
    "meaning": "装饰物",
    "id": 1853
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "species",
    "phonetic": "'spiʃiz",
    "pos": "n.",
    "meaning": "物种",
    "id": 1854
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "obstacle",
    "phonetic": "'ɑbstəkl",
    "pos": "n.",
    "meaning": "阻碍",
    "id": 1855
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "occasion",
    "phonetic": "ə'keʒn",
    "pos": "n.",
    "meaning": "场合",
    "id": 1856
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "acknowledge",
    "phonetic": "ək'nɑlɪdʒ",
    "pos": "v.",
    "meaning": "承认；告知收到",
    "id": 1857
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "affair",
    "phonetic": "ə'fɛr",
    "pos": "n.",
    "meaning": "事情，事件；事务",
    "id": 1858
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "technique",
    "phonetic": "tɛk'nik",
    "pos": "n.",
    "meaning": "技术，技能；技巧，手艺",
    "id": 1859
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "scare",
    "phonetic": "skɛr",
    "pos": "n.",
    "meaning": "恐吓，惊恐",
    "id": 1860
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "capable",
    "phonetic": "'kepəbl",
    "pos": "adj.",
    "meaning": "有能力的",
    "id": 1861
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "capacity",
    "phonetic": "kə'pæsəti",
    "pos": "n.",
    "meaning": "能力，容量",
    "id": 1862
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "beverage",
    "phonetic": "'bɛvərɪdʒ",
    "pos": "n.",
    "meaning": "饮料",
    "id": 1863
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "journalism",
    "phonetic": "",
    "pos": "n.",
    "meaning": "新闻业；新闻工作",
    "id": 1864
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "continent",
    "phonetic": "'kɑntɪnənt",
    "pos": "n.",
    "meaning": "大陆；陆地；洲",
    "id": 1865
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "frequent",
    "phonetic": "'frikwənt",
    "pos": "adj.",
    "meaning": "常见的；频繁的",
    "id": 1866
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inner",
    "phonetic": "'ɪnɚ",
    "pos": "adj.",
    "meaning": "内部的；内心的",
    "id": 1867
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "personnel",
    "phonetic": ",pɝsə'nɛl",
    "pos": "n.",
    "meaning": "人事部门",
    "id": 1868
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "visual",
    "phonetic": "'vɪʒʊəl",
    "pos": "adj.",
    "meaning": "看的， 视觉的",
    "id": 1869
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "device",
    "phonetic": "dɪ'vaɪs",
    "pos": "n.",
    "meaning": "器械， 装置； 设计； 手段， 策略",
    "id": 1870
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tactic",
    "phonetic": "'tæktɪk",
    "pos": "n.",
    "meaning": "(s)策略,战术",
    "id": 1871
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tact",
    "phonetic": "tækt",
    "pos": "n.",
    "meaning": "机敏，圆滑，得体",
    "id": 1872
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intact",
    "phonetic": "ɪn'tækt",
    "pos": "adj.",
    "meaning": "完整无缺的； 未经触动的； 未受损伤的",
    "id": 1873
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "emphasis",
    "phonetic": "'ɛmfəsɪs",
    "pos": "n.",
    "meaning": "强调； 重视； 重要性",
    "id": 1874
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mislead",
    "phonetic": "'mɪs'lid",
    "pos": "v.",
    "meaning": "误导",
    "id": 1875
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "collective",
    "phonetic": "kə'lɛktɪv",
    "pos": "adj.",
    "meaning": "共同的",
    "id": 1876
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "compel",
    "phonetic": "kəm'pɛl",
    "pos": "v.",
    "meaning": "强迫",
    "id": 1877
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "conduct",
    "phonetic": "kən'dʌkt",
    "pos": "v.",
    "meaning": "引导，管理",
    "id": 1878
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "connect",
    "phonetic": "kə'nɛkt",
    "pos": "v.",
    "meaning": "连接，连结；联系",
    "id": 1879
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "combine",
    "phonetic": "kəm'baɪn",
    "pos": "v.",
    "meaning": "结合，联合；化合；n. 联合企业； 联合收割机",
    "id": 1880
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "relevant",
    "phonetic": "'rɛləvənt",
    "pos": "adj.",
    "meaning": "相关的",
    "id": 1881
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tiny",
    "phonetic": "'taɪni",
    "pos": "adj.",
    "meaning": "微小的",
    "id": 1882
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "policy",
    "phonetic": "'pɑləsi",
    "pos": "n.",
    "meaning": "政策，方针",
    "id": 1883
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "secretary",
    "phonetic": "'sɛkrətɛrɪ",
    "pos": "n.",
    "meaning": "秘书；书记；大臣",
    "id": 1884
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "medication",
    "phonetic": "'mɛdɪ'keʃən",
    "pos": "n.",
    "meaning": "药物治疗； 药物",
    "id": 1885
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "plastic",
    "phonetic": "'plæstɪk",
    "pos": "adj.",
    "meaning": "塑料的；塑性的",
    "id": 1886
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vote",
    "phonetic": "vot; voʊt",
    "pos": "v.",
    "meaning": "投票，选举",
    "id": 1887
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "relate",
    "phonetic": "rɪ'let",
    "pos": "v.",
    "meaning": "叙述；使联系",
    "id": 1888
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "relative",
    "phonetic": "'rɛlətɪv",
    "pos": "adj.",
    "meaning": "有关系的，相对的；n. 亲属， 亲戚",
    "id": 1889
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "correlate",
    "phonetic": "'kɔrəlet",
    "pos": "n.",
    "meaning": "互相关联的事物",
    "id": 1890
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "fatal",
    "phonetic": "'fetl",
    "pos": "adj.",
    "meaning": "致命的",
    "id": 1891
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "severe",
    "phonetic": "sɪ'vɪr",
    "pos": "adj.",
    "meaning": "艰难的；简朴的",
    "id": 1892
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "destructive",
    "phonetic": "dɪ'strʌktɪv",
    "pos": "adj.",
    "meaning": "破坏性的，毁灭性的",
    "id": 1893
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inherit",
    "phonetic": "ɪn'hɛrɪt",
    "pos": "v.",
    "meaning": "继承",
    "id": 1894
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "inherent",
    "phonetic": "ɪn'hɪrənt",
    "pos": "adj.",
    "meaning": "固有的",
    "id": 1895
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "legacy",
    "phonetic": "'lɛgəsi",
    "pos": "n.",
    "meaning": "遗产，遗赠；先人(或过去)留下的东西",
    "id": 1896
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intricate",
    "phonetic": "ˈɪntrəkət",
    "pos": "adj.",
    "meaning": "错综复杂的， 复杂精细的",
    "id": 1897
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "intrinsic",
    "phonetic": "ɪn'trɪnsɪk",
    "pos": "adj.",
    "meaning": "本质的，固有的",
    "id": 1898
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "extrinsic",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "外在的，外来的",
    "id": 1899
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "instinct",
    "phonetic": "'ɪnstɪŋkt",
    "pos": "n.",
    "meaning": "本能； 直觉， 生性",
    "id": 1900
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "trait",
    "phonetic": "tret",
    "pos": "n.",
    "meaning": "特点",
    "id": 1901
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "notion",
    "phonetic": "'noʃən",
    "pos": "n.",
    "meaning": "想法，观点",
    "id": 1902
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "official",
    "phonetic": "əˈfɪʃəl; oʊˈfɪʃəl",
    "pos": "adj.",
    "meaning": "官员的；官方的",
    "id": 1903
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "represent",
    "phonetic": ",rɛprɪ'zɛnt",
    "pos": "vt.",
    "meaning": "作为…的代表， 表示， 象征； 描绘， 表现",
    "id": 1904
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "replace",
    "phonetic": "rɪ'ples",
    "pos": "v.",
    "meaning": "把……放回原处",
    "id": 1905
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "displace",
    "phonetic": "dɪs'ples",
    "pos": "v.",
    "meaning": "取代",
    "id": 1906
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "display",
    "phonetic": "dɪ'sple",
    "pos": "",
    "meaning": "n&vt. 陈列， 展览； 显示",
    "id": 1907
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "explode",
    "phonetic": "ɪk'splod",
    "pos": "v.",
    "meaning": "使爆炸；v. 爆炸",
    "id": 1908
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "explosive",
    "phonetic": "ɪk'splosɪv; ɪk'splozɪv",
    "pos": "n.",
    "meaning": "炸药；adj. 爆炸的",
    "id": 1909
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "explore",
    "phonetic": "ɪk'splɔr",
    "pos": "v.",
    "meaning": "探险， 探索； 仔细查阅， 探究",
    "id": 1910
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "exploit",
    "phonetic": "ɪk'splɔɪt",
    "pos": "v.",
    "meaning": "开发，开采",
    "id": 1911
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "abstract",
    "phonetic": "'æbstrækt",
    "pos": "adj.",
    "meaning": "抽象的",
    "id": 1912
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "subtract",
    "phonetic": "səb'trækt",
    "pos": "vt.",
    "meaning": "减， 减去； 去掉",
    "id": 1913
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "extract",
    "phonetic": "'ɛkstrækt",
    "pos": "v.",
    "meaning": "取出；提取；n. 摘录",
    "id": 1914
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "contract",
    "phonetic": "'kɑntrækt",
    "pos": "v.",
    "meaning": "缩小； 订合同； 感染， 染上；n. 契约， 合同",
    "id": 1915
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "cumulative",
    "phonetic": "'kjumjəletɪv",
    "pos": "adj.",
    "meaning": "积累的",
    "id": 1916
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "forum",
    "phonetic": "'fɔrəm",
    "pos": "n.",
    "meaning": "论坛，讨论会",
    "id": 1917
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "platform",
    "phonetic": "'plæt'fɔrm",
    "pos": "n.",
    "meaning": "政纲，党纲，宣言",
    "id": 1918
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "willpower",
    "phonetic": "",
    "pos": "n.",
    "meaning": "意志力",
    "id": 1919
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "landscape",
    "phonetic": "'lænd'skep",
    "pos": "n.",
    "meaning": "风景，景色，景致",
    "id": 1920
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "stereotype",
    "phonetic": "'stɛrɪətaɪp",
    "pos": "n.",
    "meaning": "刻板印象，固有印象",
    "id": 1921
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "gadget",
    "phonetic": "",
    "pos": "n.",
    "meaning": "小器具；小装置",
    "id": 1922
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "plunge",
    "phonetic": "plʌndʒ",
    "pos": "",
    "meaning": "n&v. 纵身投入， 猛冲， 猛跌",
    "id": 1923
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "drought",
    "phonetic": "draʊt",
    "pos": "n.",
    "meaning": "干旱",
    "id": 1924
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "resort",
    "phonetic": "rɪ'zɔrt",
    "pos": "n.",
    "meaning": "度假胜地",
    "id": 1925
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "render",
    "phonetic": "'rɛndɚ",
    "pos": "v.",
    "meaning": "给予",
    "id": 1926
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "surrender",
    "phonetic": "sə'rɛndɚ",
    "pos": "v.",
    "meaning": "交出；v. 投降",
    "id": 1927
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "circumstance",
    "phonetic": "'sɝkəmstæns",
    "pos": "n.",
    "meaning": "情况，环境",
    "id": 1928
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "surround",
    "phonetic": "sə'raʊnd",
    "pos": "vt.",
    "meaning": "围， 围绕； 圈住",
    "id": 1929
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "circulate",
    "phonetic": "'sɝkjəlet",
    "pos": "v.",
    "meaning": "使循环；v. 循环",
    "id": 1930
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "digest",
    "phonetic": "daɪ'dʒɛst",
    "pos": "vt.",
    "meaning": "消化， 领会；n. 文摘",
    "id": 1931
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mood",
    "phonetic": "mud",
    "pos": "n.",
    "meaning": "心情",
    "id": 1932
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "coast",
    "phonetic": "kost",
    "pos": "n.",
    "meaning": "海岸，海滨(地区)",
    "id": 1933
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "critic",
    "phonetic": "'krɪtɪk",
    "pos": "n.",
    "meaning": "批评家， 爱挑剔的人",
    "id": 1934
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "dynamic",
    "phonetic": "daɪ'næmɪk",
    "pos": "adj.",
    "meaning": "动力的， 动力学的； 动态的； 有活力的， 有生气的",
    "id": 1935
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "energetic",
    "phonetic": ",ɛnɚ'dʒɛtɪk",
    "pos": "adj.",
    "meaning": "积极的；精力旺盛的",
    "id": 1936
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "enthusiastic",
    "phonetic": "ɪn,θuzɪ'æstɪk",
    "pos": "adj.",
    "meaning": "热情的",
    "id": 1937
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "envy",
    "phonetic": "'ɛnvi",
    "pos": "",
    "meaning": "vt&n. 妒忌；羡慕",
    "id": 1938
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "hospitable",
    "phonetic": "hɑ'spɪtəbl",
    "pos": "adj.",
    "meaning": "热情友好的",
    "id": 1939
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "notable",
    "phonetic": "'notəbl",
    "pos": "adj.",
    "meaning": "值得注意的；著名的",
    "id": 1940
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "exclude",
    "phonetic": "ɪk'sklʊd",
    "pos": "vt.",
    "meaning": "把…排除在外",
    "id": 1941
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sheer",
    "phonetic": "ʃɪr",
    "pos": "adj.",
    "meaning": "纯粹的",
    "id": 1942
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "literary",
    "phonetic": "lɪtərɛri",
    "pos": "adj.",
    "meaning": "文学的",
    "id": 1943
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "literal",
    "phonetic": "'lɪtərəl",
    "pos": "adj.",
    "meaning": "字面的",
    "id": 1944
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mercy",
    "phonetic": "'mɝsi",
    "pos": "n.",
    "meaning": "仁慈，慈悲，恩惠",
    "id": 1945
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sympathetic",
    "phonetic": ",sɪmpə'θɛtɪk",
    "pos": "adj.",
    "meaning": "同情的",
    "id": 1946
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pathetic",
    "phonetic": "pə'θɛtɪk",
    "pos": "adj.",
    "meaning": "哀婉动人的；可怜的",
    "id": 1947
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "naive",
    "phonetic": "naɪ'iv",
    "pos": "adj.",
    "meaning": "幼稚的； 天真的； 轻信的",
    "id": 1948
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "obedient",
    "phonetic": "oˈbidiənt",
    "pos": "adj.",
    "meaning": "服从的，顺从的",
    "id": 1949
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "raw",
    "phonetic": "rɔ",
    "pos": "adj.",
    "meaning": "未煮过的；未加工的",
    "id": 1950
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "crude",
    "phonetic": "krud",
    "pos": "adj.",
    "meaning": "简陋的；天然的",
    "id": 1951
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tedious",
    "phonetic": "'tidɪəs",
    "pos": "adj.",
    "meaning": "冗长的",
    "id": 1952
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "startle",
    "phonetic": "'stɑrtl",
    "pos": "v.",
    "meaning": "使惊讶",
    "id": 1953
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pastime",
    "phonetic": "'pæstaɪm",
    "pos": "n.",
    "meaning": "消遣， 娱乐",
    "id": 1954
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "recreation",
    "phonetic": ",rɛkrɪ'eʃən",
    "pos": "n.",
    "meaning": "消遣，娱乐活动",
    "id": 1955
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "amuse",
    "phonetic": "ə'mjuz",
    "pos": "v.",
    "meaning": "逗…乐；给…娱乐",
    "id": 1956
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "routine",
    "phonetic": "rʊ'tin",
    "pos": "adj.",
    "meaning": "日常的；n. 常规",
    "id": 1957
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "agenda",
    "phonetic": "ə'dʒɛndə",
    "pos": "n.",
    "meaning": "议程",
    "id": 1958
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "drain",
    "phonetic": "dren",
    "pos": "v.",
    "meaning": "（水等）流掉",
    "id": 1959
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "latitude",
    "phonetic": "'lætɪtud",
    "pos": "n.",
    "meaning": "纬度；黄纬",
    "id": 1960
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "aptitude",
    "phonetic": "",
    "pos": "n.",
    "meaning": "天资；天赋",
    "id": 1961
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "bullet",
    "phonetic": "'bʊlɪt",
    "pos": "n.",
    "meaning": "枪弹，子弹，弹丸",
    "id": 1962
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "coupon",
    "phonetic": "'kupɑn",
    "pos": "n.",
    "meaning": "礼券， 优惠券； 配给券， 票证",
    "id": 1963
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "voucher",
    "phonetic": "",
    "pos": "n.",
    "meaning": "代币券；购物券",
    "id": 1964
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "sum",
    "phonetic": "sʌm",
    "pos": "n.",
    "meaning": "总数；金额；v. 共计",
    "id": 1965
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "arithmetic",
    "phonetic": "ə'rɪθmətɪk",
    "pos": "n.",
    "meaning": "算术，四则运算",
    "id": 1966
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "audit",
    "phonetic": "'ɔdɪt",
    "pos": "v.",
    "meaning": "审计；[审计] 查账；n. 审计；[审计] 查账",
    "id": 1967
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "auditory",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "听觉的",
    "id": 1968
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "coalition",
    "phonetic": "ˌkoʊəˈlɪʃn",
    "pos": "n.",
    "meaning": "结合体， 同盟； 结合， 联合",
    "id": 1969
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "hurl",
    "phonetic": "hɝl",
    "pos": "v.",
    "meaning": "猛投",
    "id": 1970
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "measure",
    "phonetic": "'mɛʒɚ",
    "pos": "n.",
    "meaning": "措施",
    "id": 1971
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "mow",
    "phonetic": "",
    "pos": "v.",
    "meaning": "割;修剪",
    "id": 1972
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "Catholic",
    "phonetic": "kæθəlɪk",
    "pos": "adj.",
    "meaning": "天主教的；n. 天主教徒",
    "id": 1973
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "navy",
    "phonetic": "'nevi",
    "pos": "n.",
    "meaning": "海军",
    "id": 1974
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tenure",
    "phonetic": "",
    "pos": "n.",
    "meaning": "（尤指重要政治职务的）任期，任职；（尤指大学教师的）终身职位，长期聘用",
    "id": 1975
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "diet",
    "phonetic": "'daɪət",
    "pos": "n.",
    "meaning": "日常饮食，日常食物",
    "id": 1976
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "calorie",
    "phonetic": "'kæləri",
    "pos": "n.",
    "meaning": "卡路里",
    "id": 1977
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "carbohydrate",
    "phonetic": ",kɑrbo'haɪdret",
    "pos": "n.",
    "meaning": "碳水化合物",
    "id": 1978
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "cocktail",
    "phonetic": "'kɑktel",
    "pos": "n.",
    "meaning": "鸡尾酒； 餐前开胃小吃； 混合物",
    "id": 1979
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "cafeteria",
    "phonetic": ",kæfə'tɪrɪə",
    "pos": "n.",
    "meaning": "自助餐厅",
    "id": 1980
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "livestock",
    "phonetic": "",
    "pos": "n.",
    "meaning": "牲畜；家畜",
    "id": 1981
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "quarter",
    "phonetic": "'kwɔrtɚ",
    "pos": "n.",
    "meaning": "四分之一；一刻钟",
    "id": 1982
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "terrace",
    "phonetic": "ˈterəs",
    "pos": "n.",
    "meaning": "平台，阳台，露台",
    "id": 1983
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "timber",
    "phonetic": "'tɪmbɚ",
    "pos": "n.",
    "meaning": "木材， 原木； 大木料， 栋木",
    "id": 1984
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "yard",
    "phonetic": "jɑrd",
    "pos": "n.",
    "meaning": "院子，庭院；场地",
    "id": 1985
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "acupuncture",
    "phonetic": "",
    "pos": "n.",
    "meaning": "针刺疗法",
    "id": 1986
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "appendix",
    "phonetic": "ə'pɛndɪks",
    "pos": "n.",
    "meaning": "附录；阑尾",
    "id": 1987
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "capsule",
    "phonetic": "ˈkæpsl;",
    "pos": "n.",
    "meaning": "胶囊； 航天舱， 密封舱",
    "id": 1988
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pulse",
    "phonetic": "pʌls",
    "pos": "n.",
    "meaning": "脉搏；脉冲，脉动",
    "id": 1989
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "thermometer",
    "phonetic": "θɚ'mɑmɪtɚ",
    "pos": "n.",
    "meaning": "温度计，寒暑表",
    "id": 1990
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "ward",
    "phonetic": "wɔrd",
    "pos": "n.",
    "meaning": "病房，病室；监房",
    "id": 1991
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "cricket",
    "phonetic": "'krɪkɪt",
    "pos": "n.",
    "meaning": "板球；蟋蟀",
    "id": 1992
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "yoga",
    "phonetic": "",
    "pos": "n.",
    "meaning": "瑜伽",
    "id": 1993
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "verse",
    "phonetic": "vɝs",
    "pos": "n.",
    "meaning": "诗，韵文；诗节",
    "id": 1994
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "tribe",
    "phonetic": "traɪb",
    "pos": "n.",
    "meaning": "部落； 族",
    "id": 1995
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "vent",
    "phonetic": "vɛnt",
    "pos": "n.",
    "meaning": "通风口，排放口；开衩；vt. 表达， 发泄",
    "id": 1996
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "solo",
    "phonetic": "'solo",
    "pos": "n.",
    "meaning": "独唱，独奏；独唱曲",
    "id": 1997
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "atlas",
    "phonetic": "",
    "pos": "n.",
    "meaning": "地图集",
    "id": 1998
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "carton",
    "phonetic": "",
    "pos": "n.",
    "meaning": "（尤指装食品或液体的）硬纸盒，塑料盒，塑料罐；硬纸盒（或塑料盒）所装物品",
    "id": 1999
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "brochure",
    "phonetic": "bro'ʃʊr",
    "pos": "n.",
    "meaning": "小册子",
    "id": 2000
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "chemical",
    "phonetic": "'kɛmɪkl",
    "pos": "adj.",
    "meaning": "化学的 n. 化学制品",
    "id": 2001
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "lever",
    "phonetic": "'lɛvɚ",
    "pos": "n.",
    "meaning": "途径，工具，手段",
    "id": 2002
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "leaflet",
    "phonetic": "'liflət",
    "pos": "n.",
    "meaning": "传单",
    "id": 2003
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "minibus",
    "phonetic": "'mɪnɪbʌs",
    "pos": "n.",
    "meaning": "小型公共汽车",
    "id": 2004
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "pedal",
    "phonetic": "'pɛdl",
    "pos": "n.",
    "meaning": "（自行车的）踏脚，踏板，脚蹬；（汽车或机器的）踏板",
    "id": 2005
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "rail",
    "phonetic": "rel",
    "pos": "n.",
    "meaning": "横条，横杆；铁轨",
    "id": 2006
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "derail",
    "phonetic": "dɪ'rel",
    "pos": "v.",
    "meaning": "脱轨",
    "id": 2007
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "reel",
    "phonetic": "ril",
    "pos": "v.",
    "meaning": "卷，绕",
    "id": 2008
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "chapel",
    "phonetic": "'tʃæpl",
    "pos": "n.",
    "meaning": "小教堂， 祈祷室",
    "id": 2009
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "probable",
    "phonetic": "'prɑbəbl",
    "pos": "adj.",
    "meaning": "或有的；大概的",
    "id": 2010
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "concert",
    "phonetic": "'kɑnsɚt",
    "pos": "n.",
    "meaning": "一齐，一致，协作",
    "id": 2011
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "architect",
    "phonetic": "'ɑrkɪtɛkt",
    "pos": "n.",
    "meaning": "建筑师；创造者",
    "id": 2012
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "architecture",
    "phonetic": "'ɑrkə'tɛktʃɚ",
    "pos": "n.",
    "meaning": "建筑学；建筑式样",
    "id": 2013
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "Arctic",
    "phonetic": "'ɑrktɪk",
    "pos": "adj.",
    "meaning": "北极的；n. 北极",
    "id": 2014
  },
  {
    "type": "word",
    "unit": "六级核心词汇",
    "term": "summarize",
    "phonetic": "'sʌmə,raɪz",
    "pos": "v.",
    "meaning": "总结；概括",
    "id": 2015
  }
];
