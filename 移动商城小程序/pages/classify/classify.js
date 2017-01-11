// pages/classify/classify.js
var productData=require("../../data/data.js").productlist;
Page({
  data:{
      currenttabindex:0,
      currentmenuindex:0,
      productData:productData,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(productData);
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  bindtabbar:function(e){
      var that=this;
      var targetid=e.target.dataset.id;
      console.log(targetid);
      that.setData({
        currenttabindex:targetid,
        currentmenuindex:targetid
      })
  }
})