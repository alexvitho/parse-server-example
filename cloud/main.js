

Parse.Cloud.define("pushNotification", function(request, response) {
  console.log("yoni!!!!!!!!");
  console.log(request);
  var params = request.params;
  var user = request.user;
  var query = new Parse.Query(Parse.Installation);
  query.exists("deviceToken");

  var payload = {
    attibute1: "yoni",
    attibute2: "alex",
    attibute3: "leon"
  };
  

  
  Parse.Push.send({
      data: payload,
      where: query
    }, {
      useMasterKey: true
    }) 
    .then(function() {
      response.success("Push Sent!");
    }, function(error) {
      response.error("Error while trying to send push " + error.message);
    });
});
