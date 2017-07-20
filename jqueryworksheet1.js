$(document).ready(function(){
			for (var i=0;i<10;i++){
			var box=document.createElement("div")
			box.id="box-"+i
			box.className="box"
		$('.main').append(box);
		}
	
	//('.box').on('click',function(e){
	//	alert('clicked');
	//	});
	$('.main').on('click',function(o){
		$(this).hide();
		

			});
	});
	

//box='<div id="box-'+ i +'" class="box"></div>'