
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
				"clear":"both",
				"opacity": "0"
			})
			$element.css({
				"display": "inline-block",
				"overflow": "hidden",
				"vertical-align": "middle",
				"margin-bottom": "10px"
			})
			var spanheight = $element.children("span").height();

			$element.height(spanheight);
			$element.width($element.children("span:first-child").width());
			$element.children("span:first-child").animate({
				"opacity": "1"
			}, 200)
			var numChild = $element.children("span").length;
			var i = 1;
			setInterval(function() {
				$element.animate({
					"scrollTop": i * spanheight,
					"width": $element.children("span:nth-child("+(i+1)+")").width()+"px"
				}, 500)
				$element.children("span:nth-child("+(i)+")").animate({
					"opacity": "0"
				}, 200)
				$element.children("span:nth-child("+(i+1)+")").animate({
					"opacity": "1"
				}, 700)
				i++;
				if(i == numChild)
					i = 0;
			}, this.timeout);

			$(window).resize(function() {
				spanheight = $element.children("span").height();
				$element.height(spanheight);
				$element.width($element.children("span:nth-child("+(i)+")").width());
				$element.scrollTop((i-1) * spanheight);
			})

		},

	}

	$.fn.jTextScroll = function(timeout) {

		var data = new jTextScroll($(this), timeout);

		return this;
	}

})(jQuery);