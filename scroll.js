$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});
$(document).ready(function() {
  $(window).scroll(function(){
    if ($(this).scrollTop() > 120) {
      $('#scroll').fadeIn();
    } else {
      $('#scroll').fadeOut();
    }
  });
  $('#scroll').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
