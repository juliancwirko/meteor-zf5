Package.describe({
	summary: "Foundation 5 for Meteor"
});

Package.on_use(function (api) {
	api.use('scss', 'client');

	api.add_files([
	'js/vendor/modernizr.js',
	'js/foundation.js',
	], 'client');

});