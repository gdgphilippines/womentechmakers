$(document).ready(function() {
	$("header ul.nav").height($("header .wrapper").height());
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
	} else {
		$("header ul.nav").show();
		$("header .menu").hide();
	}
}