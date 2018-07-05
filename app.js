//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  showErrorToast(_this, title, duration) {
    _this.setData({
      errorToast: {
        show: true,
        title: title,
        duration: duration
      }
    });
    setTimeout(() => {
      this.hideToast(_this);
    }, duration);
  },
  hideToast: function (_this) {
    _this.setData({
      'errorToast.show': false
    });
  },
  globalData: {
    userInfo: {
      points:"",
      rank: "",
      fragment: "",
      userId: ""
    }
  }
})