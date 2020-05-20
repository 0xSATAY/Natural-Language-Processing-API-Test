function checkInput(inputText) {
    console.log("::: Running checkInput :::", inputText);
    if (isEmptyOrSpaces(inputText)) {
        alert("Please enter a valid input");
        return false;
    }
    return true;
}

function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}

export { checkInput }