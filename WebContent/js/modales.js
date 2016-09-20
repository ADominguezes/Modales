/*
 * Para utilizar el modal habrá que llamar a la función mostrarModal(idModal, cabecera, tituloCabecera) a la que se le pueden pasar dos parámetros:
 *
 * idModal : Será el id que llevará el modal.
 * tipoModal : Se le pasa el tipo de modal que llevará.
 * tituloCabecera : Se le pasa el titulo de la cabecera
 * 
 * Estos son los valores configurables:
 * 
 * tituloCabecera (En caso de que se quiera otro título del que se le ha pasado), Backdrop, width, tipoModal, botonCierre, botonesFooter y cargaAjax
 * 
 * En caso de que sea necesario pasarle más parámetros, o para llamar a modales que se necesiten configurar más.
 * Se debe de copiar la función cambiarle de nombre y modificar los parámetros que sean necesarios.
 * 
 * Para pasarle contenido, se debe crear una variable llamada contenidoModal.
 * A esa variable le pasamos el contenido que queremos que lleve.
 * 
 * También podemos llamar a un ajax para cargar una vista en un modal.
 * 
 * La forma será: a la variable contenidoModal, le pasamos lo siguiente:
 * *********************************************************************
 * var contenidoModal = '<div id="idDondeSeInsertaraElContenido"></div>'
 * A la variable cargaAjax le pasaremos el id donde deberemos de cargar el contenido, en el caso sería idDondeSeInsertaraElContenido
 * Le pasaremos también la url que debemos de cargar en el contenido.
 * 
 * 
 * */

/* Esta función será la que se deberá insertar en el js de la vista, no será necesario utilizarlo en este archivo.
 * Se le puede cambiar el nombre a la función y llamarla desde el click del botón a través del cual queremo invocar al modal*/
function mostrarModal(idModal, tipoModal, tituloCabecera) {
	var configModal = [ {
		/* Se puede enviar una variable o un string con la cabecera */
		'tituloCabecera' : tituloCabecera,
		/* Posibles opciones para el backdrop: true | false | "Static" */
		'backdrop' : true,
		/* Tamaño que debe tener el modal, se puede poner en píxeles o en porcentaje */
		'width' : '40%',
		/* Tipo de modal que se va a crear: 0(Genérico) | 1(Danger) | 2(Warning) | 3(info) | 4(Success) */
		'tipoModal' : tipoModal,
		/* Existe botón de cierre superior derecho: true | false */
		'botonCierre' : true,
		/* Existen botones en el footer: true | false */
		'botonesFooter' : true,
		/*Carga de una vista en el modal mediante ajax: true | false*/
		'cargaAjax' : true
	} ];
	/* Pasarle por variable el contenido del modal por ejemplo:
	 * var contenidoModal = <div class="container">Este es el contenido que va en el modal</div>*/
	/* En caso que queramos realizar una carga dinámica a través de AJAX, deberemos insertar lo siguiente:
	 * var contenidoModal = <div id="idDondeSeInsertaraElContenido"></div>*/
	var contenidoModal = '<div id="contenidoModal"></div>';
	/*En caso de que queramos cargar el contenido de otra vista mediante ajax, deberemos rellenar esta variable*/
	var cargaAjax = [
	                 {
	                	 /*Aquí deberá de pasarse el id que hemos puesto en el contenedor del contenido Modal.
	                	  * Será el contenedor sobre el que se cargará el contenido*/
	                	'idCargaAjax' : 'contenidoModal',
	                	/*Aquí le pasaremos la url que queremos que cargue*/
	                	'urlAjax' : 'contenidomodal.html'
	                	
	                 }];
	/* Aquí se insertarán todos los botones que lleve el modal rellenando el array */
	var botones = [ {
		'boton' : 'Aceptar',
		'title' : 'Aceptar',
		'onClick' : "mostrarModal2('modalEjemplo', 3, 'Modal de ejemplo')",
		'classModal' : 'btn btn-primary pull-right',
		'data-dismiss' : ''
	}, {
		'boton' : 'Cancelar',
		'title' : 'Cancelar',
		'onClick' : '',
		'classModal' : 'btn btn-default pull-right',
		'dataDismiss' : 'modal'
	}, {
		'boton' : 'Descartar',
		'title' : 'Descartar',
		'onClick' : '',
		'classModal' : 'btn btn-secundary pull-right',
		'dataDismiss' : 'modal'
	} ];

	crearEstructuraModal(idModal, configModal, contenidoModal, botones, cargaAjax);


	$('#' + idModal).on('hidden.bs.modal', function(e) {
		$('#' + idModal).remove();
		$('.modal').each(function(e) {
			if ($(this).hasClass('in')) {
				$('body').addClass('modal-open');
				$('body').css('padding-right', '0');
			}
		});
	})
}


/* Esta función sólo es de ejemplo. No es necesario en absoluto, sólo es para mostrar un modal dentro de otro modal.
 * Este modal se mostrará al pulsar el botón aceptar del primer modal. 
 * ***************************************************************************************************************
 * ESTO DEBE DE ELIMINARSE AL UTILIZARLO EN UN PROYECTO, SOLO ES UN EJEMPLO*/

function mostrarModal2(idModal, tipoModal, tituloCabecera) {
	var configModal = [ {
		/* Se puede enviar una variable o un string con la cabecera */
		'tituloCabecera' : tituloCabecera,
		/* Posibles opciones para el backdrop: true | false | "Static" */
		'backdrop' : true,
		/* Tamaño que debe tener el modal, se puede poner en píxeles o en porcentaje */
		'width' : '30%',
		/* Tipo de modal que se va a crear: 0(Genérico) | 1(Danger) | 2(Warning) | 3(info) | 4(Success) */
		'tipoModal' : tipoModal,
		/* Existe botón de cierre superior derecho: true | false */
		'botonCierre' : true,
		/* Existen botones en el footer: true | false */
		'botonesFooter' : true,
		/*Carga de una vista en el modal mediante ajax: true | false*/
		'cargaAjax' : false
	} ];
	/* Pasarle por variable el contenido del modal por ejemplo:
	 * var contenidoModal = <div class="container">Este es el contenido que va en el modal</div>*/
	/* En caso que queramos realizar una carga dinámica a través de AJAX, deberemos insertar lo siguiente:
	 * var contenidoModal = <div id="idDondeSeInsertaraElContenido"></div>*/
	var contenidoModal = '<div>Este es un modal de ejemplo que aparece al pulsar el botón de aceptar del primer modal.</div>';
	/*En caso de que queramos cargar el contenido de otra vista mediante ajax, deberemos rellenar esta variable*/
	var cargaAjax = "";
	/* Aquí se insertarán todos los botones que lleve el modal rellenando el array */
	var botones = [ {
		'boton' : 'Cancelar',
		'title' : 'Cancelar',
		'onClick' : '',
		'classModal' : 'btn btn-default pull-right',
		'dataDismiss' : 'modal'
	}];

	crearEstructuraModal(idModal, configModal, contenidoModal, botones, cargaAjax);


	$('#' + idModal).on('hidden.bs.modal', function(e) {
		$('#' + idModal).remove();
		$('.modal').each(function(e) {
			if ($(this).hasClass('in')) {
				$('body').addClass('modal-open');
				$('body').css('padding-right', '0');
			}
		});
	})
}


/* A partir de aquí es lo que deberemos de dejar en el archivo modales.js, el resto se debe de copiar en un archivo js del proyecto.
 ***********************************************************************************************************************************/

function crearEstructuraModal(idModal, configModal, contenidoModal, botones, cargaAjax) {

	$('body').append('<div id="' + idModal + '"></div>');
	$('#' + idModal).addClass('modal fade ').attr('role', 'dialog').attr(
			'tabindex', '-1').attr('data-backdrop', configModal[0].backdrop)
			.append(
					'<div class="modal-dialog" id="dialog-' + idModal
							+ '" role="document"></div>');
	$('#' + 'dialog-' + idModal).append(
			'<div class="modal-content" id="content-' + idModal + '"></div>');

	if (configModal[0].width !== "") {
		$('#' + 'dialog-' + idModal).css('width', configModal[0].width);
	}

	/* Creamos la estructura del Header del modal */
	crearEstruturaHeader(idModal, configModal, contenidoModal, botones)

	/* Creamos la estructura del body del modal */
	crearEstructuraBody(idModal, configModal, contenidoModal, botones, cargaAjax);

	/* Creamos la estructura del footer del modal */
	crearEstructuraFooter(idModal, configModal, contenidoModal, botones);
	
	/*Añadimos algunos estilos al modal*/
	$('#' + idModal).modal('show');
	$('.modal').css('overflow','hidden');
	
	/* Diferenciamos el tipo de modal */

	/* Modal del tipo Danger */
	if(configModal[0].tipoModal === 1) {
		$('#' + idModal).addClass('modal-danger');
		$('#' + idModal+' .modal-header').prepend('<i class="glyphicon glyphicon-remove gly-danger"></i>');
	}
	/* Modal del tipo warning */
	if(configModal[0].tipoModal === 2) {
		$('#' + idModal).addClass('modal-warning');
		$('#' + idModal+' .modal-header').prepend('<i class="glyphicon glyphicon-warning-sign gly-warning"></i>');
	}
	/* Modal del tipo info */
	if(configModal[0].tipoModal === 3) {
		$('#' + idModal).addClass('modal-info');
		$('#' + idModal+' .modal-header').prepend('<i class="glyphicon glyphicon-info-sign gly-info"></i>');
	}
	/* Modal del tipo Success */
	if(configModal[0].tipoModal === 4) {
		$('#' + idModal).addClass('modal-success');
		$('#' + idModal+' .modal-header').prepend('<i class="glyphicon glyphicon-ok gly-success"></i>');
	}
}

/* ESTRUCTURA HEADER MODAL */
function crearEstruturaHeader(idModal, configModal, contenidoModal, botones) {
	$('#' + 'content-' + idModal).append(
			'<div class="modal-header" id="header-' + idModal + '"></div>');

	if (configModal[0].botonCierre) {
		$('#' + 'header-' + idModal)
				.append(
						'<button class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
	}

	if (configModal[0].tituloCabecera !== '') {
		$('#header-' + idModal).append(
				'<h4 class="modal-title">' + configModal[0].tituloCabecera
						+ '</h4>');
	}
}

/* ESTRUCTURA BODY MODAL */
function crearEstructuraBody(idModal, configModal, contenidoModal, botones, cargaAjax) {
	$('#' + 'content-' + idModal).append(
			'<div class="modal-body" id="body-' + idModal + '">'
					+ contenidoModal + '</div>');
	if (configModal[0].cargaAjax===true) {
		$.ajax({
			url : cargaAjax[0].urlAjax,
			cache : false,
			type : "GET",
			dataType : "html",
			success : function(data) {
				$("#"+cargaAjax[0].idCargaAjax).html(data);
			}
		});
	}
}

/* ESTRUCTURA FOOTER MODAL */
function crearEstructuraFooter(idModal, configModal, contenidoModal, botones) {
	$('#' + 'content-' + idModal).append(
			'<div class="modal-footer" id="footer-' + idModal + '"></div>');

	if (configModal[0].botonesFooter) {
		$.each(botones,
				function(idx, obj) {
					$("#footer-" + idModal).append(
							'<button class="' + obj.classModal + ' title="'
									+ obj.boton + '" onClick="' + obj.onClick
									+ '" data-dismiss="' + obj.dataDismiss
									+ '">' + obj.boton + '</button>');
				});
	}
}