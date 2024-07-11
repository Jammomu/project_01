$(function () {
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
})