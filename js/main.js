document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
   
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        document.getElementById('email-error').textContent = 'Invalid email or password.';
        return;
    }

    if (user) { 
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'welcome.html';
    }
    

});