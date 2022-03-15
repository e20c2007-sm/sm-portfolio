const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let myData = {
    "skills": ""
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
function resetHeight(){
    contentsHeight = {
        "prof":  prof - (screenHeight * 0.03),
        "skill":  skill - (screenHeight * 0.03),
        "work":  work - (screenHeight * 0.03),
        "detail":  detail - (screenHeight * 0.03),
    }
}

let screen;
if(screenWidth > 768){
    screen = "pc";
}else{
    screen = "sp";
}

getCsv("./data/skill.csv", "skills", "json");

$(function(){
    resetOffset();
    resetHeight();
    $("#page-thumb").load(`./ver/sp/`);
});