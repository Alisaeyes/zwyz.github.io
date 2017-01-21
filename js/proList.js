    $(".main-pro-t1").find(".a1").hover(function() {
			$(this).css({
				"background": 'url("img/index/bfd_logo_ch.png") no-repeat right -14px'
			});
		}, function() {
			$(this).css({
				"background": 'url("img/index/bfd_logo_ch.png") no-repeat right 0'
			})
		});
			//鼠标移入加边框
			$(".main-pro-ul").find("li").hover(function() {
				$(this).find(".main-pro-img").css({
					"border": "1px solid #4e4e4e"
				});
			}, function() {
				$(this).find(".main-pro-img").css({
					"border": "1px solid #fff"
				});
    });
			//展开
			var num = 0;
			$(".mainpro-brands-3").on("click", function() {
				if(!$(".mainpro-sort-3").hasClass("sort")) {
					num++;
					if(num % 2 != 0) {
						$(".mainpro-brands-3").find("span").html("收起").css({
							"background": "url(img/proList/pb_subnav_icoup.png) no-repeat right center"
						});
						$(".mainpro-t2-brands").css({"height":"250px"})
						$(".mainpro-brands-22").css({"height":"200px"});
						$(".mainpro-brands-22").find("ul").css({"overflow-y":"auto","overflow-x":"hidden","max-height":"200px"});
						$(".mainpro-brands-22").addClass("brands");
					} else {
						$(".mainpro-brands-3").find("span").html("展开").css({
							"background": "url(img/proList/pb_subnav_icodown.png) no-repeat right center"
						});
						$(".mainpro-t2-brands").css({"height":"auto"})
						$(".mainpro-brands-22").css({"height":"auto"});
						$(".mainpro-brands-22").find("ul").css({"overflow-y":"","overflow-x":"","max-height":"0"});
						$(".mainpro-brands-22").removeClass("brands");
					};
				} else {
					return;
				};
			});
			var num1 = 0;
			$(".mainpro-sort-3").on("click", function() {
				if(!$(".mainpro-brands-22").hasClass("brands")) {
					num1++;
					if(num1 % 2 != 0) {
						$(".mainpro-sort-3").find("span").html("收起").css({
							"background": "url(img/proList/pb_subnav_icoup.png) no-repeat right center"
						});
						$(".mainpro-t2-sort").css({"height":"200px"});
						$(".mainpro-sort-2").css({"height":"200px"});
						$(".mainpro-sort-2").find("ul").css({"overflow-y":"auto","overflow-x":"hidden","max-height":"200px"});
						$(".mainpro-sort-3").addClass("sort");
					} else {
						$(".mainpro-sort-3").find("span").html("展开").css({
							"background": "url(img/proList/pb_subnav_icodown.png) no-repeat right center"
						});
						$(".mainpro-t2-sort").css({"height":"auto"});
						$(".mainpro-sort-2").css({"height":"24px"});
						$(".mainpro-sort-2").find("ul").css({"overflow-y":"","overflow-x":"","max-height":"0"});
						$(".mainpro-sort-3").removeClass("sort");
					};
				} else {
					return;
				}
			});
			//商品列表
			//人气排名
			$(".mainpro-t3-top-li1").hover(function() {
				$(this).css({
					"background": "#fff"
				}).find("a").css({
					"color": "#6c6c6c"
				}).find("span").css({
					"background": "url(img/proList/1h.png) no-repeat right 4px"
				});
			}, function() {
				$(this).css({
					"background": "#6c6c6c"
				}).find("a").css({
					"color": "#fff"
				}).find("span").css({
					"background": "url(img/proList/1b.png) no-repeat right 4px"
				})
			});
			$(".mainpro-t3-top-li3").hover(function() {
				$(this).css({
					"background": "#fff"
				}).find("a").css({
					"color": "#6c6c6c"
				}).find("span").css({
					"background": "url(img/proList/1h.png) no-repeat right 4px"
				});
			}, function() {
				$(this).css({
					"background": "#6c6c6c"
				}).find("a").css({
					"color": "#fff"
				}).find("span").css({
					"background": "url(img/proList/1b.png) no-repeat right 4px"
				})
			});
			$(".mainpro-t3-top-li4").hover(function() {
				$(this).css({
					"background": "#fff"
				}).find("a").css({
					"color": "#6c6c6c"
				}).find("span").css({
					"background": "url(img/proList/pb_subnav_icoasc.png) no-repeat right 4px"
				});
			}, function() {
				$(this).css({
					"background": "#6c6c6c"
				}).find("a").css({
					"color": "#fff"
				}).find("span").css({
					"background": "url(img/proList/pb_subnav_icoprice.png) no-repeat right 4px"
				})
			});
			$(".mainpro-t3-top-li5").hover(function() {
				$(this).css({
					"background": "#fff"
				}).find("a").css({
					"color": "#6c6c6c"
				}).find("span").css({
					"background": "url(img/proList/pb_subnav_icosel.png) no-repeat right center"
				});
			}, function() {
				$(this).css({
					"background": "#6c6c6c"
				}).find("a").css({
					"color": "#fff"
				}).find("span").css({
					"background": "url(img/proList/pb_subnav_iconosel.png) no-repeat right center"
				})
			});
			//排序
			//人气排序
			var count = 0;
			$(".mainpro-t3-top-li1").find("a").on("click", function() {
				count++;
				if(count % 2 == 0) {
					createList1("low");
				} else {
					createList1("high");
				};
			});
			createList1();

			function createList1(type) {
				$.getJSON("data/proList.json", function(data) {
					if(type == "high") {
						data.sort(function(x, y) {
							return y.cdis.length - x.cdis.length;
						});
					} else if(type == "low") {
						data.sort(function(x, y) {
							return x.cdis.length - y.cdis.length;
						});
					};
					$(".mainpro-t3-list-ul").html("");
					for(var i in data) {
						var cNum = data[i].cnum;
						var cImg = data[i].cimg;
						var cDis = data[i].cdis;
						var cPri = data[i].cpri;
						var cBefore = data[i].cbefore;
						var cWord = data[i].cword;
						$(".mainpro-t3-list-ul").append('<li class="main-li" activeid="' + cNum + '"><div><a href="javascript:;"><img class="mainpro-t3-list-ul-img" src="' + cImg + '" alt="" /></a></div><div class="mainpro-t3-list-ul-box"><div><p class="mainpro-t3-list-ul-p1">' + cDis + '</p><p class="mainpro-t3-list-ul-p2">￥</p><p class="mainpro-t3-list-ul-p3">' + cPri + '</p><del class="mainpro-t3-list-ul-p4">' + cBefore + '</del><p class="mainpro-t3-list-ul-p5"><a href="javascript:;">' + cWord + '</a></p></div></div></li>');
					};

					$(".mainpro-t3-list-ul").find("li").on("click", function() {
						var goodsID = $(this).attr("activeId");
						localStorage.setItem("proId", goodsID);
					});
					$(".main-li").find("img").on("click" ,function(){
						window.open("proDis.html");
					});
					//飞入购物车
					var sumCount = "";
					$(".main-li").find(".mainpro-t3-list-ul-p5").on('click',function(e){
						var _this = $(this);
						$(this).addClass("none");
						$(this).parents(".main-li").siblings().addClass("none");
						var indexId = $(this).parents(".main-li").attr("activeid");
						var picId = data[indexId].cimg;
						var e = e || window.event;
						var x = e.clientX - 50;
						var y = e.clientY - 50;
						//或者当前鼠标的坐标值
						// console.log(x,y);
						//delay(n)表示延迟n 的时间来执行这个运动
						$('.thisImg').css({'width':'50px','height':'50px',"position":"fixed",'opacity':"1",'left':x+'px','top':y+'px'}).attr('src',picId).stop().animate({"left":"1200","top": "400px","opacity":"0","width":"0","height":"0"},2000,function(){
							_this.removeClass("none");
							_this.parents(".main-li").siblings().removeClass('none');
						});
						sumCount++;
						localStorage.setItem("sumCount1",sumCount);
						var sumGoods = localStorage.getItem("sumCount1");
						$(".rightcar-li2-span2").html(sumGoods);
							// 表示每点击一次购物车数量加1 并且显示在购物车span
					});
				});
			};
			//价格排序
			var count4 = 0;
			$(".mainpro-t3-top-li4").find("a").on("click", function() {
				count4++;
				if(count4 % 2 == 0) {
					createList4("low");
				} else {
					createList4("high");
				};
			});

			function createList4(type) {
				$.getJSON("data/proList.json", function(data) {
					if(type == "high") {
						data.sort(function(x, y) {
							return y.cpri - x.cpri;
						});
					} else if(type == "low") {
						data.sort(function(x, y) {
							return x.cpri - y.cpri;
						});
					};
					$(".mainpro-t3-list-ul").html("");
					for(var i in data) {
						var cNum = data[i].cnum;
						var cImg = data[i].cimg;
						var cDis = data[i].cdis;
						var cPri = data[i].cpri;
						var cBefore = data[i].cbefore;
						var cWord = data[i].cword;
						$(".mainpro-t3-list-ul").append('<li class="main-li" activeId="' + cNum + '"><div><a href="javascript:;"><img class="mainpro-t3-list-ul-img" src="' + cImg + '" alt="" /></a></div><div class="mainpro-t3-list-ul-box"><div><p class="mainpro-t3-list-ul-p1">' + cDis + '</p><p class="mainpro-t3-list-ul-p2">￥</p><p class="mainpro-t3-list-ul-p3">' + cPri + '</p><del class="mainpro-t3-list-ul-p4">' + cBefore + '</del><p class="mainpro-t3-list-ul-p5"><a href="javascript:;">' + cWord + '</a></p></div></div></li>');
					};

					$(".mainpro-t3-list-ul").find("li").on("click", function() {
						var goodsID = $(this).attr("activeId");
						localStorage.setItem("proId", goodsID);
					});
					$(".main-li").find("img").on("click" ,function(){
						window.open("proDis.html");
					});
					//飞入购物车
					var sumCount = localStorage.getItem("sumCount1");
					$(".main-li").find(".mainpro-t3-list-ul-p5").on('click',function(e){
						var _this = $(this);
						$(this).addClass("none");
						$(this).parents(".main-li").siblings().addClass("none");
						var indexId = $(this).parents(".main-li").attr("activeid");
						var picId = data[indexId].cImg;
						var e = e || window.event;
						var x = e.clientX - 50;
						var y = e.clientY - 50;
						//或者当前鼠标的坐标值
						// console.log(x,y);
						//delay(n)表示延迟n 的时间来执行这个运动
						$('.thisImg').css({'width':'50px','height':'50px',"position":"fixed",'opacity':"1",'left':x+'px','top':y+'px'}).attr('src',picId).stop().animate({"left":"1200","top": "400px","opacity":"0","width":"0","height":"0"},2000,function(){
							_this.removeClass("none");
							_this.parents(".main-li").siblings().removeClass('none');
						});
						sumCount++;
						localStorage.setItem("sumCount1",sumCount);
						var sumGoods = localStorage.getItem("sumCount1");
						$(".rightcar-li2-span2").html(sumGoods);
							// 表示每点击一次购物车数量加1 并且显示在购物车span
					});
				});
			};