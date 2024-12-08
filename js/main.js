document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

// data base information of the regester users     
    
    const users = JSON.parse(localStorage.getItem('users')) || [];



    // make sure that the user  information in the database.
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        document.getElementById('email-error').textContent = 'Invalid email or password.';
        return;
    }


    //go to welcome page when user succssesfully regesterd
    // window.location.href = 'welcome.html';




    if (user) {

      // save user information in localstorage  
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'welcome.html';
    }
    

});