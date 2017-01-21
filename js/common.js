$(function() {
	//获取头部，尾部样式
	$("#landing-box").load("common.html .contener", function() {
		//	导航栏效果
		$(".landingr-ulli1").on("mouseover", function() {
			$(".landing-d1").stop().slideDown();
			$(".landingr-ulli1").css({
				"backgroundColor": "#fff"
			}).find("i").css({
				"background": "url(../img/landing/topnav.png) no-repeat 0 -105px"
			});
		});
		$(".landingr-ulli1").on("mouseout", function() {
			$(".landing-d1").stop().slideUp();
			$(".landingr-ulli1").css({
				"backgroundColor": "#F2F2F2"
			}).find("i").css({
				"background": "url(../img/landing/topnav.png) no-repeat 0 -70px"
			});
		});
		$(".landingr-ulli3").on("mouseover", function() {
			$(".landing-d2").stop().slideDown();
			$(".landingr-ulli3").css({
				"backgroundColor": "#fff"
			}).find("i").css({
				"background": "url(../img/landing/topnav.png) no-repeat 0 -105px"
			});
		});
		$(".landingr-ulli3").on("mouseout", function() {
			$(".landing-d2").stop().slideUp();
			$(".landingr-ulli3").css({
				"backgroundColor": "#F2F2F2"
			}).find("i").css({
				"background": "url(../img/landing/topnav.png) no-repeat 0 -70px"
			});
		});
		$(".landingr-ulli5").on("mouseover", function() {
			$(".landing-d3").stop().slideDown();
			$(".landingr-ulli5").css({
				"backgroundColor": "#fff"
			}).find("i").css({
				"background": "url(../img/landing/topnav.png) no-repeat 0 -105px"
			});
		});
		$(".landingr-ulli5").on("mouseout", function() {
			$(".landing-d3").stop().slideUp();
			$(".landingr-ulli5").css({
				"backgroundColor": "#F2F2F2"
			}).find("i").css({
				"background": "url(../img/landing/topnav.png) no-repeat 0 -70px"
			});
		});
	});
	$("#logo-box").load("common.html .contener1", function() {	
	});
	$("#footer-box").load("common.html .footer-main", function() {	
	});
	//小广告时间
	$("#adlet-box").load("common.html .adlet-d", function() {	
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
			window.open("../html/landing.html");
		});
	});
})