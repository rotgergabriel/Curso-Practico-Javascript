function calcProm(list) {
    // let sumList = 0;
    // for (let i = 0; i < list.length; i++) {
    //     sumList+= list[i]
    // }

    //la funcion reduce itera en todos los valores de la lista, se crea una funcion que recibe dos valores!!
    const sumList = list.reduce(
        function(accumulatedValue= 0, newValue){
            return accumulatedValue + newValue
        }
    );
    const prom = sumList/list.length
    return prom
}

const list = [
    700,
    100,
    1000,
    500,
    400,
    900,
    450
].sort( function(a, b){ 
    return a - b
})

/*sort() ordena una lista(array) alfeveticamente de forma automatica. Pero
con los numeros no pasa lo mismo, porque la funcion sort es para ordenar Letras, 
y toma a los numeros de la siguiente forma => (A=1, B=2, C=3, etc) y esto produce errores en el ordenamiento.
Para que esos errores no sucedan, ejecutamos una funcion anonima dentro de la funcion sort() 
para ordenarlos correctamente */

const midList = parseInt(list.length / 2)

function esPar(data) {
    if (data % 2 === 0) {
        return true
    } else {
        return false
    }    
}

let mediana;

if(esPar(list.length)){
    let elemento1 = list[midList-1]
    let elemento2 = list[midList]
        const result = calcProm([
            elemento1, 
            elemento2
        ])
    mediana = result 
    console.log(result)
} else {
    mediana = list[midList]
    console.log(mediana)
}










