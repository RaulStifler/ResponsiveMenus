$(document).ready(function(){
	$('#icon_busqueda').click(function() {
		var input_busqueda = $('#input_busqueda');
		var form_busqueda = $('.form_busqueda');
		if (input_busqueda.hasClass('muestra_form_busqueda')) {
			input_busqueda.removeClass('muestra_form_busqueda');
			setTimeout(function() {
				form_busqueda.removeClass('over');
			}, 350);
		}else{
			input_busqueda.addClass('muestra_form_busqueda')
			form_busqueda.addClass('over');
		}
	});
});