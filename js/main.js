const password_inputs = Array.from(document.querySelectorAll('.input--password'));

password_inputs.forEach((input) => input.addEventListener('change', () => {
    const password = document.querySelector('.input--password[name="password"').value;
    const password_bis = document.querySelector('.input--password[name="password-bis"').value;
    
    if (password != password_bis) password_inputs.forEach((element) => {
        element.classList.add('input--nok');
        element.classList.remove('input--ok');
        });
    else password_inputs.forEach((element) => {
        element.classList.add('input--ok');
        element.classList.remove('input--nok')
        });
    
    console.log({password});
    console.log({password_bis});
    console.log({input});
}));