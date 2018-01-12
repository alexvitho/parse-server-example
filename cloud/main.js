
Parse.Cloud.define("notifyUsers", function(request, response) {
  var query = new Parse.Query(Parse.Installation);
  query.exists("deviceToken");

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
