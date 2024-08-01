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
const closeButton = document.getElementById('closeButton');


applicationSubmitted();

// If the user starts writing something in the required areas, the error will disappear.
fName.addEventListener('input', function() {
    fNameMissing.style.opacity = '0%';
    fName.style.borderColor = '#ddd';
});
lName.addEventListener('input', function() {
    lNameMissing.style.opacity = '0%';
    lName.style.borderColor = '#ddd';
})
email.addEventListener('input', function() {
    emailMissing.style.opacity = '0%';
    email.style.borderColor = '#ddd';
})
phone.addEventListener('input', function() {
    phoneMissing.style.opacity = '0%';
    phone.style.borderColor = '#ddd';
})
phone.addEventListener('input', function() {
    phoneNumMissing.style.opacity = '0%';
    phone.style.borderColor = '#ddd';
})
fileUpload.addEventListener('input', function() {
    fileUploadMissing.style.opacity = '0%';
    fileUpload.style.borderColor = '#ddd';
})
// Tries to submit the application when the 'submit' button is clicked.
applicationForm.addEventListener('submit', (e) => {
    // As long as there are no errorMessages, the application form will be submitted successfully.
    let errorMessages = [];
    if (fName.value === '' || fName.value === null) {
        errorMessages.push('.');
        fNameMissing.style.opacity = '100%';
        fName.style.borderColor = 'rgba(219,37,11,255)';
    } 
    if (lName.value === '' || lName.value === null){
        errorMessages.push('.')
        lNameMissing.style.opacity = '100%';
        lName.style.borderColor = 'rgba(219,37,11,255)';
    } 
    if (email.value === '' || email.value === null){
        errorMessages.push('.');
        emailMissing.style.opacity = '100%';
        email.style.borderColor = 'rgba(219,37,11,255)';
    }
    if (phone.value === '' || phone.value === null){
        errorMessages.push('.');
        phoneMissing.style.opacity = '100%';
        phone.style.borderColor = 'rgba(219,37,11,255)';
    }
    // Parses the phone number to a base 10 number. If the result is converted to a string and is not equal to the input of the user and is not empty, it will push an error.
    let parsedPhone = parseInt(phone.value, 10);
    if (parsedPhone.toString() !== phone.value && phone.value !=='') {
        errorMessages.push('.');
        phoneNumMissing.style.opacity = '100%';
        phone.style.borderColor = 'rgba(219,37,11,255)';
      }
    let availabilitySelected = document.querySelector('input[name="availability"]:checked');
    if (!availabilitySelected) {
        errorMessages.push('.');
        availabilityMissing.style.opacity = '100%';
    }
    // If there is an input in one of the radio buttons, it will get rid of the error message displayed to the user.
    document.querySelectorAll('input[name="availability"]').forEach(function(radio) {
        radio.addEventListener('input', function() {
            availabilityMissing.style.opacity = '0%';
        });
    });
    let availableDaysSelected = document.querySelector('input[name="availableDays"]:checked');
    if (!availableDaysSelected) {
        errorMessages.push('.');
        availableDaysMissing.style.opacity = '100%';
    }
    document.querySelectorAll('input[name="availableDays"]').forEach(function(checkbox) {
        checkbox.addEventListener('input', function() {
            availableDaysMissing.style.opacity = '0%';
        });
    })
    if (fileUpload.value === '' || fileUpload.value === null){
        errorMessages.push('.');
        fileUploadMissing.style.opacity = '100%';
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
