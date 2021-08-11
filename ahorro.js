function calcTotal() {    
    const add = parseInt(document.getElementById('add').value)
    const expenses = parseInt(document.getElementById('expenses').value)
    const total = document.getElementById('total')
    
    const sumTotal = add - expenses;

    !add ? total.innerText = (`Tu capacidad de ahorro es insuficiente`)  
    : total.innerText = `Tu capacidad de ahorro es: ${sumTotal}`;
}


