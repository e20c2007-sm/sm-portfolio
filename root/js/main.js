const screenWidth = window.innerWidth;

let screen;
if(screenWidth > 768){
    // screen = "pc";
    screen = "sp";
}else{
    screen = "sp";
}

$("#page-thumb").load(`./ver/${screen}/`);