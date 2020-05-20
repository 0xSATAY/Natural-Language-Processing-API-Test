import { checkInput } from './nameChecker';

const validUrl = require('valid-url');

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let input = document.getElementById('name').value;
    let formText = `https://api.aylien.com/news/stories?title="${input}"`;
    if (checkInput(input)) {
        console.log("::: Form Submitted :::")
        fetch('/sentiment', {
                method: "POST",
                credentials: "same-origin",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ formText })
            })
            .then(res => res.json())
            .then(function(res) {
                document.getElementById('results').innerHTML = res.message
            })
    }
}

export { handleSubmit }