window.onload = function(){
	var i = 1;
	var oBox = document.getElementById('box1');
	var oBtn1 = document.getElementById('buttonLeft');
	var oBtn2 = document.getElementById('buttonRight');
	var oImg = document.getElementById('lunbotuImg');
	li1.style.background = '#BF4D4D';
	oBox.onmouseover = function(){     /*设置按钮显示消失*/
		oBtn1.style.display = 'block';
		oBtn2.style.display = 'block';
	};
	oBox.onmouseout = function(){
		oBtn1.style.display = 'none';
		oBtn2.style.display = 'none';
	};
	oBtn1.onclick = function(){       /*设置按钮点击轮播和提示*/
		if(i == 1) i = 5;
		i--;
		oImg.src = 'images/' + i + '.jpg';
		li1.style.background = '#FFA6A6';
		li2.style.background = '#FFA6A6';
		li3.style.background = '#FFA6A6';
		li4.style.background = '#FFA6A6';
		var Li = document.getElementById('li' + i);
		Li.style.background = '#BF4D4D';
	};
	oBtn2.onclick = function(){
		if(i == 4) i = 0;
		i++;
		oImg.src = 'images/' + i + '.jpg';
		li1.style.background = '#FFA6A6';
		li2.style.background = '#FFA6A6';
		li3.style.background = '#FFA6A6';
		li4.style.background = '#FFA6A6';
		var Li = document.getElementById('li' + i);
		Li.style.background = '#BF4D4D';
	};
	li1.onmouseover = function(){        //设置查看缩略图
		li1div.style.display = 'block';
	};
	li1.onmouseout = function(){
		li1div.style.display = 'none';
	};
	li2.onmouseover = function(){
		li2div.style.display = 'block';
	};
	li2.onmouseout = function(){
		li2div.style.display = 'none';
	};
	li3.onmouseover = function(){
		li3div.style.display = 'block';
	};
	li3.onmouseout = function(){
		li3div.style.display = 'none';
	};
	li4.onmouseover = function(){
		li4div.style.display = 'block';
	};
	li4.onmouseout = function(){
		li4div.style.display = 'none';
	};
	li1.onclick = function(){      //设置黄点点击
		oImg.src = 'images/1.jpg';
		i = 1;
		li1.style.background = '#BF4D4D';
		li2.style.background = '#FFA6A6';
		li3.style.background = '#FFA6A6';
		li4.style.background = '#FFA6A6';
	};
	li2.onclick = function(){
		oImg.src = 'images/2.jpg';
		i = 2;
		li2.style.background = '#BF4D4D';
		li1.style.background = '#FFA6A6';
		li3.style.background = '#FFA6A6';
		li4.style.background = '#FFA6A6';
	};
	li3.onclick = function(){
		oImg.src = 'images/3.jpg';
		i = 3;
		li3.style.background = '#BF4D4D';
		li1.style.background = '#FFA6A6';
		li2.style.background = '#FFA6A6';
		li4.style.background = '#FFA6A6';
	};
	li4.onclick = function(){
		oImg.src = 'images/4.jpg';
		i = 4;
		li4.style.background = '#BF4D4D';
		li1.style.background = '#FFA6A6';
		li2.style.background = '#FFA6A6';
		li3.style.background = '#FFA6A6';
	};
};