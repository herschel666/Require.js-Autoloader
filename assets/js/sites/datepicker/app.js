define(['jQuery', 'Underscore', 'Backbone', 'Observer', 'sites/datepicker/jqueryui.datepicker.min'],
function ($, _, Backbone, Observer) {

	var inputTmpl = [
			'<article>',
			'	<header>',
			'		<h1>The Datepicker - pick a date.</h1>',
			'	</header>',
			'	<div class="content">',
			'		<input type="text" id="datepicker" />',
			'		<button type="button">Absenden</button>',
			'	</div>',
			'</article>'
		].join(''),

		resultTmpl = [
			'<article>',
			'	<header>',
			'		<h1>The Datepicker - your result.</h1>',
			'	</header>',
			'	<div class="content">',
			'		<p>You choose: <%= date %></p>',
			'	</div>',
			'</article>'
		].join(''),

		Router = Backbone.Router.extend({

			routes : {
				'/datepicker/:date/' : 'result'
			},

			initialize : function () {

				var view = new InputView();

			},

			result : function (date) {

				var view = new ResultView(date);

			}

		}),

		InputView = Backbone.View.extend({

			el : $('#wrap'),

			events : {
				'click button' : 'submitDate'
			},

			initialize : function () {
				this.render( function () {
					$('#datepicker').datepicker({
						dateFormat : 'dd-mm-yy'
					});
				});
			},

			render : function (callback) {
				this.$el.html(inputTmpl);

				setTimeout(callback);

				return this;
			},

			submitDate : function (evnt) {
				var $elem = $(evnt.target).prev(),
					date = $elem.prop('value').replace(/\//g, '-');

				if ( !date ) {
					return;
				}

				$elem.prop('value', '');
				location.hash = '/datepicker/' + date + '/';
			}

		}),

		ResultView = Backbone.View.extend({

			el : $('#wrap'),

			tmpl : _.template(resultTmpl),

			initialize : function (date) {
				this.date = date.replace(/-/g, '. ');
				this.render();
			},

			render : function () {
				this.$el.html(this.tmpl({date : this.date}));

				return this;
			}

		}),

		init = function () {
			return new Router();
		};

		return {
			init : init
		};

});