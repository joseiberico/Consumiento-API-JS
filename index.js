//definimos una variable donde hacemos referencia al origen de los datos
let url = 'https://jsonplaceholder.typicode.com/users'; 
    fetch(url) // realizamos una solicitud a la url
        .then(response => response.json()) // se resuelve la promesa en este caso se utilizo json
        .then(data => mostrarData(data)) // leemos el objeto data y lo mostramos por consola
        .catch(error => console.log(error)) // si hay un error sera atrapada por la palabra catch

        const mostrarData = (data) => {
            console.log(data); //trae los datos a la consola
            let body = ''; //crea una variable de nombre body
            for (let i = 0; i < data.length; i++){ //recorre los datos a traves de un for
                //insertamos la estructura html para mostrar los datos
                body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`; 
            }
            //el id es data porque nuestro tbody tiene ese id y lo imprimimos a traves del body
            document.getElementById('data').innerHTML = body;
        }