$(document).ready(function () {
    $("mobilelink").find("li").on("click", "a", function () {
    $('#navmobLinks.in').collapse('hide');
    });
});

$(document).ready(function () {
    $(".navigation").find("li").on("click", "a", function () {
    $('.navigation.in').collapse('hide');
    });
});

// Gift page
//$(document).ready(function(){
//$(".btnNotify").click(
//    function(){
//        $(this).toggleClass("#show");
//        $(this).next().slideToggle(1000);
//    }
//);
//});