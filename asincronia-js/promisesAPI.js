const API_URL = "http://hp-api.herokuapp.com/api/characters";

// En este ejemplo usamos XMLHttpRequest
const DONE = 4;
const STATUS_OK = 200;
const req = new XMLHttpRequest();

const findCharacterByName = (name) => {
    
    return new Promise((resolve, reject) => {
        req.open('GET', API_URL, true);
        req.onreadystatechange = () => {
            if (req.readyState == DONE) {
                if (req.status == STATUS_OK) {
                    let character = JSON.parse(req.response).find(item => item.name === name);
                    if (character) resolve(character);
                    else reject("No charachter with name: " + name);
                }
                else
                    reject("Error in the request to " + API_URL);
            }
        };
        req.send();
    });
}

findCharacterByName("Harry Potter")
    .then(character => {
        console.log(character)
    })
    .catch(err => {
        console.log(err)
    })