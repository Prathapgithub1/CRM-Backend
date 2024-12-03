const schema=require('../models/CRM/schema');
const Mongoose=require('mongoose')
const connectDB= async()=>{
    try {
        for (let {dataBaseName,collectionName} of schema){
            let connection=await Mongoose.createConnection(`mongodb://localhost:27017/${dataBaseName}`,{useNewUrlParser:true,useUnifiedTopology:true})
             // Listen for connection events
             connection.on('connected', () => {
                console.log(`Successfully connected to the ${collectionName} database`);
            });

            connection.on('error', (error) => {
                console.log(`Error connecting to the ${collectionName} database:`, error);
            });

            connection.on('disconnected', () => {
                console.log(`Disconnected from the ${collectionName} database`);
            });

            // You can listen to other events like 'reconnected' if needed
            connection.on('reconnected', () => {
                console.log(`Reconnected to the ${collectionName} database`);
            });

        }
        
    } catch (error) {
        console.log('Error connecting to the database', error);

    }
}


connectDB()