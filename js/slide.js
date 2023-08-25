$(function(){
    setInterval(function(){
        $("#slide .slidebox").animate({marginLeft:-1200},400,function(){
            $(this).find("li").eq(0).appendTo($(this));
            $(this).css("margin-left",0);
        })
    },3000)
    $("body").on("click","#threeTabs .notice li",function(){
        $(".popup").addClass("on")
    })
    $("body").on("click",".popup button",function(){
        $(".popup").removeClass("on")
    })
})