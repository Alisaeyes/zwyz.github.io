//倒计时
show();
setInterval(show, 1000);

function show() {
	var date = new Date(2016, 8, 15);
	var date1 = new Date();
	var result = date - date1;
	var day = Math.floor((result / 1000 / 60 / 60 / 24) % 24);
	var h = Math.floor((result / 1000 / 60 / 60) % 24);
	var m = Math.floor((result / 1000 / 60) % 60);
	var s = Math.floor((result / 1000) % 60);
	var timer = className(document, "result");
	for(var i = 0; i < timer.length; i++) {
		timer[i].innerHTML = ("距团购结束" + day + "天" + h + "小时" + m + "分钟" + s + "秒");
	}
}
//品牌团
$(".content-push-2-ul").find("img").hover(function() {
	$(this).css({
		"opacity": "0.8"
	});
}, function() {
	$(this).css({
		"opacity": "1"
	});
})

//sub轮播图JSON
$(function() {
		$.getJSON("data/sub-lunbo.json", function(data) {
			for(var i in data) {
				var cImg = data[i].cimg;
				var cDis = data[i].cdis;
				var cPri = data[i].cpri;
				var cBefore = data[i].cbefore;
				var cWord = data[i].cword;
				$(".content-push-ul").append('<li><div><a href="#"><img class="content-push-ul-img" src="' + cImg + '" alt="" /></a></div><div class="content-push-ul-box"><div><p class="content-push-ul-p1">' + cDis + '</p><p class="content-push-ul-p2">￥</p><p class="content-push-ul-p3">' + cPri + '</p><del class="content-push-ul-p4">' + cBefore + '</del><p class="content-push-ul-p5"><a href="#">' + cWord + '</a></p></div></div></li>');
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
	//sub轮播图
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var timer;
var num = 0;
btn1.onclick = function() {
	num++;
	if(num == 4) {
		num = 0;
		$(".content-push-ul").animate({
			"left": -num * 1120
		}, 500);
	} else {
		$(".content-push-ul").animate({
			"left": -num * 1120
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
				"left": "-3380"
			});
			num = 3;
		}
		$(".content-push-ul").animate({
			"left": -num * 1120
		}, 500);
	}
	//brand流
$(".brand-nav").find("li").on("mouseover", function() {
		var index = $(this).index();
		$(this).css({
			"border-bottom": "2px solid #00C8FF"
		}).find("a").css({
			"color": "#00C8FF"
		});
		$(this).siblings().css({
			"border-bottom": ""
		}).find("a").css({
			"color": "black"
		});
		$("#brand-b-box").find(".brand-b").eq(index).css({
			"display": "block"
		}).siblings().css({
			"display": "none"
		});
	})
	//todaynew
$.getJSON("data/today-new.json", function(data) {
	for(var i in data) {
		var tId = data[i].tid;
		var tImg = data[i].timg;
		var tDis = data[i].tdis;
		var tPro = data[i].tpro;
		var tPri = data[i].tpri;
		var tSpeak = data[i].tspeak;
		var tBefore = data[i].tbefore;
		var tWord = data[i].tword;
		var tLogo = data[i].tlogo;
		var tNum = data[i].tnum;
		$(".todaynew-ul").append('<li class="todaynew-li" indexid="' + tId + '"><div><a href="#"><img class="todaynew-ul-img" src="' + tImg + '" alt="" /></a></div><div class="todaynew-d-d1"><span>' + tSpeak + '</span></div><div class="todaynew-d-box"><div><p class="todaynew-d-d2"><span class="todaynew-d-span1">' + tPro + '</span>' + tDis + '</p><p class="todaynew-d-d3">￥</p><p class="todaynew-d-d4">' + tPri + '</p><del class="todaynew-d-d5">' + tBefore + '</del><p class="todaynew-d-d6"><a href="javascript:;">' + tWord + '</a></p></div></div><div class="todaynew-d1-p"><p class="todaynew-d1-p1" style="background:url(img/index/' + tLogo + ') no-repeat 0 -220px"><span class="result1"></span></p><p class="todaynew-d1-p2"><span class="todaynew-d1-span">' + tNum + '</span>已购买</p></div></li>');
		$("#todaynew-d1").find("li").hover(function() {
			$(this).find("img").css({
				"opacity": "0.8"
			});
			$(this).find(".todaynew-d-d1").css({
				"display": "block"
			});
		}, function() {
			$(this).find("img").css({
				"opacity": "1"
			});
			$(this).find(".todaynew-d-d1").css({
				"display": "none"
			});
		});
	}
	//飞入购物车
		var sumCount = 0;
		var indexId ="";
		var picId ="";
		var ttDis ="";
		var ttPri ="";
		var goodsType ="";
		var thisGoods ="";
		$(".todaynew-li").find(".todaynew-d-d6").on('click',function(e){
			$(".rightcar-empty").css({"display":"none"});
			var _this = $(this);
			$(this).addClass("none");
			$(this).parents(".todaynew-li").siblings().addClass("none");
			indexId = $(this).parents(".todaynew-li").attr("indexid");
			picId = data[indexId].timg;
			ttDis = data[indexId].tdis;
			ttPri = data[indexId].tpri;
			console.log(picId)			
			var e = e || window.event;
			var x = e.clientX - 50;
			var y = e.clientY - 50;
			//或者当前鼠标的坐标值
			// console.log(x,y);
			//delay(n)表示延迟n 的时间来执行这个运动
			$('.thisImg').css({'width':'50px','height':'50px',"position":"fixed",'opacity':"1",'left':x+'px','top':y+'px'}).attr('src',picId).stop().animate({"left":"1200","top": "400px","opacity":"0","width":"0","height":"0"},2000,function(){
				_this.removeClass("none");
				_this.parents(".todaynew-li").siblings().removeClass('none');
			});
			sumCount++;
			$(".rightcar-li2-span2").html(sumCount);
				// 表示每点击一次购物车数量加1 并且显示在购物车span
			var count = 1;
			goodsType = 'gType_'+ indexId;
			thisGoods = JSON.parse(localStorage.getItem('gType_'+indexId));
			
			if(thisGoods!=''&&thisGoods!=undefined){
				count+=thisGoods.buysCount;
				var nn =  thisGoods.buysCount+1
				var temp = [];
				for(var i=0;i<localStorage.length;i++){
			    	var key  = localStorage.key(i);
			    	var reg = /^gType/;
			    	if(reg.test(key)){
						temp.push(JSON.parse(localStorage.getItem(localStorage.key(i))).id);
					};
				};
				for(var k = 0; k<temp.length;k++){
					if(indexId == temp[k]){
						console.log($(".indexId").find(".logo-num"))
						$("."+ indexId).find(".logo-num").val(count);
					};
				}
//				$("."+ indexId).find(".logo-d2-p2").on("click",function(){
//		 			$(this).parent()
//		 		});
//					$("liID").find(".logo-num").val(count);
				//表示取当前的数量值加 1;
		 	}else{
		 		$(".rightcar-d3-box").append('<ul class="logo-ul2"><li class='+ indexId+'><div class="logo-d1"><a href="javascript:;"><img src="'+ picId +'"></a></div><div class="logo-d2"><p class="logo-d2-p1"><a href="javascript:;">'+ ttDis +'</a></p><div class="logo-d2-d1"><span class="span1">￥'+ ttPri +'</span><p class="logo-d2-p2"><span class="span2"></span><a href="index.html"><input class="logo-num" type="text" value="1" /><span class="span3"></span></p><a href="javascript:;">删除</a></div></div></li></ul>');
		 	};
		 	var setObjData = {'goodType':'gType'+indexId,'id':indexId,'img':picId,'info':ttDis,'price':ttPri,'buysCount':count}
		 	   setObjData.goodType;
		 	   // JSON.stringify  把json数据转换为json格式的字符串，因为浏览器只能存储这样的字符串;
		 	localStorage.setItem(goodsType,JSON.stringify(setObjData));
		 	//点击加减开始
		 	$(".span3").on("click",function(){
		 		count += 1;
				$("."+ indexId).find(".logo-num").val(count);		 		
		 	});
		 	$(".span2").on("click",function(){
		 		if(count >= 1){
		 			count--;
		 		}
		 	});
		 	
		});
		
		getDataByLocal();
		function getDataByLocal(){
			var reg = /^gType_/;
			var l = localStorage.length;
			$('tbody').html('');
			var mydata = [];
			for(var i=0;i<l;i++){
				var loaclKey = localStorage.key(i);
				if(reg.test(loaclKey)){
					var listData =  JSON.parse(localStorage.getItem(loaclKey));
					mydata.push(listData);
					// var $id = listData.id;
					// var $img = listData.img;
					// var $info = listData.info;
					// var $price = listData.price;
					// var $type = listData.goodType;
					// var $count = listData.buysCount;
					// var $sum = $price*$count;
					// $('tbody').append("<tr data-type=gType_"+$id+" ><td><input type='checkbox' name='check'></td><td>序号</td><td>"+$info+"</td><td><img src="+$img+"></td><td>"+$type+"</td><td>"+$price+"</td><td><a id='desc' href='javascript:void(0)'>-</a> <input type='text' name='count' value="+$count+"><a id='add' href='javascript:void(0)'>+</a></td><td>"+$sum+"</td><td>删除</td></tr>")
				}
			}

			if(mydata.length>0){
				setDataInHtml(mydata);
				// deleteInfo();
				// checkall();
				// desc();
				// change();
				// add();
				// init(); 
			}//else{
				// console.log('null')
//				$('tbody').css('border','1px').html('购物车空空如也啊！！！')
			//}
		}
		
		//表示将本地的localstorage数据放到table里面去
		function setDataInHtml(mydata){
			var length = mydata.length;
			for(var i=0;i<length;i++){
				var $id = mydata[i].id;
				var $img = mydata[i].img;
				var $info = mydata[i].info;
				var $price = mydata[i].price;
				var $type = mydata[i].goodType;
				var $count = mydata[i].buysCount;
				var $sum = $price*$count;
				$(".rightcar-empty").css({"display":"none"});
				$(".rightcar-d3-box").append('<ul class="logo-ul2"><li><div class="logo-d1"><a href="javascript:;"><img src="'+ $img +'"></a></div><div class="logo-d2"><p class="logo-d2-p1"><a href="javascript:;">'+ $info +'</a></p><div class="logo-d2-d1"><span class="span1">￥'+ $price +'</span><p class="logo-d2-p2"><span class="span2"></span><input class="logo-num" type="text" value="'+ $count +'" /><span class="span3"></span></p><a href="javascript:;">删除</a></div></div></li></ul>');
			}
		}
		
		
		
		
		
		function addBuysCount(){
			var reg = /^gType_/;
			for(var i=0;i<localStorage.length;i++){
			// 遍历localStorage存储的key localStorage.key(i)
			// console.log();
				var localKey = localStorage.key(i);
				//把每次遍历的key存到localkey;
				if(reg.test(localKey)){
					//正则测试一下，通过
					var mydata = JSON.parse(localStorage.getItem(localKey));
					sumCount+=mydata.buysCount;
					//每一条商品数量和累加
				}
			}
			$(".rightcar-li2-span2").html(sumCount);
			
		}
		addBuysCount();
		
//		function setCount(){
//			var l = localStorage.length;
//			console.log(l)
//			for(var i=0;i<localStorage.length;i++){
//			    var key  = localStorage.key(i);
//              var reg = /^gType/;
//              if(reg.test(key)){
//					buyCount+=JSON.parse(localStorage.getItem(localStorage.key(i))).BuysCount;
//				}
//			}
//			// console.log(buyCount);
//			$('.logo-num').html(buyCount);
//		}
//		setCount()
});

run();
setInterval(run, 1000);

function run() {
	var date = new Date(2016, 8, 19);
	var date1 = new Date();
	var result = date - date1;
	var day = Math.floor((result / 1000 / 60 / 60 / 24) % 24);
	var h = Math.floor((result / 1000 / 60 / 60) % 24);
	var m = Math.floor((result / 1000 / 60) % 60);
	var s = Math.floor((result / 1000) % 60);
	var timer = className(document, "result1");
	for(var i = 0; i < timer.length; i++) {
		timer[i].innerHTML = ("距团购结束 " + day + "天" + h + "小时" + m + "分钟" + s + "秒");
	}
};
//隐藏楼梯
$(window).scroll(function(){
	if($(window).scrollTop() >= 500){
		$("#jump-box").css({
			"display": "block"
		});
	}else{
		$("#jump-box").css({
			"display": "none"
		});
	}
});
//jump爬楼梯
$("#jump-box").find(".jump-ul-li1").click(function() {
	$(this).css({
		"backgroundColor": "#00C8FF"
	});
	$(".jump-ul-li2").css({
		"backgroundColor": "#fff"
	});
	$(".jump-ul-li3").css({
		"backgroundColor": "#fff"
	});
	var $top = $("#content-push-1").offset().top;
	$("body , html").animate({
		"scrollTop": $top
	}, 500);
});
$("#jump-box").find(".jump-ul-li2").click(function() {
	$(this).css({
		"backgroundColor": "#00C8FF"
	});
	$(".jump-ul-li1").css({
		"backgroundColor": "#fff"
	});
	$(".jump-ul-li3").css({
		"backgroundColor": "#fff"
	});
	var $top = $("#content-push-2").offset().top;
	$("body , html").animate({
		"scrollTop": $top
	}, 500);
});
$("#jump-box").find(".jump-ul-li3").click(function() {
	$(this).css({
		"backgroundColor": "#00C8FF"
	});
	$(".jump-ul-li1").css({
		"backgroundColor": "#fff"
	});
	$(".jump-ul-li2").css({
		"backgroundColor": "#fff"
	});
	var $top = $("#todaynew-box").offset().top;
	$("body , html").animate({
		"scrollTop": $top
	}, 500);
});