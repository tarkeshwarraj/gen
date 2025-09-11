import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // put in .env.local
console.log("MongoDB URI:", uri);
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In dev, use a global variable so we don't reconnect every time
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In prod, just connect once
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
