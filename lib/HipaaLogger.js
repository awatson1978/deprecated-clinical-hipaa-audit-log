/*
var hipaaEvent = {
  eventType: "",
  userId: "",
  userName: "",
  collectionName: "",
  recordId: "",
  patientId: "",
  patientName: "",
  message: ""
};
*/


HipaaLogger = {
  logEvent: function(hipaaEvent, userId, userName, collectionName, recordId, patientId, patientName, message){
    //console.log('logEvent', eventType, userId, userName, collectionName, recordId, patientId, patientName, message);

    var newHipaaRecord = {};
    var hipaaRecordId = null;

    if( typeof hipaaEvent === 'object'){
      newHipaaRecord = hipaaEvent;
    }else{
      newHipaaRecord.eventType = hipaaEvent;
    }

    //if(Meteor.isServer){
      newHipaaRecord.timestamp = new Date();
    //}

    if(userId){
      newHipaaRecord.userId = userId;
    }
    if(userName){
      newHipaaRecord.userName = userName;
    }
    if(recordId){
      newHipaaRecord.recordId = recordId;
    }
    if(collectionName){
      newHipaaRecord.collectionName = collectionName;
    }
    if(message){
      newHipaaRecord.message = message;
    }
    if(patientId){
      newHipaaRecord.patientId = patientId;
    }
    if(patientName){
      newHipaaRecord.patientName = patientName;
    }

    hipaaRecordId = Hipaa.insert(newHipaaRecord);

    return hipaaRecordId;
  }
};
