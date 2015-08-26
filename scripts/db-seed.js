var Artist = require('../lib/artist');

var laurel = new Artist({
	name: 'Laurel Aitken',
	slug: 'laurel-aitken',
	albums: [
		{title: 'High Priest Reggae', year: 1969, image: 'high-priest-reggae'}
	],
	shows: [
		{city: 'London'},
		{city: 'Brighton'},
		{city: 'Manchester'}
	]
});

laurel.save(function(err, laurel){
	console.log('laurel has been saved');
});