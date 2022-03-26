setTimeout(()=>{
    $(".center-text").fadeIn(300);
}, 500);

let vpDelay;
if(screen.view == "pc"){
    vpDelay = 3500;
}else{
    vpDelay = 1500;
}
setTimeout(()=>{
    $("div.no-event").removeClass();
}, vpDelay);
