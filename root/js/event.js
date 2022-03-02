let screenHeight = window.innerHeight;

$(function(){
    $(document).on("mouseover", ".nav-item:not(.just-hover)", function(){
        let target = $(this).children(".nav-bg");
        $(this).addClass("just-hover");
        target.animate({
            "width": "8rem",
            "padding": "0 1.5rem"
        }, 300);
    }).on("mouseout", ".just-hover", function(){
        let $this = $(this);
        let target = $(this).children(".nav-bg");
        target.animate({
            "width": "0",
            "padding": "0"
        }, 100, "linear", function(){
            $this.removeClass("just-hover");
        });
    });

    $(window).scroll(() => {
        let wh = window.innerHeight;
        let st = $(window).scrollTop();
        if(st >= wh){
            $("header").css("top", "0");
        }else{
            $("header").css("top", "-10vh")
        }

        ReactDOM.render(
            <Arrow />,
            $("#site-wrapper")[0]
        )
    });
});