$(document).ready(function () {


    //blocksit define
    $(window).load(function () {
        $('#ycontainer').BlocksIt({
            numOfCol: 3,
            offsetX: 5,
            offsetY: 5,
            blockElement: '.grid'
        });
    });
    //window resize
    var currentWidth = 690;
    $(window).resize(function () {
        var winWidth = $(window).width();
        var conWidth;
        if (winWidth < 420) {
            conWidth = 220;
            col = 1
        } else if (winWidth < 630) {
            conWidth = 420;
            col = 2
        } else if (winWidth < 690) {
            conWidth = 630;
            col = 3;
        } else {
            conWidth = 690;
            col = 3;
        }

        if (conWidth != currentWidth) {
            currentWidth = conWidth;
            $('#ycontainer').width(conWidth);
            $('#ycontainer').BlocksIt({
                numOfCol: col,
                offsetX: 5,
                offsetY: 5,
                blockElement: '.grid'
            });
        }
    });
});


