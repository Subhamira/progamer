$(function(){
$('.box').animate({ marginLeft: "+=1000px"},10000);
 $('.box').click(function(){
  var randomColor='#'+Math.floor(Math.random()*16777216).toString(16);
   $('.box').css({'backgroundColor': randomColor});
   
   
 });  
   



});



