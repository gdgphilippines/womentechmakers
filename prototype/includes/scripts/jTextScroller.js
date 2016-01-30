
(function($) {
	"use strict";

	var jTextScroll = function(element, timeout) {
		this.element = element;
		this.timeout = timeout;

		this.start();
	}

	jTextScroll.prototype = {
		start: function() {
			var $element = this.element;
			$element.children("span").css({
				"display": "inline-block",
				"text-align": "left",
				"float": "left",
				"clear":"both"
			})
			$element.css({
				"display": "inline-block",
				"overflow": "hidden",
				"vertical-align": "middle",
				"margin-bottom": "10px"
			})
			$element.height($element.children("span").height());
			$element.width($element.children("span:first-child").width());
			var numChild = $element.children("span").length;
			var i = 1;
			setInterval(function() {
				$element.animate({
					"scrollTop": i * $element.children("span").height(),
					"width": $element.children("span:nth-child("+(i+1)+")").width()+"px"
				}, 500)
				i++;
				if(i == numChild)
					i = 0;
			}, this.timeout);

		},

	}

	$.fn.jTextScroll = function(timeout) {

		var data = new jTextScroll($(this), timeout);

		return this;
	}

})(jQuery);