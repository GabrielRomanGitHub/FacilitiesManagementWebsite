// Shows cookies if the user has not already clicked in one of the buttons in this session.
if (sessionStorage.getItem('cookies') === 'true') {
    cookiesModal.style.display = "none";
}
function acceptCookies() {
    cookiesModal.style.display = "none";
    sessionStorage.setItem('cookies', 'true');
}
cookiesButton1.onclick = acceptCookies;
cookiesButton2.onclick = acceptCookies;
// Shows and hides a modal when images in the index.html are clicked.
cleanersImage.onclick = function() {
    cleanersModal.style.display = 'block';
}
closeCleanersModalButton.onclick = function() {
    cleanersModal.style.display = "none";
}
guardsImage.onclick = function() {
    securityModal.style.display = 'block';
}
closeSecurityModalButton.onclick = function() {
    securityModal.style.display = "none";
}
portersImage.onclick = function() {
    porterModal.style.display = 'block';
}
closePorterModalButton.onclick = function() {
    porterModal.style.display = "none";
}
administrativeImage.onclick = function() {
    clericalModal.style.display = 'block';
}
closeClericalModalButton.onclick = function() {
    clericalModal.style.display = "none";
}