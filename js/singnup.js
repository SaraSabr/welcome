document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;



    // data base information for users that regester befor
    const users = JSON.parse(localStorage.getItem('users')) || [];



    // email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Invalid email address.';
        return;
    }




    //check if  the email exsis 
    
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        document.getElementById('email-error').textContent = 'Email is already registered. Try another one.';
        return;
    }





    //add the new user to local storage(data base)
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));






    //go to login page after  successfull regester (index.html)
  

    window.location.href = 'index.html';

});













































