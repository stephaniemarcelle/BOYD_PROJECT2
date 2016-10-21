$(document).ready(function(){
	$("#welcomebutton").click(function(){
		$(this).hide();
	});
    $("#welcomebutton").click(function(){
        $(this).parent().find(".opening").fadeIn(5000);
		$("body").css("background-color", "black"); 
    });
	$("#welcomebutton").click(function(){
		$(this).parent().find("#entersite").fadeIn(1000);
	});
	$("#boo").click(function(){
		$("boo").animate({left: '250px'});
	});
	$("#pumpkinimg1").click(function(){
		$(this).parent().find("#history1").slideToggle();
	});
	$("#pumpkinimg2").click(function(){
		$(this).parent().find("#history2").slideToggle();
	});
	$("#pumpkinimg3").click(function(){
		$(this).parent().find("#history3").slideToggle();
	});
	$("#pumpkinimg4").click(function(){
		$(this).parent().find("#history4").slideToggle();
	});
	$("#pumpkinimg5").click(function(){
		$(this).parent().find("#history5").slideToggle();
	});
});

function submitForm(){
	var prefix = ""; 
	var gender = $("input[name='gender']:checked").val();
		if(gender=="male"){
			prefix="Mr.";
		}else if(gender=="female"){
			prefix="Ms."; 
		}
	var fullname = $("input[name='firstname']").val() + " " + 
        $("input[name='lastname']").val();
        $("#username").html(prefix + "" + fullname);
    var favoriteColor = $("input[name='favoriteColor']").val();
        $("body").css("background-color", favoriteColor);
	
	alert("Thanks for submitting your form, " +  prefix  +  fullname  + "! Your pumpkin is on its way!")
}

