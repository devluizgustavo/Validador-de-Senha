const inp = document.querySelector('.inp-pass');
const eyeAb = document.querySelector('.eyeab');
const eyeFc = document.querySelector('.eyefc');

// Esconder o olho aberto
eyeAb.addEventListener('click', e => {
    inp.type = 'text';
    eyeAb.setAttribute('hidden', 'hidden');
    inp.type = 'text';
    eyeFc.removeAttribute('hidden');
});

// Esconder o olho fechado
eyeFc.addEventListener('click', e => {
    inp.type = 'password';
    eyeFc.setAttribute('hidden', 'hidden');
    eyeAb.removeAttribute('hidden');
});

// Validação
inp.addEventListener('input', e => {
    let error = true;
    const havelyrics = /[a-z]/.test(inp.value);
    const haveToUpperCase = /[A-Z]/.test(inp.value);
    const haveNum = /[0-9]/.test(inp.value);
    const haveSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(inp.value);

    for (let errorText of document.querySelectorAll('.error')) {
        errorText.remove();
    }

    for (let sucessText of document.querySelectorAll('.success')) {
        sucessText.remove();
    }

    if (inp.value.length < 5 || !havelyrics || !haveNum || !haveSpecialChar || !haveToUpperCase) {
        error = false;
        showSend('Senha fraca', error);
    }

    if (inp.value.length > 5 && havelyrics && haveNum && haveSpecialChar && haveToUpperCase) {
        error = true;
        showSend('Senha forte', error)
    }

});

//Mostrar mensagens abaixo do input
function showSend(send, err) {
    const p = document.createElement('p');
    const div = document.querySelector('.text-send');

    if (err === false) {
        p.classList.add('send', 'error');
        sendSuccess('border-color: #ee0e0e');
    } else {
        p.classList.add('send', 'success');
        sendSuccess('border-color: #00a400');
    }
    p.innerHTML = send;
    div.appendChild(p);
}

//Trocar cor da borda do input ao clicar
function sendSuccess(color) {
    document.querySelector('.inp-pass:focus').style = color;
}
