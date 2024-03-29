let thumb = {
    count: 0,
    scale: 1,
    add: 0.1,
}
function scaleOutBg(){
    window.removeEventListener("wheel", scaleUpBg, { passive: false });
    window.removeEventListener("touchend", scaleUpBg, { passive: false });
    $("#thumb-container").css({
        "transform": "scale(5)",
        "opacity": 0
    });
    setTimeout(()=>{
        $("#thumb-container").remove();
        pageActive = true;
        window.addEventListener("wheel", noScroll, { passive: false });
        window.addEventListener("touchmove", noScroll, { passive: false });
        startPage();
    }, 800);
}
let scaleUpBg = function(e){
    if(thumb.count < 500){
        thumb.scale += thumb.add;
        $("#thumb-container").css({
            "transform": `scale(${thumb.scale})`
        });
        thumb.count += Math.abs(e.wheelDelta)
    }else{
        scaleOutBg();
    };
}

let bar = {}
bar.num = 0;
function barClose(){
    if(bar.num < bar.size){
        $(".white-bar").eq(bar.num).removeClass("show");
        bar.num++;
        setTimeout(()=>{
            barClose();
        }, 500);
    }else{
        startThumb();
        $("#white-curtain").remove();
    }
}

function startThumb(){
    $("#site-bg").addClass("active");
    setTimeout(()=>{
        $("#site-bg, #my-face-frames").animate({"opacity": 1}, 1000);
        $( "#thumb-bg" ).mgGlitch({
            // set 'true' to stop the plugin
            destroy : false, 
            // set 'false' to stop glitching
            glitch: true, 
            // set 'false' to stop scaling
            scale: true, 
            // set 'false' to stop glitch blending
            blend : true, 
            // select blend mode type
            blendModeType : 'hue',
            // set min time for glitch 1 elem
            glitch1TimeMin : 200, 
            // set max time for glitch 1 elem
            glitch1TimeMax : 400,
            // set min time for glitch 2 elem
            glitch2TimeMin : 10, 
            // set max time for glitch 2 elem
            glitch2TimeMax : 100, 
        });
        window.addEventListener("wheel", scaleUpBg, { passive: false });
        window.addEventListener("touchend", scaleOutBg, { passive: false });
    }, 500);
}

$(function(){
    bar.size = $(".white-bar").length;
    setTimeout(()=>{
        $("#thumb-container").animate({"opacity": 1}, 100);
        barClose();
    }, 500);
});