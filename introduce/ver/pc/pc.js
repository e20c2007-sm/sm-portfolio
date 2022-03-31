let mainCurcle = new Vue({
    el: "#main-curcle",
    data: {
        value: "HOVER"
    }
});


$(function(){
    $(document).on("mouseover", "#main-curcle", function(){
        let target = $(this);
        mainCurcle.value = "CLICK";
        target.addClass("bigger");
    }).on("mouseout", "#main-curcle", function(){
        let target = $(this);
        mainCurcle.value = "HOVER";
        target.removeClass("bigger");
    });
});