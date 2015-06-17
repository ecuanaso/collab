orion.pages.addTemplate({
    template: 'pagesSimple', 
    layout: 'layout',
    name: 'Simple',
    description: 'Simple template'
}, {
	metatitle: {
		type: String,
		label: 'Meta Title',
		optional: true
	},

	metakeywords:{
		type: String,
		optional: true,
		autoform: {
		    afFieldInput: {
		      type: "textarea",
		      rows: 10
		    }
		  }
	},

    content: orion.attribute('froala', {
      label: 'Content'
    })
});
