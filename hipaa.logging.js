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

    hipaaEvent.timestamp = new Date();

    /*var newRecord = {
      timestamp: new Date(),
      type: hipaaEvent.type
    };

    if(hipaaEvent.userId){
      newRecord.userId = hipaaEvent.userId;
    }
    if(hipaaEvent.userName){
      newRecord.userName = hipaaEvent.userName;
    }
    if(hipaaEvent.recordId){
      newRecord.recordId = hipaaEvent.recordId;
    }
    if(hipaaEvent.collectionName){
      newRecord.collectionName = hipaaEvent.collectionName;
    }
    if(hipaaEvent.error){
      newRecord.message = hipaaEvent.error;
    }
    if(hipaaEvent.patientId){
      newRecord.patientId = hipaaEvent.patientId;
    }
    if(hipaaEvent.patientName){
      newRecord.patientName = hipaaEvent.patientName;
    }*/

    var hipaaRecordId = Hipaa.insert(hipaaEvent);
    //console.log("hipaaRecordId", hipaaRecordId);

    return hipaaRecordId;
  }

};
