clinical-ui-hipaa-log
====================================================

HIPAA logging and audit features for Meteor Apps built with Clinical UI.


====================================================
#### Installation

Once released on Atmosphere, one would install the hipaa-audit-log package from the command line, like so:

````
meteor add clinical:hipaa-audit-log
````


====================================================
#### Data Model

At installation, a Mongo collection is created named 'Hipaa', which users can find and insert into, but cannot update or remove.  This makes it an audit log that people can refer to later to find out what clinically relevant privacy events have occurred.



====================================================
### HIPAA Compliant Applications

Meteor comes very close to being HIPAA compliant out-of-the-box.  The general principle of HIPAA is to protect patient privacy.  But what does that mean?  Well, each patient is an individual, and privacy implies that personal details aren't shared indiscriminately or in ways that interlocutors may become privy to.

In practice, HIPAA compliancy boils down to three things:  individual user accounts, encrypted transmission of data, and audit logs.  It turns out that Meteor provides two of those features out-of-the-box, with the accounts-ui and force-ssl packages.  

So, putting everything together, and it appears that a recipe for a HIPAA compliant Meteor application would look something like this:

````
meteor add accounts-ui
meteor add force-ssl
meteor add clinical:hipaa-audit-log
````



====================================================
#### Core API Requires

````js
// Collections API
Meteor.user().profile.name
Meteor.user().profile.fullName
````

====================================================
#### Core API - Provides

````js
HipaaLogger.logEvent(eventType, userId, userName, collectionName, recordId, patientId, patientName, message);
HipaaLogger.logEventObject(hipaaEvent);
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

====================================================
#### Code Sample

In typical situations, HIPAA events will occur as parts of specific functions, usually related to adding or removing specific values to the databaes.  As an example (from a symptom tracking application), here is a function which is equivalent to 'deleting a friend'.  In this case, a user in the database is being removed from a profile's list of approached collaborators.   Note the use of hte log_hipaa_event in the callback functions to the database update functions.  

````js
Template.samplePage.events({
  'click #saveButton': function (evt, tmpl) {
    var self = this;

    MyCollection.update({_id: this._id},{$set:{
      stared: true
    }}, function(error, result){
      if(error){
        HipaaLogger.logEvent("error", Meteor.userId(), Meteor.user().profile.name, "Forms", null, null, null, error);
      }
      if(result){
        HipaaLogger.logEvent("create", Meteor.userId(), Meteor.user().profile.name, "Forms", self._id, null, null, null);
      }
    });
  }
});
````


====================================================
#### Browser Console Sample

You can also log events in the browser console.  
````
HipaaLogger.logEvent("create", Meteor.userId(), "Jane Doe", "Foo");
````



------------------------
### License

MIT License. Use as you wish, including for commercial purposes.  
See license.mit.txt for full details.  
