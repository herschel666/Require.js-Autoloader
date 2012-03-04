define(['jQuery', 'Underscore', 'Backbone', 'Observer', 'sites/accordion/jqueryui.accordion.min'],
function ($, _, Backbone, Observer) {

	var tmpl = [
			'<article>',
			'	<header>',
			'		<h1>The Accordion</h1>',
			'	</header>',
			'	<div class="content" id="accordion">',
			'		<h2>',
			'			<a href="#">Lorem</a>',
			'		</h2>',
			'		<div>',
			'			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'		</div>',
			'		<h2>',
			'			<a href="#">Ipsum</a>',
			'		</h2>',
			'		<div>',
			'			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'		</div>',
			'		<h2>',
			'			<a href="#">Dolor</a>',
			'		</h2>',
			'		<div>',
			'			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'		</div>',
			'	</div>',
			'</article>'
		].join(''),

		View = Backbone.View.extend({

			el : $('#wrap'),

			events : {
				'click a' : 'prevent'
			},

			initialize : function () {
				this.render( function () {
					$('#accordion').accordion();
				});
			},

			render : function (callback) {
				this.$el.html(tmpl);

				setTimeout(callback);

				return this;
			},

			prevent : function (evnt) {
				evnt.preventDefault();
			}

		}),

		init = function () {
			return new View();
		};

		return {
			init : init
		};

});