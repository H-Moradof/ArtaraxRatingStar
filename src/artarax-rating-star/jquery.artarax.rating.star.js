/*  ---------------------------------------------------------------------
    ----------------------- ARTARAX RATING STAR ---------------------------- 
    -----------------------   Version 0.1    ---------------------------- 
    ---------------- copyright 2018 by http://artarax.com ---------------
    ---------------------------------------------------------------------
    options:
    {
        onClickCallBack: 
            callback function that can get selected star value and id (data-id attribute) as a param
    }

    methods:
        1) highlightRating(3.9) : highligh stars on page load
/*  --------------------------------------------------------------------- */
(function ($) {

    $.artaraxRatingStar = function (options) {

        // ======================================== plugin definition ========================================
        var defaults = {
            onClickCallBack: null,
        };

        var settings = $.extend({}, defaults, options);

        var onClickCallBack = settings.onClickCallBack;

        // =============================================== main ===============================================
        // -------------------------- events --------------------------
        // hover
        $(".rating-star span").hover(function () {
            var hoverValue = parseInt($(this).attr('data-val'));
            highlightStars(hoverValue, 'hover');
        });

        // mouseout
        $(".rating-star span").mouseout(function () {
            $(".rating-star span").each(function () {
                $(this).removeClass("hover");
            });
        });

        // click
        $(".rating-star span").click(function () {
            if (onClickCallBack != null) {
                var rate = parseInt($(this).attr('data-val'));
                var id = parseInt($(this).attr('data-id'));
                highlightStars(rate, 'clicked');
                onClickCallBack(rate, id);
            }
        });

        // -------------------------- private functions --------------------------
        function highlightStars(count, cssClass) {
            var itemValue = 0;
            $(".rating-star span").each(function () {
                itemValue = parseInt($(this).attr('data-val'));
                if (itemValue <= count) {
                    $(this).addClass(cssClass);
                }
                else {
                    $(this).removeClass(cssClass);
                }
            });
        }



        function highlightRating(rate) {
            var roundedRate = Math.round(rate);
            highlightStars(roundedRate, 'clicked');
        }



        // -------------------- public methods ------------------------
        return {
            highlightRatingStars: function (rate) {
                highlightRating(rate);
            }
        }

    }    
}(jQuery));
