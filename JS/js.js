$(document).ready(function() {
	$('.button').click(function() {
		$('section.resume').toggleClass('resumeOn');
		$('section.button').toggleClass('buttonOn');
		$(this).text($(this).text() == 'Hide Resume' ? 'Show Resume' : 'Hide Resume');
	});
});
		