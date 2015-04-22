/**
 * 幸福流自定义JS
 */
(function($){
    'use strict';

    layout();
    happyexecrise();
    dashboard();
    // slideTxtBoxAction();
    indexCarouselAction();
    haexeHomepage();

    $("img.lazy").unveil();
    $(".match-height .thumbnail").matchHeight({
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
    });
}(jQuery));

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
}

function haexeHomepage(){
    var index=0;
    $(".haexe_home_ranking_list_wrapper li").click(function(){
        index=$(this).index();
        $(".haexe_home_carousel_desc_list").fadeOut().eq(index).fadeIn();
        $(this).siblings("li").removeClass("shown");
        $(this).addClass("shown");
    });
    $(".haexe_home_carousel_desc_list ul li").click(function(){
        $(this).find(".haexe_home_carousel_desc_list_content, .haexe_home_carousel_desc_list_bg").fadeIn();
    });
    $(".haexe_home_carousel_desc_list ul li").hover(function(){
        $(this).find(".haexe_home_carousel_desc_list_content, .haexe_home_carousel_desc_list_bg").stop().fadeIn().end().css({"z-index":"20"});
    },function(){
        $(this).find(".haexe_home_carousel_desc_list_content, .haexe_home_carousel_desc_list_bg").stop().fadeOut().end().css({"z-index":""});
    });

    $(".haexe_home_bene_desc_list ul li").hover(function(){
        $(this).find(".haexe_home_bene_desc_list_content, .haexe_home_bene_desc_list_bg").stop().fadeIn().end().css({"z-index":"20"});
    },function(){
        $(this).find(".haexe_home_bene_desc_list_content, .haexe_home_bene_desc_list_bg").stop().fadeOut().end().css({"z-index":""});
    });
    $(".haexe_home_ranking_list_wrapper li").click(function(){
        index=$(this).index();
        $(".haexe_home_carousel_desc_list").eq(index).stop().fadeIn();
        $(this).siblings("li").removeClass("shown");
        $(this).addClass("shown");
    });
    $(".haexe_home_bene_list_wrapper li").click(function(){
        var index=$(this).index();
        $(this).siblings().removeClass("shown").end().addClass("shown");
        $(".haexe_home_bene_desc_list").attr("id","");
        $(".haexe_home_bene_desc_list").eq(index).attr("id","shown");
    });
}
function dashboard(){
    var hoverIndex=0, clickIndex=0, multiplier=0;
    $(".layout_dashboard_indication_hover_wrapper li").hover(function(){
        console.log("aaa");
        hoverIndex=$(this).index();
        $(".layout_dashboard_indication_wrapper li").eq(hoverIndex).css("border-color","#acd655 transparent #acd655 transparent");
    },function(){
        hoverIndex=$(this).index();
        $(".layout_dashboard_indication_wrapper li").eq(hoverIndex).css("border-color","transparent");
        return;
    });
    $(".layout_dashboard_indication_hover_wrapper li").hover(function(){
        clickIndex=$(this).index();
        if(clickIndex==1){
            multiplier=0;
        }else if(clickIndex==0){
            multiplier=-1;
        }else{
            multiplier=1;
        }
        $(".layout_dashboard_indicator").css({transform:"rotate("+70*multiplier+"deg)"})
    },function(){
        return;
    });
}
function layout(){
   //$(".nav_main_button").click(function(){
   //     var dropdownEl=$(this).siblings(".nav_dropdown_item");
   //     if(dropdownEl.hasClass("dropdown_fadein")){
   //         dropdownEl.removeClass("dropdown_fadein");
   //         $(".nav_dropdown_item").hide();
   //     }else{
   //         dropdownEl.addClass("dropdown_fadein");
   //         $(".nav_dropdown_item").show();
   //     }
   // });
   // $(document).bind("click",function(e){
   //     if($(".nav_dropdown_item").hasClass("dropdown_fadein")){
   //         if($(e.target).closest(".nav_main_button").length==0){
   //             $(".nav_dropdown_item ").removeClass("dropdown_fadein");
   //             $(".nav_dropdown_item").hide();
   //         }
   //     }
   // });
    $(".slideTxtBox,.activity-header-slide,.query-nav").slide();
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