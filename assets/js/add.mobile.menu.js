
var getMenuWith = $('._header-nav-js').width();
var getLogoWith = $('.navbar-brand').width();


$(window).on('load resize', function (){
	var windowWith = $(window).width();

	var creticalPoint = windowWith - (getMenuWith + getLogoWith + 200);
	
	if (getMenuWith == 0) return false;
	
	if (creticalPoint <= 50) {
		$('.navbar-collapse').addClass('out out-block');
		$('.navbar-header').addClass('in');
		// return false
	} else {
		$('.navbar-collapse').removeClass('out out-block');
		$('.navbar-header').removeClass('in');
		
	}

});
