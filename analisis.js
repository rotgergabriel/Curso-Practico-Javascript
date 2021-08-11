function calcProm(list) {
    const sumList = list.reduce(
        function(accumulatedValue= 0, newValue){
            return accumulatedValue + newValue
        }
    );
    const prom = sumList/list.length
    return prom
}


const salaryArg = listOfArg.map( (list) => {
    return list.salary
})

const salaryArgSorted = salaryArg.sort( (salaryA, salaryB) => {
    return salaryA - salaryB
});

function esPar(list) {
    return (list % 2 === 0)
}

function medianaSalary(list) {
    const midList = parseInt(list.length / 2);

    if(esPar(list.length)){
    let elemento1 = list[midList-1]
    let elemento2 = list[midList]
        const result = calcProm([
            elemento1, 
            elemento2
        ])
    return result
    } else {
        const result = list[midList]
        return result
    }
}


//Mediana Top 10%
const spliceStart = parseInt((salaryArgSorted.length * 90)/100);
const spliceCount = salaryArgSorted.length - spliceStart;

const salaryTop10 = salaryArgSorted.splice(spliceStart, spliceCount)

const medianaTop10 = medianaSalary(salaryTop10) 

console.log(
    medianaTop10
)




