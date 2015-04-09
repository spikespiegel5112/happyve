$(document).ready(function(){
	var percentage=parseInt($(".newbadhabbit_percentage").text());
	$("#progressbar span").css("width",percentage+"%")
	$(".newbadhabbit_title_wrapper a, .newbadhabbit_dialog_wrapper input[type=button]").click(function(){
		if($(".newbadhabbit_dialog_wrapper").is(":hidden")){
			$(".newbadhabbit_dialog_wrapper").fadeIn();
		}else{
			setTimeout(function(){$(".newbadhabbit_dialog_wrapper").fadeOut();},300)
		}
	})
})