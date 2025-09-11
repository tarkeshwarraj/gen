import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("votingDB");
    const votes = db.collection("votes");

    // Aggregate vote counts per candidate
    const pipeline = [
      { $group: { _id: "$choice", count: { $sum: 1 } } }
    ];

    const results = await votes.aggregate(pipeline).toArray();

    // Convert array into object { candidateId: voteCount }
    const formatted = results.reduce((acc, curr) => {
      acc[curr._id] = curr.count;
      return acc;
    }, {});

    return NextResponse.json({ results: formatted });
  } catch (err) {
    console.error("Results API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
