const checkbox = document.querySelector('.checkbox_input'),
    nameInput = document.querySelector('.user'),
    pass1 = document.querySelector('#pass1'),
    pass2 = document.querySelector('#pass2'),
    lengthError = document.querySelector('#length_error'),
    matchError = document.querySelector('#match_error'),
    userError = document.querySelector('#user_error'),
    submitButton = document.querySelector('#submit_button'),
    passwords = document.querySelectorAll('.password'),
    listUsers = ['ASTRON', 'Trade'];

function validateForm() {
    const isUser = !listUsers.includes(nameInput.value.trim());
    const PasswordLong = pass1.value.length >= 8;
    const oxshash = pass1.value === pass2.value;
    userError.style.display = isUser ? 'none' : 'block';
    lengthError.style.display = PasswordLong ? 'none' : 'block';
    matchError.style.display = oxshash ? 'none' : 'block';
    submitButton.disabled = !(isUser && PasswordLong && oxshash);
}
nameInput.addEventListener('input', validateForm);
pass1.addEventListener('input', validateForm);
pass2.addEventListener('input', validateForm);
checkbox.addEventListener('change', function () {
    passwords.forEach(password => {
        password.type = checkbox.checked ? 'text' : 'password';
    });
});
submitButton.addEventListener('click', validateForm);