function calcular(){
    var n1 = document.getElementById('peso')  
    var peso = Number(n1.value)  

    n2 = document.getElementById('altura')
    var altura = Number(n2.value)

    var imc = peso / (altura * altura)

    imc = parseFloat(imc.toFixed(1))

    var r = document.getElementById('res')
    r.innerHTML = `Você pesa <strong> ${peso} Kg </strong><br>
    Sua altura é: <strong>${altura} (m)</strong><br>
    Seu IMC: <strong>${imc}</strong>`


    if (imc < 18.5){
        r.innerHTML += `<br><br> <strong> Abaixo do Peso </strong>`
    } else if (imc >= 18.5 && imc <= 24.9) {
        r.innerHTML += `<br><br> <strong>Peso Ideal </strong> `
    } else if (imc >= 25 && imc <= 29.9){
        r.innerHTML += `<br><br> <strong> Levemente acima do peso</strong>`
    } else if (imc >= 30 && imc <= 34.9){
        r.innerHTML += `<br><br> <strong>Obesidade Grau I</strong>`
    } else if (imc >= 35 && imc <= 39.9){
        r.innerHTML += `<br><br> <strong>Obesidade Grau II (Severa)</strong>`
    } else if (imc >= 40){
        r.innerHTML += `<br><br> <strong>Obesidade Grau III (Mórbida)</strong>`
    }
}