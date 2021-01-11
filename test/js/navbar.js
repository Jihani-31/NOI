$(document).ready(function () {
  $('.mobile-responsive-button-container').click(function () {
    if ($('.mobile-responsive-button-container').hasClass('close-nav')) {
      $('.mobile-responsive-button-container').removeClass('close-nav')
      $('.mobile-responsive-button-container').addClass('open-nav')
      $('.navigation-link-container').slideDown(300)
    } else {
      $('.mobile-responsive-button-container').addClass('close-nav')
      $('.mobile-responsive-button-container').removeClass('open-nav')
      $('.navigation-link-container').slideUp(300)
    }
  })
})
