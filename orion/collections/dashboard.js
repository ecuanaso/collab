// Dashboard = new orion.collection('dashboard', {
//   link: {
//   	section: 'top',
//     image: '<i class="fa fa-tachometer"></i>'
//   },

//    tabular: {
//     columns: [
//       { data: 'title', title: orion.helpers.getTranslation('posts.schema.title') },
//       /**
//        * If you want to show a custom orion attribute in
//        * the index table you must call this function
//        * orion.attributeColumn(attributeType, key, label)
//        */
//       orion.attributeColumn('file', 'image', orion.helpers.getTranslation('posts.schema.image')),
//       orion.attributeColumn('summernote', 'body', orion.helpers.getTranslation('posts.schema.body')),
//       orion.attributeColumn('createdBy', 'createdBy', orion.helpers.getTranslation('posts.schema.createdBy')),
//       orion.attributeColumn('createdAt', 'createdAt', orion.helpers.getTranslation('posts.schema.createdAt'))
//     ]
//   }
// });


// Tracker.autorun(function () {


//   orion.addLink({
//     section: 'top',
//     title: 'dashboard',
//     routeName: 'dashboard'
//   });
// });