(function($){
	changemyself();
	function changemyself(){
		var tdElArr=[],initGrid=[28];
		var changeCount=0;
		var imgsrc1=$('.changemyself_content_img img').eq(0).attr('src');
		var imgsrc2=$('.changemyself_content_img img').eq(1).attr('src');
		var gridEl='';
		init();
		function init(){
			bulidgrid('changemyself_grid_wrapper_1');
			showgrid(imgsrc1,'changemyself_grid_wrapper_1');
			generateRandom();
		}
		
		function bulidgrid(classname){
			gridEl+="<table class='"+classname+"'><tbody>";
			for(row=0;row<4;row++){
				gridEl+='<tr>';
				for(i=0;i<7;i++){
					gridEl+='<td><div></div></td>';
				}
				gridEl+='</tr>';
			}
			gridEl+='</tbody></table>'
			$('.changemyself_content_img').prepend(gridEl);
		}
		function showgrid(imgsrc,classname){
			tdEl=$('.'+classname).eq(0).find('td');
			var trIndex=0,tdElIndex=0,posX=0,posY=0;
			tdEl.each(function(){$(this).find('div').css('background-image','url(./'+imgsrc1+')')});
			for(row=0;row<4;row++){
				trIndex=row*7;
				posY=row*90;
				for(i=0;i<7;i++){
					posX=i*84;
					tdElIndex=trIndex+i;
					tdEl.eq(tdElIndex).find('div').css({'background-position':'-'+posX+'px -'+posY+'px'});
				}
			}
		}
		function generateRandom(){
			var cellCount=28;
			var loopTimes=cellCount;
			var rand=0;
			for(var i=0;i<loopTimes;i++){
				rand=parseInt(Math.floor(Math.random()*cellCount));
				for(var j=0;j<i;j++){
					if(tdElArr[j]==rand){
						tdElArr.splice(j,1);
						loopTimes++;
					}
				}
				tdElArr.push(rand);
			}
		}
		console.log('length:'+tdElArr.length);
		$('.changemyself_button').click(function(){
			setTimeout(function(){
				tdEl.eq(tdElArr[changeCount]).find('div').css({'background-image':'url(./'+imgsrc2+')'});
				changeCount++
			},500);
			tdEl.eq(tdElArr[changeCount]).addClass('rotate_360');
			console.clear();
			console.log(changeCount);
			console.log(tdElArr[changeCount]+1);
		});
		$('textarea').keyup(function(){
			var textVal=$(this).val();
			var textLen=textVal.length;
			$('.inputnumber_item span').text(textLen);
		});
	}
}(jQuery));