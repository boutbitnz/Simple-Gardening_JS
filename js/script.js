$(document).ready(function() {
	// hide these by default with styles
	$(".herb-detail").hide();
	$(".veggie-detail").hide();
	$("#veggies").hide();
	$("#herbs").hide();
	$("#home").hide();
	$("main").hide();

	$("#herbs-button").on("click", herbButtonFunc);
	$("#veggies-button").on("click", vegButtonFunc);
	$("#herbs article h1").on("click", toggHerbDetailFunc);
	$("#veggies article h1").on("click", toggVeggieDetailFunc);
	$("#home").on( "click", homeButtonFunc);

	function herbButtonFunc() {
		// event.preventDefault();
		console.log(arguments)
		$("#herbs").show();
		$("#veggies").hide();
		$("main").show();
	}

	function vegButtonFunc() {
		// event.preventDefault();
		console.log("arguments");
		$("#veggies").show();
		$("#herbs").hide();
		$("main").show();
	}

	function toggHerbDetailFunc() {
		// event.preventDefault();
		$("#header").hide();
		$(".herb-detail").hide();
		$(".veggie-detail").hide();
		$("#home").show();
		$(this).closest("article").find(".herb-detail").fadeToggle( "slow", "linear");

	}

	function toggVeggieDetailFunc(){
		// event.preventDefault();
		$("#header").hide();
		$(".herb-detail").hide();
		$(".veggie-detail").hide();
		$(this).closest("article").find(".veggie-detail").fadeToggle( "slow", "linear");
		$("#home").show();
	}

	function homeButtonFunc() {
		$(".herb-detail").hide();
		$(".veggie-detail").hide();
		$("#herbs").hide();
		$("#veggies").hide();
		$("#home").hide();
		$("#header").show();
		$("main").hide();
	}

});











