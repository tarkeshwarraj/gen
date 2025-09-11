import { MongoClient } from "mongodb";

// Direct MongoDB URI (⚠️ security risk if repo is public)
const uri =
  "mongodb+srv://vote_user:YvuGLTdUfQreOYs5@votecluster.fl2quyl.mongodb.net/voteCluster";

const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error("MongoDB URI is missing");
}

if (process.env.NODE_ENV === "development") {
  // In dev, use a global variable so we don't reconnect every time
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, always connect fresh
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

