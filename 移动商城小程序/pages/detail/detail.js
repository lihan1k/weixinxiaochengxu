var WxAutoImage = require('../../js/wxAutoImageCal.js');
var productData=require("../../data/data.js").productlist;
Page({
    data:{
        
    },
    cusImageLoad: function(e){
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
  },
  onLoad:function(option){
      var that=this;
      var id=option.id;
      console.log(option)
      console.log(option.id);
      var detail=productData.friuts[id]||(productData.grains[id-productData.friuts.length]);
      var serviceicon=productData.serviceicon;
      var servicetext=productData.servicetext;
      console.log(servicetext)
      console.log(detail);
      console.log(serviceicon)
      that.setData({
          detail:detail,
          serviceicon:serviceicon,
          servicetext:servicetext,
      })
   }
})