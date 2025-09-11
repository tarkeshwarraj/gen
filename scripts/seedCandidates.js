import 'dotenv/config';   // <-- this loads your .env.local automatically
import clientPromise from "../lib/mongodb.js";

async function seed() {
  console.log("MongoDB URI:", process.env.MONGODB_URI); // check if loaded

  if (!process.env.MONGODB_URI) {
    throw new Error("Please add your MongoDB URI to .env.local");
  }

  const client = await clientPromise;
  const db = client.db("votingDB");

  await db.collection("candidates").deleteMany({}); // clear old data
  await db.collection("candidates").insertMany([
    { id: "person1", name: "Person 1", img: "/p1.jpg" },
    { id: "person2", name: "Person 2", img: "/p2.jpg" },
    { id: "person3", name: "Person 3", img: "/p3.jpg" },
    { id: "person4", name: "Person 4", img: "/p4.jpg" },
    { id: "person5", name: "Person 5", img: "/p5.jpg" },
    { id: "person6", name: "Person 6", img: "/p6.jpg" },
  ]);

  console.log("✅ Candidates inserted!");
  process.exit();
}

seed();
