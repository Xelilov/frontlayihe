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

$(".shw").click(function(){
	$(".accordMenu").css({
		marginLeft:'0'
	})
	$(".accordMenu").toggle()
})