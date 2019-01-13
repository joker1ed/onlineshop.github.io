
$(document).ready(function() {
      $("#my-menu").mmenu({
      	extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
      	navbar: {
      		title: '<img src="img/Logo.png">'
      	},
      	offCanvas: {
      		position: 'right'
      	}
      });
      var API = $("#my-menu").data( "mmenu" );
         $("#menuToggle").click(function() {
         API.close();
      });
   });