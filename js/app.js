$(document).ready(function() {

	$('.ryu').mouseenter(function(){
	
		$('.ryu-still').hide();
		$('.ryu-ready').show();

	});
	$('.ryu').mouseleave(function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();

	});

	$('.ryu').mousedown(function() {
    	$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
    	$('.hadouken').show().finish().animate({"left":"1020px"},600,function(){
    		playHadouken();
    		$(this).hide();
    		$(this).css("left","520px");
    		});
    });
    // play hadouken sound
    // show hadouken and animate it to the right of the screen
 	$('.ryu').mouseup(function() {
    	 $('.ryu-throwing').hide();
 		 $('.ryu-ready').show();
    // ryu goes back to his ready position
 	});

	function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
		};

	$(window).keydown(function(e){

		if(e.keyCode==72){
			$('.ryu-cool').show();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();

		}
	});

	$(window).keyup(function(e){

		if(e.keyCode==72){
			$('.ryu-cool').hide();
			$('.ryu-still').show();
			$('.ryu-ready').hide();


		}
	});



});

