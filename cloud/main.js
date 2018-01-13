
// Depends on this function: https://github.com/codepath/parse-server-example/blob/master/cloud/main.js
Parse.Cloud.define('pushNotification', function(request, response) {

  // request has 2 parameters: params passed by the client and the authorized user
  var params = request.params;
  var user = request.user;

  // extract out the channel to send
  var action = params.action;
  var first = params.first;
  var second = params.second;
  var notify = params.notify;

  // use to custom tweak whatever payload you wish to send
  var pushQuery = new Parse.Query(Parse.Installation);
  pushQuery.equalTo("deviceType", "android");

  var payload =  {
        "action": action,
        "first": first,
        "second": second,
        "notify": notify
  };

  // Note that useMasterKey is necessary for Push notifications to succeed.

  Parse.Push.send({
  where: pushQuery,      // for sending to a specific channel                                                                                                                                 
    data: payload,
  }, { success: function() {
     console.log("#### PUSH OK");
  }, error: function(error) {
     console.log("#### PUSH ERROR" + error.message);
  }, useMasterKey: true});

  response.success('techAlertSuccessConnecting');
});
