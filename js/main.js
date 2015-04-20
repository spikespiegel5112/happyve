/**
 * 幸福流自定义JS
 */
(function($){
    'use strict';
    happyexecrise();
    // user_level_hover();
    slideTxtBoxAction();
    indexCarouselAction();
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
    })
}(jQuery));

// $(document).ready(function(){

// })

function happyexecrise(){
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
function slideTxtBoxAction() {
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