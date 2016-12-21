		function ajax(url,fnWin,fnfaild){
			//1.创建Ajax对象
			//var ajax = new XMLHttpRequest(); //标准浏览器
			//var ajax = new ActiveXObject("Microsoft.XMLHTTP"); //IE7以下
			var ajax = null; 
			//alert(window.XMLHttpRequest);
			//兼容
			if(window.XMLHttpRequest){
				ajax = new XMLHttpRequest();
			}else{
				ajax = new ActiveXObject("Microsoft.XMLHTTP");
			}
			//alert(ajax);
			//alert(ajax.readyState);
			//2.与服务器建立连接
			//ajax.open("连接方式"，"要访问的文件"，true);
			//true: 表示异步（同时进行）
			//false: 表示同步（一个一个执行）
			ajax.open('GET',url,true);
			//alert(ajax.readyState);
			//3.发送请求
			ajax.send();
			
			//4.接收数据
			//onreadystatechange:状态改变事件
			ajax.onreadystatechange = function(){
				//alert(ajax.readyState);
				if(ajax.readyState == 4){
					//alert(ajax.status);
					if(ajax.status == 200){
						//alert("成功了");
						//alert(ajax.responseText); //将从服务器上访问到的文件内容返回来
						if(fnWin){
							fnWin(ajax.responseText);
						}
					}else{
						//alert("失败了");
						if(fnfaild){
							fnfaild();
						}
					}
				}
			};
		}