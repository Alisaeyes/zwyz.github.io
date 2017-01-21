var proId = localStorage.getItem("proId");
$.getJSON("data/proList.json",function(data){
	$(".content-bottom-img").find("img").attr("src" , data[proId].cimg);
	$(".content-bottom-dis1-s1").html(data[proId].cpri);
	$(".content-bottom-dis1-s2").html(data[proId].cbefore);
	$(".content-group-leftd1").find("img").attr("src" , data[proId].cimg);
	$(".content-group-leftd2p1").append(data[proId].cpri);
	//点击数量增加，减少
	var carnum = $(".content-bottom-dis3i1").val();
	$(".content-bottom-dis3s3").on("click" , function(){
		carnum ++;
		$(".content-bottom-dis3i1").val(carnum);
	});
	$(".content-bottom-dis3s2").on("click" , function(){
		if(carnum == 1){
			return;
		}else{
			carnum --;
			$(".content-bottom-dis3i1").val(carnum);
		}
	});
	//品牌热卖
	$(".content-group-buy").find("h2").find("a").hover(function(){
		$(this).css({"background":"url(img/proDis/bfd_logo_ch.png) no-repeat 0 -14px"});
	},function(){
		$(this).css({"background":"url(img/proDis/bfd_logo_ch.png) no-repeat 0 0"});
	});
	//计算四件套价格
	$(".content-group-left").find("li").hover(function(){
		$(this).find(".content-group-leftd1").find("img").css({"border":"1px solid #6c6c6c"});
		$(this).find(".content-group-leftd2p0").css({"color":"#ff643c"});
	},function(){
		$(this).find(".content-group-leftd1").find("img").css({"border":"1px solid #fff"});
		$(this).find(".content-group-leftd2p0").css({"color":"#6c6c6c"});
	});
	var uncheaknum = 0;
	$(".content-group-rightp2b1").html("￥" + (($(".cheaked").length + 1) * data[proId].cpri).toFixed(2));
	$(".content-group-rightp1b1").html($(".cheaked").length + 1);
			$(".content-group-rightp3s1").html("￥" + (($(".cheaked").length + 1) * 39.00).toFixed(2));
			$(".content-group-rightp4s1").html("￥" + (($(".cheaked").length + 1) * 19.10).toFixed(2));
	$(".uncheaked").on("click",function(){
		uncheaknum++;
		if(uncheaknum % 2 == 0){
			$(this).css({"background":"url(img/proDis/sel.png) no-repeat 0 -35px"});
			$(this).removeClass("cheaked");
			$(".content-group-rightp2b1").html("￥" + (($(".cheaked").length + 1) * data[proId].cpri).toFixed(2));
			$(".content-group-rightp1b1").html($(".cheaked").length + 1);
			$(".content-group-rightp3s1").html("￥" + (($(".cheaked").length + 1) * 39.00).toFixed(2));
			$(".content-group-rightp4s1").html("￥" + (($(".cheaked").length + 1) * 19.10).toFixed(2));
		}else{
			$(this).css({"background":"url(img/proDis/sel.png) no-repeat 0 -56px"});
			$(this).addClass("cheaked");
			$(".content-group-rightp2b1").html("￥" + (($(".cheaked").length + 1) * data[proId].cpri).toFixed(2));
			$(".content-group-rightp1b1").html($(".cheaked").length + 1);
			$(".content-group-rightp3s1").html("￥" + (($(".cheaked").length + 1) * 39.00).toFixed(2));
			$(".content-group-rightp4s1").html("￥" + (($(".cheaked").length + 1) * 19.10).toFixed(2));
		};
	});
	//商品详情左侧
	$(".content-brands-sortleft-center").find("h2").find("a").hover(function(){
		$(this).css({"background":"url(img/proDis/bfd_logo_ch.png) no-repeat 0 -14px"});
	},function(){
		$(this).css({"background":"url(img/proDis/bfd_logo_ch.png) no-repeat 0 0"});
	});
	$(".content-brands-sortleft-center").find("h3").find("a").hover(function(){
		$(this).css({"background":"url(img/proDis/bfd_logo_ch.png) no-repeat 0 -14px"});
	},function(){
		$(this).css({"background":"url(img/proDis/bfd_logo_ch.png) no-repeat 0 0"});
	});
	//吸顶
	$(window).scroll(function(){
		var height = $(".content-brands-level").offset().top;
		if($(window).scrollTop() >= height){
			$(".content-brands-sortright").find("h3").css({"position":"fixed","left":"50%","top":"0","marginLeft":"-330px"});
		}else{
			$(".content-brands-sortright").find("h3").css({"position":"relative","left":"0","top":"0","marginLeft":"0"});
		}
	})
});

