
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


