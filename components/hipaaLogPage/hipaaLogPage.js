//Hipaa =  new Meteor.Collection("hipaa");

Meteor.subscribe('hipaa');

/*Router.map(function() {
  this.route("hipaaLogRoute", {
    path: "/audit",
    template: "hipaaLogPage"
  });
});*/

Router.route("/audit", {
  template: "hipaaLogPage",
  name: "hipaaAuditLogRoute"
});


Template.hipaaLogPage.helpers({
  hipaaAudit: function () {
    return Hipaa.find({},{sort:{timestamp: -1}});
  }
});


Template.hipaaEntry.helpers({
  getUserName:function(){
    if(this.userName){
      return this.userName;
    }else{
      return "---";
    }
  },
  getPatientName:function(){
    if(this.patientName){
      return this.patientName;
    }else{
      return "---";
    }
  },
  hasPatientInfo:function(){
    if(this.patientName){
      return true;
    }else{
      return false;
    }
  },
  getErrorMessage:function(){
    if(this.message){
      return this.message;
    }else{
      return "---";
    }
  },
  getCollectionName: function(){
    if(this.collectionName){
      return this.collectionName;
    }else{
      return "---";
    }
  },
  getRecordId:function(){
    if(this.recordId){
      return this.recordId;
    }else{
      return "---";
    }
  },
  entryTimestamp: function(){
    return moment(this.timestamp).format("YYYY, MMM DD, hh:mm A");
  },
  entryTime: function(){
    return moment(this.timestamp).format("HH:MM A");
  },
  entryDate: function(){
    return moment(this.timestamp).format("YYYY, MMM DD");
  },
  logMessageType: function(messageType){
    if(this.type === messageType){
      return true;
    }else{
      return false;
    }
  }
});
