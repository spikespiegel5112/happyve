$(document).ready(function () {
    $("img.lazy").unveil(),
        $(".activity .thumbnail").matchHeight({
        byRow: !0,
        property: "height",
        target: null,
        remove: !1
    }), $.scrollUp({
        scrollName: "scrollUp",
        topDistance: "300",
        topSpeed: 300,
        animation: "fade",
        animationInSpeed: 200,
        animationOutSpeed: 200,
        scrollText: '<i class="fa fa-angle-up"></i>',
        activeOverlay: !1
    })

});