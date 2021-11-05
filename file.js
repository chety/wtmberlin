const fs = require('fs');
const path = require('path');
// const fsPromise = require('fs/promises');
/*
//Read file via syncronous read operation
const file1 = fs.readFileSync(`${__dirname}/files/1.txt`, "utf-8");
console.log("File1:",file1)

const file2 = fs.readFileSync(`${__dirname}/files/2.txt`, "utf-8");
console.log("File2:",file2)

const file3 = fs.readFileSync(`${__dirname}/files/3.txt`, "utf-8");
console.log("File3:",file3)

//same behaviors as above via callbacks. To be ensure that our files will be read in order
//we have to write callbacks
fs.readFile(`${__dirname}/files/1.txt`, "utf-8",(err,data) => {
    if (err) {
        console.log("Error occured while reading 1.txt")        
    } else {
        console.log("File1:",data)
    }
    fs.readFile(`${__dirname}/files/2.txt`, "utf-8",(err,data) => {
        if (err) {
            console.log("Error occured while reading 2.txt")        
        } else {
            console.log("File2:",data)
        }
        fs.readFile(`${__dirname}/files/3.txt`, "utf-8",(err,data) => {
            if (err) {
                console.log("Error occured while reading 3.txt")        
            } else {
                console.log("File:",data)
            }
        })
    })    
})
*/
//read file via promises
const readFileViaPromise = (fileName) =>  new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}${path.sep}${fileName}`,(err,data) => {
        if (err) {
            return reject(err)
        }
        return resolve(String(data))
    })
})

// readFileViaPromise("files/1.txt")
// .then(console.log)
// .then(() => readFileViaPromise("files/2.txt"))
// .then(data => console.log(data))
// .then(() => readFileViaPromise("files/3.txt"))
// .then(console.log)
// .catch(err => console.error("Error occured. Details: ",err))
// .finally(() => console.log("All the read operation end."))


const readFileAsyncAwait = async fileName => {
    const content1 = await readFileViaPromise("files/1.txt");
    console.log(content1)
    
    const content2 = await readFileViaPromise("files/2.txt");
    console.log(content2)
    
    const content3 = await readFileViaPromise("files/3.txt");
    console.log(content3)
}
readFileAsyncAwait().then(() =>console.log("Am I the first line")) ;
