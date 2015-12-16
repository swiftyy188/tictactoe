$(document).ready(function(){

	var turn = 1;
	
	$('td').on('click', function(){
		$(this).html('X');
		if (turn % 2 == 0){
			$(this).html('X');

		}else{
			$(this).html('O');
		}
			$(this).off('click');
			turn ++;
	});

});
