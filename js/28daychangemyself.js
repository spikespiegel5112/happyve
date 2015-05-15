(function($){
	changemyself();
	function changemyself(){
		
		var gridEl='';
		var tdElArr=new Array();
		var changeCount=0;
		bulidgrid();
		showgrid();
		generateRandom();
		function bulidgrid(){
			gridEl+="<table class='changemyself_grid_wrapper'><tbody>";
			for(row=0;row<5;row++){
				gridEl+='<tr>';
				for(i=0;i<6;i++){
					gridEl+='<td></td>';
				}
				gridEl+='</tr>';
			}
			gridEl+='</tbody></table>'
			$('.changemyself_content_img').append(gridEl);
		}
		function showgrid(){
			var imgsrc=$('.changemyself_content_img img').attr('src');
			tdEl=$('.changemyself_grid_wrapper td');
			var trIndex=0,tdElIndex=0,posX=0,posY=0;
			tdEl.each(function(){$(this).css('background-image','url(./'+imgsrc+')')});
			for(row=0;row<5;row++){
				trIndex=row*6;
				posY=row*70;
				for(i=0;i<6;i++){
					posX=i*94;
					tdElIndex=trIndex+i;
					tdEl.eq(tdElIndex).css({'background-position':'-'+posX+'px -'+posY+'px'});
					// console.log(posX,posY);
				}
			}
		}

		function generateRandom(){
			var cellCount=30;
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
			tdEl.eq(tdElArr[changeCount]).css('background','red');
			tdEl.eq(tdElArr[changeCount]).addClass('rotate_180')

			console.clear();
			console.log(changeCount)
			console.log(tdElArr[changeCount]+1)
			changeCount++
		});
		$('textarea').keyup(function(){
			var textVal=$(this).val();
			var textLen=textVal.length;
			$('.inputnumber_item span').text(textLen);
		});
	}

}(jQuery));