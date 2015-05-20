(function($){
	changemyself();
	function changemyself(){
		var tdElArr=[],initGrid=[28];
		var gridEl='';
		var classname='changemyself_grid_wrapper_1';
		var badhabbitLiEl=$('.newbadhabbit_content_item li');
		var imgsrc={};
		var imgsrcObj={'imgsrc':[]};
		var offset=0;
		var changeCount=0;
		init();
		function init(){
			generateRandom();
			bulidgrid(classname);
			showgrid(classname);
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
			var trIndex=0,tdElIndex=0,posX=0,posY=0;
			for(var i=0;i<badhabbitLiEl.length*2;i++){
				imgsrc1=$('.changemyself_content_img img').eq(i).attr('src');
				imgsrc2=$('.changemyself_content_img img').eq(i+1).attr('src');
				imgsrc={'imgsrc1':imgsrc1,'imgsrc2':imgsrc2}
				imgsrcObj.imgsrc.push(imgsrc);
				i++;
			}
			if($('.changemyself_content_img')){
				var tdEl=$('.'+classname).find('td');
				tdEl.each(function(){$(this).find('div').css({'background-image':'url(./'+imgsrcObj.imgsrc[0].imgsrc1+')','background-size':gridWidth+"px "+gridHeight+"px"})});
				arrangeGrid();
			}
			for(var i=0;i<$('.newbadhabbit_content_item li').length;i++){
				var tdEl=$('.'+classname).eq(i).find('td');
				var offset=$('.newbadhabbit_content_item li').eq(i).attr('offset');
				tdEl.css({'width':gridWidth/7,'height':gridHeight/4});
				tdEl.each(function(){$(this).find('div').css({'background-image':'url(./'+imgsrcObj.imgsrc[i].imgsrc1+')','background-size':gridWidth+"px "+gridHeight+"px"})});
				for(var j=0;j<offset;j++){
					tdEl.eq(tdElArr[j]).find('div').css({'background-image':'url(./'+imgsrcObj.imgsrc[i].imgsrc2+')'});
				}
				arrangeGrid();
			}
			function arrangeGrid(){
				for(row=0;row<4;row++){
					trIndex=row*7;
					posY=row*gridHeight/4;
					for(j=0;j<7;j++){
						posX=j*gridWidth/7;
						tdElIndex=trIndex+j;
						tdEl.eq(tdElIndex).find('div').css({'background-position':'-'+posX+'px -'+posY+'px'});
					}
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
		$('.note_wrapper .changemyself_button').click(function(){
			var imgsrc1=$('.changemyself_content_img img').eq(0).attr('src');
			var imgsrc2=$('.changemyself_content_img img').eq(1).attr('src');
			var tdEl=$('.'+classname).find('td');
			var offset=$('.newbadhabbit_content_item li').attr('offset');
			setTimeout(function(){
				tdEl.eq(tdElArr[~~(changeCount)+~~(offset)]).find('div').css({'background-image':'url(./'+imgsrcObj.imgsrc[0].imgsrc2+')'});
				changeCount++
			},500);
			tdEl.eq(tdElArr[~~(changeCount)+~~(offset)]).addClass('rotate_360');
			console.log(~~(changeCount)+~~(offset));
			console.log(changeCount)
		});
		$('textarea').keyup(function(){
			var textVal=$(this).val();
			var textLen=textVal.length;
			$('.inputnumber_item span').text(textLen);
		});
	}
}(jQuery));