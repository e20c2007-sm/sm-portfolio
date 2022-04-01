let mainCurcle = new Vue({
    el: "#main-curcle",
    data: {
        value: "HOVER"
    }
});

circlesRender();

$(function(){
    $(document).on("click", "#main-curcle", function(){
        $("#pc-wrapper").animate({
            "height": 0
        }, 500, function(){
            $("#thumb-container").fadeIn(1000, function(){
                $("#pc-wrapper").remove();
                $("#main-contents").show();
                setTimeout(()=>{
                    beAble();
                }, 1000);
            })
        });
    });
    $(document).on("mouseover", "#main-curcle", function(){
        let target = $(this);
        mainCurcle.value = "CLICK";
        target.addClass("bigger");
        $(".circles").addClass("move-center");
    }).on("mouseout", "#main-curcle", function(){
        let target = $(this);
        mainCurcle.value = "HOVER";
        target.removeClass("bigger");
        $(".circles").removeClass("move-center");
    });
});