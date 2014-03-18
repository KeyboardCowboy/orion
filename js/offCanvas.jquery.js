/**
 * @file
 * Port of foundation's offcanvas functionality, slimmed down for Drupal.
 */
(function ($) {
  $(document).ready(function() {
    // Foundation is acting up with Drupal 7's old-ass version of jQuery so
    // we'll do it ourselves.
    $("*[oc='trigger']").click(function(event) {
      var dir = $(this).attr('oc-dir');
      $(this).closest("*[oc='outer-wrapper']").toggleClass('move-' + dir);
      event.preventDefault();
      return false;
    });
    $("*[oc='exit']").click(function(event) {
      $(this).closest("*[oc='outer-wrapper']").removeClass('move-left move-right');
      event.preventDefault();
      return false;
    });
  });
})(jQuery);
