
function getStyle(oBox, attr) {
	var result = "";
	if(oBox.currentStyle) {
		result = oBox.currentStyle[attr];
	} else {
		result = window.getComputedStyle(oBox)[attr];
	}
	return result;
}
//className的封装
function className(oBox, aClass) {
	var tag = oBox.getElementsByTagName("*");
	var result = [];
	for(var i = 0; i < tag.length; i++) {
		if(tag[i].className == aClass) {
			result.push(tag[i]);
		}
	}
	return result;
}
