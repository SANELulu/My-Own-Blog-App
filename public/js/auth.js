const loginBtn = document.querySelector('.login-form');
const signupBtn = document.querySelector('.signup-form');
const logoutBtn = document.querySelector('.logout')
// const logoutForm = document.querySelector('#logout');
// const loginBtn = document.querySelector('#login-btn');

//function for redirect to login page
const loginRoute = async (event) => {
    // if(!req.session.logged_in){
    window.location.href = '/login'
    // }else{
    //     window.location.href= '/profile'
    // }
}
//function to login User
const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log('hitting loginFormHandler')

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if(response.status !== 200){
            console.log('wrong username or password, please try again');

            Toastify({
                text: "Wrong Email or Password",
                backgroundColor: "linear-gradient(to right, #ff3a3a, #a3869f)",
                className: "Error Toast",
                gravity: "top",
                position: "center"
            }).showToast();
        }else{
            window.location.href = '/profile';
        }
    }
}
//function to sigunup new user and add his info to mysql database
const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log('hitting signupFormHandler');

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    console.log(name,email,password);
    if (name && email && password ){
        const response = await fetch('api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        
        if(response.status !== 200){
            console.log('error at response');

            Toastify({
                text: "Wrong Email or Password",
                backgroundColor: "linear-gradient(to right, #ff3a3a, #a3869f)",
                className: "Error Toast",
                gravity: "bottom",
                position: "center"
            }).showToast();
        }
        if(response.status == 200){
            console.log('hitting form submission')

            Toastify({
                text: "Signup Successful",
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                className: "Success Toast",
                gravity: "bottom",
                position: "center"
              }).showToast();
        }
    }
}
//function to logout user and redirect to homepage

const logoutFormHandler = async () => { 
    Toastify({
        text: "Logout Successful",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        className: "Success Toast",
        gravity: "bottom",
        position: "center"
      }).showToast();
    return await fetch('api/users/logout').then(
      ()=> {
        window.location.href = '/'
        console.log("redirecting to homepage");
      })
  };


if(loginBtn){loginBtn.addEventListener('submit',loginFormHandler)};
if(signupBtn){signupBtn.addEventListener('submit',signupFormHandler)};
if(logoutBtn){logoutBtn.addEventListener('click',logoutFormHandler)};

