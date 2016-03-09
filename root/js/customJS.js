$("document").ready(function() {
	
	//
	//	Prepeding arrow image to the :selected: link in the portfolio section
	//

	var arrowImage = "<img src='imgs/arrow.png' width='50px' height='25px'>"

	$('.selected').prepend(arrowImage);

	$('li > a').click(function() {
    	$('li').removeClass();
    	$('li img').remove();
    	$(this).parent().addClass("selected").prepend(arrowImage);
	});


	//
	//	
	//



});


