const API_URL = 'https://jsonplaceholder.typicode.com/comments/';

/** En este ejemplo usamos Fetch
 * Fetch ya devuelve una promesa a diferencia de XMLHTTPRequest, que hay que generar la promesa
 * Asume la declaración de la función que en los ejemplos anteriores devolvía una promesa
  
 * return new Promise((resolve, reject) => {
     ...
        if (req.status == STATUS_OK) {
            if (character) resolve(character);
            else reject("No charachter with name: " + name);
        }
        else reject("Error in the request to " + API_URL);   
    });
 */

fetch(API_URL + '2')
    .then(res => res.json())
    .then(comment => console.log(comment))
    .catch(error => console.log(error))
    .finally(() => console.log('FIN'));
