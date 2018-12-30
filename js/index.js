(function($) {

    "use strict";

    $(document).ready(function() {

		// PRELOADER
        $("body").toggleClass("loaded");
        setTimeout(function() {
            $("body").addClass("loaded");
        }, 3000);

      });

  })(jQuery);
