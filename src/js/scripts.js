$(document).ready(function(){
 	
});

 function initMap() {
        var center = {lat: 49.5695857, lng: 34.579516};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: center,
          disableDefaultUI: true
        });

        var marker = new google.maps.Marker({
          position: center,
          map: map,
          icon: "../img/beetroot.png"
        });
}

		var $isotop = $('.section__images').isotope({
			itemSelector: '.section__image',
			masonry: {
				columnWidth: '.image-sizer',
				gutter: '.gutter-sizer'
			}
		});

		$('body').on('click', '.filters li a', function(e) {
					e.preventDefault();
					$('.filters li a').removeClass('active');
					$(this).addClass('active');
					var filter = $(this).attr('data-filter');

					filter = filter == '*' ? filter : '.' + filter;
					
					$isotop.isotope({ filter: filter });
		});

		$(".slider").slick({
			dots: true,
		});
