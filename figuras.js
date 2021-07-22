//Código del cuadrado
console.group('Cuadrados')
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado son: ${ladoCuadrado}cm`)

const perimetroCuadrado = (ladoCuadrado * 4);
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}`)

const areaCuadrado = (ladoCuadrado * 4);
console.log(`El area del cuadrado es: ${ladoCuadrado * ladoCuadrado}cm2`)
console.groupEnd();

//Código del triángulo
console.group('Triangulos')
const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 4;

console.log(`Los lados del triangulo son: ${ladotriangulo1}cm ${ladotriangulo2}cm ${basetriangulo}cm`);
const alturatriangulo = 5.5;
console.log(`La altura del triangulo es: ${alturatriangulo}cm`);

const perimetroTriangulo = ladotriangulo1 + ladotriangulo2 +basetriangulo;
console.log(`El perimetro del triangulo es: ${perimetroTriangulo}cm`)

const areaTriangulo = (basetriangulo * alturatriangulo) / 2;
console.log(`El area del triangulo es: ${areaTriangulo}cm2`)

console.groupEnd();

//Código del circulo
console.group('Circulos');

//Radio
const radioCirculo = 4;
console.log(`El radio del circulo es: ${radioCirculo}cm`)

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log(`El diámretro del circulo es: ${diametroCirculo}cm`)

//PI
const PI = Math.PI;
console.log(`Pi es: ${PI}`)

//Circunferencia
const perimetroCirculo = diametroCirculo * PI
console.log(`La circunferencia del circulo es: ${perimetroCirculo}`)

//Area
const areaCiruclo = (radioCirculo * radioCirculo) * PI
console.log(`El area del circulo es: ${areaCiruclo}cm2`)

console.groupEnd()



