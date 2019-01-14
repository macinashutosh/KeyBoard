"use-strict";
function returnKeyStruc(props){ //keys should be an array && additionalProperties should be a map
    var keys = props["keys"];
    var additionProperties = props["additionProperties"];
    var textProperties = props["textProperties"];
    var code = props["code"];
    if(keys == null){
        keys = []
    }
    if(additionProperties == null){
        additionProperties = {}
    }
    if(textProperties == null){
        textProperties = {}
    }
    if(code == null || code == "ArrowUp" || code == "ArrowDown"){
        code = "";
    }

    var htmlString = "<div class='keyboard-cube keyboard-key'";
    var htmlStyle = "style=";
    for(let key of Object.keys(additionProperties)){
        htmlStyle += key+':'+additionProperties[key]+";";
    }
    if(Object.keys(additionProperties).length <= 0){
        htmlStyle = "";
    }
    if(code!= ""){
        console.log(code);
        htmlString += htmlStyle +" id="+code+">";
    }else{
        htmlString += htmlStyle +">";
    }
   
    textStyle = 'style =';
    for(let key of Object.keys(textProperties)){
        textStyle += key+":"+textProperties[key]+";";
    }

    for(var i=0;i<keys.length;i++){
        if(keys[i] == "up" || keys[i] == "down"){
            if(keys[i] == "up"){
                htmlString+= "<div class='keyboard-text' style='border-bottom:1px solid white;width:100%;' id='ArrowUp'><h4 "+textStyle+">"+keys[i]+"</div>";
            }else{
                htmlString+= "<div class='keyboard-text' style='width:100%;' id='ArrowDown'><h4 "+textStyle+">"+keys[i]+"</div>";
            }
            
        }else{
            htmlString+= "<div class='keyboard-text'><h4 "+textStyle+">"+keys[i]+"</div>";
        }
        
    }
    htmlString+= "</div>";
    return htmlString;
}

function addKeys(keyboardRow,keysArray){
    var htmlString = "";
    for(var i=0;i<keysArray.length;i++){
        htmlString += returnKeyStruc(keysArray[i]);
    }
    keyboardRow.innerHTML += htmlString;
}


document.onreadystatechange = function(){
    console.log(this.readyState);
    if(this.readyState == "complete"){
        mainFunction();
    }
}

function mainFunction(){
    row1();
    row2();
    row3();
    row4();
    row5();
    document.onkeydown = function(event){
        // console.log(event.code);
        var ele = document.getElementById(event.code)
        ele.style.backgroundColor = "grey";
    }
    document.onkeyup = function(event){
        // console.log(event.code);
        var ele = document.getElementById(event.code)
        ele.style.backgroundColor = "transparent";
        ele.onmouseover = function(){this.style.backgroundColor = "grey";}
        ele.onmouseleave = function(){this.style.backgroundColor = "transparent"}
    }
}
 