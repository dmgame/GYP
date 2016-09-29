// $(document).ready(function($) {

// });


$(window).on('load resize', function (){
	var windowWith = $(window).width();
	var getMenuWith = $('._header-nav-js').width();
	var getLogoWith = $('.navbar-brand').width();
	var creticalPoint = windowWith - (getMenuWith + getLogoWith + 200);
	var mobileBtn = $('navbar-toggle');

	if (creticalPoint <=30) {
		$('.navbar-collapse').addClass('out');
		$('.navbar-toggle').addClass('in');
	} else {
		$('.navbar-collapse').removeClass('out');
		$('.navbar-toggle').removeClass('in');
	}
});