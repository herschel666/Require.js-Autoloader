define(['jQuery', 'Underscore', 'Backbone', 'Observer'], function ($, _, Backbone, Observer) {

	var tmpl = [
			'<article>',
			'	<header>',
			'		<h1>Welcome</h1>',
			'	</header>',
			'	<div class="content">',
			'		<p>This is a small demonstration of an Autoloader-function built with <a href="http://requirejs.org/">Require.js</a>. The goal is to load scripts on demand to avoid the script-overhead.</p>',
			'		<p>If you open your Firebug/Web Inspector while browsing through this site, you can see each jQuery-UI-script - necessary for the current page - is loaded in the HTML-head.</p>',
			'	</div>',
			'</article>'
		].join(''),

		View = Backbone.View.extend({

			el : $('#wrap'),

			initialize : function () {
				this.render();
			},

			render : function () {
				this.$el.html(tmpl);

				return this;
			}

		}),

		init = function () {
			return new View();
		};

		return {
			init : init
		};

});