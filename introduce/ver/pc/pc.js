
let mainCurcle = new Vue({
    el: "#main-circle",
    data: {
        value: "HOVER"
    }
});

circlesRender();

$(function(){
    $(document).on("click", "#main-circle", function(){
        $("#site-bg").addClass("active");
        $("#pc-wrapper").animate({
            "height": 0
        }, 500, function(){
            $("#thumb-container").animate({"opacity": 1}, 1000, function(){
                $("#site-bg, #my-face-frames").animate({"opacity": 1}, 1000);
                $("#pc-wrapper").remove();
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
            })
        });
    });
    $(document).on("mouseover", "#main-circle", function(){
        let target = $(this);
        mainCurcle.value = "CLICK";
        target.addClass("bigger");
        $(".circles").addClass("move-center");
    }).on("mouseout", "#main-circle", function(){
        let target = $(this);
        mainCurcle.value = "HOVER";
        target.removeClass("bigger");
        $(".circles").removeClass("move-center");
    });

    let thumb = {
        count: 0,
        scale: 1,
        add: 0.1,
    }
    let scaleUpBg = function(e){
        if(thumb.count < 500){
            thumb.scale += thumb.add;
            $("#thumb-container").css({
                "transform": `scale(${thumb.scale})`
            });
            thumb.count += Math.abs(e.wheelDelta)
        }else{
            window.removeEventListener("mousewheel", scaleUpBg, { passive: false });
            $("#thumb-container").css({
                "transform": "scale(5)",
                "opacity": 0
            });
            setTimeout(()=>{
                $("#thumb-container").remove();
                pageActive = true;
                $("#main-contents").show();
                window.addEventListener("mousewheel", noScroll, { passive: false });
                window.addEventListener("touchmove", noScroll, { passive: false });
                $(".footers").removeClass("footers");
                setTimeout(()=>{
                    beAble();
                }, 1000);
            }, 800);
        };
    }
    window.addEventListener("mousewheel", scaleUpBg, { passive: false });

});