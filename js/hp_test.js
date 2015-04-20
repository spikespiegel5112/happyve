/*
 * 幸福流子模块快乐测评自定义JS
 * */


(function ($) {
    'use strict';

    $(document).ready(function () {
        changeButtonCss();
        function changeButtonCss() {
            $(".test_questions input").iCheck({
                checkboxClass: 'icheckbox_minimal-green',  // 注意square和blue的对应关系,用于type=checkbox
                radioClass: 'iradio_minimal-green', // 用于type=radio
                increaseArea: '20%' // 增大可以点击的区域
            });
        }
    });


    var oALink = $(".test_list_showmore>a");

    for (var i = 0; i < oALink.length; i++) {
        (function (n) {
            oALink[n].onclick = function () {
                showMoreTestDetails(n);
            }
        })(i);
    }
    function showMoreTestDetails(nIndex) {
        var oListDiv = oALink[nIndex].parentElement.previousElementSibling;
        var oList_detailDiv = oListDiv.querySelector(".list_details");
        var oList_detailActUl = oList_detailDiv.getElementsByClassName("list_details_table_active")[0];
        var oClickDuang = document.getElementById("show-moretest");
        if (oList_detailActUl.style.display == "none") {
            oList_detailActUl.style.display = "block";
            oList_detailDiv.style.height = 254 + "px";
            oALink[nIndex].getElementsByTagName("img").item(0).src = "img/img_hp_test/hp_test_up.png";
            oClickDuang.style.display = "none";
        } else if (oList_detailActUl.style.display = "block") {
            oList_detailActUl.style.display = "none";
            oList_detailDiv.style.height = 134 + "px";
            oALink[nIndex].getElementsByTagName("img").item(0).src = "img/img_hp_test/hp_test_down.png";
            oClickDuang.style.display = "block";
        }

    }
}(jQuery));




