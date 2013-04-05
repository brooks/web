$(document).ready(function(){
  var whiteBat = '/images/batman-signal-image.png' 
  var blackBat = '/images/batman-signal-image-hover.png'
  
  $('.pdf').hover(
    function() {
      $('.text-box').show();
      $('.text-box').addClass('animated fadeIn');
    },
    function() {
      $('.text-box').hide();
    }
  );

  $('#bat').hover(
    function() {
      $(this).attr('src', blackBat);
    },
    function() {
      $(this).attr('src', whiteBat);
    }
  );

  $('.pdf').click(function(){
    window.open('images/bmason_resume.pdf');
  });

  $('#bat').click(function(){
    $('.pdf-bar').toggle();
    $('.pdf').addClass('animated fadeIn');
    $('.icons').toggle();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.awesome').addClass('animated fadeInDown');
  });
});