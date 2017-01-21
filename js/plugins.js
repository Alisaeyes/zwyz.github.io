var aBox = className(document , "box");
slide(aBox[0]);
function slide(oBox){
			var oBoxbg = oBox.children[0].children;
			var oBox2 = oBox.children[1];
			var num = 0;
			var zIndex = 0;
			var aSpan = [];
		oBoxbg[0].style["zIndex"] = 0;
		$(oBoxbg[num]).stop().animate({"width":"100%","height":"350px","display": "block"},2000).siblings().css({"width":"105%","height":"368px","display":"none"});
		oBox.timer = setInterval(pri, 2000);
		oBox.onmouseover = function(){
			clearInterval(oBox.timer);
		}
		oBox.onmouseout = function(){
			oBox.timer = setInterval(pri, 2000);
		}
		for(var i = 0;i < oBoxbg.length; i++){
			var span = document.createElement("span");
			oBox2.appendChild(span);
			aSpan.push(span);
		}
		aSpan[0].className = "active";
		for(var j = 0;j< oBoxbg.length; j++){
			aSpan[j].index = j;
			aSpan[j].onclick = function(){
				if(num != this.index){
					zIndex++;
					num = this.index;
					change();
				}
			}
		}
		
		function pri() {
			num++;
			zIndex++;
			$(oBoxbg[num]).stop().animate({"width":"100%","height":"350px","display": "block"},2000).siblings().css({"width":"105%","height":"368px","display":"none"});
			if(num > oBoxbg.length - 1) {
				num = 0;
			}
			change();
		}
		function change() {
			$(oBoxbg[num]).stop().animate({"width":"100%","height":"350px","display": "block"},2000).siblings().css({"width":"105%","height":"368px","display":"none"});
			oBoxbg[num].style["zIndex"] = zIndex;
			for(var i = 0;i<oBoxbg.length; i++){
				aSpan[i].className = "";
			}
			aSpan[num].className = "active";
		}
	}