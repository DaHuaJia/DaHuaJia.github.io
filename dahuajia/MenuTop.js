	window.onscroll=function(){ /*�˵��������ö�*/
		var Num=document.documentElement.scrollTop||document.body.scrollTop;
		var oMenuBar=document.getElementById("MenuBar");
		var oMenuBarLogo=document.getElementById("MenuBarLogo");
		var oReturnBtn=document.getElementById("ReturnTopBtn");
		if(Num>336){//��������ʱ�̶��˵���������ʾ���ض�����ť
			oMenuBar.style.position="fixed";
			oMenuBar.style.top="0px";
			oMenuBar.style.paddingLeft="0px";
			oMenuBarLogo.style.display="block";
			oReturnBtn.style.display="block";
		}else{ //��������ʱȡ���̶��˵��������ض�����ť��ʧ
			oMenuBar.style.position="relative";
			oMenuBar.style.paddingLeft="220px";
			oMenuBarLogo.style.display="none";
			oReturnBtn.style.display="none";
		}
	};