function row3(){
    var keysArray =[];
    keysArray.push({
        keys:['capslock'],
        additionProperties: {"width":"112px"},
        textProperties:{"font-size":"12px !important"},
        code:"CapsLock"
    });
    keysArray.push({
        keys:['A'],
        additionProperties: {},
        code:"KeyA"
    });
    keysArray.push({
        keys:['S'],
        additionProperties: {},
        code:"KeyS"
    });
    keysArray.push({
        keys:['D'],
        additionProperties: {},
        code:"KeyD"
    });
    keysArray.push({
        keys:['F'],
        additionProperties: {},
        code:"KeyF"
    });
    keysArray.push({
        keys:['G'],
        additionProperties: {},
        code:"KeyG"
    });
    keysArray.push({
        keys:['H'],
        additionProperties: {},
        code:"KeyH"
    });
    keysArray.push({
        keys:['J'],
        additionProperties: {},
        code:"KeyJ"
    });
    keysArray.push({
        keys:['K'],
        additionProperties: {},
        code:"KeyK"
    });
    keysArray.push({
        keys:['L'],
        additionProperties: {},
        code:"KeyL"
    });
    keysArray.push({
        keys:[':',";"],
        additionProperties: {},
        code:"Semicolon"
    });
    keysArray.push({
        keys:['\"','\''],
        additionProperties: {},
        code:"Quote"
    });
    keysArray.push({
        keys:['return'],
        additionProperties: {"width":"112px"},
        textProperties:{"font-size":"12px !important"},
        code:"Enter"
    });
    
    var keyboardRow = document.getElementsByClassName('keyboard-row')[2];
    addKeys(keyboardRow,keysArray);
}