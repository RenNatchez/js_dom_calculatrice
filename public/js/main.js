let nombre = document.querySelector('.number')
var input = "";
var x = 0
var y = 0
var signe = null

function valeur(btn) {
    input = input + btn.value;
    nombre.innerHTML = input
    
}

function choix(btn) {
    if (btn.value == '+') {
        signe = '+'
        x = parseInt(input)
        input = ""
        nombre.innerHTML = input

    } else if (btn.value == '-') {
        signe = '-'
        x = parseInt(input)
        input = ""
        nombre.innerHTML = input
    } else if (btn.value == '*') {
        signe = '*'
        x = parseInt(input)
        input = ""
        nombre.innerHTML = input
    } else if (btn.value == '/') {
        signe = '/'
        x = parseInt(input)
        input = ""
        nombre.innerHTML = input
    } else if (btn.value == 'C') {
        x = 0
        input = ""
        nombre.innerHTML = input

    } else if (btn.value == '=') {
        y = parseInt(input)
        input = ""
        switch (signe) {
            case '+':
                var resultat = x + y
                nombre.innerHTML = `${x} + ${y} = ${resultat}`
                break;
            case '-':
                var resultat = x - y
                nombre.innerHTML = `${x} - ${y} = ${resultat}`
                break;
            case '*':
                var resultat = x * y
                nombre.innerHTML = `${x} * ${y} = ${resultat}`
                break;
            case '/':
                var resultat = x / y
                nombre.innerHTML = `${x} - ${y} = ${resultat}`
                break;
            default:
                nombre.innerHTML = `ERROR`
                break;
        }

    }

}