var img1 = document.createElement("img");

$('body').css('background-image', 'url(assets/img/bg-min.jpg)');

$(img1).attr('src', 'assets/img/bg.jpg').on('load', function() {
   $(this).remove(); // prevent memory leaks as @benweet suggested
   $('body').css('background-image', 'url(assets/img/bg.jpg)');
});