//sub轮播图JSON
$(function() {
		$.getJSON("data/sub-lunbo.json", function(data) {
			for(var i in data) {
				var cImg = data[i].cimg;
				var cDis = data[i].cdis;
				var cPri = data[i].cpri;
				var cBefore = data[i].cbefore;
				var cWord = data[i].cword;
				$(".content-push-ul").append('<li><div><a href="#"><img class="content-push-ul-img" src="' + cImg + '" alt="" /></a></div><div class="content-push-ul-box"><div><p class="content-push-ul-p1">' + cDis + '</p><p class="content-push-ul-p2">￥</p><p class="content-push-ul-p3">' + cPri + '</p><p class="content-push-ul-p5"><a href="#">' + cWord + '</a></p></div></div></li>');
			}
		});
		$("#content-push-3").find(".a1").hover(function() {
			$(this).css({
				"background": 'url("img/index/bfd_logo_ch.png") no-repeat right -14px'
			});
		}, function() {
			$(this).css({
				"background": 'url("img/index/bfd_logo_ch.png") no-repeat right 0'
			});
		})
	})
//轮播图
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var timer;
var num = 0;
btn1.onclick = function() {
	num++;
	if(num == 4) {
		num = 0;
		$(".content-push-ul").animate({
			"left": -num * 980
		}, 500);
	} else {
		$(".content-push-ul").animate({
			"left": -num * 980
		}, 500);
	}
	if(num >= 3) {
		$(".content-push-ul").css({
			"left": "0"
		});
		num = -1;
	}
}
btn2.onclick = function() {
		num--;
		if(num < 0) {
			$(".content-push-ul").css({
				"left": "-2940"
			});
			num = 3;
		}
		$(".content-push-ul").animate({
			"left": -num * 980
		}, 500);
	}