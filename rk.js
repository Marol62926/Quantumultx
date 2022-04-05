let object = JSON.parse($response.body);

object.replace(/"appActivePrice":2500/, '"appActivePrice":0');
$done({body: JSON.stringify(obj)});
