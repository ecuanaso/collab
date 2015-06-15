/**
 * Add your routes here
 */

Router.route('/', {
	name: 'home',
	layoutTemplate: 'layout'
});

Router.route('/posts/:_id', {
	name: 'post',
	layoutTemplate: 'layout'
});

Router.route('/page/:_id', function() {
    this.render('page');
});

