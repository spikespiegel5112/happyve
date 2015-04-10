$(document).ready(function(){
	happyexecrise();
})
function happyexecrise(){
	var index=0;
	var percentage=parseInt($(".newbadhabbit_percentage").text());
	$(".progressbar span").css("width",percentage+"%")
	$(".newbadhabbit_title_wrapper a, .newbadhabbit_dialog_wrapper input[type=button]").click(function(){
		if($(".newbadhabbit_dialog_wrapper").is(":hidden")){
			$(".newbadhabbit_dialog_wrapper").fadeIn();
		}else{
			setTimeout(function(){$(".newbadhabbit_dialog_wrapper").fadeOut();},300)
		}
	})

	$(".haexe_home_ranking_list_wrapper li").click(function(){
		index=$(this).index();
		$(".haexe_home_carousel_tree_wrapper div").fadeOut().eq(index).fadeIn();
		$(this).siblings("li").removeClass("shown");
		$(this).addClass("shown");
	})
	$(".haexe_home_carousel_desc_list ul li").click(function(){
		console.log("aaaq")
	})
}