	//获取右侧购物栏
	$("#rightcar-box").load("I-common.html .rightcar", function() {	
		$(".rightcar-li1").hover(function(){
			$(".rightcar-li1").css({"background":"#00C8FF"}).find(".rightcar-d1").css({"display":"block"}).stop().animate({"width":"103px"},800);
		},function(){
			$(".rightcar-li1").css({"background":"#6c6c6c"}).find(".rightcar-d1").css({"display":"none"}).stop().animate({"width":"0"},800);
		});
		$(".rightcar-li3").hover(function(){
			$(".rightcar-li3").css({"background":"#00C8FF"}).find(".rightcar-d3").css({"display":"block"}).stop().animate({"width":"103px"},800);
		},function(){
			$(".rightcar-li3").css({"background":"#6c6c6c"}).find(".rightcar-d3").css({"display":"none"}).stop().animate({"width":"0"},800);
		});
		$(".rightcar-li4").hover(function(){
			$(".rightcar-li4").css({"background":"#00C8FF"}).find(".rightcar-d4").css({"display":"block"}).stop().animate({"width":"103px"},800);
		},function(){
			$(".rightcar-li4").css({"background":"#6c6c6c"}).find(".rightcar-d4").css({"display":"none"}).stop().animate({"width":"0"},800);
		});
		$(".rightcar-b-li1").hover(function(){
			$(".rightcar-b-li1").css({"background":"#00C8FF"}).find(".rightcar-b-d1").css({"display":"block"}).stop().animate({"width":"370px"},800);
		},function(){
			$(".rightcar-b-li1").css({"background":"#6c6c6c"}).find(".rightcar-b-d1").css({"display":"none"}).stop().animate({"width":"0"},800);
		});
		$(".rightcar-b-li2").hover(function(){
			$(".rightcar-b-li2").css({"background":"#00C8FF"}).find(".rightcar-b-d2").css({"display":"block"}).stop().animate({"width":"103px"},800);
		},function(){
			$(".rightcar-b-li2").css({"background":"#6c6c6c"}).find(".rightcar-b-d2").css({"display":"none"}).stop().animate({"width":"0"},800);
		});
		$(".rightcar-b-li3").click(function() {
			$("body , html").animate({
				"scrollTop": "0"
			}, 200);
		});
		$(".rightcar-li2").hover(function(){
			$(".rightcar-li2").css({"background":"#00C8FF"});
		},function(){
			$(".rightcar-li2").css({"background":"#6c6c6c"});
		});
		$(".rightcar-li2").on("click",function(){
			$(".rightcar-li2").css({"background":"#00C8FF"});
			$(".rightcar-blank").css({"display":"block"}).stop().animate({"width":"300px"},800);
		});
		$(".rightcar-d2-box").find("i").on("click" ,function(){
			$(".rightcar-blank").css({"display":"none"}).stop().animate({"width":"0"},800);
		});
	});
	//获取头部，尾部样式
	$("#landing-box").load("I-common.html .contener", function() {
		//登陆改变值
		if(localStorage.getItem("islogin") == "true") {
			$(".landing-left").html('<ul><li>欢迎来到知我！这里，用专业呵护美丽。</li><span>欢迎您，知我用户：' + localStorage.getItem("userId") + '</span><span id="quit"> [退出]</span></ul>');
			$("#quit").css({"cursor":"pointer"});
		} else {
			$(".landing-left").html('<ul><li class="landingl-ulli1">欢迎来到知我！这里，用专业呵护美丽。</li><li class="landingl-ulli2"><a href="html/landing.html">请登录</a></li><li class="landingl-ulli3"><a href="html/register.html">快速注册</a></li></ul>');
		};
		$("#quit").on("click",function(){
			localStorage.setItem("islogin","false");
			window.location="html/landing.html";
//			window.location="index.html";
		});
	
		//	导航栏效果
		$(".landingr-ulli1").on("mouseover", function() {
			$(".landing-d1").stop().slideDown();
			$(".landingr-ulli1").css({
				"backgroundColor": "#fff"
			}).find("i").css({
				"background": "url(img/landing/topnav.png) no-repeat 0 -105px"
			});
		});
		$(".landingr-ulli1").on("mouseout", function() {
			$(".landing-d1").stop().slideUp();
			$(".landingr-ulli1").css({
				"backgroundColor": "#F2F2F2"
			}).find("i").css({
				"background": "url(img/landing/topnav.png) no-repeat 0 -70px"
			});
		});
		$(".landingr-ulli3").on("mouseover", function() {
			$(".landing-d2").stop().slideDown();
			$(".landingr-ulli3").css({
				"backgroundColor": "#fff"
			}).find("i").css({
				"background": "url(img/landing/topnav.png) no-repeat 0 -105px"
			});
		});
		$(".landingr-ulli3").on("mouseout", function() {
			$(".landing-d2").stop().slideUp();
			$(".landingr-ulli3").css({
				"backgroundColor": "#F2F2F2"
			}).find("i").css({
				"background": "url(img/landing/topnav.png) no-repeat 0 -70px"
			});
		});
		$(".landingr-ulli5").on("mouseover", function() {
			$(".landing-d3").stop().slideDown();
			$(".landingr-ulli5").css({
				"backgroundColor": "#fff"
			}).find("i").css({
				"background": "url(img/landing/topnav.png) no-repeat 0 -105px"
			});
		});
		$(".landingr-ulli5").on("mouseout", function() {
			$(".landing-d3").stop().slideUp();
			$(".landingr-ulli5").css({
				"backgroundColor": "#F2F2F2"
			}).find("i").css({
				"background": "url(img/landing/topnav.png) no-repeat 0 -70px"
			});
		});
	});
	//logo开始
	$("#logo-box").load("I-common.html .contener1", function() {
		//car效果
		$(".logo-right").hover(function(){
			$(".logo-shop").stop().slideDown();
			$(".logo-right").find(".logo-car").css({"backgroundColor":"#fff","height":"38px"});
			$(".logo-right").find(".logo-car").find("i").css({"background": "url(img/index/car.png) no-repeat 0 -105px"});
		},function(){
			$(".logo-shop").stop().slideUp();
			$(".logo-right").find(".logo-car").css({"backgroundColor":"","height":"36px"});
			$(".logo-right").find(".logo-car").find("i").css({"background": "url(img/index/car.png) no-repeat 0 -70px"});
		});
	});
	//subnav二级导航开始
	$("#subnav-box").load("I-common.html .subnav-main", function() {
		$(".subnav-menu-li2").hover(function(){
			$(".subnav-menu-clear").stop().slideDown();
			$(".subnav-menu-li2").addClass("active").find("span").css({"background":"url(img/index/mainnav.png) no-repeat right -20px"});
		},function(){
			$(".subnav-menu-clear").stop().slideUp();
			$(".subnav-menu-li2").removeClass("active").find("span").css({"background":"url(img/index/mainnav.png) no-repeat right -10px"});
		});
		$(".subnav-menu-li3").find("img").hover(function(){
			$(".subnav-menu-li3-img1").css({"display": "none"});
			$(".subnav-menu-li3-img2").css({"display": "block"});
		},function(){
			$(".subnav-menu-li3-img1").css({"display": "block"});
			$(".subnav-menu-li3-img2").css({"display": "none"});
		});
		$(".subnav-pic4").hover(function(){
			$(".subnav-pic4").stop().animate({"width":"74px"},500);
		},function(){
			$(".subnav-pic4").stop().animate({"width":"0"},500);
		});
		$(".subnav-pic3").hover(function(){
			$(".subnav-pic3").stop().animate({"width":"74px"},500);
		},function(){
			$(".subnav-pic3").stop().animate({"width":"0"},500);
		});
		$(".subnav-pic2").hover(function(){
			$(".subnav-pic2").stop().animate({"width":"74px"},500);
		},function(){
			$(".subnav-pic2").stop().animate({"width":"0"},500);
		});
		$(".subnav-pic1").hover(function(){
			$(".subnav-pic1").stop().animate({"width":"100px"},500);
		},function(){
			$(".subnav-pic1").stop().animate({"width":"0"},500);
		});
	});
	//footer开始
	$("#footer-box").load("I-common.html .footer-main", function() {	
	});
	//小广告时间
	$("#adlet-box").load("I-common.html .adlet-d", function() {	
		show();
		function show(){
			setTimeout(function(){
				$("#adlet-box").css({"display":"block"});
			},5000)
		}
		$(".adlet-d-p").on("click" , function(){
			$("#adlet-box").css({"display":"none"});
			show();
		});
		$(".adlet-d-d").on("click" , function(){
			window.open("html/landing.html");
		});
	});