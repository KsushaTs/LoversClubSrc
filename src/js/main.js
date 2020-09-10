// Main JS module
// objectFitImages polyfill
import objectFitImages from "object-fit-images";

$(function () {
	objectFitImages();
	let burger = $('#burger_Js'),
		nav = $('#nav_Js');

	$('.tariff-table .col').hover(function () {
			let num = $(this).data('num');
			$('.col' + num).addClass('active');
		},
		function () {
			$('.col').removeClass('active');
		});

	$('.pay-form__checkbox').on('change', function (event) {
		if ($('.pay-form__checkbox_1').is(':checked') && $('.pay-form__checkbox_2').is(':checked')) {
			$('.pay-form__button').prop("disabled", false);
		} else {
			$('.pay-form__button').prop("disabled", true);
		}
	});	

	function menuMob(burger, nav) {
		$(burger).on('click', function (event) {
			$(this).toggleClass('open');
			$(nav).stop().slideToggle(300);
		});
	}

	function functionMedia(mediaQuery) {
		if (mediaQuery.matches) {
			menuMob(burger, nav);
		} else {
			$(nav).removeAttr("style");
			$(burger).removeClass('open');
		}
	}

	let mediaQuery = window.matchMedia("(max-width: 1140px)");
	functionMedia(mediaQuery);
	mediaQuery.addListener(functionMedia);

});