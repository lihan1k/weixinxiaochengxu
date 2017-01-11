Page({
  data:{
    sumprice:0,
    hiddening:false,
    //本地测试数据
    goods:[
        {
          "id":1,
          "name":"青菜",
          "pz":"品种:小青菜 产地:四川",
          "imgUrl":"../../image/dining-1-2.jpg",
          "price":"￥8.90","imgSelected":"../../image/s2.png",
          "delImg":"../../image/icon-delete.png",
          "inputValue":1,
        },
        {
          "id":2,
          "name":"羊肉",
          "pz":"品种:肥羊卷 产地:澳洲",
          "imgUrl":"../../image/dining-18-2.jpg",
          "price":"￥8.90","imgSelected":"../../image/s2.png",
          "delImg":"../../image/icon-delete.png",
          "inputValue":2,
          },
        {
          "id":3,
          "name":"猕猴桃",
          "pz":"品种:黄心猕猴桃 产地:海南",
          "imgUrl":"../../image/imported-14-1.jpg",
          "price":"￥8.90","imgSelected":"../../image/s2.png",
          "delImg":"../../image/icon-delete.png",
          "inputValue":3,
          },
        {
          "id":4,
          "name":"红牛",
          "pz":"品种:红牛 产地:中国",
          "imgUrl":"../../image/drank-4.jpg",
          "price":"￥8.90","imgSelected":"../../image/s2.png",
          "delImg":"../../image/icon-delete.png",
          "inputValue":4,
          },
        {
          "id":5,
          "name":"腰果",
          "pz":"品种:丹迪腰果 产地:海南",
          "imgUrl":"../../image/local-2-1.jpg",
          "price":"￥8.90","imgSelected":"../../image/s2.png",
          "delImg":"../../image/icon-delete.png",
          "inputValue":1,
        },
        {
          "id":6,
          "name":"腰果",
          "pz":"品种:丹迪腰果 产地:海南",
          "imgUrl":"../../image/imported-12.jpg",
          "price":"￥8.90","imgSelected":"../../image/s2.png",
          "delImg":"../../image/icon-delete.png",
          "inputValue":5,
        },
        {
          "id":7,
          "name":"腰果",
          "pz":"品种:丹迪腰果 产地:海南",
          "imgUrl":"../../image/imported-18.jpg",
          "price":"￥8.90",
          "imgSelected":"../../image/s2.png",
          "delImg":"../../image/icon-delete.png",
          "inputValue":6,
        },
        {
          "id":8,
          "name":"腰果",
          "pz":"品种:丹迪腰果 产地:海南",
          "imgUrl":"../../image/tea-11.png",
          "price":"￥8.90",
          "imgSelected":"../../image/s2.png",
          "delImg":"../../image/icon-delete.png",
          "inputValue":7,
          },
        {
          "id":9,
          "name":"腰果",
          "pz":"品种:丹迪腰果 产地:海南",
          "imgUrl":"../../image/tea-13-1.jpg",
          "price":"￥8.90",
          "imgSelected":"../../image/s2.png",
          "delImg":"../../image/icon-delete.png",
          "inputValue":8,
        },
        {
          "id":10,
          "name":"腰果",
          "pz":"品种:丹迪腰果 产地:海南",
          "imgUrl":"../../image/tea-17.jpg",
          "price":"￥8.90",
          "imgSelected":"../../image/s2.png",
          "delImg":"../../image/icon-delete.png",
          "inputValue":10,
        },
        {
          "id":11,
          "name":"腰果",
          "pz":"品种:丹迪腰果 产地:海南",
          "imgUrl":"../../image/tea-19.jpg",
          "price":"￥8.90",
          "imgSelected":"../../image/s2.png",
          "delImg":"../../image/icon-delete.png",
          "inputValue":3,
        }
          ]
     },
  selectState(e){
       let dish=e.currentTarget.dataset.dish;
       
       this.setStatus(dish)
  },
  setStatus(dishId){
      let dishes = this.data.goods;
      for (let dish of dishes){
        dish.forEach((item) => {
          if(item.id == dishId){
            item.status = !item.status || false
          }
        })
      }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    setTimeout(function(){
         that.setData({
           hiddening:true
         })
    },2000)
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    this.sumcalc();
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  //加
  bindadd:function(event){
     var that=this;
     var cartid=event.currentTarget.dataset.cartid;
     var goodslist=that.data.goods;
     console.log(cartid);
     var num=0;
     var sum=that.data.sumprice;
     for(var i=0;i<goodslist.length;i++){
       if(goodslist[i].id==cartid){
            num=goodslist[i].inputValue+1;
            goodslist[i].inputValue=num;
            console.log(goodslist[i].id);
            //break; 
       }
     }
     that.sumcalc();
     that.setData({
       goods:goodslist,
     })
  },
  //减
  binddes:function(event){
     var that=this;
     var cartid=event.currentTarget.dataset.cartid;
     var goodslist=that.data.goods;
     console.log(cartid);
     var num=0;
     var sum=that.data.sumprice;
     for(var i=0;i<goodslist.length;i++){
       if(goodslist[i].id==cartid){
            num=goodslist[i].inputValue-1;
            if(num<1){
                num=1;
            }
            goodslist[i].inputValue=num;
            console.log(goodslist[i].id);
            //break;
       }
     }
     that.sumcalc();
     that.setData({
       goods:goodslist,
     })
  },
  //删除
  bindremove:function(event){
     var that=this;
     var cartid=event.currentTarget.dataset.cartid;
     var goodslist=that.data.goods;
     console.log(cartid);
     var num=0;
     var sum=that.data.sumprice;
     var index={};
     for(let i=0;i<goodslist.length;i++){
       goodslist[i].index=i;//闭包
       if(goodslist[i].id==cartid){
          wx.showModal({
              title: '提示',
              content: '这是一个模态弹窗',
              success: function(res) {
                if (res.confirm) {
                  console.log('用户点击确定');
                  goodslist.splice(goodslist[i].index,1);//从当前列表删除
                  console.log(goodslist);
                  that.setData({
                      goods:goodslist,
                  })
                  that.sumcalc();
                }
              }
            })
          console.log(goodslist[i].id);
          console.log(goodslist[i].index);
          //break;
       }
     }
     
  },
  //结算总计
  sumcalc:function(){
    var sum=0;
    var that=this;
    for(var i=0;i<that.data.goods.length;i++){
      var price=parseInt(that.data.goods[i].inputValue)*(that.data.goods[i].price.split('￥')[1]);
      console.log(price);
      sum+=price;
      console.log(sum);
    }
    sum=sum.toFixed(2)
    that.setData({
        sumprice:sum,
    })
  }
})