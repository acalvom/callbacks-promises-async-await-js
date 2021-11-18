import posts from './posts.js'

const findPostById = (id, callback) => {
    // Primero se encuentra el post con el id
    const post = posts.find(item => item.id === id);
    // Comprobar si existe o no el post para evitar que devuelva undefined
    // El callback tiene 2 parámetros de entrada, el error y el contenido
    if (post)
        callback(null, post); // Como no hay error, se envía null como primer argumento
    else
        callback("No post found with id: " + id); // En este caso el error es un string
}

findPostById(1, (err, post) => {
    if (err) return console.log(err); // En el return para que no siga con el código
    console.log(post);

    // Callback anidados: Callback Hell. Consiste en que hay tantos callbacks que es muy dificil seguir la traza y debuguear el código
    findPostById(2, (err, post) => {
        if (err) return console.log(err);
        console.log(post);

        findPostById(3, (err, post) => {
            if (err) return console.log(err);
            console.log(post);

            findPostById(4, (err, post) => {
                if (err) return console.log(err);
                console.log(post);
            });
        });
    });
});
