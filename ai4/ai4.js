var body = $response.body;
var obj = JSON.parse(body);

obj.accounts.default.account.has_previously_paid_subscription = true
obj.accounts.default.account.processor = {
          "a001" : {
            "has_customer_object" : true
          },
          "b001" : {
            "has_transaction_history" : true
          }
        }

obj.accounts.default.entitlement = {
        "expires_at" : "2029-05-26T05:05:04Z",
        "subscription_id" : null,
        "subscription_plan" : "chatgptplusplan",
        "has_active_subscription" : true
      },
  
obj.accounts.default.last_active_subscription = {
        "subscription_id" : null,
        "will_renew" : true,
        "purchase_origin_platform" : "openai"
      }

body = JSON.stringify(obj);
$done({body});
