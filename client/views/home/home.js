Template.home.onRendered(function() {
	this.subscribe('postsWithUsers')
});

Template.home.helpers({
	posts: function () {
		return Posts.find();
	}
});

Template.home.rendered = function(){
   $('.materialboxed').materialbox();
   $('.slider').slider({full_width: true});        
}