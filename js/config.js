var siteurl = "http://shadowopera.com/app/index.php";

function gup(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

function gotoBack(){
	history.go(-1);
    navigator.app.backHistory();	
}

window.addEventListener("orientationchange", function(){
   
});

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
	
	localStorage.setItem('deviceplatform', device.platform);
	var path = window.location.pathname;
	var page = path.split("/").pop();

	if(page=='live.html' || page=='play.html' || page=='playvideo.html'){
		//screen.orientation.lock('landscape');
		screen.orientation.lock('landscape-primary');
		
	}
	else
	{
		//screen.orientation.lock('portrait');
		screen.orientation.lock('portrait-primary');
	}
	
};

