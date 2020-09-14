$(".eyeBtn").click(() => {

    $("body").toggleClass("eyeCare")
    $("main").toggleClass("eyeCare")
    $(".notice").toggleClass("eyeCare")
    $(".backTop").toggleClass("eyeCare")
    $(".eyeBtn").text() == "切换暗色" ? $(".eyeBtn").text("切换护眼色") : $(".eyeBtn").text("切换暗色")
})
$(".jqBtn").click(function () {

    $(".jqBtn").text() == "不看Jquery" ? $(".jqBtn").text("还是看吧") : $(".jqBtn").text("不看Jquery")
    $(".jquery").slideToggle("slow");
})

$(".bsBtn").click(function () {
    $(".bsBtn").text() == "不看bootstrap" ? $(".bsBtn").text("还是看吧") : $(".bsBtn").text("不看bootstrap")
    $(".bootstrap").slideToggle("slow");
})

$(".backTop").click(function () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})