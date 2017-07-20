$(document).ready(function(){
		var box=document.createElement("div")
		for (var i=0;i<=2;i++){
		box='<div id="box-'+ i +'" class="type" ></div>'
		
	$('.box').append(box);
	console.log('div')				
	}
	
	setInterval(function(){
    
    setTimeout(function(){
    $('#box-0').toggle();	
  },1000);
  },1000);
	
	setInterval(function(){
    
    setTimeout(function(){
    $('#box-1').toggle();	
  },2000);
  },2000);
	setInterval(function(){
    
    setTimeout(function(){
    $('#box-1').toggle();	
  },4000);
  },4000);
	
	});
	

