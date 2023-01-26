function mostrar() {
    let imc = document.getElementById('imc-tool');

    if(imc.style.display == 'none') {
        imc.style.display = 'flex'
    } else {
        imc.style.display = 'none'
    }
}