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
    // calender(2015);

    function calender(year){
        function leapyear(){
            var res=0;
            return (year%100==0?res=(year%400==0?1:0):res=(year%4==0?1:0));
        }

        function getDay(month,year){
            var days = new Array(12);
            days[0] = 31;
            days[1] = 28+leapyear();       //２月份时闰年为29天，否则为28天
            days[2] = 31;
            days[3] = 30;
            days[4] = 31;
            days[5] = 30;
            days[6] = 31;
            days[7] = 31;
            days[8] = 30;
            days[9] = 31;
            days[10] = 30;
            days[11] = 31;
            return 天数[月份];
        }
        function getMonth(month){
            var months = new Array(12);
            months[0] = "1月";
            months[1] = "2月";
            months[2] = "3月";
            months[3] = "4月";
            months[4] = "5月";
            months[5] = "6月";
            months[6] = "7月";
            months[7] = "8月";
            months[8] = "9月";
            months[9] = "10月";
            months[10] = "11月";
            months[11] = "12月";
            return months[month];
        }
        function calenderSetting(){
            var date= new Date();
            var year=date.getFullYear();
            var month=date.getMonth();
            console.log(year);
            var 月份名称 = getMonth(m);        //获取月份名称
            var 当前日 = 日期对象.getDate();        //获取当前日期中的日
            
            var 当月第一天的星期数 = (new Date(年份,月份,1)).getDay();  //获取本月的第一天对应的星期数
            
            var 本月天数 = getDays(月份,年份);        //获取当前日期天数（也是当月对应的最后一天）
            
            //显示日历
            显示日历(当月第一天的星期数+1,本月天数,当前日,月份名称,年份);
        }
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
        $(".nav_main_button").click(function(){
            var dropdownEl=$(this).siblings(".nav_dropdown_item");
            if(dropdownEl.hasClass("dropdown_fadein")){
                dropdownEl.removeClass("dropdown_fadein");
                $(".nav_dropdown_item").hide();
            }else{
                dropdownEl.addClass("dropdown_fadein");
                $(".nav_dropdown_item").show();
            }
        })
        $(document).bind("click",function(e){
            if($(".nav_dropdown_item").hasClass("dropdown_fadein")){
                if($(e.target).closest(".nav_main_button").length==0){
                    $(".nav_dropdown_item ").removeClass("dropdown_fadein");
                    $(".nav_dropdown_item").hide();
                }
            }
        })
    }
}(jQuery));




