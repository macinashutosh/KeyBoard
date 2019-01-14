function row5(){
    var keysArray =[];
    keysArray.push({
        keys:['fn'],
        additionProperties: {},
        textProperties:{"font-size":"12px !important"}
    });
    keysArray.push({
        keys:['control'],
        additionProperties: {},
        textProperties:{"font-size":"12px !important"},
        code:"ControlLeft"
    });
    keysArray.push({
        keys:['option'],
        additionProperties: {},
        textProperties:{"font-size":"12px !important"},
        code:"AltLeft"
    });
    keysArray.push({
        keys:['command'],
        additionProperties: {"width":"82px"},
        textProperties:{"font-size":"12px !important"},
        code:"MetaLeft"
    });
    keysArray.push({
        keys:[' '],
        additionProperties: {"width":"316px"},
        textProperties:{"font-size":"12px !important"},
        code:"Space"
    });
    keysArray.push({
        keys:['command'],
        additionProperties: {"width":"82px"},
        textProperties:{"font-size":"12px !important"},
        code:"MetaRight"
    });
    keysArray.push({
        keys:['option'],
        additionProperties: {},
        textProperties:{"font-size":"12px !important"},
        code:"AltRight"
    });
    keysArray.push({
        keys:['left'],
        additionProperties: {},
        textProperties:{"font-size":"12px !important"},
        code:"ArrowLeft"
    });
    keysArray.push({
        keys:['up','down'],
        additionProperties: {},
        textProperties:{"font-size":"12px !important"},
        code:"ArrowUp"
    });
    keysArray.push({
        keys:['right'],
        additionProperties: {},
        textProperties:{"font-size":"12px !important"},
        code:"ArrowRight"
    });
    
    var keyboardRow = document.getElementsByClassName('keyboard-row')[4];
    addKeys(keyboardRow,keysArray);
}