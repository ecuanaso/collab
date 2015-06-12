Meteor.subscribe('pages');

Tracker.autorun(function () {
    orion.addLink({
      image: '<i class="mdi-content-add"></i>',
      section: 'medium',
      title: i18n('pages.index.title'),
      routeName: 'pages.index',
      activeRouteRegex: 'pages',
      permission: 'pages.index',
    });
  });