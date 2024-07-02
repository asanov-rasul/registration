const welcomeBlock = document.querySelector('.welcome_block'),
      btn = document.querySelector('.btn_transparent');

btn.addEventListener('click', () => {
    if (btn.innerHTML == 'sign up') {
        btn.innerHTML = 'sign in'
    } else if (btn.innerHTML == 'sign in') {
        btn.innerHTML = 'sign up'
    }

    if (welcomeBlock.querySelector('h2').innerHTML == 'Hello, Friend!') {
        welcomeBlock.querySelector('h2').innerHTML = 'Welcome Back!'
    } else if (welcomeBlock.querySelector('h2').innerHTML == 'Welcome Back!') {
        welcomeBlock.querySelector('h2').innerHTML = 'Hello, Friend!'
    }
    welcomeBlock.classList.toggle('active');
})