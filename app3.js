import loading from "loading-cli"

function main(){
    let load = loading({

    
        color : "red",
        frames : ["ihjhbiuhiu", "😂" , "👍"],
        interval :50,

    }).start();

    setTimeout(()=>{
        load.stop();
        console.log("Hello");
    } , 5000)
}

main();