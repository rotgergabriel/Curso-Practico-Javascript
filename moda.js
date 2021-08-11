const list = [
    1,
    2,
    2,
    2,
    4,
    5,
    1,
    2,
    5,
    3,
    5,
    8,
    9,
    5,
    5,
    5
];

const mode = (data) => {
    const newList = {};
    data.map(
        function(element) {
            newList[element] ? newList[element] += 1 : newList[element] = 1;
        }
    );  
    const newListArray = Object.entries(newList).sort(
        function(elementA, elementB){
            return elementA[1] - elementB[1]
        }
    );
    return moda = newListArray[newListArray.length - 1]
}