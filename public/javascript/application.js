$(document).ready(function(){  
  $('#bat-signal-div').click(function(){
    window.open('images/bmason_resume.pdf');
  });

  $('.icon-cloud-download').hover(
    function() {
      $('.resume').show()
      $('.resume').addClass('animated fadeIn');

    },
    function() {
      $('.resume').hide()
    }
  );


    $('.icons').show();
    // $('.awesome').addClass('animated bounceInLeft');
    // $('#bat-signal-div').addClass('animated bounceInLeft');
    // $('.nameplate-text').addClass('animated bounceInUp');


});