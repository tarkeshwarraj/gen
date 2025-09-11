import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { choice } = body;

    if (!choice) {
      return NextResponse.json({ error: "Missing choice" }, { status: 400 });
    }

    // Get user IP properly (works on Vercel & localhost)
    const forwarded = req.headers.get("x-forwarded-for");
    const userIp = forwarded ? forwarded.split(",")[0] : "unknown";

    const client = await clientPromise;
    const db = client.db("votingDB");
    const votes = db.collection("votes");

    // Update existing vote or insert new one
    await votes.updateOne(
      { ip_address: userIp },
      {
        $set: {
          ip_address: userIp,
          choice,
          updatedAt: new Date(),
        },
        $setOnInsert: { createdAt: new Date() },
      },
      { upsert: true }
    );

    return NextResponse.json({ success: true, choice });
  } catch (err) {
    console.error("Vote API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
