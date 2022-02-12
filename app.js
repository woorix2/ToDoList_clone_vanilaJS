const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');

function loginBtn() {
    console.dir(loginInput);
    console.log(loginInput.value);
}
loginButton.addEventListener("click", loginBtn);