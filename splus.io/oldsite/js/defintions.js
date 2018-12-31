var x = false;
$(document).ready(function(){
	$("#nextButton").click(function(){
		if(x){
			First();
		}
		else{
			Second();
		}
		x =! x;
	});
	function First(){
			$("#text").html("<span>In Hong Kong there varied housing options are available to seniors that range from staying in your own home to specialized facilities that provide round-the-clock nursing care. The names of the different types of housing options can sometimes be confusing, as the terminology can vary.  Generally, the different types of senior housing vary according to the amount of care provided for activities of daily living and for medical care.  </span><br /><br /><br/><br/> <a href='terms.html' style='float: right'>Understanding Terms</a>");
			$("#text").css("font-size", "20px");
			$("#text").css("text-indent", "50px");
			$("#bottomScript").hide();
			$("#nextButton").text("Return");
			
	}
	function Second(){
			$("#text").html("<span style='color:#A6A6A6; font-size: 30px; text-align: left; float: left; text-indent: 50px;'><br/><p>Whether your planning is prompted by a medical condition or the desire for a lifestyle change, retirement residential choices can be challenging and stressful for both you and your family. </p><p>Early planning of your current needs and how those needs may evolve over time will leading to the choices you’ll have. By learning about the different types of senior living options you can make the choice that’s right for you and ensure you enjoy a happy, healthy, and fulfilling home environment as you age.</p></span>");
			$("#text").css("font-size", "40px");
			$("#text").css("text-indent", "0");
			$("#bottomScript").show();
			$("#nextButton").text("Next");
	}
})

