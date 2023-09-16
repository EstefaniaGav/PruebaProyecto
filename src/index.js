import app from './app.js'
import {sequelize} from './db/dataBase.js'

async function main(){
    try{
        await sequelize.sync({force : false});
        console.log("connection has been established successfully");
        app.listen(4003)
        console.log('server on port',4003)
    }catch(error){
        console.error("Unable to connect to the database:", error);
    } 
}

main();