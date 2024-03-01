let country_list = {
  CNY: "人民币",
  USD: "美元",
  EUR: "欧元",
  GBP: "英镑",
  JPY: "日元",
  AED: "阿联酋迪拉姆",
  AFN: "阿富汗尼",
  XCD: "东加勒比元",
  ALL: "阿尔巴尼亚列克",
  AMD: "亚美尼亚德拉姆",
  ANG: "荷兰盾",
  AOA: "安哥拉宽扎",
  ARS: "阿根廷比索",
  AUD: "澳大利亚元",
  AZN: "阿塞拜疆马纳特",
  BAM: "波斯尼亚马克",
  BBD: "巴巴多斯元",
  BDT: "孟加拉塔卡",
  XOF: "法郎",
  BGN: "保加利亚列弗",
  BHD: "巴林第纳尔",
  BIF: "布隆迪法郎",
  BMD: "百慕大元",
  BND: "文莱元",
  BOB: "玻利维亚诺",
  BRL: "巴西雷亚尔",
  BSD: "巴哈马元",
  NOK: "挪威克朗",
  BWP: "博茨瓦纳普拉",
  BYR: "白俄罗斯卢布",
  BZD: "伯利兹元",
  CAD: "加拿大元",
  CDF: "刚果法郎",
  XAF: "中非共和国法郎",
  CHF: "瑞士法郎",
  CLP: "智利比索",
  COP: "哥伦比亚比索",
  CRC: "哥斯达黎加科朗",
  CUP: "古巴比索",
  CVE: "佛得角埃斯库多",
  CZK: "捷克克朗",
  DJF: "吉布提法郎",
  DKK: "丹麦克朗",
  DOP: "多米尼加比索",
  DZD: "阿尔及利亚第纳尔",
  ECS: "厄瓜多尔美元",
  EGP: "埃及镑",
  ETB: "埃塞俄比亚比尔",
  FJD: "斐济元",
  FKP: "福克兰群岛镑",
  GEL: "格鲁吉亚拉里",
  GGP: "根西镑",
  GHS: "加纳塞地",
  GIP: "直布罗陀镑",
  GMD: "冈比亚达拉西",
  GNF: "几内亚法郎",
  GTQ: "危地马拉格查尔",
  GYD: "圭亚那元",
  HKD: "港元",
  HNL: "洪都拉斯伦皮拉",
  HRK: "克罗地亚库纳",
  HTG: "海地古德",
  HUF: "匈牙利福林",
  IDR: "印尼盾",
  ILS: "以色列新谢克尔",
  INR: "印度卢比",
  IQD: "伊拉克第纳尔",
  IRR: "伊朗里亚尔",
  ISK: "冰岛克朗",
  JMD: "牙买加元",
  JOD: "约旦第纳尔",
  KES: "肯尼亚先令",
  KGS: "吉尔吉斯斯坦索姆",
  KHR: "柬埔寨瑞尔",
  KMF: "科摩罗法郎",
  KPW: "朝鲜朝元",
  KRW: "韩元",
  KWD: "科威特第纳尔",
  KYD: "开曼群岛元",
  KZT: "哈萨克斯坦坚戈",
  LAK: "老挝基普",
  LBP: "黎巴嫩镑",
  LKR: "斯里兰卡卢比",
  LRD: "利比里亚元",
  LSL: "莱索托洛蒂",
  LTL: "立陶宛立特",
  LVL: "拉脱维亚拉特",
  LYD: "利比亚第纳尔",
  MAD: "摩洛哥迪拉姆",
  MDL: "摩尔多瓦列伊",
  MGA: "马达加斯加阿里亚里",
  MKD: "马其顿第纳尔",
  MMK: "缅甸缅元",
  MNT: "蒙古图格里克",
  MOP: "澳门元",
  MRO: "毛里塔尼亚乌吉亚",
  MTL: "马耳他镑",
  MUR: "毛里求斯卢比",
  MVR: "马尔代夫卢菲亚",
  MWK: "马拉维克瓦查",
  MXN: "墨西哥比索",
  MYR: "马来西亚林吉特",
  MZN: "莫桑比克梅蒂卡尔",
  NAD: "纳米比亚元",
  XPF: "新喀里多尼亚太",
  NGN: "尼日利亚奈拉",
  NIO: "尼加拉瓜科多巴",
  NPR: "尼泊尔卢比",
  NZD: "新西兰元",
  OMR: "阿曼里亚尔",
  PAB: "巴拿马巴波亚",
  PEN: "秘鲁索尔",
  PGK: "巴布亚新几内亚基那",
  PHP: "菲律宾比索",
  PKR: "巴基斯坦卢比",
  PLN: "波兰兹罗提",
  PYG: "巴拉圭瓜拉尼",
  QAR: "卡塔尔里亚尔",
  RON: "罗马尼亚列伊",
  RSD: "塞尔维亚第纳尔",
  RUB: "俄罗斯卢布",
  RWF: "卢旺达法郎",
  SAR: "沙特里亚尔",
  SBD: "所罗门群岛元",
  SCR: "塞舌尔卢比",
  SDG: "苏丹镑",
  SEK: "瑞典克朗",
  SGD: "新加坡元",
  SKK: "斯洛伐克克朗",
  SLL: "塞拉利昂利昂",
  SOS: "索马里先令",
  SRD: "苏里南盾",
  STD: "圣多美和普林西比多布拉",
  SVC: "萨尔瓦多科朗",
  SYP: "叙利亚镑",
  SZL: "斯威士兰里兰吉尼",
  THB: "泰铢",
  TJS: "塔吉克斯坦索莫尼",
  TMT: "土库曼斯坦马纳特",
  TND: "突尼斯第纳尔",
  TOP: "汤加潘加",
  TRY: "土耳其里拉",
  TTD: "特立尼达和多巴哥元",
  TWD: "新台币",
  TZS: "坦桑尼亚先令",
  UAH: "乌克兰格里夫纳",
  UGX: "乌干达先令",
  UYU: "乌拉圭比索",
  UZS: "乌兹别克斯坦苏姆",
  VEF: "委内瑞拉玻利瓦尔",
  VND: "越南盾",
  VUV: "瓦努阿图瓦图",
  YER: "也门里亚尔",
  ZAR: "南非兰特",
  ZMK: "赞比亚克瓦查",
  ZWD: "津巴布韦元",
};

let flag_list = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};
