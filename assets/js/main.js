// Set mobile menu script
function SetMobileMenu(){
	var a = 0;
	$('.navbar-collapse .navbar-nav > li').each(function(){
		a += $(this).width();
	})
	this._getMenuWidth = a; 
	this._getLogoWidth = $('.navbar-brand').width();
};

SetMobileMenu.prototype.init = function(){
	var windowWidth = $(window).width();

	var creticalPoint = windowWidth - (this._getMenuWidth + this._getLogoWidth);
	
	if (creticalPoint <= 50) {
		$('.navbar-collapse')
							.addClass('out out-block')
							.css('opacity', '1');
		$('.navbar-header').addClass('in');
	} else {
		$('.navbar-collapse')
							.removeClass('out out-block')
							.css('opacity', '1');
		$('.navbar-header').removeClass('in');
		
	}
}
var calcMobileMenu = new SetMobileMenu();

$(window).on('load resize',  function(){
	calcMobileMenu.init()
});




