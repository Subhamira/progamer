var count=0;
$(function (){
		//function setboard(){ 
		const board=[
					[' ', ' ', ' '],
					[' ', ' ', ' '],
					[' ', ' ', ' ']
					];

	$(".box").click(function(){
		count++
		if (count%2==0){
		var player='o'}
		else
		{var player='X'}
		$this = $(this);
		$this.html(player);
		var x=$this.data('x')
		var y=$this.data('y')
		board[x][y]=player
		//console.log([x],[y]);

		/*if ($this.html(player) =="X" ||"o"){
			$this.click(function(){
				alert("Cell is already occupied")
			});
		}*/

		

		function checkWinner(){
		
		//horizontal
			for (var x=0;x<3;x++){
			if (board[x][0]!=='' && 
			board[x][1] === board[x][0] &&
			board[x][1] ===board[x][2])
			{
			return board[x][0]
			}
			}

		//vertical

			for (var y=0;y<3;y++){
			if (board[0][y]!=='' && 
			board[1][y] === board[2][y] &&
			board[1][y] ===board[0][y])
			{
			return board[0][y]}
			}
			
	//diagonal
			if (board[0][0]!=='' && 
			board[0][0] === board[1][1] &&
			board[1][1] === board[2][2]){ 
			//console.log(board[0][0])
			return board[0][0]
			}
		//board[0][0]
			
	//diagonal
			if (board[0][2]!=='' && 
			board[0][2] === board[1][1] &&
			board[1][1] === board[2][0]) {
			//console.log(board[0][2])
			return board[0][2]
			}

		//board[0][2]
				//check if board is empty

 				for (var x = 0; x<3;x++)
  				{
    				for (var y=0; y<3;y++)
    				{
      					if (board[x][y]==='')
      					{
        					return false;
      					}
    				}
  				}

  		return null;
			
		}
		
		//declare the winner
		checkWinner()
		var p=checkWinner()
		if(p=='X' || p == 'o'){
		alert(player +" is Winner !!!")
			}
		
		//reset the board
		$('#message').click(function reset(){
		window.location.reload();
		});


		//if (p!='X' && p!='o' && p==''){alert ("It is a tie")}

 		
		if (count==9 && p !='X' ){
			console.log(board[x][y]);alert("It's a tie")}
		});

	});


	//check();
	



	

			
	

		

