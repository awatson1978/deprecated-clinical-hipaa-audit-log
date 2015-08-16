clinical:hipaa-audit-log
====================================================

HIPAA logging and audit features for Meteor Apps built with Clinical UI.

![HipaaAuditLogScreenshot](https://raw.githubusercontent.com/awatson1978/clinical-hipaa-audit-log/master/screenshots/auditlog.png)

====================================================
#### Installation

````
meteor add clinical:hipaa-audit-log
````


====================================================
#### Collections

At installation, a Mongo collection is created named 'Hipaa', which users can find and insert into, but cannot update or remove records from.  This makes it an audit log that people can refer to later to find out what clinically relevant privacy events have occurred.


====================================================
#### API Requirements

This package depends on the ``acounts-base`` package, and generally relies on the user profile having a ``fullName`` field. If you don't have a field that stores the entire user's name, it's recommended that you create one; or at least create a helper function that will generate it.

````js
Meteor.user().profile.fullName
````

====================================================
#### EventType API

The following event types are provided by the Hipaa Audit Log package.

````
init
access
create
modify
clone
delete
denied
viewed
publish
unpublish
````

====================================================
#### Core API - Methods

````js
HipaaLogger.logEvent(eventType, userId, userName, collectionName, recordId, patientId, patientName, message);

var hipaaEvent = {
  eventType: "modified",
  userId: Meteor.userId(),
  userName: Meteor.user().profile.fullName,
  collectionName: "Medications",
  recordId: Random.id(),
  patientId: Session.get('currentPatientId'),
  patientName: Session.get('currentPatientName')
};
HipaaLogger.logEvent(hipaaEvent);
````



====================================================
#### Code Sample

In typical situations, HIPAA events will occur as parts of other functions, usually related to adding, viewing, or removing data.

````js
Template.samplePage.events({
  'click #saveButton': function (evt, tmpl) {
    var self = this;

    Vitals.update({_id: this._id},{$set:{
      stared: true
    }}, function(error, result){
      if(error){
        HipaaLogger.logEvent("error", Meteor.userId(), Meteor.user().profile.fullName, "Vitals", null, null, null, error);
      }
      if(result){
        HipaaLogger.logEvent("create", Meteor.userId(), Meteor.user().profile.fullName, "Vitals", null, null, null, null);
      }
    });
  }
});
````



====================================================
#### Styling and Classes

You can adjust the styling of the audit log through the configuration object.  The following example shows how to style the audit log with Bootstrap controls.

````js
  HipaaAuditLog.configure({
    classes: {
      input: "form-control squee",
      select: "form-control",
      ribbon: ""
    },
    highlightColor: "#006289"
  });
````


====================================================
#### StarryNight/Nightwatch API - Provides

````js
// component API calls
reviewHipaaAuditLogPage()
hipaaLogEntryContains(rowIndex, hipaaEvent)

// actions
logHipaaEvent(hipaaEvent, timeout)
````



------------------------
### License

MIT License. Use as you wish.  Disrupt the system.  It needs all the help it can get.
