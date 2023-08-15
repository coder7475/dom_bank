document.getElementById('btn-login').addEventListener('click', (event) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // console.log(email);
    // console.log(password);

    if (email == "robiulhossain7475@gmail.com" && password == '5678open') {
        // console.log('valid login');
        window.location.href = './bank.html'
    } else {
        alert('Invalid email or password');
    }
})