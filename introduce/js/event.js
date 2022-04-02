const div = "<div></div>";

let wrapper;
let windowsFocus = true;
let scrollFlag = true;

let cvCount = 0;
let contentsView = {
    "prof":  true,
    "skill":  true,
    "work":  true,
    "detail":  true,
}

function addClassCombo(target, cn, delay, num, size){
    if(num < size){
        target.eq(num).addClass(cn);
        num++;
        setTimeout(()=>{
            addClassCombo(target, cn, delay, num, size);
        }, delay);
    }else{
        if(cn == "fade-in" || cn=="slide-in"){
            target.css("opacity", 1);
        }
        if(target.hasClass("lang-logo")){
            $(".skill-sort").addClass("fade-in");
        }
    }
}

$(function(){
    wrapper = $("#site-wrapper");

    let closeMenu = function(){
        $("#ham-menu").text("").text("三").removeClass("opened");
        $("#nav-container").animate({"height": "0", "opacity": 0}, 300, "linear")
    }

    $(window).focus(()=>{
        windowsFocus = true;
    }).blur(()=>{
        windowsFocus = false;
    });

    $(document).on("click", ".nav-item", function(){
        let value = $(this).attr("data-value");
        $('html, body').animate({scrollTop: contentTop[value]});

        if(screen == "sp"){
            closeMenu();
        }
    });

    $(document).on("click", "#scroll-to-main", ()=>{
        let main = $("#main-contents").offset().top;
        $('html, body').animate({scrollTop: main});
    });

    $(document).on("mouseover", ".nav-item:not(.just-hover)", function(){
        let targetBg = $(this).children(".nav-bg");
        let targetSub = $(this).children(".nav-subtitle");
        $(this).addClass("just-hover");
        targetBg.animate({
            "width": "25vw",
            "padding": "0 1.5rem"
        }, 300);
        targetSub.animate({
            "width": "25vw",
            "padding": "0 1.5rem"
        }, 300);
    }).on("mouseout", ".just-hover", function(){
        let $this = $(this);
        let targetSub = $(this).children(".nav-subtitle");
        targetSub.animate({
            "width": "0",
            "padding": "0"
        }, 100, "linear");
        let targetBg = $(this).children(".nav-bg");
        targetBg.animate({
            "width": "0",
            "padding": "0"
        }, 100, "linear", function(){
            $this.removeClass("just-hover");
        });
    });

    $(document).on("mouseover", ".skill-sort", ()=>{
        if(screen == "pc"){
            $(".none-check").removeClass().addClass("this-checked");
        }
    }).on("mouseout", ".skill-sort", function(){
        if(!($(this).hasClass("checked"))){
            $(".this-checked").removeClass().addClass("none-check");
        }
    }).on("click", ".skill-sort", function(){
        if(!($(this).hasClass("checked"))){
            $(this).addClass("checked");
            $(".skill-cloud .false").fadeOut(300);
        }
        if(screen == "sp"){
            $(".none-check").removeClass().addClass("this-checked")
        }
    }).on("click", ".skill-sort.checked", function(){
        $(this).removeClass("checked");
        $(".this-checked").removeClass().addClass("none-check");
        $(".skill-cloud .false").fadeIn(300);
    });

    $(document).on("click", "#ham-menu", function(){
        $(this).text("").text("×").addClass("opened");
        $("#nav-container").animate({"height": "10vh", "opacity": 1}, 300, "linear")
    }).on("click", "#ham-menu.opened", function(){
        closeMenu();
    });

    $(document).on("click", "#arrow-container", () => {
        let main = $("#main-contents").offset().top;
        $('html, body').animate({scrollTop: contentTop["prof"]}, 1000);
    });

    $(window).scroll(() => {
        let wh = window.innerHeight;
        let st = $(window).scrollTop();
        if(st >= wh){
            $("header").css("top", "0");
        }else if(!($("#ham-menu").hasClass("opened"))){
            $("header").css("top", "-10vh")
        }

        let bottom = pageHeight - wh - 460;
        if(bottom <= st && scrollFlag && cvCount >= 4){
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

        let padding = screenWidth * 0.1;
        let ary = [
            "prof",
            "skill",
            "work",
            "detail"
        ];
        ary.forEach(e => {
            if(contentsHeight[e]-padding <= st && cvCount < 4){
                if(contentsView[e]){
                    let value = contentsVal[e];
                    ReactDOM.render(
                        <Container
                            opt={e}
                            title={value.title}
                            num={value.num}
                            list={value.list}
                        />,
                        $(`#${e}-container`)[0],
                        ()=>{
                            $(`*[name=${e}]`).show();
                        }
                    );
                    contentsView[e] = false;
                    cvCount++;
                    if(cvCount >= 4){
                        $("footer, #detail-guide").animate({"opacity": "1"}, 500, "linear");
                    }
                }
            }
        });
    });
    
    $(document).on("animationend", ".fixed-rb-in", function(){
        $(this).removeClass("fixed-rb-in");
    }).on("animationend", "#prof-me", ()=>{
        addClassCombo($(".prof-li"), "slide-in", 500, 0, $(".prof-li").length);
        addClassCombo($(".sentence-line"), "show-width", 1000, 0, $(".sentence-line").length);
    }).on("animationend", ".skill-cloud", ()=>{
        setTimeout(()=>{
            addClassCombo($(".lang-logo"), "flip-in", 200, 0, $(".lang-logo").length);
        }, 500);
    }).on("animationend", ".lang-logo", function(){
        $(this).next().addClass("fade-in");
    }).on("animationend", "#work-memo", ()=>{
        setTimeout(()=>{
            addClassCombo($(".work-item"), "float-in", 1000, 0, $(".work-item").length);
        }, 1000);
    }).on("animationend", "#detail-container", ()=>{
        setTimeout(()=>{
            addClassCombo($(".detail-item"), "slide-in", 500, 0, $(".detail-item").length);
        }, 500);
    });
});