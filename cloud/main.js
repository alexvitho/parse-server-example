

Parse.Cloud.define("pushNotification", function(request, response) {
  var params = request.params;
  var user = request.user;
  var query = new Parse.Query(Parse.Installation);
  query.exists("deviceToken");

  var payload = {
    attibute1: "yoni",
    attibute2: "alex",
    attibute3: "leon"
  };
  
  payload.attibute1 = request.Attibute1;
  payload.attibute2 = request.Attibute2;
  payload.attibute3 = request.Attibute3;
  
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
