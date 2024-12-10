document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Invalid email address.';
        return;
    }
    
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        document.getElementById('email-error').textContent = 'Email is already registered. Try another one.';
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = 'index.html';

});













































