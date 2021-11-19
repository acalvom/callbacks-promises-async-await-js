// Misma promesa que en promises.js porque async/await funciona bajo promesas
// Solo cambia la invocación

import posts from './posts.js'

const findPostById = (id) => {
    return new Promise((resolve, reject) => {
        const post = posts.find(item => item.id === id);

        if (post)
            resolve(post);
        else
            reject("No post found with id: " + id);
    });
}

// Nueva función async + Función con promesa await
const findPostByIdAsync = async (id) => {
    try {
        const post = await findPostById(id); // Awai siemrpre dentro de un await
        console.log(post);
    } catch (error) {
        console.log(error);
    } finally {
        // Se ejecuta siempre independientemente del try y catch
        console.log("Este código siempre");
    }

}

findPostByIdAsync(1);