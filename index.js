const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modal = $('.modal');
const closeBtn = $$('.btn--normal')
const loginForm = $('.form-login')
const registerForm = $('.form-register')
const loginBtn = $('.js-btnLogin');
const registerBtn = $('.js-btnRegister')
const switchBtn = $$('.js-switch-btn')
console.log(switchBtn)

// Hiện form đăng nhập
// function showFormLogin(){
//     modal.classList.add('open')
//     loginForm.classList.add('login')
//     $('.form-register.register').classList.remove('register')
// }

// loginBtn.addEventListener('click', showFormLogin);

loginBtn.onclick = function (){
    modal.classList.add('open')
    loginForm.classList.add('login')
    $('.form-register.register').classList.remove('register')
}

// Hiện form đăng ký
function showRegisForm(){
    modal.classList.add('open')
    registerForm.classList.add('register')
    $('.form-login.login').classList.remove('login')
}

registerBtn.addEventListener('click', showRegisForm)

// Thoát khỏi form
closeBtn.forEach(close => {
    close.onclick = function (){
        modal.classList.remove('open');
    }
})