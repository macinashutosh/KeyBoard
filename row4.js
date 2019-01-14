function row4(){
    var keysArray =[];
    keysArray.push({
        keys:['shift'],
        additionProperties: {"width":"144px"},
        textProperties:{"font-size":"12px !important"},
        code:"ShiftLeft"
    });
    keysArray.push({
        keys:['Z'],
        additionProperties: {},
        code:"KeyZ"
    });
    keysArray.push({
        keys:['X'],
        additionProperties: {},
        code:"KeyX"
    });
    keysArray.push({
        keys:['C'],
        additionProperties: {},
        code:"KeyC"
    });
    keysArray.push({
        keys:['V'],
        additionProperties: {},
        code:"KeyV"
    });
    keysArray.push({
        keys:['B'],
        additionProperties: {},
        code:"KeyB"
    });
    keysArray.push({
        keys:['N'],
        additionProperties: {},
        code:"KeyN"
    });
    keysArray.push({
        keys:['M'],
        additionProperties: {},
        code:"KeyM"
    });
    keysArray.push({
        keys:['<',','],
        additionProperties: {},
        code:"Comma"
    });
    keysArray.push({
        keys:['>','.'],
        additionProperties: {},
        code:"Period"
    });
    keysArray.push({
        keys:['?',"/"],
        additionProperties: {},
        code:"Slash"
    });
    keysArray.push({
        keys:['shift'],
        additionProperties: {"width":"144px"},
        textProperties:{"font-size":"12px !important"},
        code:"ShiftRight"
    });
    
    var keyboardRow = document.getElementsByClassName('keyboard-row')[3];
    addKeys(keyboardRow,keysArray);
}