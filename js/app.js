// document.addEventListener('DOMContentLoaded', () => {

// const imageFrame = document.querySelector(".image-frame");
// console.dir(imageFrame);


// const imagesFolder = './images';
// const fs = require('fs');
// fs.readdir(imagesFolder, (err, files) => {
//     files.forEach(file => {
//         console.log(file);
//     });
// })

// module.exports = fs

// });


const http = require('https')
const port = 3000

const handler = (request, response) => {
    console.log("new user!");
    response.end('Hello node');
}

const server = http.createServer(handler);

server.listen(port, (err) => {
    if (err) {
        return console.log("Coś poszło nie tak")
    }
    console.log("Server is running...")
})