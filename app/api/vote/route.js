import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { choice } = body;

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.ip ||
      "unknown";

    if (!choice) {
      return NextResponse.json({ error: "Missing choice" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("votingDB");
    const votes = db.collection("votes");

    // Update existing vote or insert new one
    await votes.updateOne(
      { ip_address: ip },
      {
        $set: {
          ip_address: ip,
          choice,
          updatedAt: new Date(),
        },
        $setOnInsert: { createdAt: new Date() },
      },
      { upsert: true }
    );

    return NextResponse.json({ success: true, choice });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
