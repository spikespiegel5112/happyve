(function($){
lunarCalendar();
eventManagement();
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
        objDate.setYear(y);
        objDate.setMonth(m-1);
        objDate.setDate(-1);
        var firstDay=objDate.getDay(); 
        var today=objDate.getDate();
        var prevYear=selectedYear.val();
        var prevMonth=selectedMonth.val()-1;
        var monthDays=calendar.solarDays(y,m);
        var prevMonthDays=calendar.solarDays(prevYear,m-1)-firstDay-1;
        if(prevMonth<1){
            prevMonth=13;
            prevYear=prevYear-1;
            prevMonthDays=calendar.solarDays(prevYear,m-1)-firstDay;
        }
        var nextYear=selectedYear.val();
        var nextMonth=parseInt(selectedMonth.val())+1;
        if(nextMonth>12){
            nextMonth=1;
            nextYear=parseInt(nextYear)+1;
        }
        var nextMonthDays=42-(firstDay+prevMonthDays);
        var cellBefore=0;
        var cellAfter=firstDay+1+monthDays;
        // console.log(prevYear)
        // console.log(calendar.solar2lunar(prevYear,prevMonth,prevMonthDays))
        $(".lunardate").remove();
        for(var i=1;i<=monthDays;i++){
            var solarDay=calendar.solar2lunar(selectedYear.val(),selectedMonth.val(),i).cDay;
            var lunarDay=calendar.solar2lunar(selectedYear.val(),selectedMonth.val(),i).IDayCn;
            $(".calendar_main_wrapper tbody td").eq(i+firstDay).prepend("<label class='lunardate color_red'>"+solarDay+"</label>");
            $(".calendar_main_wrapper tbody td").eq(i+firstDay).prepend("<span class='lunardate color_red'>"+lunarDay+"</span>");
        };
        for(var i=1;i<=firstDay+1;i++){
            var prevSolarDay=calendar.solar2lunar(prevYear,prevMonth,prevMonthDays+i).cDay;
            var prevlunarDay=calendar.solar2lunar(prevYear,prevMonth,prevMonthDays+i).IDayCn;
            $(".calendar_main_wrapper tbody td").eq(cellBefore).prepend("<label class='lunardate'>"+prevSolarDay+"</label>");
            $(".calendar_main_wrapper tbody td").eq(cellBefore).prepend("<span class='lunardate'>"+prevlunarDay+"</span>");
            cellBefore++;
        };
        for(var i=1;i<=nextMonthDays;i++){
            var afterSolarDay=calendar.solar2lunar(nextYear,nextMonth,i).cDay;
            var afterlunarDay=calendar.solar2lunar(nextYear,nextMonth,i).IDayCn;
            $(".calendar_main_wrapper tbody td").eq(cellAfter).prepend("<label class='lunardate'>"+afterSolarDay+"</label>");
            $(".calendar_main_wrapper tbody td").eq(cellAfter).prepend("<span class='lunardate'>"+afterlunarDay+"</span>");
            cellAfter++;
        };
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
                calendarEl+="<td><div class='day'><div class='calendar_event_item'><a class='new_event' href='javascript:;'>新建事件</a><a class='mark' href='javascript:;'>评分</a></div></div></td>";
            }
            calendarEl+="</tr>";
        }
        $(".calendar_main_wrapper").html(calendarEl);
        $(".calendar_main_wrapper tbody tr").find("td:even").find(".day").addClass("even_bg");
    }
}
function eventManagement(){
    $(".calendar_event_item .new_event").click(function(){
        
    })
    $(".calendar_event_item .mark").click(function(){
        
    })
    $(".calendar_event_item .new_event").click(function(){
        $(".editevent_wrapper").fadeIn();
        $("body").prepend("<div class='mask'></div>")
    })
    $(".editevent_input_wrapper input, .editevent_inner .delete").click(function(){
        setTimeout(function(){$(".editevent_wrapper, .mask").fadeOut();},300);
        setTimeout(function(){$(".mask").detach();},600)
    })
}
}(jQuery));