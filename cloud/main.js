
Parse.Cloud.define("pushNotification", function(request, response) {
  var query = new Parse.Query(Parse.Installation);
  query.exists("deviceToken");

  var payload = {
    "action": "after save push",
    "arg1": "after save push",
     "arg2": "after save push"
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
