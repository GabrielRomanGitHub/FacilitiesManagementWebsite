const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const fileUpload = document.getElementById('fileUpload');
const successMessage = document.getElementById('successMessage');
const applicationForm = document.getElementById('applicationForm');
const applicationBox = document.getElementById('applicationBox');
const applicationTitle = document.getElementById('applicationTitle');
const fNameMissing = document.getElementById('fNameMissing');
const lNameMissing = document.getElementById('lNameMissing');
const emailMissing = document.getElementById('emailMissing');
const phoneMissing = document.getElementById('phoneMissing');
const fileUploadMissing = document.getElementById('fileUploadMissing');
const phoneNumMissing = document.getElementById('phoneNumMissing');

applicationSubmitted();
fName.addEventListener('input', function() {
    fNameMissing.style.display = 'none';
    fName.style.borderColor = '#ddd';
});
lName.addEventListener('input', function() {
    lNameMissing.style.display = 'none';
    lName.style.borderColor = '#ddd';
})
email.addEventListener('input', function() {
    emailMissing.style.display = 'none';
    email.style.borderColor = '#ddd';
})
phone.addEventListener('input', function() {
    phoneMissing.style.display = 'none';
    phone.style.borderColor = '#ddd';
})
phone.addEventListener('input', function() {
    phoneNumMissing.style.display = 'none';
    phone.style.borderColor = '#ddd';
})
fileUpload.addEventListener('input', function() {
    fileUploadMissing.style.display = 'none';
    fileUpload.style.borderColor = '#ddd';
})
// Tries to submit the application when the 'submit' button is clicked.
applicationForm.addEventListener('submit', (e) => {
    // As long as there are no errorMessages, the application form will be submitted successfully.
    let errorMessages = [];
    if (fName.value === '' || fName.value === null) {
        errorMessages.push('.');
        fNameMissing.style.display = 'block';
        fName.style.borderColor = 'rgba(219,37,11,255)';
    } 
    if (lName.value === '' || lName.value === null){
        errorMessages.push('.')
        lNameMissing.style.display = 'block';
        lName.style.borderColor = 'rgba(219,37,11,255)';
    } 
    if (email.value === '' || email.value === null){
        errorMessages.push('.');
        emailMissing.style.display = 'block';
        email.style.borderColor = 'rgba(219,37,11,255)';
    }
    if (phone.value === '' || phone.value === null){
        errorMessages.push('.');
        phoneMissing.style.display = 'block';
        phone.style.borderColor = 'rgba(219,37,11,255)';
    }
    if (isNaN(parseInt(phone.value, 10)) && phone.value !== '' || phone.value.toString() !== phone.value && phone.value !== '') {
        errorMessages.push('.');
        phoneNumMissing.style.display = 'block';
        phone.style.borderColor = 'rgba(219,37,11,255)';
      }
    if (fileUpload.value === '' || fileUpload.value === null){
        errorMessages.push('.');
        fileUploadMissing.style.display = 'block';
        fileUpload.style.borderColor = 'rgba(219,37,11,255)';
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
        successMessage.style.display = 'block';
        localStorage.removeItem('applicationSuccess');
    }
}