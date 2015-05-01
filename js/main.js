/**
 * 幸福流自定义JS
 */
(function($){
    'use strict';

    $(".slideTxtBox,.activity-header-slide,.query-nav").slide();


    dashboard();

    $("img.lazy").unveil();

    $(".match-height .thumbnail").matchHeight({
        byRow: !0,
        property: "height",
        target: null,
        remove: !1
    });

    layout();

    function dashboard(){
        var hoverIndex=0, clickIndex=0, multiplier=0;
        $(".layout_dashboard_indication_hover_wrapper li").hover(function(){
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
        $(".nav_main_list_item").eq(0).hover(function(){
            var dropdownEl=$(this).siblings(".nav_dropdown_item");
            $(".nav_dropdown_item").show();
            $(this).find("ul").addClass("dropdown_fadein");
        },function(){
            var dropdownEl=$(this).siblings(".nav_dropdown_item");
            $(".nav_dropdown_item").show();
            $(this).find("ul").removeClass("dropdown_fadein");
        })
    }
}(jQuery));




