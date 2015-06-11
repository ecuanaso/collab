Template.header.rendered = function(){
	 $(".button-collapse").sideNav();
}

Template.header.helpers({
    pages: function(){
        return Pages.find();
    }
});