/**
 * Init the template name variable
 */
ReactiveTemplates.request('login');

/**
 * Register the routes
 */
Router.route('/login', function () {
  this.layout(ReactiveTemplates.get('outAdminLayout'));
  this.render(ReactiveTemplates.get('login'));
}, { name: 'login' });
