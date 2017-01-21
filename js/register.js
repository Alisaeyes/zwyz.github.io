var flag1 = false;
var userName = "";
$(".user-name").blur(function() {
	userName = $(".user-name").val();
	var num = /^1[3|5|7|8]\d{9}$/;
	if(num.test(userName)) {
		$(".bgpic-r-p2").html("")
		return flag1 = true;
	} else {
		$(".bgpic-r-p2").html("手机格式有误，请重新输入")
		return flag1 = false;
	};
});
var userPwd = "";
var flag2 = false;
$(".user-pwd").blur(function() {
	userPwd = $(".user-pwd").val();
	if(userPwd.length >= 6 && userPwd.length <= 16) {
		$(".bgpic-r-p3").html("");
		$(".user-pwd1").blur(function() {
			var userPwd1 = $(".user-pwd1").val();
			if(userPwd1 != "") {
				if(userPwd1 == userPwd) {
					$(".bgpic-r-p31").html("")
					return flag2 = true;
				} else {
					$(".bgpic-r-p31").html("两次输入的密码不匹配");
					return flag2 = false;
				}
			} else {
				$(".bgpic-r-p31").html("请输入确认密码!");
				return flag2 = false;
			};
		});
	} else {
		$(".bgpic-r-p3").html("密码长度需6-16位字符");
		return flag2 = false;
	};
});
//验证码点击换图
var dNum = "";
$.getJSON("../data/register.json", function(data) {
	var num = Math.floor(Math.random() * 5);
	var picNum = data[num].dpic;
	dNum = data[num].dnum;
	$(".bgpic-r-p4-i").attr("src", picNum);
});
$(".bgpic-r-p4-s").on("click", function() {
	$.getJSON("../data/register.json", function(data) {
		var num = Math.floor(Math.random() * 5);
		var picNum = data[num].dpic;
		dNum = data[num].dnum;
		$(".bgpic-r-p4-i").attr("src", picNum);
	});
});
var flag3 = false;
$(".user-txt").on("blur",function(){
	var userTxt = $(".user-txt").val();
	if(userTxt == ""){
		$(".bgpic-r-p5").html("");
	}else{
		if(userTxt == dNum){
			$(".bgpic-r-p5").html("");
			return flag3 = true;
		}else{
			$(".bgpic-r-p5").html("验证码有误,请重新输入");
			return flag3 = false;
		};
	};
});
//点击注册
var flag = false;
$(".bgpic-btn").find("b").on("click",function(){
	if(flag1 && flag2 && flag3){
		register(userName,userPwd);
		window.location = "landing.html";
		return flag = false;
	}else{
		$(".bgpic-r-p5").html("请完善以上信息");
	};
});
function register(userName,userPwd){
	$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{
		"status":"register",
		"userID":userName,
		"password":userPwd
	},function(data){
		if(data == 0){
			$(".bgpic-r-p2").html("该用户已被注册");
			return flag = false;
		}else if(data == 1){
			return flag = true;
		}
	})
}
