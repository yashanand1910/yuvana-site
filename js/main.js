$(function() {
	/* UP BUTTON */
	
	$(window).on("load scroll", function() {
		if ($(this).scrollTop() > 400){ 
			$('.up-button').css('display','inline-block'); 
		}
		else{
			$('.up-button').css('display','none');
		}
	});
	
	$(".up-button").click(function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, 500);
	});
	/* UP BUTTON */
	
	/* MENU */
	$(".top_menu a").click(function(e){
		e.preventDefault();
		var $href = $(this).attr('href');
		var parts = $href.split('#'),
		trgt = parts[1],
		target_offset = $('#'+trgt).offset(),
		target_top = target_offset.top - 90;
		$('html, body').animate({scrollTop:target_top}, 500);
		$('ul.nav').children().removeClass();
		$(this).parent().addClass('active');
	});
	/* MENU */
	
	/* MODAL TRIGGER */
	$(".modal_trigger").click(function(e) {
		e.preventDefault();
		$('#myModal').modal({ show: 1 })
	});
	/* MODAL TRIGGER */
	
	sameHeight(".pricing-description");
	
});

function sameHeight(blocks) {
	var i = 0;
	var maxVal;
	$(blocks).each(function() {
		if(i == 0) {
			maxVal = $(this).height();
		} else {
			if($(this).outerHeight() > maxVal) {
				maxVal = $(this).height();
			}
		}
		i++;
	});
	
	$(blocks).each(function() {
		$(this).height(maxVal);
	});
}