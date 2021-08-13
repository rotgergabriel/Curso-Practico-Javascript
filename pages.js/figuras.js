//Código del cuadrado
console.group('Cuadrados')

function perimetroCuadrado(lado) {
    return  lado * 4;
}

function areaCuadrado(lado) {
 return lado * lado;
} 

function calcularPerimetroCuadrado() {
    const input = document.getElementById('InputCuadrado')
    const value = parseInt(input.value)

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById('InputCuadrado')
    const value = input.value

    const area = areaCuadrado(value);
    alert(area);
}

console.groupEnd();


//Código del triangulo
console.group('Triangulos')

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 

function calcularPerimetroTriangulo() {
    const ladoA = document.getElementById('ladoA')
    const ladoB = document.getElementById('ladoB')
    const base = document.getElementById('base')

    const value = parseInt(ladoA.value)
    const value2 = parseInt(ladoB.value) 
    const value3 = parseInt(base.value) 

    const perimetro = perimetroTriangulo(value, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById('base')
    const altura = document.getElementById('altura')
    
    const value = parseInt(base.value)
    const value2 = parseInt(altura.value) 
    
    const area = areaTriangulo(value, value2)
    alert(area)
}

console.groupEnd();

//Código del circulo
console.group('Circulos');

function diametroCirculo(radio) {
    return radio * 2;
} 

//PI
const PI = Math.PI;
console.log(`Pi es: ${PI}`)

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI
}

//Area
function areaCiruclo(radio) {
    return (radio * radio) * PI;
}

function calcularDiametroCirculo() {
    const radio = document.getElementById('circulo').value

    const diametro = diametroCirculo(radio)
    const perimetro = perimetroCirculo(diametro)
    alert(perimetro)
}

function calcularAreaCirculo() {
    const radio = document.getElementById('circulo').value

    const area = areaCiruclo(radio)
    alert(area)
}

console.groupEnd()

//Triangulo Isoceles

//Altura= raiz ladoA**2 - (base/2)**2 // **2 es elevación al cuadrado
function trianguloIsoceles(ladoA, ladoB, base) {
    if((ladoA === ladoB) && (ladoA != base)){
        return Math.sqrt(ladoA**2 - (base / 2)**2)
    }  
}

function calcularTrianguloIsoceles() {
    const ladoA = parseInt(document.getElementById('dataA').value)
    const ladoB = parseInt(document.getElementById('dataB').value)
    const base = parseInt(document.getElementById('dataC').value)

    const altura = trianguloIsoceles(ladoA, ladoB, base);
    if(altura != undefined) {
        alert(altura);
    }else {
        alert('No es un triangulo isoceles')
    } 
}




