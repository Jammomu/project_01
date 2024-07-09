$(document).ready(function () {
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
})