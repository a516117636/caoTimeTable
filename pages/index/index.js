//index.js
//获取应用实例
//"xqj":星期几   "skjc"：第几节课开始   "skcd"：持续几节课
var app = getApp()
Page({
  data: {
    colorArrays: ["#FC9F9D", "#0A9A84"],
    wlist: [
      { "xqj": 1, "skjc": 3, "skcd": 1, "kcmc": "54" },
      { "xqj": 1, "skjc": 4, "skcd": 1, "kcmc": "53" },
      { "xqj": 1, "skjc": 7, "skcd": 1, "kcmc": "53" },
      { "xqj": 1, "skjc": 8, "skcd": 1, "kcmc": "54" },
      { "xqj": 2, "skjc": 5, "skcd": 1, "kcmc": "54" },
      { "xqj": 2, "skjc": 6, "skcd": 1, "kcmc": "53" },
      { "xqj": 2, "skjc": 9, "skcd": 1, "kcmc": "54" },
      { "xqj": 2, "skjc": 11, "skcd": 1, "kcmc": "53" },
      { "xqj": 3, "skjc": 3, "skcd": 1, "kcmc": "54" },
      { "xqj": 3, "skjc": 4, "skcd": 1, "kcmc": "53" },
      { "xqj": 3, "skjc": 7, "skcd": 1, "kcmc": "54" },
      { "xqj": 3, "skjc": 8, "skcd": 1, "kcmc": "53" },
      { "xqj": 4, "skjc": 1, "skcd": 1, "kcmc": "53" },
      { "xqj": 4, "skjc": 2, "skcd": 1, "kcmc": "54" },
      { "xqj": 4, "skjc": 9, "skcd": 1, "kcmc": "53" },
      { "xqj": 4, "skjc": 10, "skcd": 1, "kcmc": "54" },
      { "xqj": 5, "skjc": 3, "skcd": 1, "kcmc": "54" },
      { "xqj": 5, "skjc": 4, "skcd": 1, "kcmc": "53" },
      { "xqj": 6, "skjc": 1, "skcd": 1, "kcmc": "54" },
      { "xqj": 6, "skjc": 2, "skcd": 1, "kcmc": "53" },
      { "xqj": 6, "skjc": 10, "skcd": 1, "kcmc": "53" },
      { "xqj": 6, "skjc": 11, "skcd": 1, "kcmc": "54" },
      { "xqj": 7, "skjc": 5, "skcd": 2, "kcmc": "54" },
      { "xqj": 7, "skjc": 7, "skcd": 2, "kcmc": "53" },
      { "xqj": 7, "skjc": 9, "skcd": 1, "kcmc": "测" },
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }
})