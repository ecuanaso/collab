Template.header.rendered = function(){
	 $('.button-collapse').sideNav({
          menuWidth: 300, // Default is 240
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
      );
}

Template.header.helpers({
    pages: function(){
        return Pages.find();
    }
});

// Template.header.events({
// 	'click a' : function(){
// 		$(this).removeClass("drag-target");
// 	}
// });