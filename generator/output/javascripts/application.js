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
	
	$('textarea').focus(function() {
	    var $this = $(this);

	    $this.select();

	    window.setTimeout(function() {
	        $this.select();
	    }, 1);

	    // Work around WebKit's little problem
	    function mouseUpHandler() {
	        // Prevent further mouseup intervention
	        $this.off("mouseup", mouseUpHandler);
	        return false;
	    }

	    $this.mouseup(mouseUpHandler);
	});

})
