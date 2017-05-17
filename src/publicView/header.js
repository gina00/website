$(function(){
    console.log($(".navbar-nav"));
    $(".navbar-nav li").click(function(){
        console.log("aaa");
            $(this).addClass("active").siblings().removeClass("active");
        })
})
        // jQuery需要放在这里面生效
        // $(".navbar-nav li").click(function(){
        //     $(this).addClass("active").siblings().removeClass("active");
        // })
        
