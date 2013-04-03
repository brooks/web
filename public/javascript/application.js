$(document).ready(function(){

  $('#bat').click(function(){
    $('.icons').toggle();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.awesome').addClass('animated fadeInDown');
  });
});

