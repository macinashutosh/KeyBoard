function row1(){
    var keysArray =[];
    keysArray.push({
        keys:['~','`'],
        additionProperties: {},
        code:"Backquote"
    });
    keysArray.push({
        keys:['!',1],
        additionProperties: {},
        code:"Digit1"
    });
    keysArray.push({
        keys:['@',2],
        additionProperties: {},
        code:"Digit2"
    });
    keysArray.push({
        keys:['#',3],
        additionProperties: {},
        code:"Digit3"
    });
    keysArray.push({
        keys:['$',4],
        additionProperties: {},
        code:"Digit4"
    });
    keysArray.push({
        keys:['%',5],
        additionProperties: {},
        code:"Digit5"
    });
    keysArray.push({
        keys:['^',6],
        additionProperties: {},
        code:"Digit6"
    });
    keysArray.push({
        keys:['&',7],
        additionProperties: {},
        code:"Digit7"
    });
    keysArray.push({
        keys:['*',8],
        additionProperties: {},
        code:"Digit8"
    });
    keysArray.push({
        keys:['(',9],
        additionProperties: {},
        code:"Digit9"
    });
    keysArray.push({
        keys:[')',0],
        additionProperties: {},
        code:"Digit0"
    });
    keysArray.push({
        keys:['_','-'],
        additionProperties: {},
        code:"Minus"
    });
    keysArray.push({
        keys:['+','='],
        additionProperties: {},
        code:"Equal"
    });
    keysArray.push({
        keys:['delete'],
        additionProperties: {"width":"100px"},
        textProperties:{"font-size":"12px !important"},
        code:"Backspace"
    });
    var keyboardRow = document.getElementsByClassName('keyboard-row')[0];
    addKeys(keyboardRow,keysArray);
}