

const user = JSON.parse(localStorage.getItem('loggedInUser'));

if (!user) {
    window.location.href = '/index.html';


} else {
    document.getElementById('welcome-message').textContent = `Welcome ${user.name}`;
}

document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('loggedInUser');
    window.location.href = './index.html';
});









   document.querySelector('.btn-outline-warning').addEventListener('click', function() {
       


    //here i delete the user information from local storge when he logout
       localStorage.removeItem('loggedInUser');
       

       
       // go to index page 
        window.location.href = './index.html';
   });



















