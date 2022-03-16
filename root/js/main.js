let myData = {
    "skills": "",
    "tools": [
        "ZOOM",
        "Slack",
        "Microsoft Teams",
        "Adobe Premiere Pro",
        "Adobe Photoshop",
        "Visual Studio Code",
        "GIMP",
        "GitHub",
        "Docker"
    ]
}

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
}

let screen;
if(screenWidth > 768){
    screen = "pc";
}else{
    screen = "sp";
}

getCsv("./data/skill.csv", "skills", "json");
// getCsv("./data/tool.csv", "tools", "");

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