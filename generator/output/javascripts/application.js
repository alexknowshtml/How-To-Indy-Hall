$(function(){  
	// highlight nav when scolling
  $("nav").scrollspy()
  _.defer(function(){
    $('[data-spy="scroll"]').each(function () {
      $(this).scrollspy('refresh')
    });
    $("#toc > ol > li.active-section .active").removeClass("active");
    $("#toc > ol > li.active-section > ol > li:first-child").addClass("active");
  })
	
	//enable smooth scrolling
	$('a').smoothScroll();

})
