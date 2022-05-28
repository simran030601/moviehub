$(document).ready(function () {
	if ($(window).width() < 767) {
		var header_height = $(".header").outerHeight();
		$(".nav-wrap .nav-list").css({ "padding-top": header_height + "px" });
	} else {
		$(".nav-wrap .nav-list").css({ "padding-top": "0" });
	}
	$(".hamburger").click(function () {
		$(this).toggleClass("is-active");
		$("body,html").toggleClass("sidebar-open");
		$(".nav-wrap").toggleClass("is-open");
	});

	$(".overlay").click(function () {
		$(".hamburger").removeClass("is-active");
		$("body,html").removeClass("sidebar-open");
		$(".nav-wrap").removeClass("is-open");
	});

	$(".nav-list li.with-submenu").click(function () {
		$(this).toggleClass("is-open");
		$(".submenu").slideToggle("slow");
	});
});
$(window).on("resize", function () {
	if ($(window).width() < 767) {
		var header_height = $(".header").outerHeight();
		$(".nav-wrap .nav-list").css({ "padding-top": header_height + "px" });
	} else {
		$(".nav-wrap .nav-list").css({ "padding-top": "0" });
	}
});
