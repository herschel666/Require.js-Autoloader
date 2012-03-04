define(['Underscore', 'Backbone'], function (_, Backbone) {
	var Observer = {};

	_.extend(Observer, Backbone.Events);
	
	return Observer;
});