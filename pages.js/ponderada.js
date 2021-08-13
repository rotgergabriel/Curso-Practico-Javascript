//Media Aritmetica Ponderada

//Formula 
//Note
//Credit

//((N1*C1 )+ (N2*C2) + (N3*C3)) / (C1+C2+C3) => formula 

const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

const notesWithCredit = notes.map( (element) => {  //usando map guardamos los datos en la variable 
    return element.note * element.credit
})

const sumOfNotesWithCredit = notesWithCredit.reduce( (sum = 0, newValue) => { //usando reduce sumamos los datos obtenidos
    return sum + newValue
})

const credits = notes.map( (element) => {
    return element.credit
})

const sumCredit = credits.reduce( (sum = 0, newValue) => {
    return sum + newValue
} )

const totalPromWithCredits = (sumOfNotesWithCredit / sumCredit)

console.log(totalPromWithCredits)

