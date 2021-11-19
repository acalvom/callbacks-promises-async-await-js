// Misma promesa que en promises.js
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
    const post = await findPostById(id);
    console.log(post);
}

findPostByIdAsync(4);