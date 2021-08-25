// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    var name = "Jane"
    return "Hello " + name;
}


function isFive() {
    var number = prompt("Please input something");
    return number == 5;
}

function isEven() {
    var even = input % 2;
    if (input == "boolean") {
        return false;
    } else {
        return !!(even = 0);
    }

}

function isVowel(input) {
    input = input.toUpperCase();
    if( input == "A") {
        return true;
    } else if (input == "E"){
        return true;
    } else if (input == "I"){
        return true;
    } else if (input == "O"){
        return true;
    } else if (input == "U"){
        return true;
    } else {
        return false;
    }
}