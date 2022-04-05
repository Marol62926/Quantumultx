var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj = 
{
  "status" : 0,
  "data" : {
    "uidProductInfo" : [

    ],
    "didSubscribeType" : 0,
    "didProductInfo" : [

    ],
    "vipUserRedeemLogInfoList" : [

    ],
    "vipUserProductInfo" : {
      "reBuyPromotionText" : "",
      "promotionTextType" : 1,
      "promotionText" : "新会员专享一甜VIP首充特惠",
      "myProducts" : [

      ],
      "trailStatus" : 0,
      "expireTime" : 1743855103000,
      "isInExpireRenewDuration" : 0,
      "vip" : true,
      "subscribeType" : 1
    },
    "uidSubscribeType" : 0
  },
  "extraInfo" : {

  },
  "message" : "SUCCESS",
  "serverTm" : 1649149331293
}



body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
