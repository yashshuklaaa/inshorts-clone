import mongoose from 'mongoose';


const Connection = async(username,password) => {
  const URL = `mongodb://${username}:${password}@ac-enqmyes-shard-00-00.1jfxakq.mongodb.net:27017,ac-enqmyes-shard-00-01.1jfxakq.mongodb.net:27017,ac-enqmyes-shard-00-02.1jfxakq.mongodb.net:27017/?ssl=true&replicaSet=atlas-u9f1v7-shard-0&authSource=admin&retryWrites=true&w=majority&appName=inshorts`;
    try {
   await mongoose.connect(URL,{useNewUrlParser:true});
   console.log(`Database connected succesfully`)
    } catch (error) {
        console.log(`Error while connected with the database`,error);
    }
}
export default Connection