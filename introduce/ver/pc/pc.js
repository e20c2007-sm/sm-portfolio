let mainCurcle = new Vue({
    el: "#main-curcle",
    data: {
        value: "HOVER"
    }
});

circlesRender();

$(function(){
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