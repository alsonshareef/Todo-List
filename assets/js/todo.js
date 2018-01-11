// Turn todos grey by clicking on them
$("li").click(function(){
	// if 'li' is grey:
	if ($(this).css("color") === "rgb(128, 128, 128)") {
		// turn black
		$(this).css("color", "rgb(0, 0, 0)");
		$(this).css("text-decoration", "none")
	} 
	// else, turn it grey
	else {
		$(this).css("color", "rgb(128, 128, 128)");
		$(this).css("text-decoration", "line-through");
	}
});