
// Depends on this function: https://github.com/codepath/parse-server-example/blob/master/cloud/main.js
Parse.Cloud.define('pushChannelTest', function(request, response) {

  // request has 2 parameters: params passed by the client and the authorized user
  var params = request.params;
  var user = request.user;

  // extract out the channel to send
  var action = params.action;
  var message = params.message;
  var customData = params.customData;

  // use to custom tweak whatever payload you wish to send
  var pushQuery = new Parse.Query(Parse.Installation);
  pushQuery.equalTo("deviceType", "android");

  var payload = {"data": {
      "alert": message,
      "action": action,
      "customdata": customData}
                };

  // Note that useMasterKey is necessary for Push notifications to succeed.

Parse.Push.send({
  channels: ['test-channel'],
  data: {
    alert: 'Test',
    badge: 1,
    sound: 'default'
  }
}, { useMasterKey: true }).then(() => {
  console.log('Push ok');
}, (e) => {
  console.log('Push error', e);
});
