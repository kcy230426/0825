$(function(){
    var num = 0;
    $(".slidebox li").fadeOut(0)
    $(".slidebox li").eq(num).fadeIn(0)
    setInterval(function(){
        if(num<2){
            num++;
        }else{num=0;}
        $(".slidebox li").fadeOut('slow');
        $(".slidebox li").eq(num).fadeIn('slow')
    },3000)
    $("body").on("click","#threeTabs .nbox li", function(){
        $(".popup").addClass("on")
    })
    $("body").on("click",".popup button", function(){
        $(".popup").removeClass("on")
    })
})