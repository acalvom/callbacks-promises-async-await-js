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
        // Considerando ambas llamadas independientes una de otra -> PromiseAll
        // Promise All solo devuelve resultado cuando todas las promesas del array obtienen un resultado satisfactorio.
        // Si uno de los dos no devuelve resultado automáticamente salta al catch
        const posts = await Promise.all([findPostById(1), findPostById(2)]);
        console.log(posts); // El console no se ejecuta a los 2 segundos porque se realizan las promesas en paralelo
        
    } catch (error) {
        console.log(error);
    } finally {
        // Se ejecuta siempre independientemente del try y catch
        console.log("Este código siempre");
    }

}

findPostByIdAsync(1);