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



	$(".slideTxtBox").slide();


	$('#happy-carousel').carousel({
		interval: 4000
	});


	$('[id^=carousel-selector-]').click( function(){
		var id_selector = $(this).attr("id");
		var id = id_selector.substr(id_selector.length -1);
		id = parseInt(id);
		$('#happy-carousel').carousel(id);
		$('[id^=carousel-selector-]').removeClass('selected');
		$(this).addClass('selected');
	});


	$('[id^=carousel-selector-]').hover(function(){
		var id_selector = $(this).attr("id");
		var id = id_selector.substr(id_selector.length -1);
		id = parseInt(id);
		$('#happy-carousel').carousel(id);
		$('[id^=carousel-selector-]').removeClass('selected');
		$(this).addClass('selected');
	});


	$('#happy-carousel').on('slid', function (e) {
		var id = $('.item.active').data('slide-number');
		id = parseInt(id);
		$('[id^=carousel-selector-]').removeClass('selected');
		$('[id=carousel-selector-'+id+']').addClass('selected');
	});

	var changeUserLevelDiskImg = function(imgUrl) {
		$("#user-level-disk-img").attr("src", imgUrl);
	}

	$("#user-level-test").hover(function() {
		changeUserLevelDiskImg("img/test-round.png")
	}, function(){
		changeUserLevelDiskImg("img/half-round.png");
	})

	$("#user-level-exercise").hover(function() {
		changeUserLevelDiskImg("img/exercise-round.png")
	}, function(){
		changeUserLevelDiskImg("img/half-round.png");
	})

	$("#user-level-mark").hover(function() {
		changeUserLevelDiskImg("img/mark-round.png")
	}, function(){
		changeUserLevelDiskImg("img/half-round.png");
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
