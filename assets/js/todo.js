// Turn todos grey by clicking on them
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on 'X' to delete todo
$('ul').on("click", "span", function (event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Type todo into text box and add to ul
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		// set input text to a variable
			var todoText = ($(this).val());
		// remove input text from text box
			$(this).val(null);
		// add todoText as an li to the ul
			$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});