var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj = {
  "upgradable" : false,
  "discounted_price" : 36100,
  "discount" : 400,
  "discount_description" : "限时抵扣￥4",
  "user_id" : "ehhekn",
  "is_bigmember" : true,
  "purchase_button_url" : "https://media-image1.baydn.com/storage_media_image/cmuatp/a9b7c106666ab232a39066112394dc97.b0ce6df5ae1509c729a9e0a37a874bd8.png"
}


body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
