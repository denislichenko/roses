$('.main-slider-img').click(function() {
  $('.overlay-flower').show(); 
});

function showFlower() {
  $('.overlay-flower').show(); 
}

$('.getPhoto').click(function() {
  $('.overlay-images').show();
});

$('.popup-close').click(function() {
  $('.overlay').hide(); 
});

$('.popupThanks-close').click(function() {
  $('.overlay-thanks').hide();
}); 

$('.popupImage-close').click(function() {
  $('.overlay-images').hide(); 
}); 

// --------------------------------

$('.popupForm-close').click(function() {
  $('.overlay-form').hide();
  jQuery('body').removeClass('noscroll');
});

$('.order-button').click(function() {
  jQuery('body').addClass('noscroll');
  event.preventDefault();
  $('.overlay-form').show(); 
});

$('.popupForm-input').mask('+ 7 (000) 000-00-00');

$('form').submit(function(event) {
  var input = $(this).find('input');
  event.preventDefault();
  
  if(input.val() != '') {
    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php', 
      data: $(this).serialize()
    })
    .done(function() {
      $(this).find('input').val('');
      $('.overlay-form').hide(); 
      $('.overlay-thanks').show();
      $('form').trigger('reset');
    });
    return false; 
  } else input.toggleClass('inputError');
});

$('input').change(function() {
  $(this).removeClass('inputError');
}); 