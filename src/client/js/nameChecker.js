const validUrl = require('valid-url');

function checkInput(inputText) {
    console.log("::: Running checkInput :::", inputText);
    if (!validUrl.isUri(inputText)) {
        alert("Please enter a valid link");
        return false;
    }
    return true;
}
export { checkInput }