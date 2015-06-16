//Hipaa =  new Meteor.Collection("hipaa");

Session.setDefault("hipaaSearchFilter", '');
Session.setDefault("hipaaTypeFilter", '');


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
  getHipaaSearchFilter: function(){
    return Session.get('hipaaSearchFilter');
  },
  hipaaAudit: function () {
    return Hipaa.find({$or: [
        {userName: {$regex: Session.get('hipaaSearchFilter'), $options: 'i'}},
        {patientName: {$regex: Session.get('hipaaSearchFilter'), $options: 'i'}}
      ],
      type: {$regex: Session.get("hipaaTypeFilter"), $options: 'i'}
      }
      ,{sort:{timestamp: -1}});
  }
});

Template.hipaaLogPage.events({
  "keyup #hipaaSearchFilter": function(event, template){
     Session.set("hipaaSearchFilter", $('#hipaaSearchFilter').val());
  }
});


//==================================================================================================
// HIPAA EVENT RECORD

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
