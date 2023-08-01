const getTheTitles = function(books) {
    let bookTitles = []; // creamos el array para almacenar los títulos de los libros

    for (i = 0; i < books.length; i++) {
        console.log(`the book i am currently look at is ${books[i].title}`)
        let bookTitle = books[i].title  // accede al array y obtiene el valor del titulo y lo guarda en la variable
        bookTitles.push(bookTitle) // añade al array el valor de la variable de bookTitle
        console.log(`the array currently includes ${bookTitles}`)
    }

    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
