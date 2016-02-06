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
	$("#scroller").jTextScroll(5000);
	$('#map').click(function () {
		$('#map iframe').css("pointer-events", "auto");
	});
	$( "#map").mouseleave(function() {
		$('#map iframe').css("pointer-events", "none"); 
	});
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
/*
var images = [];
images.push("1.jpg");
images.push("2.jpg");
images.push("3.jpg");
images.push("4.jpg");
<!--//--><![CDATA[//><!--
	var imagesx = new Array()
	function preload() {
		for (var y = 0; y < preload.arguments.length; y++) {
			imagesx[y] = new Image()
			imagesx[y].src = preload.arguments[y]
		}
	}
	for(var x = 0; x < images.length; x++) {
		preload("includes/images/slideshow/"+images[x])
	}
//--><!]]>
var i = 0;
function slideshow() {
	if(i >= images.length) {
		i = 0;
	}
	$("header").css({
		"background-image": "url(includes/images/slideshow/"+images[i]+")"
	})
	i++;
	setTimeout(function() {
		slideshow();
	}, 5000);
}
*/