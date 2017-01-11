require("../../app.js");
var WxAutoImage = require('../../js/wxAutoImageCal.js');
// pages/wode/wode.js
var app=getApp();
Page({
  data: {
    userImg:"../../image/defult_userimg.png",
    imgHeight:"80px",
    imgWidth:"80px",
    marginAuto:"0 auto",
    displayBlock:"block",
    borderCircle:"50%",
    userName:"xf_4072025",
    userOoperation1:[
      {"imgUrl":"../../image/m2.png","text":"我的订单"},
      {"imgUrl":"../../image/m6.png","text":"我的地址"},
      ],
    userOoperation2:[
      {"imgUrl":"../../image/m16.png","text":"客服中心"},
      {"imgUrl":"../../image/m13.png","text":"修改密码"}
    ]
  },
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
    this.getUserInfo;
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo);
              console.log(res);
            }
          })
        }
      })
    }
  },
})
