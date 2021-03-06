<<<<<<< HEAD
# File System Module 

**Using this webpack boilerpalte:** 
_Webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included._
=======
# EXPL:first_quarter_moon:RE SUPER:star2: W:last_quarter_moon:RLD 
# File System Module

**First use this webpack-boilerpalte do the follwoing things**
>>>>>>> 6521990d11e081c3f79f8eaf6654bf23dc9a643a

_run_

	npm install
_then_
	
	npm start
**create a fsNode.js file**

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
	
**[N.B. Store obj_JSON data into a json file]**

	fs.writeFile('./obj_JSON.json', obj_JSON, (err) => {
	    if(err) {
		console.log("Error: "+ err);
	    } else {
		console.log("Horra!, new file is created");
	    }
	})
	
**[N.B. Get obj_JSON data from obj_JSON file]**

	fs.readFile('./obj_JSON.json', (err, data) => {
	    if(err) {
		console.log(err);
	    }
	    else {
		let obj_data = JSON.parse(data);
		console.log(obj_data);
	    }
	});
	
**{even you can import JSON data from different file from different way.**

	let json_data = require('./obj_JSON.json');
_Here you don't need to convert JSON data to obj ``let json_data = require('./obj_JSON.json');`` becuase it has alrady done by ES6_
