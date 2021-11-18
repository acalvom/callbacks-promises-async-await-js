const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
];

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
