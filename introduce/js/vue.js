function changeText(opt){
    opt.target.animate({"opacity": 0}, 300, ()=>{
        let w = vuesText[opt.key].text;
        vuesText[opt.key].text = vuesText[opt.key].sub_text;
        vuesText[opt.key].sub_text = w;
        opt.target.animate({"opacity": 1}, 300);
    });
}

function changeThumbBtm(){
    if(pageActive){
        timers.change_text = {};
        timers.change_text.time = setTimeout(()=>{
            clearTimeout(timers.change_text.time);
            timers.change_text.time = "";
            changeText({"key": "thumb_btm", "target": $("#thumb-bottom")});
        }, 15000);
        timers.change_text.flag = true;
        return false;
    }else{
        setTimeout(()=>{
            changeThumbBtm();
        }, 500);
    }
}

let vuesText = {};
vuesText.thumb_btm = new Vue({
    el: "#thumb-bottom",
    data: {
        text: '"何となく"を形に',
        sub_text: "下側にスクロールできますよ"
    }
});