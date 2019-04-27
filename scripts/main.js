$(document).ready(function () {
    // scroll to top button
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#logoClosed, #backToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // close menu sm
    $('#logoClosed_sm, .lascarText_sm').click(function () {
        $('#nav-icon1').toggleClass('open');
        $('#navOpen_sm').slideToggle();

        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // ham menu
    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
    });

    // hover animation on menu items
    let $logoText = $(".lascarText");
    $logoText.css("display", "none");
    $logoText.width(0);
    $("#logoClosed").hover(function (ev) {
        $logoText.stop().animate({
            width: ev.type == "mouseenter" ? 200 : 0
        }, 700);
        if ($(".lascarText").css('display') == 'none') {
            $logoText.css("display", "block");
        } else {
            $logoText.css("display", "none");
        }
    });

    // videos
    let $videos = $(".videos");
    $videos.css("display", "none");
    $videos.width(0);
    $(".videoIcon").hover(function (ev) {
        $videos.stop().animate({
            width: ev.type == "mouseenter" ? 200 : 0
        }, 700);
        if ($(".videos").css('display') == 'none') {
            $videos.css("display", "block");
        } else {
            $videos.css("display", "none");
        }
    });

    // let $photos = $(".photos");
    // $photos.css("display", "none");
    // $photos.width(0);
    // $(".photoIcon").hover(function (ev) {
    //     $photos.stop().animate({
    //         width: ev.type == "mouseenter" ? 200 : 0
    //     }, 700);
    //     if ($(".photos").css('display') == 'none') {
    //         $photos.css("display", "block");
    //     } else {
    //         $photos.css("display", "none");
    //     }
    // });

    // about
    let $about = $(".about");
    $about.css("display", "none");
    $about.width(0);
    $(".aboutIcon").hover(function (ev) {
        $about.stop().animate({
            width: ev.type == "mouseenter" ? 200 : 0
        }, 700);
        if ($(".about").css('display') == 'none') {
            $about.css("display", "block");
        } else {
            $about.css("display", "none");
        }
    });

    // contact
    let $contact = $(".contact");
    $contact.css("display", "none");
    $contact.width(0);
    $(".contactIcon").hover(function (ev) {
        $contact.stop().animate({
            width: ev.type == "mouseenter" ? 200 : 0
        }, 700);
        if ($(".contact").css('display') == 'none') {
            $contact.css("display", "block");
        } else {
            $contact.css("display", "none");
        }
    });

    // open menu small
    $('#nav-icon1').click(function () {
        $('#navOpen_sm').slideToggle();
    });

    // adds smooth scroll to mobile and closes menu on tap
    $('.menu').click(function () {
        $('#nav-icon1').toggleClass('open');
        $('#navOpen_sm').slideToggle();
    });

    // on load animate bottom border of headers
    $('.headers').css('width', "50%");
    if ($(window).width() > 750) {
        $('.headers').css('font-size', "5.0em");
    } else if ($(window).width() < 750) {
        $('.headers').css('font-size', "3.0em");
    }

    // if screen changes, animate headers
    setInterval(function () {
        if ($(window).width() > 750) {
            $('.headers').css('font-size', "5.0em");
        } else if ($(window).width() < 750) {
            $('.headers').css('font-size', "3.0em");
        }
    }, 1000);
});