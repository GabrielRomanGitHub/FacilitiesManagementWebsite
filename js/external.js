const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const fileUpload = document.getElementById('fileUpload');
const successModal = document.getElementById('successModal');
const applicationForm = document.getElementById('applicationForm');
const applicationBox = document.getElementById('applicationBox');
const applicationTitle = document.getElementById('applicationTitle');

applicationSubmitted();

// Tries to submit the application when the 'submit' button is clicked.
applicationForm.addEventListener('submit', (e) => {
    // As long as there are no errorMessages, the application form will be submitted successfully.
    let errorMessages = [];
    if (fName.value === '' || fName.value === null) {
        errorMessages.push('Please input your name.');
    }
    // If there's at least an error, the form will fail to submit.
    if (errorMessages.length > 0) {
        e.preventDefault();
    } else {
        // Saves a flag in local storage, programme will let the user know after the page has reloaded that their application was submitted successfully.
        localStorage.setItem('applicationSuccess', 'true');
    }
});

// Checks if the application has been submitted before, if it has, it will hide the form and display the success message.
function applicationSubmitted(){
    if (localStorage.getItem('applicationSuccess') === 'true') {
        applicationBox.style.display = 'none';
        applicationTitle.style.display = 'none';
        successModal.style.display = 'block';
        localStorage.removeItem('applicationSuccess');
    }
}