import app from "./app";
import AppDataSource from "./data-source";

(async () => {

    await AppDataSource.initialize()
    .catch((err) => {
        console.error("Error to load API Data Source", err)
    })
    
    app.listen(3030, () => {
        console.log("Chatinip API Running on Port: 3030")
    })    
})()