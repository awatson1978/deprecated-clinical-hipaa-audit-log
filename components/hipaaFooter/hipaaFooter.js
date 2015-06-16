Template.hipaaFooter.events({
  'click #filterCreatedButton': function(){
    Session.set("hipaaTypeFilter", 'create');
  },
  'click #filterModifiedButton': function(){
    Session.set("hipaaTypeFilter", 'modify');
  },
  'click #filterViewedButton': function(){
    Session.set("hipaaTypeFilter", 'viewed');
  },
  'click #filterAllButton': function(){
    Session.set("hipaaTypeFilter", '');
  }
});

Template.hipaaFooter.helpers({

});
