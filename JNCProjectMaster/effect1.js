$(document).ready(function(){
	$("#btn1").click(1000,function(){
		$("#form-con1").animate({
			"top":"175px"
		},1000);
		$("#close-btn1").click(function(){
			$("#form-con1").animate({
			"top":"-800px"
		},1000);
		});
	});
});