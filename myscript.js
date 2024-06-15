// $("li").hide();
// $("#wrapper").hide();


// events on Jquery :
// ready()
// click()
// dblclick()
// mouseenter()
// mouseleave()




// $(document).ready = $
// $(document).ready(function()) = $(function()) //when "Ready event" occurs for "Document" >> do function()
$(function () {
    // $("#loading").hide(1500); 
    //$("#loading").hide(1500 , anyfunction() after 1500ms after hide);
    // $("#loading").hide(1500,repeatfunc());
    $("#loading").fadeOut(1000);
    // $("#loading").fadeTo(1500 , 0.5).delay(1000).fadeTo(1000,0) ;

    // function repeatfunc() {
    //             $("#loading").fadeTo(1500 , 0.5).delay(1000).fadeTo(1000,1).fadeOut(500) ;
    // }
    $("#footer").slideUp();
    $("#wrapper").slideUp("slow");

    // $(".jump_down").click(function(){
    //     $("#wrapper").slideToggle("slow")
    // })


    var dir_arrow = 0
    $(".jump_down").click(function () {
        if (dir_arrow == 0) {
            $("#wrapper").slideDown(2000);
            $("#footer").slideDown(2000);
            $("#dot_").slideUp("fast");
            $("#button-previous").slideUp("fast");
            $("#button-next").slideUp("fast");
            $("#jump_downC").css({
                "background-image": "url(image/jump_downreverse.png)",
                "background-repeat": "no-repeat",
                "background-position-x": "50%",
                "background-position-y": "100%",
                "opacity": "1",
                "background-size": "3%",
                "z-index": "1000"
            });
            dir_arrow = 1;
        }
        else {
            $("#wrapper").slideUp("slow");
            $("#footer").slideUp("slow");
            $("#dot_").slideDown("fast");
            $("#button-previous").slideDown("fast");
            $("#button-next").slideDown("fast");
            $("#jump_downC").css({
                "background-image": "url(image/jump_down.png)",
                "background-repeat": "no-repeat",
                "background-position-x": "50%",
                "background-position-y": "100%",
                "opacity": "1",
                "background-size": "3%",
                "z-index": "1000"
            });

            dir_arrow = 0;
        }
    });


    // $("a").on('click', function (event) { //event is data about click
    //     if (this.hash !== "") { //this is a elemant and .hash is href="..." in a tah
    //         //event.preventDefault(); //with click (event) on a tag no occur anything
    //         preventScroll = false;
    //         var hash = this.hash;
    //         $("html", "body").animate({ // animate is a function() such as slideUp() or slideDown()
    //             scrollTop: $(hash).offset.top - 100
    //         }, 2000, function () {
    //             window.location.hash = hash; //add the destination in the end of URL 
    //         }
    //         )
    //     }
    // })    



    // $("a").on('click', function (event) { 
    //     if (this.hash !== "") { 
    //         event.preventScroll();
    //         var hash = this.hash;
    //         $("html", "body").animate({ 
    //             scrollTop: $(hash).offset().top - 100
    //         }, 2000, function () {
    //             window.location.hash = hash; 
    //         }
    //         )
    //     }
    // })


       



            // var action = 0
            // var resumeSlides = document.querySelector('.slideshow-container');

            // resumeSlides.addEventListener('mousedown', function () {
            //     setTimeout(showSlides, 0);
            // });

            // resumeSlides.addEventListener('mouseup', function () {
            //     setTimeout(showSlides, 3000);
            // });


        


        


        $("#experience").mouseenter(
            function () {
                //  $ ("#footer")  ==  $(this)
                $(this).css({ "color": "blue", "background-color": "red" });
                // alert("Hi website is developing and out of service please try later!")
            }
        )

        $("#experience").mouseleave(
            function () {
                //  $ ("#footer")  ==  $(this)
                $(this).css({ "color": "black", "background-color": "#cbcbcb" });
                // alert("Hi website is developing and out of service please try later!")
            }
        )

        var visible_about = 0;
        $("#experience").click(
            function () {
                // if (visible_about == 0) {
                // //  document.getElementById("about") == $("#about")
                // // document.getElementById("about").style.visibility = "hidden";
                // $("#about").css({"visibility":"hidden"});
                //     visible_about = 1;
                // }
                // else {
                //     $("#about").css({"visibility":"visible"});
                //     visible_about = 0;
                // }
                // console.log(visible_about);

                $("#about").toggle();
            }
        )
    }
);
let slideIndex = 0;


function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    myTimeout = setTimeout(showSlides, 3500); 

    
    // var resumeSlides = document.querySelector('slideshow-container');

    // resumeSlides.addEventListener('mousedown', function (event) {
    //     if (event.buttons === 1) {
    //         clearTimeout(myTimeout)
    //     }
    //     else {
    //         setTimeout(showSlides, 3500);
    //     }
    // });

}
    function changeSlide(position) {
        slideIndex += position;
        if (slideIndex > slides.length) {
            slideIndex = 1
        } else if (slideIndex < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            
        }slides[slideIndex - 1].style.display = "block";
        }


        showSlides();
