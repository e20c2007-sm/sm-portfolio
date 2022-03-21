
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
let multi;
switch(screen){
    case "pc":
        multi = 0.05;
        break;

    case "sp":
        multi = 0.5;
        break;
}
function resetHeight(){
    contentsHeight = {
        "prof":  prof - (screenHeight * multi),
        "skill":  skill - (screenHeight * multi),
        "work":  work - (screenHeight * multi),
        "detail":  detail - (screenHeight * multi),
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