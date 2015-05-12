(function($){
lunarCalendar();
eventManagement();
    var Ftv = {'lFtv':[{'0101':'春节','0115':'元宵节','0707':'七夕情人节','0715':'中元节','0815':'中秋节','0909':'重阳节','1208':'腊八节','1224':'小年'}]}

    // (" ","0115 元宵节","0505 端午节","0707 七夕情人节","0715 中元节","0815 中秋节","0909 重阳节","1208 腊八节","1224 小年");
function lunarCalendar(){
    var selectedYear=$(".calendar_yearlist");
    var selectedMonth=$(".calendar_monthlist");
    var objDate=new Date();
    var thisFullYear=objDate.getFullYear();
    var thisMonth=objDate.getMonth()+1;

    bulidCalendar();
    showCalendar(thisFullYear,thisMonth);
    selectedYear.val(thisFullYear);
    selectedMonth.val(thisMonth);
    selectedYear.change(function(){
        showCalendar(selectedYear.val(),selectedMonth.val());
    });
    selectedMonth.change(function(){
        showCalendar(selectedYear.val(),selectedMonth.val());
    });
    function showCalendar(y,m){
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
        var tdEl=$(".calendar_main_wrapper tbody td");
        $(".lunardate").remove();
        for(var i=0;i<6;i++){
            var index=1;
            index=7*i;
            for(var x=0;x<2;x++){
                tdEl.eq(5+index+x).addClass('color_red');
            }
        }
        // console.log(calendar.lFtv[1]);
        for(var i=1;i<=monthDays;i++){
            var solarDay=calendar.solar2lunar(selectedYear.val(),selectedMonth.val(),i).cDay;
            var lunarDay=calendar.solar2lunar(selectedYear.val(),selectedMonth.val(),i).IDayCn;
            tdEl.eq(i+firstDay).prepend("<label class='lunardate'>"+solarDay+"</label>");
            tdEl.eq(i+firstDay).prepend("<span class='lunardate'>"+lunarDay+"</span>");
            var Slfw=Ssfw=null;
            var eve=0;
            
            // if(parseInt(Ftv.lFtv[i].substr(0,2))==(calendar.solar2lunar(y,m,i).lMonth)){
            //     console.log(calendar.solar2lunar(y,m,i).lMonth);
            //     if(parseInt(calendar.lFtv[ipp].substr(2,2))==(calendar.solar2lunar(y,m,i).lDay)){
            //         tdEl.eq(i).find('span').innerHTML=calendar.lFtv[ipp].substr(5);
            //     }
            // }
        }
        // for(var ipp=0;ipp<calendar.lFtv.length;ipp++){
        //     alert('a')
            
        //     tdEl.eq(i).find('span').css("baacground","red");
        // }

            
        for(var i=1;i<=firstDay+1;i++){
            var prevSolarDay=calendar.solar2lunar(prevYear,prevMonth,prevMonthDays+i).cDay;
            var prevlunarDay=calendar.solar2lunar(prevYear,prevMonth,prevMonthDays+i).IDayCn;
            tdEl.eq(cellBefore).prepend("<label class='lunardate'>"+prevSolarDay+"</label>");
            tdEl.eq(cellBefore).prepend("<span class='lunardate'>"+prevlunarDay+"</span>");
            cellBefore++;
        }
        for(var i=1;i<=nextMonthDays;i++){
            var afterSolarDay=calendar.solar2lunar(nextYear,nextMonth,i).cDay;
            var afterlunarDay=calendar.solar2lunar(nextYear,nextMonth,i).IDayCn;
            tdEl.eq(cellAfter).prepend("<label class='lunardate'>"+afterSolarDay+"</label>");
            tdEl.eq(cellAfter).prepend("<span class='lunardate'>"+afterlunarDay+"</span>");

            cellAfter++;
        }

        // for(var i=0;i<calendar.lFtv.length;i++){

        // }
        // var Slfw=Ssfw=null;
        // var eve=0;
        // for (var ipp=0;ipp<calendar.lFtv.length;ipp++){    //农历节日
        //     if (parseInt(calendar.lFtv[ipp].substr(0,2))==(calendar.solar2lunar(y,m,ipp).lMonth)){
        //         if (parseInt(calendar.lFtv[ipp].substr(2,4))==(calendar.solar2lunar(y,m,ipp).lDay)){
        //             tdEl.eq().find('span').innerHTML=calendar.lFtv[ipp].substr(5);
        //             tdEl.eq().find('span').innerHTML=calendar.lFtv[ipp].substr(5);
        //         }
        //     }
        //     if (12==(calendar.solar2lunar(y,m,ipp).lMonth)){    //判断是否为除夕
        //         if (eve==(calendar.solar2lunar(y,m,ipp).lDay)){lObj.innerHTML="除夕";Slfw="除夕";}
        //     }
        //     console.log(calendar.lFtv[ipp].substr(5))
        // }
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
        setTimeout(function(){$('.newevent_wrapper, .calendarscore_wrapper, .editevent_wrapper, .mask').fadeOut();});
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
    })
    $('.calendar_main_wrapper .day').on('click','ul li a',function(){
        eventLiIndex=$(this).parent().index();
        $('.editevent_wrapper').find('textarea').val($(this).text()).end().fadeIn();
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
    });
    $('textarea').keyup(function(){
        var textVal=$(this).val();
        var textLen=textVal.length;
        $('.inputnumber_item span').text(textLen);
    });
}
}(jQuery));