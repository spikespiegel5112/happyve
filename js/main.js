/**
 * 幸福流自定义JS
 */
(function($){
	'use strict';

	$(document).ready(function(){
		happyexecrise();
		user_level_hover();
		slideTxtBoxAction();
		indexCarouselAction();

		$("img.lazy").unveil();

		$(".activity .thumbnail, .teacher-img .thumbnail").matchHeight({
			byRow: !0,
			property: "height",
			target: null,
			remove: !1
		});

		$.scrollUp({
			scrollName: "scrollUp",
			topDistance: "300",
			topSpeed: 300,
			animation: "fade",
			animationInSpeed: 200,
			animationOutSpeed: 200,
			scrollText: '<i class="fa fa-angle-up"></i>',
			activeOverlay: !1
		})

	})

	function happyexecrise(){
		var index=0;
		var percentage=parseInt($(".newbadhabbit_percentage").text());
		$(".progressbar span").css("width",percentage+"%");
		$(".newbadhabbit_title_wrapper a, .newbadhabbit_dialog_wrapper input[type=button]").click(function(){
			if($(".newbadhabbit_dialog_wrapper").is(":hidden")){
				$(".newbadhabbit_dialog_wrapper").fadeIn();
			}else{
				setTimeout(function(){$(".newbadhabbit_dialog_wrapper").fadeOut();},300)
			}
		});


		$(".haexe_home_ranking_list_wrapper li").click(function(){
			index=$(this).index();
			$(".haexe_home_carousel_tree_wrapper div").fadeOut().eq(index).fadeIn();
			$(this).siblings("li").removeClass("shown");
			$(this).addClass("shown");
		});
		$(".haexe_home_carousel_desc_list ul li").click(function(){
			console.log("aaaq")
		});
	}

	function user_level_hover() {
		var changeUserLevelDiskImg = function(imgUrl) {
			$("#user-level-disk-img").attr("src", imgUrl);
		};

		var defaultLevelDiskImgHalf = function(){
			changeUserLevelDiskImg("img/half-round.png");
		};

		var defaultLevelDiskImgTurn = function() {
			changeUserLevelDiskImg("img/turnplate.png");
		};

		$("#user-level-test").hover(function() {
			changeUserLevelDiskImg("img/test-round.png")
		}, defaultLevelDiskImgHalf);

		$("#user-level-exercise").hover(function() {
			changeUserLevelDiskImg("img/exercise-round.png")
		}, defaultLevelDiskImgHalf);

		$("#user-level-mark").hover(function() {
			changeUserLevelDiskImg("img/mark-round.png")
		}, defaultLevelDiskImgHalf);

		$("#user-level-test.not-index, #right-user-level-test.not-index").hover(function() {
			changeUserLevelDiskImg("img/test-turn.png")
		}, defaultLevelDiskImgTurn);

		$("#user-level-exercise.not-index, #right-user-level-exercise.not-index").hover(function() {
			changeUserLevelDiskImg("img/exercise-turn.png")
		}, defaultLevelDiskImgTurn);

		$("#user-level-mark.not-index, #right-user-level-mark.not-index").hover(function() {
			changeUserLevelDiskImg("img/mark-turn.png")
		}, defaultLevelDiskImgTurn);
	}

	function slideTxtBoxAction() {
		$(".slideTxtBox").slide();
	}

	function indexCarouselAction() {
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
	}

}(jQuery));


