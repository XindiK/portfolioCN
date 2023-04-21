var activeVideo = 0;
//For Navigation Bar 
//btn1 = about
//btn2 = Portfolio
//btn3 = contact
//To-do: add news section
$(document).ready(function () {
    $(".projects").hide();
    $("#about").hide();
    $("#portfolio").hide();
    $("#news").hide();
    $("#contact").hide();
    $("#catImg").fadeIn();
    $(".hidden").fadeIn();
});
$(document).ready(function () {

    $("button#btn1").click(function () {
        console.log("btn1");
        $(".projects").hide();
        $("#catImg").hide();
        $("#about").fadeIn();
        $("#portfolio").hide();
        $("#news").hide();
        $("#contact").hide();
        $("button#btn1").addClass(" active");
        $("button#btn2").removeClass(" active");
        $("button#btn3").removeClass(" active");
        $(".hidden").hide();
    });
});
$(document).ready(function () {
    $("button#btn2").click(function () {
        console.log("btn2");
        $(".projects").hide();
        $("#catImg").hide();
        $("#about").hide();
        $("#portfolio").fadeIn();
        $("#news").hide();
        $("#contact").hide();
        $("button#btn2").addClass(" active");
        $("button#btn1").removeClass(" active");
        $("button#btn3").removeClass(" active");
        $(".hidden").hide();
    });
});
$(document).ready(function () {
    $("button#btn3").click(function () {
        console.log("btn3");
        $(".projects").hide();
        $("#catImg").hide();
        $("#about").hide();
        $("#portfolio").hide();
        $("#news").fadeIn();
        $("#contact").hide();
        $("button#btn3").addClass(" active");
        $("button#btn1").removeClass(" active");
        $("button#btn2").removeClass(" active");
        $(".hidden").hide();
    });
});
$(document).ready(function () {
    $("button#btn4").click(function () {
        console.log("btn4");
        $(".projects").hide();
        $("#catImg").hide();
        $("#about").hide();
        $("#portfolio").hide();
        $("#news").hide();
        $("#contact").fadeIn();
        $("button#btn3").addClass(" active");
        $("button#btn1").removeClass(" active");
        $("button#btn2").removeClass(" active");
        $(".hidden").hide();
    });
});
//For hidden button
$(document).ready(function () {
    $("button#hidden").hover(function () {
        console.log("You've found the hidden button!");
        $("#catbase").css("display", "none");
        $("#cattop").css("display", "inherit");
    }, function () {
        $("#catbase").css("display", "inherit");
        $("#cattop").css("display", "none");
    });
//     $("button#hidden").click(function () {
//         console.log("hidden");
//         $(".projects").hide();
//         $("#catImg").hide();
//         $("#about").hide();
//         $("#portfolio").hide();
//         $("#contact").hide();
//         $("button#btn3").removeClass(" active");
//         $("button#btn1").removeClass(" active");
//         $("button#btn2").removeClass(" active");
//         $(".hidden").fadeIn();
//     });
});

//For each project in portfolio
$(document).ready(function () {
    $("img#proj1").click(function () {
        console.log("project1");
        $("#catImg").hide();
        $("#about").hide();
        $("#portfolio").hide();
        $("#news").hide();
        $("#contact").hide();
        $("#project1").fadeIn();
        $("#project2").hide();
        $("#project3").hide();
        $("#project4").hide();
        $("#project5").hide();
        $("#project6").hide();
        activeVideo = 1;
    });
});
$(document).ready(function () {
    $("img#proj2").click(function () {
        console.log("project2");
        $("#catImg").hide();
        $("#about").hide();
        $("#portfolio").hide();
        $("#news").hide();
        $("#contact").hide();
        $("#project1").hide();
        $("#project2").fadeIn();
        $("#project3").hide();
        $("#project4").hide();
        $("#project5").hide();
        $("#project6").hide();
        activeVideo = 2;
    });
});
$(document).ready(function () {
    $("img#proj3").click(function () {
        console.log("project3");
        $("#catImg").hide();
        $("#about").hide();
        $("#portfolio").hide();
        $("#news").hide();
        $("#contact").hide();
        $("#project1").hide();
        $("#project2").hide();
        $("#project3").fadeIn();
        $("#project4").hide();
        $("#project5").hide();
        $("#project6").hide();
        activeVideo = 3;
    });
});
$(document).ready(function () {
    $("img#proj4").click(function () {
        console.log("project4");
        $("#catImg").hide();
        $("#about").hide();
        $("#portfolio").hide();
        $("#news").hide();
        $("#contact").hide();
        $("#project1").hide();
        $("#project2").hide();
        $("#project3").hide();
        $("#project4").fadeIn();
        $("#project5").hide();
        $("#project6").hide();
        activeVideo = 4;
    });
});
$(document).ready(function () {
    $("img#proj5").click(function () {
        console.log("project5");
        $("#catImg").hide();
        $("#about").hide();
        $("#portfolio").hide();
        $("#news").hide();
        $("#contact").hide();
        $("#project1").hide();
        $("#project2").hide();
        $("#project3").hide();
        $("#project4").hide();
        $("#project5").fadeIn();
        $("#project6").hide();
        activeVideo = 5;
    });
});
$(document).ready(function () {
    $("img#proj6").click(function () {
        console.log("project6");
        $("#catImg").hide();
        $("#about").hide();
        $("#portfolio").hide();
        $("#news").hide();
        $("#contact").hide();
        $("#project1").hide();
        $("#project2").hide();
        $("#project3").hide();
        $("#project4").hide();
        $("#project5").hide();
        $("#project6").fadeIn();
        activeVideo = 6;
    });
});
$(document).ready(function () {
    $("button#back").click(function () {
        console.log("back");
        StopEmbedVideo();
        $(".projects").hide();
        $("#catImg").hide();
        $("#about").hide();
        $("#portfolio").fadeIn();
        $("#news").hide();
        $("#contact").hide();
    });
});

function StopEmbedVideo() {


    var $frame = $('iframe#vimeoWrap'.concat(activeVideo));

    // saves the current iframe source
    var vidsrc = $frame.attr('src');

    // sets the source to nothing, stopping the video
    $frame.attr('src', '');

    // sets it back to the correct link so that it reloads immediately on the next window open
    $frame.attr('src', vidsrc);

}

function displayHash() {
    var theHash = window.location.hash;
    if (theHash.length == 0) {
        theHash = "_";
    }
    return true;

    window.addEventListener("hashchange", function () {
        displayHash();
    });

    window.addEventListener("DOMContentLoaded", function (ev) {
        displayHash();
    });
}

