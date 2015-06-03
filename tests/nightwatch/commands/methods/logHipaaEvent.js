




exports.command = function(hipaaEvent, timeout) {
  var client = this;
  this
    .execute(function(data){
      return HipaaLogger.logEventObject(data);
    }, [hipaaEvent], function(result){
      console.log("result.value", result.value);
      client.assert.ok(result.value);
    }).pause(1000)
    return this;
};
