function mostrar() {
    let imc = document.getElementById('imc-tool');

    if(imc.style.display == 'none') {
        imc.style.display = 'flex'
    } else {
        imc.style.display = 'none'
    }
}

function calcular() {  
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let res = document.getElementById('res');
    let gen = document.getElementsByName('sex');
    let num1 = Number(altura);
    let num2 = Number(peso);
    let total = (num2 / num1 ** 2).toFixed(2);

    if(gen[0].checked) {
        res.innerHTML = `<p class ="info">Você é um homem e  seu IMC é: ${total} </p>
        <br>
        - <span class="perigo"> Abaixo do peso: < 20.7 </span>
        <br>
        - <span class="normal">Peso normal: 20.7 - 26.4 </span>
        <br>
        - <span class="alerta">Acima do peso ideal: 27.8 - 31.1 </span>
        <br> 
        - <span class="perigo"> Obeso: > 31.1 </span>
        `
    } else if(gen[1].checked) {
        res.innerHTML = `<p class ="info">Você é uma mulher e  seu IMC é: ${total}</p>
        <br>
        - <span class="perigo"> Abaixo do peso: < 20.7 </span>
        <br>
        - <span class="normal">Peso normal: 20.7 - 26.4 </span>
        <br>
        - <span class="alerta">Acima do peso ideal: 27.8 - 31.1 </span>
        <br> 
        - <span class="perigo"> Obeso: > 31.1 </span>
        `
    }
}