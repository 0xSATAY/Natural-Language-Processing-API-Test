import { checkInput } from './nameChecker';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    if (checkInput(formText)) {
        console.log("::: Form Submitted :::")
        fetch('/sentiment', {
                method: "POST",
                credentials: "same-origin",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ formText })
            })
            .then(res => res.json())
            .then(function(res) {
                const data = res.data;
                document.getElementById('polarity').innerHTML = data.polarity;
                document.getElementById('polarity_confidence').innerHTML = data.polarity_confidence.toFixed(2);
                document.getElementById('subjectivity').innerHTML = data.subjectivity;
                document.getElementById('subjectivity_confidence').innerHTML = data.subjectivity_confidence;
                document.getElementById('text').innerHTML = data.text;
            })
    }
}

export { handleSubmit }