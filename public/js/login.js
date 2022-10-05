const user = localStorage.getItem('user');

if (user) {
    window.location.href="/"
}

let buttonLogin = document.getElementById('login');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let messageError = document.getElementById('message-error');

buttonLogin.onclick = function(e) {
    const email = emailInput.value;
    const password = passwordInput.value;
    e.preventDefault();
    fetch('http://localhost:3000/api/auth', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(data => data.json())
    .then(response => {
        if (response.data.length > 0) {
            const user = response.data[0];
            localStorage.setItem('user', JSON.stringify(user.dataValues));
            window.location.href="/"
        } else {
            messageError.innerHTML = response.message
        }
    });
}