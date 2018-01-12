

Parse.Cloud.define("pushNotification", function(request, response) {
  var params = request.params;
  var user = request.user;
  var att1 = params.attibute1;
  var att2 = params.attibute2;
  var att3 = params.attibute3;

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
