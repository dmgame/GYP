
var getMenuWith = $('.navbar-collapse .navbar-nav').width();
var getLogoWith = $('.navbar-brand').width();
var getUserMenuWidth = $('.navbar-collapse .navbar-right').width();

$(window).on('load resize', function (){
	var windowWith = $(window).width();

	var creticalPoint = windowWith - (getMenuWith + getLogoWith + getUserMenuWidth);
	
	if (getMenuWith == 0) return false;
	
	if (creticalPoint <= 50) {
		$('.navbar-collapse')
							.addClass('out out-block')
							.css('opacity', '1');
		$('.navbar-header').addClass('in');
		// return false
	} else {
		$('.navbar-collapse')
							.removeClass('out out-block')
							.css('opacity', '1');
		$('.navbar-header').removeClass('in');
		
	}

});
