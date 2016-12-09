//屏蔽右击
    document.body.oncontextmenu=document.body.ondragstart=  document.body.onselectstart=document.body.onbeforecopy=function(){return false;};
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
