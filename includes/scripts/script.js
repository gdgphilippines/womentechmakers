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
function showSpeaker(i) {
	$("#blackTrans").show();
	$("#speaker_info").css({
		"bottom": "0px"
	});
	$("#speaker_info").scrollTop(0);
	$("#speaker_info").html('<img src="includes/images/speakers/'+i+'.jpg"><h2>'+Data.speakers[i].name+'</h2><center><i>'+Data.speakers[i].title+'</i></center><p>'+Data.speakers[i].bio+'</p>');
}
function showCommunity(i) {
	$("#blackTrans").show();
	$("#speaker_info").css({
		"bottom": "0px"
	});
	$("#speaker_info").scrollTop(0);
	$("#speaker_info").html('<center><img src="includes/images/community/'+i+'.png" class="nodesign"></center><h2>'+Data.community[i].name+'</h2><p>'+Data.community[i].bio+'</p>');
}
function showTalk(i) {
	$("#blackTrans").show();
	$("#speaker_info").css({
		"bottom": "0px"
	});
	$("#speaker_info").scrollTop(0);
	$("#speaker_info").html('<h2>'+Data.talks[i].name+'</h2><center><i>By '+Data.talks[i].by+'</i></center><p>'+Data.talks[i].desc+'</p>');
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

var Data = {
	"talks": {
		"intro-programming": {
			"name": "Introduction to Programming",
			"by": "Good Code",
			"desc": ""
		},
		"microcopy": {
			"name": "MicroCopy",
			"by": "UXPH",
			"desc": ""
		},
		"build-website": {
			"name": "Building your own Website",
			"by": "Philippine Web Design Organization",
			"desc": ""
		},
		"raspi": {
			"name": "Introduction to Rasberry Pi + Firebase",
			"by": "Women Who Code",
			"desc": ""
		}
	},
	"speakers": {
		"ambe-tierro": {
			"name": "Ambe Tierro",
			"title": "Senior Managing Director, Accenture Technology in the Philippines",
			"bio": "Ambe joined Accenture in 1990 and has worked on many large-scale systems integration and outsourcing engagements for key clients in Utilities and Communications. She has held key management roles in the Philippines Delivery Center, led its Systems Integration Service Group and Communications, Media & Technology (CMT) groups. Ambe was instrumental in driving the Delivery Innovation & Industrialization Program.<br><br>As Application Services Lead for CMT, she was responsible for driving growth in Application Outsourcing, Systems Integration and Testing, and worked with the OU and Client Account Leadership and the Global Delivery Network to develop cost-competitive and innovative solutions, offerings and delivery models that are relevant for CMT. As the Lead for the Technology Delivery Centers in the Philippines, Ambe is responsible for operations, strategy development and execution, delivery and capability development.<br><br>Ambe holds a Bachelor of Science degree in Computer Science from the De La Salle University in the Philippines. She lives with her husband, Dicky, and three children in Manila, Philippines.",
			"sm": {
				"fb": "https://www.facebook.com/ambe.c.tierro",
				"tw": "https://twitter.com/ambe_tierro",
				"gp": "https://plus.google.com/117856442438901617769",
				"li": "https://www.linkedin.com/in/ambetierro",
				"ws": ""
			}
		},
		"maricor-soriano": {
			"name": "Maricor Soriano",
			"title": "Physicist, University of the Philippines",
			"bio": "Dr. Maricor Soriano is a physicist and a video and image processing expert from the University of the Philippines. She is one of the 2015 Leaders in Innovation Fellow of the UK-Newton Fund, the 2013 awardee of The Outstanding Women in the Nation's Service in Applied Physics, and 2006 Outstanding Young Scientist. She heads the Video and Image Processing Lab in which she trains the next generation of scientists to seek and solve global problems with locally appropriate solutions.",
			"sm": {
				"fb": "",
				"tw": "",
				"gp": "",
				"li": "",
				"ws": ""
			}	
		},
		"kristine-mae-adlaon": {
			"name": "Kristine Mae Adlaon",
			"title": "Faculty, University of the Immaculate Conception - Davao",
			"bio": "Kristine Mae Adlaon is a faculty at the University of the Immaculate Conception, Davao. She is a passionate educator and a proud Davaoña. She is currently pursuing her post-graduate studies in Computer Science at the De La Salle University- Manila with research interest in Deep Learning for Natural Language Processing. She loves to teach and learn at the same time.  She hopes that someday she will be able to influence, inspire and encourage more women to become more active in the Computer Science field and help each other make a difference. She enjoys exploring and learning new things.",
			"sm": {
				"fb": "https://facebook.com/cutechibiscottishfold",
				"tw": "https://twitter.com/kristineadlaon",
				"gp": "https://plus.google.com/114491303283392028558",
				"li": "https://www.linkedin.com/in/kristine-mae-m-adlaon/",
				"ws": "http://kristine-adlaon.blogspot.com/"
			}
		},
		"kristine-mae-magtubo": {
			"name": "Kristine Mae Magtubo",
			"title": "University Researcher I, National Telehealth Center",
			"bio": "Dr. Kristine Mae Magtubo graduated Doctor of Medicine from the University of the Philippines - College of Medicine in 2011. Entered the Doctors to the Barrios (DTTB) program of the Department of Health and served two municipalities in Samar and Leyte (2011-2013). While working in these areas, was introduced to telemedicine as a means of providing better health care to her patients in the barrios after graduation from the DTTB program (2013) joined the National Telehealth Center as the project manager of the RxBox, the country's largest eHealth research program she received training in technology commercialization from the Leaders in Innovation Fellowship of the UK Royal Academy of Engineering and the Asian Institute of Management, with support from the Department of Science and Technology, in 2015 and is now working on making the RxBox a sustainable platform for changing health care delivery in the country",
			"sm": {
				"fb": "",
				"tw": "",
				"gp": "",
				"li": "https://ph.linkedin.com/in/kristinemaemd",
				"ws": ""
			}
		}
	},
	"community": {
		"good-code": {
			"name": "Good Code",
			"bio": "Good Code is a pop-up coding school that aims to spread the word on the awesome and meaningful things computer programming can do. At the heart of Good Code is creating an environment for people to embrace coding literacy for improved learning approaches and, hopefully, a better chance to find job opportunities in the future.<br><Br>Good Code was inspired by the Hour of Code global movement (Hello, Mr. Partovi!). Our dream is to teach code in remote areas where programming or computer science courses are not part of the regular school curriculum."
		}
	}
}