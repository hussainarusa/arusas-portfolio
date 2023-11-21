
const scriptURL = 'https://script.google.com/macros/s/AKfycbx5tL-PNbcbOJIGwKE2bL7eHOpfFJUYZMxHQd7V4T_RWrjByqGW0ftq-UO-TtCblJ9I/exec';
const form = document.forms['submit-to-google-sheet'];
const submittedMessage = document.getElementById('submitted-message');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response);
            // Show the submitted message on the DOM
            showSubmittedMessage();
        })
        .catch(error => {
            console.error('Error!', error.message);
            // Handle the error if needed
        });
});

function showSubmittedMessage() {
    // Display the submitted message element
    submittedMessage.style.display = 'block';
}
