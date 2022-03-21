let myData = {
    "skills": "",
    "tools": "",
    "works": "",
    "details": ""
}

let pageHeight;
let screenWidth;
let screenHeight;
function screenResize(){
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
}
screenResize();

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
function resetHeight(){
    contentsHeight = {
        "prof":  prof - (screenHeight * 0.03),
        "skill":  skill - (screenHeight * 0.03),
        "work":  work - (screenHeight * 0.03),
        "detail":  detail - (screenHeight * 0.03),
    }
    pageHeight = document.body.clientHeight
}

let screen;
if(screenWidth > 768){
    screen = "pc";
}else{
    screen = "sp";
}

function returnValJson(title, num, list){
    return {"title": title, "num": num, "list": list}
}
let contentsVal;

getCsv("./data/skill.csv", "skills", "json");
getCsv("./data/tool.csv", "tools", "");
getCsv("./data/work.csv", "works", "json");
getCsv("./data/detail.csv", "details", "json");

$(function(){
    resetOffset();
    resetHeight();
    setInterval(()=>{
        screenResize();
        resetOffset();
        resetHeight();
    }, 1000);
    $("#page-thumb").load(`./ver/sp/`);
});