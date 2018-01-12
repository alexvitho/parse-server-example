

Parse.Cloud.define("pushNotification", function(request, response) {
  console.log(request.params);
  var params = request.params;
  var user = request.user;
  var query = new Parse.Query(Parse.Installation);
  query.exists("deviceToken");

  var payload = {
    attibute1: "yoni",
    attibute2: "alex",
    attibute3: "leon"
  };
  
  
  
  payload.attibute1 = params.attibute1;
  payload.attibute2 = params.attibute2;
  payload.attibute3 = params.attibute3;
  
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
