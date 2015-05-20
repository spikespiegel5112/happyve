(function($){
	changemyself();
	function changemyself(){
		var tdElArr=[],initGrid=[28];
		var changeCount=0;
		// var imgsrc1=$('.changemyself_content_img img').eq(0).attr('src');
		// var imgsrc2=$('.changemyself_content_img img').eq(1).attr('src');
		var gridEl='';
		var classname='changemyself_grid_wrapper_1';
		var badhabbitLiEl=$('.newbadhabbit_content_item li');
		var imgsrc={};
		var imgsrcObj={'imgsrc':[]};
		init();
		
		function init(){
			bulidgrid(classname);
			showgrid(classname);
			generateRandom();
			console.log(imgsrcObj.imgsrc[0].imgsrc1);
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
		function showgrid(classname){
			var gridWidth=$('.'+classname).width();
			var gridHeight=$('.'+classname).height();
			for(var i=0;i<badhabbitLiEl.length;i++){
				imgsrc1=$('.changemyself_content_img img').eq(i).attr('src');
				imgsrc2=$('.changemyself_content_img img').eq(i+1).attr('src');
				imgsrc={'imgsrc1':imgsrc1,'imgsrc2':imgsrc2}
				imgsrcObj.imgsrc.push(imgsrc);
				i++;
			}
			for(var i=0;i<$('.newbadhabbit_content_item li').length;i++){
				tdEl=$('.'+classname).eq(i).find('td');
			}
			
			var trIndex=0,tdElIndex=0,posX=0,posY=0;
			
			tdEl.each(function(){$(this).find('div').css({'background-image':'url(./'+imgsrcObj.imgsrc[0].imgsrc1+')','background-size':gridWidth+"px "+gridHeight+"px"})});
			for(row=0;row<4;row++){
				trIndex=row*7;
				posY=row*gridHeight/4;
				for(i=0;i<7;i++){
					posX=i*gridWidth/7;
					tdElIndex=trIndex+i;
					tdEl.eq(tdElIndex).find('div').css({'background-position':'-'+posX+'px -'+posY+'px'});
				}
			}
			tdEl.css({'width':gridWidth/7,'height':gridHeight/4});
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
		$('.note_wrapper .changemyself_button').click(function(){
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