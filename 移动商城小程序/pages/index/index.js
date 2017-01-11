var WxAutoImage = require('../../js/wxAutoImageCal.js');
var productData=require("../../data/data.js").productlist;
//index.js
//获取应用实例

var app = getApp()
Page({
  data: {
    hiddening:true,
    userInfo: {},
    imgUrl:["../../image/1.jpg",
    "../../image/2.jpg",
    "../../image/3.jpg"],
    indicatorDots:true,
    autoplay:true,
    interval:'2000',
    duration:'1000',
    circular:true,
    headImg:"../../image/headline.png",
    headlinetext:"缤纷圣诞季，圣诞节礼物送她颜值高的甜蜜礼盒吧",
  },
  godetail:function(event){
      var goodid=event.currentTarget.dataset.goodid;
      console.log(goodid);
      wx.navigateTo({
        url: '../detail/detail?id='+goodid,
        success: function(res){
          // success
          console.log(event)
          
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
  },
  onShareAppMessage:function(){
        return{
          title:"小程序商城",
          desc:"全球最火商城",
          path:"/page/user?id=123"
        }
  },
  cusImageLoad: function(e){
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
  },
  tapName: function(event) {
    console.log(event)
  },
  onLoad:function(e){
       var that=this;
       this.setData({
           hiddening:false,
           productData:productData
           
       })
       //console.log(e);
       console.log(productData);

  },
  onReady:function(){
       var that=this;
       setTimeout(function(){
            that.setData({
              hiddening:true
            })
         console.log('close')                             
        },1000)
  }    
})
