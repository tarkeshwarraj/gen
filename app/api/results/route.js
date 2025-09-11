import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("votingDB");
    const votes = db.collection("votes");

    const results = await votes
      .aggregate([{ $group: { _id: "$choice", count: { $sum: 1 } } }])
      .toArray();

    const formatted = results.reduce((acc, item) => {
      acc[item._id] = item.count;
      return acc;
    }, {});

    return NextResponse.json({ results: formatted });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
