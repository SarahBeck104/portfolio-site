//Autoscroll to projects section on header "projects" link click
//scroll smoothly and quick
$(".projects-button").click(function() {
    $('html,body').animate({
        scrollTop: $(".projects").offset().top},
        'slow');
});
