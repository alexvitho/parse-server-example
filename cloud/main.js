
Parse.Cloud.define("pushNotification", function(request, response) {

  // You can get parameters in here... You can access to specific parameter like this: 
  // request.params.{PARAM_NAME}

  // build the query for the push notification 
  // the query can be built by your parameters (e.g. to which userId or channel id etc.)
  var query = new Parse.Query(Parse.Installation);
  query.exists("deviceToken");

  // this is the push payload 
  var payload = {
    alert: "after save push",
    sound: "default"
      // ... add more here if required 
  };

  Parse.Push.send({
      data: payload,
      where: query
    }, {
      useMasterKey: true
    }) // useMasterKey is required currently 
    .then(function() {
      response.success("Push Sent!");
    }, function(error) {
      response.error("Error while trying to send push " + error.message);
    });
});
