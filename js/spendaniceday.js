(function($){
lunarCalendar();
eventManagement();
function lunarCalendar(){
    var selectedYear=$(".calendar_yearlist");
    var selectedMonth=$(".calendar_monthlist");
    var objDate=new Date();
    var today=objDate.getDate();
    var thisFullYear=objDate.getFullYear();
    var thisMonth=objDate.getMonth()+1;
    bulidCalendar();
    showCalendar(thisFullYear,thisMonth);
    selectedYear.val(thisFullYear);
    selectedMonth.val(thisMonth);
    showCalendar(selectedYear.val(),selectedMonth.val());
    selectedYear.change(function(){
        showCalendar(selectedYear.val(),selectedMonth.val());
    });
    selectedMonth.change(function(){
        showCalendar(selectedYear.val(),selectedMonth.val());
    });
    $('.calendar_gettoday').click(function(){
        selectedYear.val(thisFullYear);
        selectedMonth.val(thisMonth);
        showCalendar(selectedYear.val(),selectedMonth.val());
    });
    function showCalendar(y,m){
        var sFtv = new Array("0101 元旦","0214 情人节","0308 妇女节","0312 植树节","0315 消费者权益日","0401 愚人节","0501 劳动节","0504 青年节","0512 护士节","0601 儿童节","0701 建党节","0801 建军节","0910 教师节","0928 孔子诞辰","1001 国庆节","1006 老人节","1024 联合国日","1224 平安夜","1225 圣诞节");
        var lFtv = new Array("0101 春节","0115 元宵节","0505 端午节","0707 七夕情人节","0715 中元节","0815 中秋节","0909 重阳节","1208 腊八节","1224 小年");
        objDate.setYear(y);
        objDate.setMonth(m-1);
        objDate.setDate(-1);
        var firstDay=objDate.getDay(); 
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
        var tdEl=$(".calendar_main_wrapper tbody td");
        $("td li,td .score,.lunardate,.solardate").remove();
        for(var i=0;i<6;i++){
            var index=1;
            index=7*i;
            for(var x=0;x<2;x++){
                tdEl.eq(5+index+x).addClass('color_red');
            }
        }
        for(var i=1;i<=monthDays;i++){
            var solarDay=calendar.solar2lunar(selectedYear.val(),selectedMonth.val(),i).cDay;
            var lunarDay=calendar.solar2lunar(selectedYear.val(),selectedMonth.val(),i).IDayCn;
            tdEl.eq(i+firstDay).prepend("<span class='lunardate'>"+lunarDay+"</span>");
            tdEl.eq(i+firstDay).prepend("<label class='solardate'>"+solarDay+"</label>");
            var Slfw=Ssfw=null;                 // 农历阳历节日功能
            var eve=0;
            for(var ftv=0;ftv<sFtv.length;ftv++){
                if(parseInt(sFtv[ftv].substr(0,2))==(calendar.solar2lunar(y,m,i).cMonth)){
                    if(parseInt(sFtv[ftv].substr(2,2))==(calendar.solar2lunar(y,m,i).cDay)){
                        tdEl.eq(i+firstDay).find('span').html(sFtv[ftv].substr(5));
                    }
                }
            }
            for(var ftv=0;ftv<lFtv.length;ftv++){
                if(parseInt(lFtv[ftv].substr(0,2))==(calendar.solar2lunar(y,m,i).lMonth)){
                    if(parseInt(lFtv[ftv].substr(2,2))==(calendar.solar2lunar(y,m,i).lDay)){
                        tdEl.eq(i+firstDay).find('span').html(lFtv[ftv].substr(5));
                    }
                }
                if (12==calendar.solar2lunar(y,m,i).lMonth){
                    if (eve==calendar.solar2lunar(y,m,i).lDay){
                        tdEl.eq(i+firstDay).find('span').html('除夕');Slfw="除夕";
                    }
                }
            }
        }
        for(var i=1;i<=firstDay+1;i++){
            var prevSolarDay=calendar.solar2lunar(prevYear,prevMonth,prevMonthDays+i).cDay;
            var prevlunarDay=calendar.solar2lunar(prevYear,prevMonth,prevMonthDays+i).IDayCn;
            tdEl.eq(cellBefore).prepend("<span class='lunardate'>"+prevlunarDay+"</span>");
            tdEl.eq(cellBefore).prepend("<label class='solardate'>"+prevSolarDay+"</label>");
            cellBefore++;
        }
        for(var i=1;i<=nextMonthDays;i++){
            var afterSolarDay=calendar.solar2lunar(nextYear,nextMonth,i).cDay;
            var afterlunarDay=calendar.solar2lunar(nextYear,nextMonth,i).IDayCn;
            tdEl.eq(cellAfter).prepend("<span class='lunardate'>"+afterlunarDay+"</span>");
            tdEl.eq(cellAfter).prepend("<label class='solardate'>"+afterSolarDay+"</label>");
            cellAfter++;
        }
        if(selectedMonth.val()==thisMonth&&selectedYear.val()==thisFullYear){
            tdEl.eq(today+firstDay).find('.solardate').css({'background':'#ff8219','padding':'0.2em','color':'#fff','border-radius':'50%','line-height':'1.2em'});
        }
    }
    function bulidCalendar(){
        var calendarEl="";
        calendarEl+="<table class='calendar_main_wrapper'><thead>";
        var weekNameArr=new Array();
        weekNameArr=["周一","周二","周三","周四","周五","周六","周日"];
        for(var i=0;i<7;i++){calendarEl+="<th>"+weekNameArr[i]+"</th>";}
        calendarEl+="<tbody>";
        for(var i=1901;i<2051;i++){$('.calendar_yearlist').append('<option>'+i+'</option>')}
        for(var i=1;i<=12;i++){$('.calendar_monthlist').append('<option>'+i+'</option>')}
        for(var row=0;row<6;row++){
            calendarEl+="<tr>";
            for(var line=0;line<7;line++){
                calendarEl+="<td><div class='day'><ul></ul><div class='calendar_event_item'><a class='new_event' href='javascript:;'>新建</a><a class='mark' href='javascript:;'>评分</a></div></div></td>";
            }
            calendarEl+="</tr>";
        }
        $(".calendar_main_wrapper").html(calendarEl);
        for(var i=0;i<2;i++){
            $('.calendar_main_wrapper thead th').eq(5+i).addClass('color_red')
        }
        $(".calendar_main_wrapper tbody tr").find("td:even").find(".day").addClass("even_bg");
    }
}
function eventManagement(){
    var tdIndex=0;
    var trIndex=0;
    var cellIndex=0;
    var flag=false;
    var clickedTrIndex=0;
    var clickedTdIndex=0;
    var ellipsis='<i>…</i>';
    var eventLiIndex=0;
    var tdEl=$('.calendar_main_wrapper td').eq(1);
    var closestFlag=0;
    $(document).bind('click',function(e){
        if(closestFlag==0){
            return;
        }else if(closestFlag==1){
            closestFlag++
        }else if($(e.target).closest('.note_content').length==0&&closestFlag==2){
            $('.editevent_wrapper').fadeOut();
            closestFlag=0;
        }
    });
    $('.calendar_main_wrapper tr').click(function(){
        var clickedTrIndex=$(this).index();
    });
    $('.calendar_main_wrapper tr td').click(function(){
        var clickedTdIndex=$(this).index();
    });
    $('.new_event,.mark').click(function(){
        trIndex=$(this).parent().parent().parent().parent().index();
        tdIndex=$(this).parent().parent().parent().index();
        cellIndex=tdIndex+trIndex*7;
    });
    $('.calendar_main_wrapper td').click(function(){
        trIndex=$(this).parent().index();
        tdIndex=$(this).index();
        cellIndex=tdIndex+trIndex*7;
    });
    $('.calendar_main_wrapper td').click(function(){
        tdEl=$('.calendar_main_wrapper td').eq(cellIndex);
        $('.calendar_main_wrapper td').find('div').attr('id','');
        $(this).find('div').attr('id','selected');
    });
    $(".calendar_event_item .mark").click(function(){
        $(".calendarscore_wrapper").fadeIn();
        $("body").prepend("<div class='mask'></div>");
    });
    $(".calendar_event_item .new_event").click(function(){
        flag=true;
        $(".newevent_wrapper").find('textarea').val('');
        $(".newevent_wrapper").fadeIn();
        $("body").prepend("<div class='mask'></div>");
    });
    $(".newevent_input_wrapper input, .editevent_input_wrapper input, .editevent_inner .delete").click(function(){
        setTimeout(function(){$(".newevent_wrapper, .editevent_wrapper, .calendarscore_wrapper, .mask").fadeOut();},300);
        setTimeout(function(){$(".mask").detach();},600);
    });
    $('.close_cross').click(function(){
        $('.newevent_wrapper, .calendarscore_wrapper, .editevent_wrapper, .mask').fadeOut();
        setTimeout(function(){$(".mask").detach();},600);
    });
    $('.newevent_wrapper .newevent_input_wrapper input:eq(0)').click(function(){
        var text=$(this).parent().siblings('.note_content').find('textarea').val();
        var liCount=$('.calendar_main_wrapper td').eq(cellIndex).find('li').length;
        if (flag==true&&text!=''&&liCount<3){
            tdEl.find('ul').append("<li><a href='javascript:;'>"+text+"</a></li>");
            if(text.length>8){
                tdEl.find('li').eq(liCount).append(ellipsis);
            }
            flag=false;
        }
    });
    $('.calendarscore_wrapper .newevent_input_wrapper input:eq(0)').click(function(){
        var score="<span class='score'>"+parseInt(9-$('.calendarscore_mian_wrapper').find('input:checked').parent().index())+'分</span>';
        tdEl.find('.score').detach().end().append(score);
    });
    $('.calendar_main_wrapper .day').on('click','ul li a',function(){
        eventLiIndex=$(this).parent().index();
        $('.editevent_wrapper').find('textarea').val($(this).text()).end().fadeIn();
        closestFlag=1;
    });
    $('.editevent_wrapper .delete').click(function(){
        tdEl.find('li').eq(eventLiIndex).detach();
    });
    $('.editevent_input_wrapper input:eq(0)').click(function(){
        var editText=$('.editevent_inner').find('textarea').val();
        tdEl.find('a').eq(eventLiIndex).text(editText);
        if(editText.length>8){
            tdEl.find('i').eq(eventLiIndex).detach();
            tdEl.find('li').eq(eventLiIndex).append(ellipsis);
        }else{
            tdEl.find('i').eq(eventLiIndex).detach();
        }
        closestFlag=0;
    });
    $('.editevent_input_wrapper input').click(function(){
        setTimeout(function(){
            $('.editevent_input_wrapper, .inputnumber_item, .editevent_inner .delete').fadeOut();
            $('.calendaredit_wrapper').fadeIn();
            $('.editevent_inner').css({'background':'none','border':'0'});
        },300);
    });
    $('.calendaredit_wrapper a:eq(0)').click(function(){
        $('.editevent_input_wrapper, .inputnumber_item, .editevent_inner .delete').fadeIn();
        $('.calendaredit_wrapper').fadeOut();
        $('.editevent_inner').css({'background':'#fff','border':'1px solid #b4b4b4'});
        closestFlag=0;
    });
    $('textarea').keyup(function(){
        var textVal=$(this).val();
        var textLen=textVal.length;
        $('.inputnumber_item span').text(textLen);
    });
    $(document).keyup(function(e){
        if(e.which===27){
            $('.editevent_wrapper').fadeOut();
            closestFlag=0;
        }
    });
}
}(jQuery));