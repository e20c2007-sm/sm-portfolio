let screen = {}
let vues = {
    centerText: ""
}

screen.width = window.innerWidth;
screen.height = window.innerHeight;
if(screen.width > 768){
    screen.view = "pc";
}else{
    screen.view = "sp";
}

function tradeVal(index){
    let vals = vues.centerText.vals;
    let w;
    w = vues.centerText[index];
    vues.centerText[index] = vals[index];
    vals[index] = w;
    w = vues.centerText[`guide_${index}`];
    vues.centerText[`guide_${index}`] = vals[`guide_${index}`];
    vals[`guide_${index}`] = w;
}


$(function(){
    setTimeout(()=>{
        $("#welcome-text").fadeIn(500, ()=>{
            setTimeout(() => {
                $("#welcome-text").fadeOut(500, ()=>{
                    $("#welcome-text").remove();
                    $("#main-container").show().load(`./vp/main/`);
                })
            }, 2000);
        });
    }, 1000);

    $(document).on("click", "a", function(){
        let href = $(this).attr("href");
        if(href){
            elemShowCombo({
                elem: $(".white-bar"),
                cn: "show",
                index: 0,
                link: href,
                delay: 500
            });
        }
        return false;
    });

    // PC
    if(screen.view == "pc"){
        $(document).on("animationend", ".circle", function(){
            $(this).next().show();
        });
        
        $(document).on("mouseover", ".circle-container", function(){
            $(this).children().addClass("hover");
            let index = $(this).attr("data-link-posit");
            $(`.center-text.${index}`).addClass("hover");
            tradeVal(index);
        }).on("mouseout", ".circle-container", function(){
            $(this).children().removeClass("hover");
            let index = $(this).attr("data-link-posit");
            $(`.${index}`).removeClass("hover");
            tradeVal(index);
        });
    }
});