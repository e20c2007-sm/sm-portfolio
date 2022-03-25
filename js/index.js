let screen = {}

screen.width = window.innerWidth;
screen.height = window.innerHeight;
if(screen.width > 768){
    screen.view = "pc";
}else{
    screen.view = "pc";
}

$(function(){
    setTimeout(()=>{
        $("#welcome-text").fadeIn(100, ()=>{
            setTimeout(() => {
                $("#welcome-text").fadeOut(100, ()=>{
                    $("#welcome-text").remove();
                    $("#main-container").show().load(`./vp/${screen.view}/`);
                })
            }, 200);
        });
    }, 100);


    // PC
    $(document).on("animationend", "#corner-curcle", ()=>{
        $("#my-img").show();
    });

    $(document).on("mouseover", "#corner-curcle", ()=>{
        $("#my-img").addClass("hover");
    }).on("mouseout", "#corner-curcle", ()=>{
        $("#my-img.hover").removeClass("hover");
    });
});