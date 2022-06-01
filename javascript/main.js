	$(document).ready(function() {
	  $(window).scroll(function() {
	    // sticky navbar on scroll script
	    if (this.scrollY > 20) {
	      $('.navbar').removeClass("navbar-opaque");
	    } else {
	      $('.navbar').addClass("navbar-opaque");
	    }
	  });
	  var windowHeight = $(window).height(),
	    topSection = $('master-section');
	  topSection.css('height', windowHeight);
	});
