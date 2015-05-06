$(document).ready(function() {
	// $(".herb-detail").hide();
	// $(".veggie-detail").hide();

	$("#veggies").hide();
	$("#herbs").hide();
	$("#herbs-button").on("click", function(event){
		event.preventDefault();
		$("#herbs").show();
		$("#veggies").hide();


	});
	$("#veggies-button").on("click", function(event){
		event.preventDefault();
		$("#veggies").show();
		$("#herbs").hide();
	});
});

