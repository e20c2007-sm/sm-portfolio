function randomNum(num){
    let returnNum = Math.floor(Math.random() * num) + 1;
    return returnNum;
}

function getCsv(src){
    let data;
    let req = new XMLHttpRequest();

    req.open("get", src, true);
    req.send(null);

    req.onload = function(){
        data = csvToArray(req.responseText);
        return data;
    }
    
}

function csvToArray(data){
    let array = data.split("\n");
    return array;
}