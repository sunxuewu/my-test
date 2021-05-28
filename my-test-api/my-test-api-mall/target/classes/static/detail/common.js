function showLine(setting){
	var option = $.fn.extend({
		 tooltip:{
		        axisPointer:{
		            type:"cross"
		        },
		        trigger:"axis"
		    },
		    grid:{
		        left:60,
		        right:45,
		        bottom:45
		    },
		    dataZoom:[
		        
		        {
		            type:"inside",
		            start:0,
		            end:100
		        }
		    ]
	},setting)
	return option
}
function tipModal(content,time){
	 var jbox = new jBox('Modal',{
			draggable: 'title',
			content: content,
			overlay:false,
			delayClose:10,
			closeButton:false,
			autoClose:time
		})
		jbox.open();
}
function showModal(content,height,title){
	 var options = {
             title:title,
             content:content,
             color: 'blue',
             autoClose:0,
             adjustPosition: true,
             fixed:false,
             closeOnClick:false,
             width:'600',
             height:height
                 //adjustPosition:'flip',
         　　				 }
     var myModal = new jBox('Modal',options);
     myModal.open();
}
//日期格式化
function date2str(date, format) {
	var z = {
		y : date.getFullYear(),
		M : date.getMonth() + 1,
		d : date.getDate(),
		h : date.getHours(),
		m : date.getMinutes(),
		s : date.getSeconds()
	};
	return format.replace(/(y+|M+|d+|h+|m+|s+)/g, function(v) {
		return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1)))
				.slice(-(v.length > 2 ? v.length : 2))
	});
};


// unix时间戳转日期字符串
function unix2date(unix, format) {
	if (format) {
		return date2str(new Date(unix * 1000), format);
	}
	return date2str(new Date(unix * 1000), "yyyy-MM-dd hh:mm:ss");
}

//将毫秒数换算成x天x时x分x秒 
function timeFomat(totalSeconds) {
	if(totalSeconds <= 0) {
		return "0 秒";
	}

	var days = Math.floor(totalSeconds / 86400); //求一个最接近它的整数
	var hours = Math.floor((totalSeconds % 86400) / 3600);
	var minutes = Math.floor(((totalSeconds % 86400) % 3600) / 60);
	var seconds = Math.floor(((totalSeconds % 86400) % 3600) % 60);
	
	return (days > 0 ? days + " 天 " : "") + (hours > 0 ? hours + " 小时 " : "") + (minutes > 0 ? minutes + " 分 " : "") + (seconds > 0 ? seconds + " 秒" : "");
}

var browser = '';
var random = '';
function browserRedirect() {//判断什么浏览器打开得页面
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
   // document.writeln("您的浏览设备为：");
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    	browser="phone";
    } else {
    	browser="pc";
    }
}
function fRandomBy(under, over){ 
   switch(arguments.length){ 
     case 1: return parseInt(Math.random()*under+1); 
     case 2: return parseInt(Math.random()*(over-under+1) + under); 
     default: return 0; 
   } 
} 
browserRedirect();
function showNewWidow(url){//根据是否是移动端打开得浏览器 判断页面打开方式
	random = fRandomBy(1,10000);
	if(browser == 'phone'){
		window.open (url, random, 'height=600, width=800, top=40,left=20,replace=true, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no')
	}else{
	window.open (url, 'newwindow', 'height=600, width=800, top=40,left=20,replace=true, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no')
	}
}
/*用户签约弹框*/
function showSign(data,title){
	var content = '<div class="mainbox">'+
			'<form class="form-horizontal "><div class="span12"><p class="span4">姓名：<span>'+data.name+'</span></p><p  class="span3">生日：<span>'+data.birthyear+'</span></p><p  class="span3">性别：<span>'+data.gender+'</span></p></div>'+
			  	'<div class="span12"><p class="span4">地址：<span>'+data.address+'</span></p><p class="span4">联系电话：<span>'+data.phonenumber+'</p></div>';
			  	if(title == "用户签约"){
			  		content += '<iframe class="iframe" src="/healthbook-ms/a/sign/getProtocal"></iframe><div class="span12"><p class="span4"></p><p class="span5"><a target="_blank" href="/healthbook-ms/a/sign/getProtocal?type=download">签约即代表同意《签约协议》</a></p></div>'+
			  	'<div class="control-group" style="margin:20px 0 0 0px;"><div class="span12"><p class="span4"></p><p class="span5">'+
					'<input class="btn btn-primary" name="signSubmit" type="button" value="签约"/>&nbsp;'+
					'<input class="btn btn-default cancel" type="button" value="取消"/></p></div>'+
				'</div></form></div>';
			  	}
			  	if(title == "数据授权"){
			  		content += '<iframe class="iframe" src="/healthbook-ms/privacy.jsp"></iframe><div class="span12"><p class="span4"></p><p class="span5"><a href="/healthbook-ms/privacy.jsp" target="_blank">授权即代表同意《隐私协议》</a></p></div>'+
				  	'<div class="control-group" style="margin:20px 0 0 0px;"><div class="span12"><p class="span5">授权验证码：<input type="text" class="input-small" id="authorizationCode" /><input type="button" id="sendCode" userid="'+data.id+'" class="btn time"  value="发送" onclick="settime(this)" /></p><p class="span4">'+
						'<input class="btn btn-primary" name="authenticationSubmit" disabled type="button" value="授权"/>&nbsp;'+
						'<input class="btn btn-default cancel" type="button" value="取消"/></p></div>'+
					'</div></form></div>';
			  	}
			  	
			  	
	 var options = {
             title:title,
             content:content,
             color: 'blue',
             autoClose:0,
             adjustPosition: true,
             fixed:false,
             closeOnClick:false,
             width:'800',
             height:'510'
         　　				 }
     var myModal = new jBox('Modal',options);
     myModal.open();
     $("input[name='signSubmit']").on("click",function(){
    	 var clearhtml = $(this).closest(".jBox-Modal");
    	 $.ajax({
    		 url:'/healthbook-ms/a/sign/doSign?userId='+data.id,
    		 type:'post',
    		 async:false,
    		 success:data.successFunction||function(msg){
    			 $(".cancel").click();
    			 alertx("签约成功");
    		 }
    	 });
     })
      $("#authorizationCode").bind('input propertychange',function(){
    	  if($(this).val().length == 4){
    		  $("input[name='authenticationSubmit']").attr("disabled",false);
    	  }else{
    		  $("input[name='authenticationSubmit']").attr("disabled",true);
    	  }
      })
     $("input[name='authenticationSubmit']").on("click",function(){
    	 var clearhtml = $(this).closest(".jBox-Modal");
    	/* if ($.trim($("#authorizationCode").val())==""){
    		 alertx("请输入验证码");
    		 return ;
    	 }*/
    	 $.ajax({
    		 url:'/healthbook-ms/a/authentication/tbAuthentication/doAuthentication?userid='+data.id+'&authorizationCode='+$("#authorizationCode").val(),
    		 type:'post',
    		 async:false,
    		 dataType:'json',
    		 success:data.successFunction||function(msg){
    			 $(".cancel").click();
    			 alertx("授权成功");
    		 }
    	 });
     })
     
     $("#sendCode").on("click",function(){
    	 $.ajax({
    		 url:'/healthbook-ms/a/helplogin/helplogin/vUserDevice/authorization?id='+$(this).attr("userid"),
    		 type:'post',
    		 success:function(msg){
    		 }
    	 });
     })
      $(".cancel").on("click",function(){
    	  var clearhtml = $(this).closest(".jBox-Modal");
    	   clearhtml.remove();
    	   $(".jBox-overlay").remove();
     })
     
      $("#uploadNew").on("click",function(){
    	  $("#newFile").click();
     })
     $("#newFile").on("change",function(){
    	 if ($(this).prop("files")[0]!=undefined){
    		 var formData = new FormData();
    		 formData.append("file",$(this).prop("files")[0]);
    		 $.ajax({ 
    		 url : "/healthbook-ms/a/sign/uploadNew", 
    		 type : 'POST', 
    		 data : formData, 
    		 // 告诉jQuery不要去处理发送的数据
    		 processData : false, 
    		 // 告诉jQuery不要去设置Content-Type请求头
    		 contentType : false,
    		 beforeSend:function(){
    		 console.log("正在进行，请稍候");
    		 },
    		 success : function(responseStr) { 
    			 alertx("上传成功");
    		 }, 
    		 error : function(responseStr) { 
    			 alertx("上传失败");
    		 } 
    		 });
    	 }
     })
     
}
/*60秒倒计时*/
var countdown=60; 
function settime(val) { 
if (countdown == 0) { 
val.removeAttribute("disabled");    
val.value="发送"; 
countdown = 60; 
} else { 
val.setAttribute("disabled", true); 
val.value="重新发送(" + countdown + ")"; 
countdown--; 
setTimeout(function() { 
	settime(val) 
	},1000) 
} 

} 
/*活动弹框*/
function showActivity(status,id,start,name,address,endtime){
	var src= 'http://pan.baidu.com/share/qrcode?w=200&h=200&url='+id;
	 if(status == '开启'){
	        var content = "<div class='firstone'><span style='margin-left:10px;position:relative'>1</span><a href='#' ><input type='button' class='edit btn btn-primary toggle' value='编辑'><input type='button' name='submit' class='btn btn-primary toggle' value='保存' style='display:none'></a><i id='code' style='position:absolute;width:100px;right:8px;top:5px'></i></div>"+
        		"<div class='control-group' style='margin:10px 80px 8px 10px'><lable>活动日期：</lable>"+start+" 至 "+endtime+"</div><form method = 'post' class= 'form-horizontal'>"+
               "<div class='control-group'><lable>活动名称：</lable><input class='disable'style='height:30px;width:400px' name='title' class='input-medium'  required disabled='disabled' type='text' value='"+name+"' maxlength='30'><font color='red'>*</font><p class='dis_name'>请输入活动名称</p></div>"+
               "<div class='control-group' style='border:none'><lable>活动地址：</lable><textarea class='disable' name='address' rows='4' maxlength='255' disabled='disabled' cols='20' class='input-medium' required style='vertical-align:top;padding:2px 8px;width:400px'>"+address+"</textarea><font color='red'>*</font><p class='dis_address'>请输入活动地址</p></div>"+
               "</form>"+
               "<div class='control-group firsttwo'>"+
               "<span style='margin-left:10px'>2</span><a class='peizhi' onclick=showNewWidow('/healthbook-ms/a/tb_activity_sys_user/tbActivitySysUser/list?id="+id+"') href='#'>服务人员</a>"+
               "<span>3</span><a class='add' onclick=showNewWidow('/healthbook-ms/a/activity/v_activity_user/vActivityUser?activity_id="+id+"') href='#'>活动用户</a>"+
               "<span>4</span><a class='add' onclick=showNewWidow('/healthbook-ms/a/activitydevice/tbActivityDevice?activity_id="+id+"') href='#'>活动设备</a>"+
               "<span>5</span><a class='add' onclick=showNewWidow('/healthbook-ms/a/tb_activity_configuration/tbActivityConfiguration?activity_id="+id+"') href='#'>检测项目</a>"+
               "<span>6</span><a class='notice notify' href='#'>通知</a></div>" +
               "<div class='control-group cancel' style='text-align:center;border-top:1px solid #ccc'><input type='button'name='cancel' class='btn btn-primary cancel' value='关 闭' ></input></div>";
        showModal(content,"440","<div style='float:left'>活动信息</div>");
   	}else{
   		content = "<div class='control-group' style='margin:0 10px 8px'><lable>活动日期：</lable>"+start+" 至 "+start+"</div><form method = 'post' class= 'form-horizontal'>"+
           "<div class='control-group'><lable>活动名称：</lable><input name='title' class='input-medium' style='height:30px;width:400px!important;'  required type='text' value='"+name+"' maxlength='30' readonly><font color='red'>*</font></div>"+
           "<div class='control-group' style='border:none'><lable>活动地址：</lable><textarea name='address' rows='4' maxlength='255' cols='20' class='input-medium' required style='vertical-align:top;padding:2px 8px;width:400px!important' readonly>"+address+"</textarea><font color='red'>*</font></div>"+
           "</form>"+
           "<div class='control-group cancel' style='text-align:center;border-top:1px solid #ccc'><input type='button'name='cancel' class='btn btn-primary cancel' value='关 闭' ></input></div>";;
           showModal(content,"340","<div style='float:left'>活动信息</div>");
   	}
       $(".edit").on("click",function(){
       	$(".disable").removeAttr("disabled");
       	$("input[name ='submit']").show();
       	$(this).hide();
       })
       var clearhtml = $(this).closest(".jBox-Modal");
       $("input[name ='submit']").on("click",function(){
       	var obj =new Object();
    	   obj.title = $("input[name='title']").val();
          obj.address = $("textarea[name='address']").val();
          $("input[name='title']").focus(function(){
       	   $(".dis_name").css("display","none")
          });
          $("input[name='address']").focus(function(){
       	   $(".dis_address").css("display","none")
          });
    	   var clearhtml = $(this).closest(".jBox-Modal");
    	  if(obj.title.length > 0 && obj.address.length > 0){
    		 $.ajax({
                type: "POST",
                url: "/healthbook-ms/a/activity/activity/saveActivity",
                data: {
             	    id: id,
                	title: obj.title,       
                   address: obj.address,
                    },
                dataType: "json",
                success: function(data){
         		   tipModal(data.msg,3000)
                 }
            });
    		$(".edit").show();
    		$("input[name ='submit']").hide();
    		$(".disable").attr("disabled",true);
    	  }else{
    		 $(".edit").hide();
     		$("input[name ='submit']").show();
    		 if(obj.title.length <= 0){
 			   $(".dis_name").css("display","block")
     		   }else if(obj.address.length <= 0){
     			   $(".dis_address").css("display","block")
     		   }
    	  }
    	   
       });
       $("input[name ='cancel']").on('click',function(){
    	   var clearhtml = $(this).closest(".jBox-Modal");
    	   clearhtml.remove();
    	   $(".jBox-overlay").remove();
    	   if(status == "开启"){
    		   window.location.reload()
    	   }
       })
       /*发送活动通知*/
       $(".notify").on("click",function(){
       	var jbox = new jBox('Confirm', {
        		draggable: 'title',
        		  content: '你确定要向该活动的活动用户推送通知吗？',
        		  overlay: false,
        		  reposition: false,
        		  repositionOnOpen: false,
        		  confirmButton: '确定',
        		  cancelButton: '取消',
        		  closeOnConfirm: true,
        		  confirm:function(){
                	$.ajax({
                        type: "POST",
                        url: "/healthbook-ms/a/activity/activity/notify",
                        data: {
                     	    id: id,
                            },
                        dataType: "json",
                        success: function(data){
                        	tipModal(data.msg,3000)
                         }
                    });
        		  }
        		});
       	jbox.open();
       });
       $("#code").qrcode({
			render: "table",
			width: 100,
			height:100,
			text: id
		});
}
function fullScreen() {//全屏代码
    var el = document.documentElement,
        rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen,
        wscript;
 
    if(typeof rfs != "undefined" && rfs) {
        rfs.call(el);
        return;
    }
 
    if(typeof window.ActiveXObject != "undefined") {
        wscript = new ActiveXObject("WScript.Shell");
        if(wscript) {
            wscript.SendKeys("{F11}");
        }
    }
}
/*心电图*/
function xd_charts(dataXd,xindian){
	/* 将类似数组的字符串转换成数组 start */
	dataXd = dataXd.trim('[','left'); 
	dataXd = dataXd.trim(']','right');
	dataXd = "'"+dataXd+ "'";
	 var arr = dataXd.split(',');
	 var data=[];
	  for(var i in arr){
	 data.push(arr[i])
	  } 
	  /* 将类似数组的字符串转换成数组 end */
	var dateList = data.map(function (item) {
	      return item[0];
	  });
	  var valueList = data.map(function (item) {
	      return item;
	  });

	  option = {

	      title: {
	          left: 'center',
	          text: '心电图变化趋势表'
	      },
	      tooltip: {
	          trigger: 'axis',
	          formatter:'心电值:{c}'
	      },
	      xAxis: {
	    	  show:false,
	          data: dateList
	      },
	      yAxis: {
	          splitLine: {show: false}
	      },
	      dataZoom: [{
	    	  start: 0
	        }, {
	            type: 'inside'
	        }],
	      series: [{
	          type: 'line',
	          showSymbol: false,
	          data: valueList
	      }]
	  };
	  xindian.setOption(option);
}
/*去掉字符串两边的特殊字符方法*/
  String.prototype.trim = function (char, type) {
	  if (char) {
	    if (type == 'left') {
	      return this.replace(new RegExp('^\\'+char+'+', 'g'), '');
	    } else if (type == 'right') {
	      return this.replace(new RegExp('\\'+char+'+$', 'g'), '');
	    }
	    return this.replace(new RegExp('^\\'+char+'+|\\'+char+'+$', 'g'), '');
	  }
	  return this.replace(/^\s+|\s+$/g, '');
	}






