Template.adminPagesReplace.replaces("orionMaterializePagesIndex");

Template.tabular.events({
    'click .user-btn-action': function(){
       console.log(this.collection);
        var currentPageId = this._id;
        Router.go('/admin/pages/' + currentPageId + '/edit');

        console.log(currentPageId);
    }
});


