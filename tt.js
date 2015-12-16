$(document).ready(function(){

	var winningCombos = [[1,2,3], [4,5,6], [7,8,9]]
	var turn = 1;
	
	$('td').on('click', function(){
		$(this).html('X');
		if (turn % 2 == 0){
			$(this).html('X');

		}else{
			$(this).html('O');
		}
		//check for winner
		checkForWinner();
			$(this).off('click');
			turn ++;
	});
	function checkForWinner(){
		//check
	}

});
