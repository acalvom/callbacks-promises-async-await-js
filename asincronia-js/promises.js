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

findPostById(1)
    .then((post) => {// Cuando ocurre el resolve
        console.log(post);

        // Promises Hell. Sin anidamiento -> Más limpio
        return findPostById(2);
    })
    .then(post => {
        console.log(post);
        return findPostById(3);
    })
    .then(post => {
        console.log(post);
        return findPostById(4);
    })
    .catch(err => {// Cuando ocurre el reject
        console.log(err)
    })