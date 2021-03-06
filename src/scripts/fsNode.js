const fs = require('fs');

let obj = {
    name: "shihan",
    age: 29,
    email: "shihan3star@gmail.com",
    address: {
        city: "Sylhet",
        country: "bangladesh"
    }
}

let obj_JSON = JSON.stringify(obj);

fs.writeFile('./obj_JSON.json', obj_JSON, (err) => {
    if(err) {
        console.log("Error: "+ err);
    } else {
        console.log("Horra!, new file is created");
    }
})

fs.readFile('./obj_JSON.json', (err, data) => {
    if(err) {
        console.log(err);
    }
    else {
        let obj_data = JSON.parse(data);
        console.log(obj_data);
    }
});