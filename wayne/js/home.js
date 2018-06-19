var x = false;
var y = false;
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
	$("#language").click(function() {
		if(y){
			Chinese();
		}
		else{
			English();
		}
		y =! y;
	})
	$("#chineseText").hide();
	$("#chineseBottom").hide();
	
	
	function First(){
			//$("#text2").html("<span>提供舒適優閒及安全的家居生活，是我們服務的首要宗旨 。<br /><br /></span><span id='indent'>我們提供的服務以人為本 。因此，與一般承建商的裝置服務有別，我們提供專業人士作家訪 ，從而了解每使用者的不同個別需要 ，繼而提供各種安全設施，但求讓使用者得到適用的裝置 ，從而在熟悉的環境享受獨立  ，自主  ，及安全無憂的生活。</span><br /><br /><br /><br />");
			$("#text").html("<br /><span style='font-size: 40px'>Your comfort is our passion.  Especially in the home - <span style='color: #F79646'>your home</span>. </span><br /><br /><span style='font-size: 20px; line-height: 0.5%'>We put people first in our service with an approach differing from normal contracting.  S+ provide professional consultation to understand your special needs, provide a range of safety products accommodating those needs and install them with that customized purpose in your home.   Our aim is to cater for everyone’s differing and personal requirement so they can comfortably enjoy staying in a familiar place - independent and safe.</span><br /><br/>");
			//$("#text").css("font-size", "40px");
			//$("#text2").css("font-size", "20px");
			//$("#text2").css("color", "#606060");
			//$("#text2").css("text-align", "left");
			//$("#text2").css("text-indent", "50px");
			//$("#text").css("text-indent", "50px");
			//$("#indent").css("text-indent", "20px");
			
			
		
			$("#bottomScript").hide();
			$("#text2").show();
			$("#chineseBottom").hide();
			$("#chineseText").hide();
			$("#nextButton").text("<< Return");
			$("#nextButton").css("border-left", "3px");
			
	}
	function Second(){
			$("#text").html("<span style='color:#606060; font-size: 40px; text-align: left; float: left;'><strong><br />An active retirement lifestyle should improve with time - <span style='color: #BFBFBF'>safe </span> and <span style='color: #BFBFBF'>sustainable </span> at <span style='color: #F79646'>home</span>.</strong></span>");
			$("#text").css("font-size", "40px");
			$("#text").css("text-indent", "0");
			$("#bottomScript").show();
			//$("#chineseBottom").show();
			//$("#chineseText").show();
			$("#text2").hide();
			$("#image").html("");
			$("#nextButton").text("Next >>");
	}
})

