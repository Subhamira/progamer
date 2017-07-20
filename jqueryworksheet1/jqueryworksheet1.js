$(document).ready(function(){
		var box=document.createElement("div")
		for (var i=0;i<=9;i++){
		box='<div id="box-'+ i +'" class="box"></div>'
		
	$('.main').append(box);
					
	}
	//('.box').on('click',function(e){
	//	alert('clicked');
	//	});
	$('.main').on('click',function(o){
		$(this).hide();
		

			});
	});
	$(document).ready("#box-7").css({"width": "50px","height":"50px", "backgroundColor": "pink", "margin-bottom": "10px"})

