Hipaa =  new Meteor.Collection("hipaa");
Hipaa.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return false;
  },
  remove: function(){
    return false;
  }
});
