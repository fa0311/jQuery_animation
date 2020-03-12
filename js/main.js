
var $titleAnim = $.Deferred(function (deferredAnim) {
    deferredAnim.then(title)
        .then(rod)
        .then(back_none1)
        .then(sub_title)
        .then(sub_title_out)
        .then(back_none2)
        .then(title_out)
        .then(rod_big)
        .then(end)
});





window.onload = function () {
    $titleAnim.resolve()
}


function title() {
    document.getElementById("title").classList.toggle("none");
    $("#title").delay(200).animate({
        "bottom": "54%",
        "opacity": "1"
    }, 1500, "easeOutExpo");
}

function rod() {
    $("#rod").animate({
        "width": "350",
        "opacity": "1"
    }, 2000, "easeOutExpo");
}




function back_none1() {
    $('#back').delay(1200).queue(function () {
        document.getElementById("back").classList.toggle("none");
    });
}


function sub_title() {
    $("#sub_title").delay(1200).animate({
        "top": "54%",
        "opacity": "1"
    }, 1500, "easeOutExpo");
}


function sub_title_out() {

    $("#sub_title").delay(1200).animate({
        "top": "40%",
        "opacity": "1"
    }, 1500, "easeInExpo");
}

function back_none2() {
    $('#back2').delay(5500).queue(function () {
        document.getElementById("back").classList.toggle("none");
    });
}

function title_out() {
    $("#title").delay(4000).animate({
        "top": "65%",
        "opacity": "0"
    }, 1000, "easeInExpo");
}



function rod_big() {
    $("#rod").delay(4000).animate({
        "width": "400",
        "opacity": "0"
    }, 2000, "easeOutExpo");
}


function end() {
    $('#title').queue(function () {
        document.getElementById("title").classList.toggle("none");
        document.getElementById("back").classList.toggle("none");
        document.getElementById("back2").classList.toggle("none");
        document.getElementById("sub_title").classList.toggle("none");
        document.getElementById("rod").classList.toggle("none");
    });
}


