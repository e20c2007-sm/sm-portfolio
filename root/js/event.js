let screenHeight = window.innerHeight;
const pageHeight = document.body.clientHeight;
const wrapper =$("#site-wrapper");
const div = "<div></div>";
let scrollFlag = true;

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

    $(document).on("click", "#arrow-container", () => {
        let margin = window.innerHeight * 0.14;
        let main = $("#main-contents").offset().top;
        $('html, body').animate({scrollTop: main - margin});
    });

    $(window).scroll(() => {
        let wh = window.innerHeight;
        let st = $(window).scrollTop();
        if(st >= wh){
            $("header").css("top", "0");
        }else{
            $("header").css("top", "-10vh")
        }

        let bottom = pageHeight - wh - 460;
        if(bottom <= st && scrollFlag){
            scrollFlag = false;
            let elem = $(div).addClass("fixed-rb fixed-rb-in");
            wrapper.append(elem);
            ReactDOM.render(
                <Arrow />,
                elem[0]
            );
        }else if(bottom >= st && !(scrollFlag)){
            $(".fixed-rb").addClass("fixed-rb-out");
            setTimeout(()=>{
                scrollFlag = true;
                $(".fixed-rb").remove();
            }, 200)
        }
    });
    
    $(document).on("animationend", ".fixed-rb-in", function(){
        $(this).removeClass("fixed-rb-in");
    });
});