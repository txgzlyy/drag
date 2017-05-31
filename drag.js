
function drag(id){
	var obj = document.getElementById(id);
	
	obj.onmousedown = function(ev){
		var ev = ev || event;
		var disx = ev.clientX - obj.offsetLeft;
		var disy = ev.clientY - obj.offsetTop;
		document.onmousemove = function(ev){
			var ev = ev || event;
			obj.style.left = ev.clientX - disx + 'px';
			obj.style.top = ev.clientY - disy + 'px';
		}
		document.onmouseup = function(){
			document.onmousemove = document.onmouseup = null;
		}
 	}
}
