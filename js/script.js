$(document).ready(function() {
	$(".herb-detail").hide();
	$(".veggie-detail").hide();
	$("#veggies").hide();
	$("#herbs").hide();
	$("#home").hide();
	$("main").hide();
	
	$("#herbs-button").on("click", function(event){
		// event.preventDefault();
		$("#herbs").show();
		$("#veggies").hide();
		$("main").show();
	});


	$("#veggies-button").on("click", function(event){
		// event.preventDefault();
		$("#veggies").show();
		$("#herbs").hide();
		$("main").show();
	});

	
	$("#herbs article h1").on("click", function(event){
		// event.preventDefault();
		$("#header").hide();
		$(".herb-detail").hide();
		$(".veggie-detail").hide();
		$("#home").show();
		$(this).closest("article").find(".herb-detail").fadeToggle( "slow", "linear");
		
	});
	$("#veggies article h1").on("click", function(event){
		// event.preventDefault();
		$("#header").hide();
		$(".herb-detail").hide();
		$(".veggie-detail").hide();
		$(this).closest("article").find(".veggie-detail").fadeToggle( "slow", "linear");
		$("#home").show();
	}); 

	$("#home").on( "click", function() {
		$(".herb-detail").hide();
		$(".veggie-detail").hide();
		$("#herbs").hide();
		$("#veggies").hide();
		$("#home").hide();
		$("#header").show();
		$("main").hide();

	});
	
});

