// ============================================================
//  六级单词 / 短语 / 语法 数据文件
//  统一结构 DATA：每条记录含 type 与 unit，用于分类筛选。
//  type: 'word' 单词 | 'phrase' 短语 | 'grammar' 语法
//  unit: '核心词' | '第一单元' | '第二单元'
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
  }
];
