$(document).ready(function(){

  $('.pdf').hover(
    function() {
      $('.text-box').show();
    },
    function() {
      $('.text-box').hide();
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

