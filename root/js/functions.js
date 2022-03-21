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
        let keys = ary[0].split(",");
        if(opt == "json"){
            let jsonAry = [];
            for(let i=1; i < ary.length; i++){
                let split = ary[i].split(",");
                let json = {}
                for(let i in keys){
                    json[keys[i].replace(/\r?/g,"")] = split[i];
                }
                jsonAry.push(json);
            }
            myData[key] = jsonAry;
        }else{
            myData[key] = ary;
        }

        contentsVal = {
            // title, num, list
            "prof": returnValJson("PROFILE", null, ["情報系の専門学生(20)", "寿司打1万円以上お得", "漢字検定準1級不合格"]),
            "skill": returnValJson("SKILL", null, [myData.skills, myData.tools]),
            "work": returnValJson("WORK", null, myData.works),
            "detail": returnValJson("DETAIL", null, myData.details)
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