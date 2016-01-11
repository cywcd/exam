# exam
在线考试防作弊js完整版，依赖jquery

# 在线考试防作弊方案
1.窗口大小变化作弊提醒
2.离开当前窗口作弊提醒
3.点击链接转外部提示退出考试
4.防刷新倒计时
5.考试违规3次退出当前考试（系统关闭当前窗口）
6.禁用鼠标右击，禁用复制粘贴

# js源码
-----------------------------------
<pre>
<script type="text/javascript">
		//屏蔽右击
		document.body.oncontextmenu=document.body.ondragstart= document.body.onselectstart=document.body.onbeforecopy=function(){return false;};
		//屏蔽复制粘贴
		document.body.oncopy=document.body.oncut=function(){return false;};	
		var blurNum=1;
		$(window).on('blur resize',function(){	
			if(blurNum>3){
				alert("你已经违规3次考试结束！");
				$(window).off("beforeunload");
				CloseWebPage();
			}else{
				alert("考试中切换窗口违规"+blurNum+"次！");
			}			
			blurNum++;
		});
		
		$(window).on('beforeunload', function(){ 
			$(this).off('blur resize');
		    return '离开此页面将退出考试!'; 
		});
				
		//关闭窗口方法
		function CloseWebPage(){
		 if (navigator.userAgent.indexOf("MSIE") > 0) {
		  if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
		   window.opener = null;
		   window.close();
		  } else {
		   window.open('', '_top');
		   window.top.close();
		  }
		 }
		 else if (navigator.userAgent.indexOf("Firefox") > 0) {
		  window.location.href = 'about:blank ';
		 } else {
		  window.opener = null;
		  window.open('', '_self', '');
		  window.close();
		 }
		}
	</script>
</pre>
