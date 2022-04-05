var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj = {
  "message" : "SUCCESS",
  "data" : {
    "vip" : true,
    "sign_status_upgrade" : true,
    "vip_expired_days" : 0,
    "feedback" : true,
    "img_url" : "https://storage.360buyimg.com/i.imageUpload/6a645f3532326532373739316262653831363230313239303731393934_big.jpg",
    "vip_remain_days" : 518,
    "vip_list" : [
      {
        "sku_id" : 30390645,
        "apple_price" : 25,
        "can_buy" : true,
        "jd_pay_buy_vip" : false,
        "vip_discount_desc_type" : 3,
        "apple_id" : "ebk_30390645",
        "service_desc" : "一个月",
        "jd_price" : 25,
        "origin_price" : 30,
        "seq" : 1
      },
      {
        "sku_id" : 30390644,
        "apple_price" : 68,
        "can_buy" : true,
        "jd_pay_buy_vip" : false,
        "vip_discount_desc_type" : 3,
        "apple_id" : "ebk_30390644",
        "service_desc" : "三个月",
        "jd_price" : 68,
        "origin_price" : 88,
        "seq" : 2
      },
      {
        "service_desc" : "一年",
        "jd_pay_buy_vip" : false,
        "apple_id" : "ebk_30705968",
        "vip_discount_desc_type" : 0,
        "apple_price" : 198,
        "sku_id" : 30705968,
        "seq" : 3,
        "can_buy" : true,
        "activity_id" : 1585,
        "activity_type" : "vip_all_user_discount",
        "origin_price" : 298,
        "jd_price" : 198
      }
    ],
    "show_redeem_coupon" : false,
    "auto_subscription_vip" : {
      "service_desc" : "连续包月",
      "jd_pay_buy_vip" : false,
      "apple_id" : "AutoSub_30407270",
      "vip_discount_desc_type" : 0,
      "apple_price" : 25,
      "sku_id" : 30407270,
      "seq" : 0,
      "can_buy" : true,
      "activity_id" : 0,
      "activity_type" : "",
      "origin_price" : -1,
      "jd_price" : 25,
      "status" : 0
    },
    "pin" : "jf_3c******4f3c5",
    "show_vip_coupon" : true,
    "nickname" : "jf_3cem4m7f4f3c5",
    "vip_expire_time" : 1693929599000,
    "show_vip_benefits" : 1,
    "days7" : {
      "sku_id" : 30607590,
      "apple_price" : 1,
      "can_buy" : true,
      "jd_pay_buy_vip" : false,
      "vip_discount_desc_type" : 0,
      "apple_id" : "ebk_30607590",
      "service_desc" : "七天",
      "jd_price" : 1,
      "purchased" : false,
      "desc" : "每个账号限购一次",
      "seq" : 0
    }
  },
  "result_code" : 0
}


body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
