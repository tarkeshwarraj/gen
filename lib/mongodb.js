import mongoose from "mongoose";


const clientPromise = async() => {
    await mongoose.connect('mongodb+srv://vote_user:YvuGLTdUfQreOYs5@votecluster.fl2quyl.mongodb.net/?retryWrites=true&w=majority&appName=voteCluster'); // Where we provide collection name
    console.log("DB Connected")
}

export default clientPromise;