// orion.dictionary.addDefinition('slideshow', 'slides', {
//     type: String,
//     label: "Image description(max 20 characters)",
//     max: 20
//  });

orion.dictionary.addDefinition('test', 'slides', {
    type: String,
    label: "Image description(max 20 characters)"
});

orion.dictionary.addDefinition('slideshow', 'slides', 
	orion.attribute('file', {
        label: "1st slide",
    	optional: true
    })
);

orion.dictionary.addDefinition('test2', 'slides', {
    type: String,
    label: "Image description(max 20 characters)"
});

orion.dictionary.addDefinition('slideshow2', 'slides', 
	orion.attribute('file', {
        label: "2nd slide",
    	optional: true
    })
);

orion.dictionary.addDefinition('test3', 'slides', {
    type: String,
    label: "Image description(max 20 characters)"
});

orion.dictionary.addDefinition('slideshow3', 'slides', 
	orion.attribute('file', {
        label: "3rd slide",
    	optional: true
    })
);
