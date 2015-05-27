(function($){
	changemyself();
	function changemyself(){
		var tdElArr=[],initGrid=[28];
		var gridEl='';
		var classname='changemyself_grid_wrapper_1';
		var badhabbitLiEl=$('.newbadhabbit_content_item li');
		var imgsrc={};
		var imgsrcObj={'imgsrc':[]};
		var progress=0;
		var changeCount=0;
		var percentage=0;
		var clickReady=true;
		init();
		function init(){
			generateRandom(1,28);
			bulidgrid(classname);
			showgrid(classname);
			showPercentage();
		}
		function bulidgrid(classname){
			gridEl+="<table cellpadding='0' cellspacing='0' border='0' class='"+classname+"'><tbody>";
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
				var progress=$('.newbadhabbit_content_item li').eq(i).attr('progress');
				tdEl.css({'width':gridWidth/7,'height':gridHeight/4});
				tdEl.each(function(){$(this).find('div').css({'background-image':'url(./'+imgsrcObj.imgsrc[i].imgsrc1+')','background-size':gridWidth+"px "+gridHeight+"px"})});
				for(var j=0;j<progress;j++){
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
		function generateRandom(key,cellCount){
			var cellCount=28;
			var loopTimes=cellCount;
			var rand=0;
			//真随机算法
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

			//伪随机算法
			// var rng= new RNG({
			// 	foo:key
			// });
			// for(var i=0;i<loopTimes;i++){
			// 	rand=~~(rng.uniform() * 28)
			// 	// for(var j=0;j<i;j++){
			// 	// 	if(tdElArr[j]==rand){
			// 	// 		tdElArr.splice(j,1);
			// 	// 		loopTimes++;
			// 	// 	}
			// 	// }
			// 	tdElArr.push(rand);
			// }
			// console.log(tdElArr);
			
		}
		function showPercentage(){
			for(var i=0;i<$('.newbadhabbit_content_item li').length;i++){
				var tdEl=$('.'+classname).eq(i).find('td');
				var progress=$('.newbadhabbit_content_item li').eq(i).attr('progress');
				percentage=Math.floor(~~(progress)/28*100);
				$('.newbadhabbit_content_item li').eq(i).find('.progressbar span').css("width",percentage+"%");
				$('.newbadhabbit_content_item li').eq(i).find('.newbadhabbit_percentage').text(percentage+'%');
			}
		}
		$('.note_wrapper .changemyself_button').click(function(){
			if(clickReady==true){
				clickReady=false;
				var imgsrc1=$('.changemyself_content_img img').eq(0).attr('src');
				var imgsrc2=$('.changemyself_content_img img').eq(1).attr('src');
				var tdEl=$('.'+classname).find('td');
				var progress=$('.newbadhabbit_content_item li').attr('progress');
				tdEl.eq(tdElArr[~~(changeCount)+~~(progress)]).find('div').addClass('rotate_360');
				setTimeout(function(){
					tdEl.eq(tdElArr[~~(changeCount)+~~(progress)]).find('div').css({'background-image':'url(./'+imgsrcObj.imgsrc[0].imgsrc2+')'});
					
				},500);

				setTimeout(function(){
					tdEl.eq(tdElArr[~~(changeCount)+~~(progress)]).find('div').removeClass('rotate_360');
					changeCount++
					clickReady=true;
					// clearTimeout();
				},1000);
			}else{
				return;
			}
			
		});
		$('textarea').keyup(function(){
			var textVal=$(this).val();
			var textLen=textVal.length;
			$('.inputnumber_item span').text(textLen);
		});
		$(".newbadhabbit_title_wrapper a, .newbadhabbit_dialog_wrapper input[type=button]").click(function(){
			if($(".newbadhabbit_dialog_wrapper").is(":hidden")){
				$(".newbadhabbit_dialog_wrapper").fadeIn();
			}else{
				setTimeout(function(){$(".newbadhabbit_dialog_wrapper").fadeOut();},300)
			}
		});
	}
}(jQuery));