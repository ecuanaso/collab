orion.pages = {
  templates: {},
  collection: new Meteor.Collection('pages'),
};

Roles.registerAction('pages.index', true);
Roles.registerAction('pages.insert', true);
Roles.registerAction('pages.update', true);
Roles.registerAction('pages.remove', true);

orion.pages.collection.allow({
  'insert': function (userId, doc) {
    return Roles.allow(userId, 'pages.insert', userId, doc);
  },
  'update': function (userId, doc, fields, modifier) {
    return Roles.allow(userId, 'pages.update', userId, doc, fields, modifier);
  },
  'remove': function (userId, doc) {
    return Roles.allow(userId, 'pages.remove', userId, doc);
  }
});

orion.pages.collection.deny({
  'insert': function (userId, doc) {
    return Roles.deny(userId, 'pages.insert', userId, doc);
  },
  'update': function (userId, doc, fields, modifier) {
    return Roles.deny(userId, 'pages.update', userId, doc, fields, modifier);
  },
  'remove': function (userId, doc) {
    return Roles.deny(userId, 'pages.remove', userId, doc);
  }
});

orion.pages.collection.helpers({
  path: function () {
    return Router.path('pages', {url: this.url});
  }
});

/**
 * Create a new template
 */
orion.pages.addTemplate = function (options, schema) {
  if (!options.template) {
    throw new Meteor.Error('orion', 'Template is required');
  }

  var newTemplate = _.extend({
    name: options.template,
    description: 'No description'
  }, options);

  var newSchema = orion.pages.getNewTemplateSchema(schema, newTemplate);
  newTemplate.schema = new SimpleSchema(newSchema);

  orion.pages.templates[newTemplate.template] = newTemplate;

  return newTemplate;
};



orion.pages.getNewTemplateSchema = function (schema, newTemplate) {
  return _.extend({
    title: {
      type: String,
      label: orion.helpers.getTranslation('pages.schema.title')
    },
    url: {
      type: String,
      regEx: /^[a-z0-9A-Z_-]+$/,
      unique: true,
      label: orion.helpers.getTranslation('pages.schema.url'),
      autoValue: function(){
        var pageTitle = this.field('title');
        var pageUrl = this.field('url');
        if (pageUrl.isSet){
          return pageUrl.value.replace(/\s/g, "").toLowerCase();
        } else {
          return pageTitle.value.replace(/\s/g, "").toLowerCase();
        }
      }
    },
    template: {
      type: String,
      autoform: {
        omit: true
      },
      autoValue: function () {
        return newTemplate.template;
      }
    },
    createdAt: {
      type: Date,
      autoform: {
        omit: true
      },
      autoValue: function () {
        if (this.isInsert) {
          return new Date();
        } else if (this.isUpsert) {
          return {$setOnInsert: new Date()};
        } else {
          this.unset();
        }
      }
    },
    updatedAt: {
      type: Date,
      autoform: {
        omit: true
      },
      autoValue: function () {
        if (this.isUpdate) {
          return new Date();
        }
      },
      denyInsert: true,
      optional: true
    },
    createdBy: {
      type: String,
      autoform: {
        omit: true
      },
      autoValue: function () {
        if (this.isInsert) {
          return this.userId;
        } else if (this.isUpsert) {
          return {$setOnInsert: this.userId};
        } else {
          this.unset();
        }
      }
    }
  }, schema);
};




var Tabular = null;

if (Package['nicolaslopezj:tabular-materialize']) {
  Tabular = Package['nicolaslopezj:tabular-materialize'].Tabular;
}

if (Package['aldeed:tabular']) {
  Tabular = Package['aldeed:tabular'].Tabular;
}

if (!Tabular) {
  throw new Meteor.Error('orion', 'You must install tabular to use this package');
}

orion.pages.tabular = new Tabular.Table({
  name: 'PagesIndex',
  collection: orion.pages.collection,
  columns: [
    { data: 'title', title: i18n('pages.schema.title') },
    { data: 'url', title: i18n('pages.schema.url'), render: function(val, type, doc) { return '<a href="' + Router.path('pages', doc) + '">' + Router.path('pages', doc) + '</a>'; } },
    { data: 'actions', title: i18n('pages.schema.actions'),
      render: function (){
        return '<a class="btn waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>'
      }
  }
  ]
});

/**
 * Register page routes on meteor startup
 */
Meteor.startup(function(){
  Router.route('/:url', function() {
    var subs = Meteor.subscribe('page', this.params.url);
    this.wait(subs);
    if (subs.ready()) {
      var page = orion.pages.collection.findOne({ url: this.params.url });
      if (page) {
        var template = orion.pages.templates[page.template];
        if (template.layout) {
          this.layout(template.layout);
        }
        this.render(page.template, {data: page});
      } else {
        this.render('notFound');
      }
    }
  }, { name: 'pages' });
});