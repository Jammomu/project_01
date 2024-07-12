let pageIndex = 0;
let maxIndex
let isMax = 0
let scroll
let page
let target
let screenOld = false;
let newind
let isWheel 
let btnMenu
let menuColor 
let logo 
// ul.btn-page-menu li::after 생성
let slide_1  
let slide_2 
// let slideBtn


$(document).ready(function () {
    scroll = $(".scroll")
    page = $(".page")
    maxIndex = page.length
    btnMenu = $("ul.btn-page-menu li")
    logo = $(".logo img")
    menuColor = $("ul.head-main-menu>li>a")
    slide_1 = $(".slide01")
    slide_2 = $(".slide02")
    // slideBtn = $(".slide-btn li") .filter(":not(:animated)")

    $(".slide-btn li:first-child").click(function () {
        $(".slide01")
        slide_1.stop().fadeIn(500)
        slide_2.stop().fadeOut(500)
        $(this).addClass("on")
        $(this).siblings().removeClass("on")
    })
    $(".slide-btn li:last-child").click(function () {
        slide_1.stop().fadeOut(500)
        slide_2.stop().fadeIn(500)

        $(this).addClass("on")
        $(this).siblings().removeClass("on")
    })



    for (let index = 0; index < btnMenu.length; index++) {
        btnMenu.eq(index).click(function () {
            pageIndex = index
            isMax = 0
            BtnMenu()
            movepage(pageIndex)
        })
    }

    target = $(".target")
    for (let index = 0; index < target.length; index++) {
        pageObserver.observe(target.eq(index)[0])
    }

    let footer = $(".footertarget")[0]
    footerObserver.observe(footer)
    

    //메뉴 슬라이드 부분
    $("ul.head-main-menu>li:not(:first-child)").mouseover(function () {
        $(this).children().last().stop().fadeIn(200)
    })
    $("ul.head-main-menu>li:not(:first-child)").mouseleave(function () {
        $(this).children().last().stop().fadeOut(200)
    })

    $("ul.head-sub-menu>li:has(ul.head-sub-menu-sub)").mouseover(function () {
        $(this).children().last().stop().fadeIn(200)
    })
    $("ul.head-sub-menu>li:has(ul.head-sub-menu-sub)").mouseleave(function () {
        $(this).children().last().stop().fadeOut(200)
    })

    $( window ).resize(function() {
        if($( window ).width() < 768)
        {
            scroll.css({"transition":"none","transform":`translateY( calc( -0px + -0vh ))`})
            btnMenu.children().css({"transition":"none"})

            // console.log(pageIndex , $(".page").height())
            $('html').scrollTop(pageIndex * ($(".page").height() + 10))
            // location.href = `#page${pageIndex+1}`
            // .animate({scrollTop: pageIndex * $("#wrap").height()},800,'swing');
            screenOld = true

            // console.log(screenOld)
        }
        else
        {
            if(screenOld)
            {
                pageIndex = newind
                BtnMenu()
                scroll.css({"transform":`translateY(calc( -0px + -${pageIndex}00vh ))`})
                
                setTimeout(() => {
                    scroll.css({"transition":"all 700ms ease 0s"})
                    btnMenu.children().css({"transition":"all 0.5s"})
                }, 0);
                screenOld = false
                // console.log(screenOld)
            }


            BtnMenu()
            movepage(pageIndex)
            // .removeClass("animation")
            // .addClass("animation")
            // .css({"transform":`translate3d(0px, calc(-${pageIndex}00vh - 0px), 0px)`})
        }
    })


    window.addEventListener("wheel", function(e){
        
        isWheel = $("html").width() > 768 && parseFloat(scroll.css("transform").split(',')[5]
        .replace(/[^0-9.]/g,'')) == ( pageIndex * ($(".page").height() + 10))
         + (isMax * $("footer").height().toFixed(2))
        // console.log( isWheel )
        if(screenOld || !isWheel) return;

        if( e.deltaY > 0 && pageIndex < maxIndex - 1)
        {
            pageIndex++
            BtnMenu()
            movepage(pageIndex)
        }
        else if( e.deltaY < 0 && pageIndex > 0 && !isMax)
        {
            pageIndex--
            BtnMenu()
            movepage(pageIndex)
        }
        else if( e.deltaY > 0 && pageIndex < maxIndex )
        {
            isMax = 1
            BtnMenu()
            movepage(pageIndex)
            // console.log( $("footer").height() ,isMax)
        }
        else if( e.deltaY < 0 && pageIndex > 0 && isMax)
        {
            isMax = 0
            BtnMenu()
            movepage(pageIndex)
            // console.log( $("footer").height() ,isMax)
        }
        
        
    },{passive : false});
})

function movepage(params) {
    scroll.css({"transform":`translateY(calc( -${ isMax * $("footer").height()}px + -${params}00vh ))`})
    params > 0 ? $(".top").hide() : $(".top").show();
    color(params)
    // console.log(scroll)
    // console.log(pageIndex)
    // location.href = `#page${pageIndex+1}`
}

function BtnMenu() {
    
    for (let index = 0; index < btnMenu.length; index++) {
        
        btnMenu.eq(index).removeClass("on")
        if(index == pageIndex)
        {
            btnMenu.eq(index).addClass("on")
            if(isMax)
            {
                btnMenu.eq(index).removeClass("on")
            }
        }

    }
}

function color(params) {
    if( params == 0 || params == 3)
    {
        btnMenu.parent().removeClass("on")
        logo.attr("src", "./img/logo_white.png")
        menuColor.css("color","#eee")
    }
    else
    {
        btnMenu.parent().addClass("on")
        logo.attr("src", "./img/logo_black-1.png")
        menuColor.css("color","#333")
    }
}

//page옵저버 생성
const pageObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            // console.log(entry.intersectionRatio)
            if(entry.intersectionRatio > 0.99)
            {
                $(entry.target).parent().addClass("animate")
            }
            // 


            if(entry.intersectionRatio > 0.5)
            {
                newind = parseInt($(entry.target).parent().attr('id').replace(/[^0-9]/g,'')) - 1
                newind > 0 ? $(".top").hide() : $(".top").show();
                color(newind)
            }


            if(!screenOld)
            {
                pageIndex = newind
                color(pageIndex)
            }
            // console.log(pageIndex)

        }
        else
        {
            $(entry.target).parent().removeClass("animate")
        }
    });
}, {threshold : [0, 0.5, 1] })

const footerObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if(!entry.isIntersecting)
        {
            isMax = 0
            // console.log(entry.target)
        }
    })
})
// 메인 내비
$(function () {
    $('.head-sub-menu>li>a').hover(function () {
        $(this).css('color', '#676ba7');
    }, function () {
        $(this).css('color', 'black');
    });
});
$(function () {
    $('.head-sub-menu>li>ul>li>a').hover(function () {
        $(this).css('color', '#676ba7');
    }, function () {
        $(this).css('color', 'black');
    });
});
// 메인 내비 끝

