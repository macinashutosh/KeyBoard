function row2(){
    var keysArray =[];
    keysArray.push({
        keys:['tab'],
        additionProperties: {"width":"100px"},
        textProperties:{"font-size":"12px !important"},
        code:"Tab"
    });
    keysArray.push({
        keys:['Q'],
        additionProperties: {},
        code:"KeyQ"
    });
    keysArray.push({
        keys:['W'],
        additionProperties: {},
        code:"KeyW"
    });
    keysArray.push({
        keys:['E'],
        additionProperties: {},
        code:"KeyE"
    });
    keysArray.push({
        keys:['R'],
        additionProperties: {},
        code:"KeyR"
    });
    keysArray.push({
        keys:['T'],
        additionProperties: {},
        code:"KeyT"
    });
    keysArray.push({
        keys:['Y'],
        additionProperties: {},
        code:"KeyY"
    });
    keysArray.push({
        keys:['U'],
        additionProperties: {},
        code:"KeyU"
    });
    keysArray.push({
        keys:['I'],
        additionProperties: {},
        code:"KeyI"
    });
    keysArray.push({
        keys:['O'],
        additionProperties: {},
        code:"KeyO"
    });
    keysArray.push({
        keys:['P'],
        additionProperties: {},
        code:"KeyP"
    });
    keysArray.push({
        keys:['{','['],
        additionProperties: {},
        code:"BracketLeft"
    });
    keysArray.push({
        keys:['}',']'],
        additionProperties: {},
        code:"BracketRight"
    });
    keysArray.push({
        keys:['|','\\'],
        additionProperties: {},
        code:"Backslash"
    });
    var keyboardRow = document.getElementsByClassName('keyboard-row')[1];
    addKeys(keyboardRow,keysArray);
}