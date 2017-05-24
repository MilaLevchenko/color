/**
 * Created by Людмила on 24.05.2017.
 */
$( document ).ready(function() {
  var trigger = $('.hamburger');
  var navSmall = $('.nav-small');
  isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {

    if (isClosed == true) {
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      navSmall.removeClass('is-open');
      navSmall.addClass('is-closed');
      isClosed = false;
    } else {
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      navSmall.removeClass('is-closed');
      navSmall.addClass('is-open');
      isClosed = true;
    }
  }
});