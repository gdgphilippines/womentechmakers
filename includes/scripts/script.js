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
			"name": "Basic Coding with Python",
			"by": "Carl-Myer Flor and Jenifer Cristobal from Good Code",
			"desc": "<b>About the Workshop</b><br>This class introduces the students to basics of coding through Python, a programming language that is widely used in a lot of data and web applications. This class is intended for beginners who have no experience with coding and are interested to try it out.<br><br><b>Things you'll need:</b><br><ul><li>Laptop</li></ul>"
		},
		"microcopy": {
			"name": "The Magic of Microcopy: Small Bits of Text That Give Life to Apps and Websites",
			"by": "Niaw De Leon",
			"desc": "<b>About the Workshop</b><br>Language is powerful. When used well, it helps sell products, influence behavior, and get things done. It's no different with technology. The phrases and sentences used in the design of software applications, websites, and hardware can radically change how people engage with the technology.<br><br>Microcopy consists of the headings, hint texts, placeholders, summaries, and instructions throughout a website or app.  These small pieces of content often get overlooked—to the detriment of the application or website you are building. And yet it is one of the ingredients that make the difference between tech that fades into obscurity and extremely successful products like Trello or Slack.<br><br><b>What you'll learn</b><br>At the end of this 2.5 hour workshop, you'll understand the power of microcopy through many real-life examples and  learn how to analyze microcopy for strengths and weaknesses, identify opportunities to use microcopy, and practice writing some microcopy.<br><br><b>Who Should Attend?</b><br>If your team is building an app, website, or hardware with a user interface, and you want to learn how to give your product an edge using the wonders of words, then this workshop is for you—whether you're a designer, manager, writer, developer, or marketer.<br><br><b>Pre-requisite knowledge</b><br>Basic knowledge apps or websites like the concepts of screens and pages.<br><br><b>What you'll need</b><br><ul><li>Laptop</li><li>Smartphone or tablet with your favorite apps or apps that you're working on so we can analyze them together</li></ul>"
		},
		"build-website": {
			"name": "Speaking a New Language",
			"by": "Philippine Web Designers Organization",
			"desc": "<b>About the Workshop</b><br>Learning HTML for Web Design is like speaking a new language. Speaking to your browser through codes to create websites. This workshop will jumstart your skills in building websites!<br><br><b>Things you'll need:</b><br><ul><li>Laptop</li></ul>"
		},
		"raspi": {
			"name": "Introduction to Game Development",
			"by": "Jeanette Balansag with Women Who Code Manila Team",
			"desc": "<b>About the Workshop</b><br>This is for the ladies who are interested to learn more about Game Development. We will introduce you to Unity3D and how to create your first Game with Unity3D.<br><br><b>Pre-requisite knowledge</b><br>Everyone is welcome to join as long as you can read and write and you want to learn more about Game Development, you're good to go! :)<br><br><b>Things that you need:</b><br><ul><li>Laptop (Windows or Mac is ok)</li><li>Download <a href=\"https://unity3d.com/\" target=\"_blank\">Unity3D</a></li><li>Personal Account on Unity3D</li></ul>"
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
		},
		"michie-ang": {
			"name": "Michie Ang",
			"title": "Director of Women Who Code Manila",
			"bio": "Michie is a nurse who stumbled into the programming world. Being able to experience the cultures, events, and excitement towards learning and building new things in different areas of the world, she wanted to give the same experience & opportunity to her country. This is the reason why she decided to start Women Who Code in the Philippines and more. Currently, she teaches kids how to code and helps integrates the coding curriculum to some schools (Grade School/HS Level) in the Philippines. She's also the co-founder of TecsoftApps. ",
			"sm": {
				"fb": "",
				"tw": "",
				"gp": "",
				"li": "",
				"ws": ""
			}
		},
		"niaw-de-leon": {
			"name": "Niaw de Leon",
			"title": "Editor at Invent.ph",
			"bio": "Niaw de Leon is a designer, developer, writer, and entrepreneur with 11 years' experience in IT, half of which were spent on technical roles, with the other half on design, marketing, and communication. In over 60 IT projects within the last decade, she's collected roles as if there were no tomorrow: she's been a framework coder, trainer, proposal writer, front-end developer, UI designer, UX practitioner, business analyst, SEO specialist, and marketing manager. Niaw combines her deep love for technology, an unbridled lust for communication, and a growing interest in cognitive science to help cross-disciplinary teams build sexy software that sells. When not working on technology projects, Niaw runs creative agency and production house Tempest Media as its co-founder. She's also the editor of Invent.ph, a publication that celebrates Philippine innovation. Niaw graduated with a B.S. Computer Science degree from University of the Philippines, Diliman.",
			"sm": {
				"fb": "",
				"tw": "",
				"gp": "",
				"li": "",
				"ws": ""
			}
		},
		"anj-cerbolles": {
			"name": "Anj Cerbolles",
			"title": "Director of Women Who Code Manila",
			"bio": "Anj is a Sharepoint Developer at Re:Sources Philippines. She wanted more women to be visible in the tech events and conferences that is why she wanted to start Women Who Code Manila.",
			"sm": {
				"fb": "",
				"tw": "",
				"gp": "",
				"li": "",
				"ws": ""
			}
		},
		"christine-balanaa": {
			"name": "Christine Balanaa",
			"title": "WWCodeManila, Android Tech Lead",
			"bio": "Christine works as a Java Developer at Pointwest Technologies. She likes programming because of the many opportunities it offer to learn something new.",
			"sm": {
				"fb": "",
				"tw": "",
				"gp": "",
				"li": "",
				"ws": ""
			}
		},
		"kristine-joy-paas": {
			"name": "Kristine Joy Paas",
			"title": "WWCodeManila, Ruby on Rails Tech Lead",
			"bio": "Joy is a web developer at Quipper Limited. She is a self-taught programmer. She started programming as a hobby but eventually fell in love with it since it enables her to building things. Joy wants to help other people discover the beauty of code.",
			"sm": {
				"fb": "",
				"tw": "",
				"gp": "",
				"li": "",
				"ws": ""
			}
		},
		"nicole-tibay": {
			"name": "Nicole Tibay",
			"title": "WWCodeManila, Python Tech Lead",
			"bio": "Nicole is a web developer at First Digital Finance Corporation. She got enchanted under the spell of PEP 20 -- The Zen of Python and decided to dump her 2-year SAP ABAP experience to venture on as a Python Dev in a financial start up company. This PyPrincess is haunted by midnight ideas of healthy foods and apps and practices the magic of pointillism with pen and paper as her weapon.​",
			"sm": {
				"fb": "",
				"tw": "",
				"gp": "",
				"li": "",
				"ws": ""
			}
		},
		"jeanette-balansag": {
			"name": "Jeanette Balansag",
			"title": "WWCodeManila, Game Dev Tech Lead",
			"bio": "Jeanette has been working in IT industry for more than 4 years, mostly as a software QA slash programmer. Her interests outside IT include playing video games, doodling and calligraphy. After the grand launch of WWCode MNL, she noticed that there are non-IT professionals who attended. They inspired her to volunteer because she wants to help and encourage them to pursue their chosen career in IT. She also want to promote awareness amongst women that we can also excel in the IT world.",
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
		"claudine-rodriguez": {
			"name": "Claudine Rodriguez",
			"title": "Co-Founder at Good Code",
			"bio": "Claudine co-founded Good Code, a pop-up coding school, out of her desire to help people make meaningful things with technology. While her day job calls her to do UX design for one of the major advertising agencies in the country, she generally is just a design/maker dork. Cats, coffee, and jazz music are some of her best friends.",
			"sm": {
				"fb": "https://www.facebook.com/claudrod",
				"tw": "https://twitter.com/claudrod",
				"gp": "https://plus.google.com/117309955687874226351",
				"li": "https://www.linkedin.com/in/claudrod",
				"ws": "http://claudrod.me/"
			}
		},
		"carl-myer-flor": {
			"name": "Carl-Myer Flor",
			"title": "Co-founder, Good Code",
			"bio": "Carl is all about solving problems. Using technology, he loves making things that aim to give value to others. He codes for a living as a web and mobile app developer at Proudcloud, a Ruby on Rails and Javascript studio based in Manila. He believes that learning how to code can truly empower people to build solutions. This has led him to start Good Code, a pop-coding coding school, teaching coding fundamentals to anyone of any age or background. When he's not teaching or coding, he's most likely dancing.",
			"sm": {
				"fb": "",
				"tw": "",
				"gp": "",
				"li": "",
				"ws": ""
			}
		},
		"jenifer-cristobal": {
			"name": "Jenifer Cristobal",
			"title": "Teacher and Course Developer, Good Code",
			"bio": "As a technology and vocational teacher in a public high school, Jhen is truly passionate about education and technology, and making sure everyone gets access to them.  Her experience in Technokids Philippines and St. Scholastica's College Manila, as a computer teacher, has helped her be proficient in teaching Scratch, basic HTML + CSS, Visual Basic programming, and robotics to children. Currently, Jhen co-develops basic coding curriculums and teaches for Good Code, a pop-up coding school. She enjoys dabbling in baking and singing for weddings during her spare time.",
			"sm": {
				"fb": "",
				"tw": "",
				"gp": "",
				"li": "",
				"ws": ""
			}
		},
		"jonah-micah-mananghaya": {
			"name": "Jonah Micah Mananghaya",
			"title": "Globe Labs",
			"bio": "",
			"sm": {
				"fb": "https://www.facebook.com/jonahmicah.mananghaya",
				"tw": "",
				"gp": "https://plus.google.com/+JonahMicahMananghaya",
				"li": "https://www.linkedin.com/in/jonah-mananghaya-276072a1",
				"ws": ""
			}
		},
	},
	"community": {
		"good-code": {
			"name": "Good Code",
			"bio": "Good Code is a pop-up coding school that aims to spread the word on the awesome things one can do with the knowledge of computer programming. Our mission is to educate anyone, regardless of age and background, on coding for creating meaningful builds that have the potential to solve problems. We make sure our classes are collaborative, purposeful, inclusive, and fun! (<a href=\"www.goodcode.xyz\" target=\"_blank\">goodcode.xyz</a>)"
		},
		"womenwhocode": {
			"name": "Women Who Code Manila",
			"bio": ""
		},
		"pwdo": {
			"name": "Philippine Web Designers Organization",
			"bio": "The Philippine Web Designers Organization is a grassroots, volunteer-run, non-profit organization that helps develop the local community by championing professionalism & excellence in crafting interfaces for the Web.<br><br>We are a group of enthusiasts and professionals who create human interfaces for the web, champion the use of standards, accessibility, & usability, and aim to uplift the state of web design in the country. <br><br<We organize events like the <form> function() & .class conference, as well as meetups, roadshows, seminars, workshops, and hackathons."
		}
	}
}
