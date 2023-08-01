const findTheOldest = function(arr) {
    let date = new Date()

    
    let oldestPerson = {
        name : ``,
        age: 0,
        status: ``,
    }; // creamos el objeto para almacenar a la persona mas mayor

    let currentYear = date.getFullYear(); 
    /* dentro del loop debemos:
    - filtrar si la persona esta viva o muerta
    - calcular la edad
    - guardar la edad en la persona
    - comprobar si 
    */

    // if year of death exists === if (!)
    
    for (i = 0; i < arr.length ; i++) {
        console.log(`currently evaluating person ${arr[i].name}`)
        // console.log(`currently the oldest person is ${oldestPerson.name}`)

        if (!arr[i].yearOfDeath) { // filtramos la gente que sigue viva
            arr[i].age = currentYear - arr[i].yearOfBirth; // calculamos la edad y la guardamos en el objeto
            arr[i].status = `alive` // añadimos que la persona está viva al objeto ** No es parte del curso, solo practica **

            console.log(`the age of person ${arr[i].name} is ${arr[i].age}`)
            if ( arr[i].age > oldestPerson.age) {
                oldestPerson = arr[i];
            }
        }

        else { // filtramos la gente que esta muerta
            arr[i].age = arr[i].yearOfDeath - arr[i].yearOfBirth // calculamos la edad y la enviamos al objeto
            arr[i].status = `dead` // añadimos que la persona está muerta al objeto ** No es parte del curso, solo practica **

            if ( arr[i].age > oldestPerson.age) {
                oldestPerson = arr[i];
            }

            console.log(`the age of person ${arr[i].name} is ${arr[i].age}`)
        }

        

    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;


