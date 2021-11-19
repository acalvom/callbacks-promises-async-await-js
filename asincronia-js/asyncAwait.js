// Misma promesa que en promises.js porque async/await funciona bajo promesas
// Solo cambia la invocación

import posts from './posts.js'

const findPostById = (id) => {
    return new Promise((resolve, reject) => {

        // Añadir un timeout para comprobar el efecto del await
        setTimeout(() => {
            const post = posts.find(item => item.id === id);

            if (post)
                resolve(post);
            else
                reject("No post found with id: " + id);
        }, 2000);

    });
}

// Nueva función async + Función con promesa await
const findPostByIdAsync = async (id) => {
    try {
        // Considerando ambas llamadas independientes una de otra
        const post1 = await findPostById(1); // Await siempre dentro de un await
        const post2 = await findPostById(2);

        console.log(post1.title, post2.title); // El console no se ejecuta hasta que no te han obtenido los 2 posts (4 segundos)
    } catch (error) {
        console.log(error);
    } finally {
        // Se ejecuta siempre independientemente del try y catch
        console.log("Este código siempre");
    }

}

findPostByIdAsync(1);