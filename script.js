document.getElementById("display").value = "";
operator = "";
digit = "";
digit2 = "";
solved = false;
point = false;

function numButton(num) {
    if (operator !== "") {
        if (digit2 === "") {
            document.getElementById("display").value = "";
            point = false;
        }
        document.getElementById("display").value = document.getElementById("display").value + num;
        digit2 = document.getElementById("display").value;
    } else {
        if (solved === true) {
            document.getElementById("display").value = "";
            solved = false;
        }
        document.getElementById("display").value = document.getElementById("display").value + num;
    }
}

function operation(opt) {

    if (operator !== "" && digit2 === "") {
        operator = opt;
        var x = document.getElementById("display").value.length;
        document.getElementById("display").value = document.getElementById("display").value.slice(0, x - 1);
        document.getElementById("display").value = document.getElementById("display").value + opt;
    } else if (operator !== "" && digit2 !== "") {
        compute();
    } else {
        digit = document.getElementById("display").value;
        document.getElementById("display").value = document.getElementById("display").value + opt;
        operator = opt;
    }
    point = false;
}

function compute() {
    digit = parseFloat(digit);
    digit2 = parseFloat(digit2);
    switch (operator) {
    case '+':
        document.getElementById("display").value = digit + digit2;
        break;
    case '-':
        document.getElementById("display").value = digit - digit2;
        break;
    case '*':
        document.getElementById("display").value = digit * digit2;
        break;
    case '/':
        document.getElementById("display").value = digit / digit2;
        break;
    default:
        document.getElementById("display").value;
    }
    solved = true;
    point = false;
    operator = "";
    digit = "";
    digit2 = "";
}

function del() {
    if (solved === true) {
        document.getElementById("display").value = "";
        reset();
    }
    var x = document.getElementById("display").value.length;
    var y = document.getElementById("display").value.slice(x - 1, x);
    document.getElementById("display").value = document.getElementById("display").value.slice(0, x - 1);
    if (y === "+" || y === "-" || y === "*" || y === "/") {
        operator = "";
    } else if (y === ".") {
        if (digit2 !== "") {
            digit2 = digit2.slice(0, x - 1);
        }
        point = false;
    } else if (digit2 !== "") {
        digit2 = digit2.slice(0, x - 1);
    }
}

function reset() {
    document.getElementById("display").value = "";
    operator = "";
    digit = "";
    digit2 = "";
    solved = false;
    point = false;
}

function decimal() {
    if (point === false) {
        if (operator !== "") {
            if (digit2 === "") {
                document.getElementById("display").value = "";
            }
            digit2 = digit2 + ".";
            document.getElementById("display").value = document.getElementById("display").value + ".";
            point = true;
        } else {
            document.getElementById("display").value = document.getElementById("display").value + ".";
            point = true;
        }
    }

}









/*
 *Author: Xan Gutierrez
 *Date: 15-07-16
 */