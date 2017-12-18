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

	

	// count js files


var like=0
var data=0
var user=0
var tv=0

var countlike;
var countdata;
var countuser;
var counttv;

countlike=setInterval(function(){
	$(".countLike").find("h2").text(
		like+=1
		)
	if(like==100){
		clearInterval(countlike)
	}
},40)


countdata=setInterval(function(){
	$(".countData").find("h2").text(
		data+=1
		)
	if(data==10){
		clearInterval(countdata)
	}
},400)
countuser=setInterval(function(){
	$(".countUser").find("h2").text(
		user+=7
		)
	if(user==2954){
		clearInterval(countuser)
	}
},10)
counttv=setInterval(function(){
	$(".countTv").find("h2").text(
		tv+=11
		)
	if(tv==3597){
		clearInterval(counttv)
	}
},10)



// slide01 js kodlari


$(document).ready(function() {
	count=0;

	$("#left").click(function(event) {
		if(count<0){
			count=$(".item").length
		}	
		$($(".item")[count-1]).animate({
				marginLeft:"+="+$($(".item")[0]).css("width")
			})
		count--;
		console.log(count)
		
	});

	$("#right").click(function(event) {
		
		$($(".item")[count]).animate({
			marginLeft:"-="+$($(".item")[0]).css("width")
		})
		count++;
		if(count>$(".item").length){
			count=0
		}
		console.log(count)
	});
});



// map js kodlari

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}