function sb_on(){
	if(sidebar){
		sidebar = false;
		$("#main").animate({"left":"0"},500)
		$("#sidebar").animate({"left":"100%"},500)
	}else{
		sidebar = true;
		$("#main").animate({"left":"-70%"},500)
		$("#sidebar").animate({"left":"30%"},500)
	}
}

function init(){
	$("#loading-screen").delay(1000).fadeOut();
	sidebar = false;
	sEID = 0;

	sdcard = navigator.getDeviceStorage("sdcard");

}

document.addEventListener("DOMContentLoaded", function () {

	init();

	url  = document.getElementById("url");
	go   = document.getElementById("go");
	stop = document.getElementById("stop");
	prev = document.getElementById("btn_pre");
	next = document.getElementById("btn_nex");
	sb  = document.getElementById("btn_add_t");
	

	//Sidebar
	sb.addEventListener("touchend", function(){
		sb_on();
	})

	$("#s_pr").click(function(){
		sb_on();
		$("#preferences").fadeIn();
	})

	$("#s_at").click(function(){
		sb_on();
		$("#about").fadeIn();
	})

	$("#preferences #close").click(function(){
		$("#preferences").fadeOut();
	})

	$("#about #close").click(function(){
		$("#about").fadeOut();
	})

});