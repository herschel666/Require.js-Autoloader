define(['jQuery', 'Underscore', 'Backbone', 'Observer', 'sites/tabs/jqueryui.tabs.min'],
function ($, _, Backbone, Observer) {

	var tmpl = [
			'<article>',
			'	<header>',
			'		<h1>The Tabs</h1>',
			'	</header>',
			'	<div class="content" id="tabs">',
			'		<ul>',
			'			<li>',
			'				<a href="#tabs-1">Lorem</a>',
			'			</li>',
			'			<li>',
			'				<a href="#tabs-2">Ipsum</a>',
			'			</li>',
			'			<li>',
			'				<a href="#tabs-3">Dolor</a>',
			'			</li>',
			'		</ul>',
			'		<div id="tabs-1">',
			'			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			'		</div>',
			'		<div id="tabs-2">',
			'			<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			'		</div>',
			'		<div id="tabs-3">',
			'			<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
					$('#tabs').tabs();
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