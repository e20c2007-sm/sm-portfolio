const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
let myData = {
    "skills": ""
}

let prof = $("#prof-container").offset().top;
let skill = $("#skill-container").offset().top;
let work = $("#work-container").offset().top;
let detail = $("#detail-container").offset().top;

const contentsHeight = {
    "prof":  prof - (screenHeight * 0.05),
    "skill":  skill - (screenHeight * 0.05),
    "work":  work - (screenHeight * 0.05),
    "detail":  detail - (screenHeight * 0.05),
}

let screen;
if(screenWidth > 768){
    screen = "pc";
}else{
    screen = "sp";
}

getCsv("./data/skill.csv", "skills", "json");

$(function(){
    $("#page-thumb").load(`./ver/sp/`);
});