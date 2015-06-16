

Template.hipaaHeader.events({

});

Template.hipaaHeader.helpers({
  getHipaaSearchFilter: function(){
    return Session.get('hipaaSearchFilter');
  }
});
