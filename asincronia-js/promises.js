import posts from './posts.js'

const findPostById = (id) => {
    const post = posts.find(item => item.id === id);

    return new Promise((resolve, reject) => {
        if (post)
            resolve(post);
        else
            reject("No post found with id: " + id);
    });
}

findPostById(1)
    .then((post) => {
        console.log(post)
    }) // Cuando ocurre el resolve
    .catch(err => {
        console.log(err)
    }) // Cuando ocurre el reject