/*var hipaaEvent = {
  type: "",
  userId: "",
  userName: "",
  collectionName: "",
  recordId: "",
  error: "",
  patientId: "",
  patientName: ""
};*/


HipaaLogger = {
  logEvent: function(eventType, userId, userName, collectionName, recordId, patientId, patientName, message){
    console.log('logEvent', eventType, userId, userName, collectionName, recordId, patientId, patientName, message);

    var newRecord = {
      timestamp: new Date(),
      type: eventType
    };

    if(userId){
      newRecord.userId = userId;
    }
    if(userName){
      newRecord.userName = userName;
    }
    if(recordId){
      newRecord.recordId = recordId;
    }
    if(collectionName){
      newRecord.collectionName = collectionName;
    }
    if(message){
      newRecord.message = message;
    }
    if(patientId){
      newRecord.patientId = patientId;
    }
    if(patientName){
      newRecord.patientName = patientName;
    }

    console.log(Hipaa.insert(newRecord));
  },
  logEventObject: function(hipaaEvent){
    console.log('logEventObject', hipaaEvent);

    if(Meteor.isServer){
      hipaaEvent.timestamp = new Date();
    }

    var hipaaRecordId = Hipaa.insert(hipaaEvent);

    return hipaaRecordId;
  }

};
