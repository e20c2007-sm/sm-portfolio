const div = "<div></div>";
const pageHeight = document.body.clientHeight;
let wrapper;
let windowsFocus = true;
let scrollFlag = true;

let contentsView = {
    "prof":  true,
    "skill":  true,
    "achive":  true,
    "detail":  true,
}

function returnValJson(title, num, list){
    return {"title": title, "num": num, "list": list};
}
let contentsVal = {
    "prof": returnValJson("PROFILE", null, ["情報系の専門学生(20)", "寿司打1万円以上お得", "漢字検定準1級不合格"]),
    "skill": returnValJson("SKILL", null, ""),
    "achive": returnValJson("ACHIEVEMENT", null, ""),
    "detail": returnValJson("DETAIL", null, "")
}

$(function(){
    wrapper = $("#site-wrapper");
    getCsv("./data/prof.csv")

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
        $('html, body').animate({scrollTop: contentsHeight[value]});

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
            "width": "8rem",
            "padding": "0 1.5rem"
        }, 300);
        targetSub.animate({
            "width": "8rem",
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

    $(document).on("click", "#ham-menu", function(){
        $(this).text("").text("×").addClass("opened");
        $("#nav-container").animate({"height": "10vh", "opacity": 1}, 300, "linear")
    }).on("click", "#ham-menu.opened", function(){
        closeMenu();
    });

    $(document).on("click", "#arrow-container", () => {
        let main = $("#main-contents").offset().top;
        $('html, body').animate({scrollTop: main});
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

        let padding = screenHeight * 0.4;
        let ary = [
            "prof",
            "skill",
            "achive",
            "detail"
        ];
        ary.forEach(e => {
            if(contentsHeight[e]-padding <= st){
                if(contentsView[e]){
                    let value = contentsVal[e];
                    ReactDOM.render(
                        <Container
                            opt={e}
                            title={value.title}
                            num={value.num}
                            list={value.list}
                        />,
                        $(`#${e}-container`)[0]
                    );
                    contentsView[e] = false;
                }
            }
        });
    });
    
    $(document).on("animationend", ".fixed-rb-in", function(){
        $(this).removeClass("fixed-rb-in");
    });
});