function randomNum(num){
    let returnNum = Math.floor(Math.random() * num) + 1;
    return returnNum;
}

function getCsv(src, key, opt){
    let ary;
    let req = new XMLHttpRequest();

    req.open("get", src, true);
    req.send(null);

    req.onload = function(){
        ary = csvToArray(req.responseText);
        if(opt == "json"){
            let jsonAry = [];
            for(let i=1; i < ary.length; i++){
                let split = ary[i].split(",");
                let json = {
                    "lang": split[0],
                    "used": split[1]
                }
                jsonAry.push(json);
            }
            myData[key] = jsonAry;
        }else{
            myData[key] = ary;
        }
    }
    
}

function csvToArray(data){
    let array = data.split("\n");
    return array;
}

function preloadImgs(src, imgs){
    if(src && !(imgs)){
        $(`<img src="${src}" />`);
    }else if(imgs){
        imgs.forEach(e => {
            $(`<img src="${e}" />`);
        });
    }
}