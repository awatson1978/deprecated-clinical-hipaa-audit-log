

Template.hipaaHeader.events({
  "change #beginDateInput": function(event, template){
     Session.set("beginDateFilter", $('#beginDateInput').val() + "T00:00:00.000Z");
  },
  "change #endDateInput": function(event, template){
     Session.set("endDateFilter", $('#endDateInput').val() + "T00:00:00.000Z");
  },

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

Template.hipaaHeader.helpers({
  getHipaaSearchFilter: function(){
    return Session.get('hipaaSearchFilter');
  },
  getBeginDate: function(){
    return moment(Session.get("beginDateFilter")).format("YYYY-MM-DD");
  },
  getEndDate: function(){
    return moment(Session.get("endDateFilter")).format("YYYY-MM-DD");
  }
});
