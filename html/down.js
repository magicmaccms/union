document.oncontextmenu=new Function("event.returnValue=false;");
document.onselectstart=new Function("event.returnValue=false;");

var url = location.href;
var usa = navigator.userAgent.toLowerCase();

if (usa.indexOf("android") > -1) {
	if(url.indexOf('xfplay')>-1){
		document.getElementById('dlink').setAttribute('href', 'http://down.xfplay.com/xfplay.apk');
		document.getElementById('right').innerHTML='<p>请复制本网址在先锋影音APP中打开</p><p>或者在电脑端访问</p><p>即可播放</p>';
	}
	else{
		
	}
}
else if (usa.indexOf("iphone") > -1 || usa.indexOf("ipad") > -1 || usa.indexOf("mac") > -1) {
	if(url.indexOf('xfplay')>-1){
		document.getElementById('dlink').setAttribute('href', 'http://phone.xfplay.com/xfplayios.html');
		document.getElementById('right').innerHTML='<p>请复制本网址在先锋影音APP中打开</p><p>或者在电脑端访问</p><p>即可播放</p>';
	}
	else{
		
	}
}
