function slider() {
	$('.slider .container').empty();
	$('.slider .prev, .slider .next, .slider .pagination').remove();
	$('.slider .container').html($('.slider .temp').html());
	$('.slider').slides({
		generatePagination: true,
		generateNextPrev: true,
		container: 'container',
		effect: 'slide',
		slideSpeed: 500,
		slideEasing: 'easeInOutQuad',
		play: 15000,
		pause: 0,
	});
	$('.slider, .slider .container, .slider .container > div > div').width($('.wrapper').width());
}
$(document).ready(function() {
	if ( $('.slider').length > 0 ) {
		$('.slider .temp > div').each(function() {
			$(this).css({
				'background': 'url("'+$(this).find('img').attr('src')+'") no-repeat center center',
			});
		});
		slider();
		$('.slider').bind('swipeleft', function() {
			$('.slider .next').trigger('click');
		});
		$('.slider').bind('swiperight', function() {
			$('.slider .prev').trigger('click');
		});
	}
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
});
$(window).resize(function() {
	if ( $('.slider').length > 0 ) {
		slider();
	}
});