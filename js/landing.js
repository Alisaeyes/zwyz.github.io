//验证码换图
var dNum = "";
var flag = false;
$.getJSON("../data/register.json", function(data) {
	var num = Math.floor(Math.random() * 5);
	var picNum = data[num].dpic;
	dNum = data[num].dnum;
	$(".bgpic-r-p5-i").attr("src", picNum);
});
$(".bgpic-r-p5-s").on("click", function() {
	$.getJSON("../data/register.json", function(data) {
		var num = Math.floor(Math.random() * 5);
		var picNum = data[num].dpic;
		dNum = data[num].dnum;
		$(".bgpic-r-p5-i").attr("src", picNum);
	});
});
$(".user-txt").on("blur",function(){
	var userTxt = $(".user-txt").val();
	if(userTxt == ""){
		$(".bgpic-r-p5-c").html("");
	}else{
		if(userTxt == dNum){
			$(".bgpic-r-p5-c").html("");
//			return flag = true;
		}else{
			$(".bgpic-r-p5-c").html("验证码有误,请重新输入")
		};
	};
});
//点击验证
$(".bgpic-btn").on("click", function() {
	var userName = $(".user-name").val();
	var userPwd = $(".user-pwd").val();
		if(userName == ""){
			$(".bgpic-r-p2-s").html("账号不能为空");
//			return flag = false;
		}else{
			$(".bgpic-r-p2-s").html("");
		};
		if(userPwd == ""){
			$(".bgpic-r-p3-s").html("密码不能为空");
//			return flag = false;
		}else{
			$(".bgpic-r-p3-s").html("");
		};
		if(userName == "" && userPwd == "") {
			$(".bgpic-r-p2-s").html("账号不能为空");
			$(".bgpic-r-p3-s").html("密码不能为空");
		} else {
			$(".bgpic-r-p2-s").html("");
			$(".bgpic-r-p3-s").html("");
			login(userName, userPwd);
		};
});

function login(userName, userPwd) {
	$.post("http://datainfo.duapp.com/shopdata/userinfo.php", {
		"status": "login",
		"userID": userName,
		"password": userPwd,
	}, 	function(data) {
			if(data == 0) {
				$(".bgpic-r-p2-s").html("账号错误!");
				alert(1)
//				return flag = false;
			} else if(data == 2) {
				$(".bgpic-r-p3-s").html("密码错误!");
				alert(2)
//				return flag = false;
			}else{
				localStorage.setItem("islogin","true");
				localStorage.setItem("userId",userName);
				localStorage.setItem("userPwd",userPwd);
				window.location = "../index.html";
			}
		});
};