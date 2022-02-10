document.getElementById('login-submit').addEventListener('click', function () {
    // console.log('button-clicked'); 

    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'sontan@gmail.com' && userPassword == 'secret') {
        // console.log('valid user');
        window.location.href = 'banking.html';
    }
});

