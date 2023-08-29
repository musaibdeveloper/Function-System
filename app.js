
import { log } from "console";
import fs from "fs" ;
import { isBuffer } from "util";

let fileName = "musaib.txt"
let fileData = "I am musaib"

// Call back Approach

// Creating a file 

// fs.writeFile(fileName ,fileData , (err , data) =>{
//     if(err){
//         throw err ; 
//     } else {
//         console.log("File is created");
//     }
// });

// Read file

// fs.readFile(fileName , "utf-8" , (err,data) =>{
//     if (err) {
//         throw err ;
    
//     } else {
//         console.log(data)
//     }
// })

// Delete a file

// fs.unlink(fileName , (err) => {
//     if (err) throw err ;
//     else {
//         console.log("File is deleted");
//     }
// })

// Rename a file 

// fs.rename(fileName , "musaib2.txt" , (err) => {
//     if (err) throw err;
//     else{
//         console.log("File is renamed");
//     }
// });

// Make a folder 

// fs.mkdir("apps" , (err) => {
//     if (err) throw err ;
//     else {
//         console.log("Folder is created");
//     }
// });

// Remove a folder

fs.rmdir("apps", (err) =>{
    if (err) throw err;
    else{
        console.log("Folder is removed");
    }
})

// 