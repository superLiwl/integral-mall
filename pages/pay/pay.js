//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    check1: "/images/check_true.png",
    check2: "/images/check_false.png",
  },

  check1: function (event) {
    this.setData({
      check1: "/images/check_true.png",
      check2: "/images/check_false.png",
    })
  },
  check2: function (event) {
    this.setData({
      check2: "/images/check_true.png",
      check1: "/images/check_false.png",
    })
  }
})
