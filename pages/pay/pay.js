//获取应用实例
const app = getApp();
import util from '../../utils/util.js';
var api = require('../../utils/api.js');
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
  },
  toPayMoney: function () {
    var that = this;
    wx.request({
      url: api.url + '/ezShop/services/pay/getPayment',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var timeStamp = res.data.datas.timeStamp;
        var nonceStr = res.data.datas.nonceStr;
        var packageP = res.data.datas.packageP;
        var signType = res.data.datas.signType;
        var sign = res.data.datas.sign;
        wx.requestPayment({
          'timeStamp': timeStamp,
          'nonceStr': nonceStr,
          'package': packageP,
          'signType': signType,
          'paySign': sign,
          'success': function (res) {
            console.log("success：" + res);
          },
          'fail': function (res) {
            console.log("fail：" + res);
          },
          'complete': function (res) {
            console.log("complete：" + res);
          }
        });
      }
    });

    wx.requestPayment({
      'timeStamp': that.data.timeStamp,
      'nonceStr': that.data.nonceStr,
      'package': that.data.packageP,
      'signType': that.data.signType,
      'paySign': that.data.sign,
      'success': function (res) {
        console.log("success：" + res);
      },
      'fail': function (res) {
        console.log("fail：" + res);
      },
      'complete': function (res) {
        console.log("complete：" + res);
      }
    })
  },
})
