$(document).ready(function() {
	$("header ul.nav").height($("header .wrapper").height());
	$("#btnMenu").click(function() {
		$(".slider").animate({
			"left": "0px"
		}, 400);
	})
	$(".slider .back").click(function() {
		$(".slider").animate({
			"left": "-350px"
		}, 400);
	})
	responsive();
})
$(window).resize(function() {
	responsive();
})
function responsive() {
	if($("header .brand-logo").width() + $("header ul.nav").width() > $("header .wrapper").width()) {
		$("header ul.nav").hide();
		$("header .menu").css({
			"display": "inline-block"
		})
		$("header .brand-logo").width(230);
	} else {
		$("header ul.nav").show();
		$("header .menu").hide();
		$("header .brand-logo").width(300);
	}
}