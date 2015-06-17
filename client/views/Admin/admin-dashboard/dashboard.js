// Template.dashboard.replaces('orionMaterializeHeaderContainer');

/**
 * Register the route
 */
Router.route('/admin/dashboard', function(){
	
	this.render('dashboard');
}, {
	name: 'dashboard'
});

Tracker.autorun(function () {
  orion.addLink({
    section: 'top',
    title: 'Dashboard',
    routeName: 'dashboard',
    image: '<i class="fa fa-tachometer"></i>',
    activeRouteRegex: 'dashboard'
  });
});

Template.dashboard.rendered = function(){
  $('#sidenav-overlay').click();
  $('.button-collapse').sideNav();
  $('.dropdown-button').dropdown({
    constrain_width: false
  });       
};


