const API_URL = 'https://jsonplaceholder.typicode.com/comments/';

/** En este ejemplo usamos Fetch
 * Fetch ya devuelve una promesa a diferencia de XMLHTTPRequest, que hay que generar la promesa
 * Asume la declaración de la función que en los ejemplos anteriores devolvía una promesa
 */

const findCommentById = async (id) => {
    try {
        // Es necesario un await por cada antiguo then
        const res = await fetch(API_URL + id);
        const comment = await res.json();
        console.log(comment);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('FIN');
    }
}

findCommentById(1);
