$(document).ready(function() {

	$('.jquery-logo, .thinkful-logo, .intro-message ').fadeIn(1000).delay(3000).fadeOut(1000);
	console.log('hola');
	

	$('.personal-intro').fadeIn(1000).delay(3000).fadeOut(1000,function(){

		console.log('hello');

	});

	$('.ryu').mouseenter(function(){
	
		$('.ryu-still').hide();
		$('.ryu-ready').show();

	});
	$('.ryu').mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();


	});

	$('.ryu').mousedown(function() {
		playHadouken();
    	$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
    	$('.hadouken').finish().show().animate({"left":"1020px"},600,function(){
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
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		

		}
	});

	$(window).keyup(function(e){

		if(e.keyCode==72){
			$('.ryu-cool').hide();
			$('.ryu-ready').hide();
			$('.ryu-still').show();



		}
	});





});

