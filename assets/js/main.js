require.config({
	baseUrl : 'assets/js/',
	paths : {
		'loader' 		: 'libs/loader',
		'jQuery' 		: 'libs/jquery/jquery',
		'jQueryUICore' 	: 'libs/jqueryui/jqueryui.core',
		'Underscore' 	: 'libs/underscore/underscore',
		'Backbone' 		: 'libs/backbone/backbone',
		'Observer' 		: 'helper/observer'
	}
});

require(['jQuery', 'Underscore', 'Backbone', 'Observer'], function ($, _, Backbone, Observer) {

	var Router = Backbone.Router.extend({

		routes : {
			'/:site/*sub' : 'autoLoad'
		},

		initialize : function () {
			location.hash = location.hash || '/index/';

			Backbone.history.start();
		},

		autoLoad : function (site) {
			var path = 'sites/' + site + '/app';

			require([path], function (App) {
				App.init();
			});
		}
	}),

	router = new Router();

});