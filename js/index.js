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
        $("#welcome-text").fadeIn(1000, ()=>{
            setTimeout(() => {
                $("#welcome-text").fadeOut(1000, ()=>{
                    $("#welcome-text").remove();
                    $("#main-container").show().load(`./vp/${screen.view}/`);
                })
            }, 2000);
        });
    }, 1000);
});