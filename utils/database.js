import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async ()=>{
mongoose.set('strictQuery',true)
if (isConnected){
    console.log('MongoDB is connected')
    return
}
//if not already connected
try {
    mongoose.connect(process.env.MONGODB_URI,{
        dbName:"prompt_boss",
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
} catch (error) {
    console.log(error)
}

}

//