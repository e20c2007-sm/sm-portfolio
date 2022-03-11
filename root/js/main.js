const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let prof = $("#prof-container").offset().top;
let skill = $("#skill-container").offset().top;
let achive = $("#achive-container").offset().top;
let detail = $("#detail-container").offset().top;

const contentsHeight = {
    "prof":  prof - (screenHeight * 0.099),
    "skill":  skill - (screenHeight * 0.1),
    "achive":  achive - (screenHeight * 0.1),
    "detail":  detail - (screenHeight * 0.1),
}

let screen;
if(screenWidth > 768){
    // screen = "pc";
    screen = "sp";
}else{
    screen = "sp";
}

$("#page-thumb").load(`./ver/${screen}/`);

$(function(){

});