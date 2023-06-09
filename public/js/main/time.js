function changeImage() {
    var e = document.getElementById("theIcon");
    e.classList.contains("fa-toggle-on") ? (e.classList.remove("fa-toggle-on"), e.classList.add("fa-toggle-off")) : e.classList.contains("fa-toggle-off") && (e.classList.remove("fa-toggle-off"), e.classList.add("fa-toggle-on"));
  }
  !(function (e) {
    "use strict";
    var n = e(window);
    function t() {
        var t, l, c;
        (t = e("header").height()), (l = e(".screen-height")), (c = n.height() - t), l.css("height", c);
    }
    e("#preloader").fadeOut("normall", function () {
        e(this).remove();
    }),
        n.on("scroll", function () {
            n.scrollTop() <= 50 ? e("header").removeClass("scrollHeader").addClass("fixedHeader") : e("header").removeClass("fixedHeader").addClass("scrollHeader");
        }),
        e(".parallax,.bg-img").each(function (n) {
            e(this).attr("data-background") && e(this).css("background-image", "url(" + e(this).data("background") + ")");
        }),
        n.resize(function (e) {
            setTimeout(function () {
                t();
            }, 500),
                e.preventDefault();
        }),
        t(),
        e(document).ready(function () {
              
            $('#clients').owlCarousel({
              loop: true,
              nav: false,
              dots: false,
                    smartSpeed: 500,
              autoplay: true,
              autoplayTimeout: 2000,
              responsiveClass: true,
              autoplayHoverPause: false,
                    stagePadding: 0,
                    slideTransition: 'linear',
                    autoplayTimeout: 1300,
                    autoplaySpeed: 1300,
              responsive: {
                        0: {items: 7, margin: 9}, 
                        768: {items: 11, margin: 15}, 
                        992: {items: 12, margin: 23}, 
                        1200: {items: 18, margin: 15},
                        1300: {items: 19, margin: 14}
              }
            });
        });
    e(".switcher-setting").on("click", function () {
        return (
            document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
                ? document.exitFullscreen
                    ? document.exitFullscreen()
                    : document.msExitFullscreen
                    ? document.msExitFullscreen()
                    : document.mozCancelFullScreen
                    ? document.mozCancelFullScreen()
                    : document.webkitExitFullscreen && document.webkitExitFullscreen()
                : document.documentElement.requestFullscreen
                ? document.documentElement.requestFullscreen()
                : document.documentElement.msRequestFullscreen
                ? document.documentElement.msRequestFullscreen()
                : document.documentElement.mozRequestFullScreen
                ? document.documentElement.mozRequestFullScreen()
                : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT),
            !1
        );
    });
  })(jQuery);
  