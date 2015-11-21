/*$(".skiplink").click(function() {
    $('html, body').animate({
        scrollTop: $("#site-nav").offset().top
    }, 2000);
});*/

$(".skiplink").click(function() {
    //event.preventDefault();
    $('#site-nav').show();
});
$(".back-to-top").click(function() {
    //event.preventDefault();
    $('#site-nav').hide();
});
