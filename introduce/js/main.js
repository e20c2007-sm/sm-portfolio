const div = "<div></div>";

let pageActive = false;
let myData = {
    "skills": "",
    "tools": "",
    "works": "",
    "details": ""
}
let timers = {};

let pageHeight;
let screenWidth;
let screenHeight;
function screenResize(){
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
}
screenResize();
let screen;
if(screenWidth > 768){
    screen = "pc";
}else{
    screen = "sp";
}

let prof;
let skill;
let work;
let detail;
function resetOffset(){
    prof = $("#prof-container").offset().top;
    skill = $("#skill-container").offset().top;
    work = $("#work-container").offset().top;
    detail = $("#detail-container").offset().top;
}
let contentsHeight;
let contentTop;
let multi;
switch(screen){
    case "pc":
        multi = 0.1;
        break;

    case "sp":
        multi = 0.5;
        break;
}
function resetHeight(){
    contentTop = {
        "prof":  prof - (screenHeight * 0.05),
        "skill":  skill - (screenHeight * 0.05),
        "work":  work - (screenHeight * 0.05),
        "detail":  detail - (screenHeight * 0.05)
    }
    contentsHeight = {
        "prof":  prof - (screenHeight * multi),
        "skill":  skill - (screenHeight * multi),
        "work":  work - (screenHeight * multi),
        "detail":  detail - (screenHeight * multi)
    }
    pageHeight = document.body.clientHeight
}

function returnValJson(title, num, list){
    return {"title": title, "num": num, "list": list}
}
let contentsVal;

getCsv("./data/skill.csv", "skills", "json");
getCsv("./data/tool.csv", "tools", "");
getCsv("./data/work.csv", "works", "json");
getCsv("./data/detail.csv", "details", "json");

function noScroll(e){
    e.preventDefault();
}
function beAble(){
    window.removeEventListener("mousewheel", noScroll, { passive: false });
    window.removeEventListener("touchmove", noScroll, { passive: false });
}
function startPage(){
    $("#my-face-img").addClass("stop");
    $("#main-contents").show();
    $(".footers").removeClass("footers");
    $("#page-thumb-bg").animate({"opacity": 1}, 2000);
    $("#thumb-bottom .well-said").fadeIn(2000, ()=>{
        beAble();
    });
}

$(function(){
    resetOffset();
    resetHeight();
    setInterval(()=>{
        screenResize();
        resetOffset();
        resetHeight();
    }, 1000);
    $("#page-gate").load(`./ver/pc/`);
});