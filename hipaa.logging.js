HipaaLogger = {
  logEvent: function(eventType, userId, userName, collectionName, recordId, message, patientId, patientName){

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
  }
};
