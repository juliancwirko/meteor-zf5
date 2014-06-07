Meteor.startup(function () {
  UI.body.rendered = function () {
    $(document).foundation();
  };
});