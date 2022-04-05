var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj = {
  "message" : "SUCCESS",
  "data" : {
    "vip" : true,
    "sign_status_upgrade" : false,
    "vip_expired_days" : 0,
    "feedback" : true,
    "img_url" : "https://img10.360buyimg.com/ebookadmin/jfs/t1/104697/37/15969/2383/5e780ef6E1fe37360/a32f18df884cb306.png.dpg",
    "vip_remain_days" : 365,
  "result_code" : 0
}

body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
