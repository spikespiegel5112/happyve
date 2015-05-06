/**
 * 幸福流自定义JS
 */
(function($){
    'use strict';

    etc();
    dashboard();
    layout();
    lunarCalendar();

    function lunarCalendar(){
        var selectedYear=$(".calendar_dateselect_wrapper select[name='SY']");
        var selectedMonth=$(".calendar_dateselect_wrapper select[name='SM']");
        // console.log(selectedYear);
        // console.log(selectedMonth)
        // console.log(calendar.solar2lunar(selectedYear.val(),selectedMonth.val(),20));
        bulidCalendar();
        showCalendar(selectedYear.val(),selectedMonth.val());
        selectedYear.change(function(){
            showCalendar();
        })
        selectedMonth.change(function(){
            showCalendar();
        })
        function showCalendar(y,m){
            var objDate=new Date();
            // alert(firstDay);
            var firstDay=(new Date(selectedYear,selectedMonth,1)).getDay();
            $(".lunardate").remove();
            for(var i=1;i<=31;i++){
                var shownDay=calendar.solar2lunar(selectedYear.val(),selectedMonth.val(),i).IDayCn;
                $(".day").eq(i-1+firstDay).append("<span class='lunardate'>"+shownDay+"</span>");
                console.log(firstDay);
            }
        }
        function bulidCalendar(){
            var calendarEl="";
            calendarEl+="<table class='calendar_main_wrapper'><thead>";
            var weekNameArr=new Array();
            weekNameArr=["周一","周二","周三","周四","周五","周六","周日"];
            for(var i=0;i<7;i++){
                calendarEl+="<th>"+weekNameArr[i]+"</th>";
            }
            calendarEl+="<tbody>";
            for(var row=0;row<6;row++){
                calendarEl+="<tr>";
                for(var line=0;line<7;line++){
                    calendarEl+="<td><div class='day'></div></td>";
                }
                calendarEl+="</tr>";
            }
            $(".calendar_main_wrapper").html(calendarEl);
            $(".calendar_main_wrapper tbody tr").find("td:even").find(".day").addClass("even_bg");
        }
        // alert(calendar.solar2lunar(selectedYear,selectedMonth,i).lDay);
    }
    function zuiCalendar(){
        var calendar = $('#calendar').data('zui.calendar');
        var newEvent = {title: '吃饭了', desc: '要吃更多', start: '2014-8-14 12:00', end: '2014-8-14 13:00'};
        var newEventItemEl="<div class='calendar_event_item'><a href='javascript:;'>新建事件</a><a href='javascript:;'>评分</a></div>"
        $("#calendar").calendar({
            clickTodayBtn:function(){
                $("#calendar .week-days .month").css("display","none");
            },
            clickPrevBtn:function(){
                $("#calendar .week-days .month").css("display","none");
            },
            clickNextBtn:function(){
                $("#calendar .week-days .month").css("display","none");
            },
            clickCell:function(e){
                console.log(e);
                var $this=$(e.this);
                if($this.hasClass("active")){
                    return;
                }else{
                    $("#calendar .week-days td .day").removeClass("active");
                    $this.find(".day").addClass("active");
                    // if($this.find(".calendar_event_item").is(":hidden")){
                    //     $(".calendar_event_item").hide();
                    //     $this.find(".calendar_event_item").show();
                    // }else{
                    //     $this.find(".calendar_event_item").hide();
                    // }
                }
            }
        }); 
        zuiCalendarCustomize();
        function zuiCalendarCustomize(){
            $("#calendar .week-days").find("td:even .day").addClass("even_bg");
            $("#calendar .week-days .month").css("display","none");
            $("#calendar .week-days .cell-day").append(newEventItemEl);
            $(".cell-day").hover(function(){
                $(this).find(".calendar_event_item").show();
            },function(){
                $(this).find(".calendar_event_item").hide();
            });

        }
    }


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
            $(".nav_dropdown_item").hide();
            $(this).find("ul").removeClass("dropdown_fadein");
        })
    }
    function etc(){
        $(".slideTxtBox,.activity-header-slide,.query-nav").slide();
        $("img.lazy").unveil();

        $(".match-height .thumbnail").matchHeight({
            byRow: !0,
            property: "height",
            target: null,
            remove: !1
        });
    }
}(jQuery));




