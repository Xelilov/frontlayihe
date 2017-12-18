$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});


var i=true;
$(".srch").click(function(){
	if(i==true){
		$(this).find("button").find('i.fa').removeClass("fa-search").addClass("fa-times")
		i=false;
	}
	else{
		$(this).find("button").find('i.fa').removeClass("fa-times").addClass("fa-search")
		i=true;
	}
})

var a=true;
$(".shw").click(function(){
	if(a==true){
		$(".accordMenu").animate({
		marginLeft:'0'		
		})
		a=false;
	}
	else{
		$(".accordMenu").animate({
		marginLeft:'-300px'
		})
		a=true;
	}
	
})


         // headerSlide js kodlari
$(".img2").hide()
$(".img3").hide()

$(".dot1").click(function(){
	$(".img1").fadeIn(500)
	$(".img2").fadeOut(500)
	$(".img3").fadeOut(500)
})
$(".dot2").click(function(){
	$(".img1").fadeOut(500)
	$(".img2").fadeIn(500)
	$(".img3").fadeOut(500)
})
$(".dot3").click(function(){
	$(".img1").fadeOut(500)
	$(".img2").fadeOut(500)
	$(".img3").fadeIn(500)
})

$(".img4").hide()
$(".img5").hide()

$(".dot4").click(function(){
	$(".img4").fadeIn(500)
	$(".img5").fadeOut(500)
	$(".img6").fadeOut(500)
})
$(".dot5").click(function(){
	$(".img4").fadeOut(500)
	$(".img5").fadeIn(500)
	$(".img6").fadeOut(500)
})
$(".dot6").click(function(){
	$(".img4").fadeOut(500)
	$(".img5").fadeOut(500)
	$(".img6").fadeIn(500)
})