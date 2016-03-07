$(document).ready(function() {
	$("header ul.nav").height($("header .wrapper").height());
	$("#btnMenu").click(function() {
		$("#blackTrans").show();
		$(".slider").animate({
			"left": "0px"
		}, 400);
	})
	$(".slider .back").click(function() {
		$("#blackTrans").hide();
		$(".slider").animate({
			"left": "-350px"
		}, 400);
	})
	$(".slider a").click(function() {
		$("#blackTrans").hide();
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
	$("#agendaP").click(function() {
		$("#agendaCon").load("agenda/plenary.html");
	})
	$("#agendaW1").click(function() {
		$("#agendaCon").load("agenda/workshop1.html");
	})
	$("#agendaW2").click(function() {
		$("#agendaCon").load("agenda/workshop2.html");
	})
	$("#agendaW3").click(function() {
		$("#agendaCon").load("agenda/workshop3.html");
	})	


	$("#blackTrans").click(function() {
		$("#blackTrans").hide();
		$(".slider").animate({
			"left": "-350px"
		}, 400);
		$("#speaker_info").css({
			"bottom": "-"+$(this).height()+"px"
		})
	})
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
function showSpeaker($speaker) {
	$("#blackTrans").show();
	$("#speaker_info").load("speakers/"+$speaker+".html", function() {
		$("#speaker_info").css({
			"bottom": "0px"
		})
	})
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