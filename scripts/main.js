//@prepros-append jquery.fullPage.js

$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['intro', 'work', 'capabilities', 'contact'],
		sectionsColor: ['#CCCCCC', '#000000', '#C8D7E3', '#98B1C4'],
		navigation: true,
		navigationPosition: 'right',
		//navigationTooltips: ['intro', 'work', 'capabilities', 'contact'],
		responsive: 900
	});

	$("#carousel").owlCarousel({
 
      autoPlay: false, 
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]


 
 	});



});


//@prepros-prepend owl.carousel.js
