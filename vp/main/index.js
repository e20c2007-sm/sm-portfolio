setTimeout(()=>{
    $(".center-text").fadeIn(300);
}, 500);

if(screen.view == "pc"){
    setTimeout(()=>{
        $("div.no-event").removeClass();
    }, 3500);
}