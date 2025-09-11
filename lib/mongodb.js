import { MongoClient } from "mongodb";

const uri = "mongodb+srv://vote_user:1sA8TMXbsBNdCxKe@votecluster.mongodb.net/votingDB?retryWrites=true&w=majority";
const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local or hardcode temporarily.");
}

if (process.env.NODE_ENV === "development") {
  // Use a global variable to avoid multiple connections in dev
  if (!global._mongoClient) {
    client = new MongoClient(uri, options);
    global._mongoClient = client;  // ✅ keep client
  }
  clientPromise = global._mongoClient.connect();
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
