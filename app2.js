import fs from "fs/promises"

// Using async await 

async function main(){
    try{

        let fileName = "Musaib.txt"
        let FileData = "Hello musaib"

        //  await fs.writeFile(fileName , FileData);
        //  console.log("file created");
        
        //  let read = await fs.readFile(fileName , "utf-8") 
        //  console.log(read);

        //  await fs.unlink("musaib2.txt")
        //  console.log("File is deleted");

        //  await fs.rename("Musaib.txt" , "Shuail.txt")
        //  console.log("file is renamed");

        // await fs.mkdir("New")

        // await fs.rmdir("New")


    } catch (error){
        console.log(error);
    }
}

main()