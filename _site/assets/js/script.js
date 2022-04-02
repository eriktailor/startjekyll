jQuery(document).ready(function ($) {
	// ---------------------------------------------------

	// Technologies img tooltips init
	$(".tech-list img").each(function () {
		var alt = $(this).attr("alt");
		$(this).attr("title", alt);
		$(this).simpletooltip({
			position: "bottom",
			color: "#FFFFFF",
			background_color: "rgba(0,0,0,0.75)",
			border_width: 4,
		});
	});

	// ---------------------------------------------------
});
