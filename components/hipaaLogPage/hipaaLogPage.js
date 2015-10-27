

Router.route("/audit", {
  name:"hipaaAuditLogRoute",
  template:"hipaaLogPage"
});

Template.hipaaLogPage.helpers({
  rendered: function (){

  }
});

Template.hipaaLogPage.events({
  "click #elementId": function (event, template){

  }
});
