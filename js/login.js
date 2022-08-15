document.getElementById('btn-submit').addEventListener('click', function(){
    // Get Email by input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // Get Password by input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email === 'bow@baaperbank.com' && password === 'baapjan'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Please enter a valid email & password!');
    }
});