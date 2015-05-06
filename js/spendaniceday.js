(function($){
test(2015,5);
lunarCalendar();
function test(year,month) {
    var d = new Date();
    d.setYear(year);
    d.setMonth(month - 1);
    d.setDate(1);
    var weekArr = ["日", "一", "二", "三", "四", "五", "六"];//星期
    var dateStr = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    console.log(dateStr + ' 是星期' + weekArr[d.getDay()]);
}
function lunarCalendar(){
    var selectedYear=$(".calendar_dateselect_wrapper select[name='SY']");
    var selectedMonth=$(".calendar_dateselect_wrapper select[name='SM']");
    bulidCalendar();
    showCalendar(selectedYear.val(),selectedMonth.val());
    selectedYear.change(function(){
        showCalendar(selectedYear.val(),selectedMonth.val());
    });
    selectedMonth.change(function(){
        showCalendar(selectedYear.val(),selectedMonth.val());
    });
    function showCalendar(y,m){
        var objDate=new Date();
        // var objFirstDay=new Date();
        objDate.setYear(y);
        objDate.setMonth(m-1);
        objDate.setDate(1);
        var firstDay=objDate.getDay();
        var today=objDate.getDate();
        var monthDays=calendar.solarDays(y,m);
        $(".lunardate").remove();
        for(var i=1;i<=monthDays;i++){
            var shownDay=calendar.solar2lunar(selectedYear.val(),selectedMonth.val(),i).cDay;
            $(".calendar_main_wrapper tbody td").eq(i+firstDay).prepend("<span class='lunardate'>"+shownDay+"</span>");
        }
        console.log(firstDay);
        console.log(today);
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
}(jQuery));
    