let pageIndex = 0;
let maxIndex
let scroll = $(".scroll")
let screenOld = false

$(document).ready(function () {
    maxIndex = $(".page").length
    scroll = $(".scroll")
    
    $("ul.head-main-menu>li:not(:first-child)").mouseover(function () {
        // console.log($(this).children().last())
        $(this).children().last().stop().fadeIn(200)
    })
    $("ul.head-main-menu>li:not(:first-child)").mouseleave(function () {
        // console.log($(this).children().last())
        $(this).children().last().stop().fadeOut(200)
    })

    $("ul.head-sub-menu>li:has(ul.head-sub-menu-sub)").mouseover(function () {
        // console.log($(this).children().last())
        $(this).children().last().stop().fadeIn(200)
    })
    $("ul.head-sub-menu>li:has(ul.head-sub-menu-sub)").mouseleave(function () {
        // console.log($(this).children().last())
        $(this).children().last().stop().fadeOut(200)
    })

    // setInterval(() => {
    //     pageIndex < maxIndex - 1 ? pageIndex++ : pageIndex = 0
    //     console.log({"transform":`translate3d(0px, calc( 0px - ${pageIndex}00vh), 0px)`})
    //     $(".scroll").css({"transform":`translate3d(0px, calc( 0px - ${pageIndex}00vh), 0px)`})
    //     location.href = `#page${pageIndex+1}`
    // }, 2000);

    $( window ).resize(function() {
        if($( window ).width() < 768)
        {
            scroll.css({"transform":`translate3d(0px, 0vh, 0px)`})
            // location.href = `#page${pageIndex+1}`
            // $('html,body').animate({scrollTop:0,scrollLeft:0},800,'swing');
            screenOld = true
        }
        else
        {
            if(screenOld)
            {

                scroll.removeClass("animation").css({"transform":`translate3d(0px, -${pageIndex}vh, 0px)`})
                
                setTimeout(() => {
                    scroll.addClass("animation")
                }, 0);
                screenOld = false
                console.log(screenOld)
            }

            // .removeClass("animation")
            // .addClass("animation")
            // .css({"transform":`translate3d(0px, calc(-${pageIndex}00vh - 0px), 0px)`})
        }
    });
})

function movepage() {
    console.log(pageIndex)
    scroll.css({"transform":`translate3d(0px, -${pageIndex}00vh, 0px)`})
    console.log(scroll)
    
    // location.href = `#page${pageIndex+1}`
}







