import { NextResponse } from "next/server";
import clientPromise from "../../../config/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  const client = await clientPromise;
  const db = client.db("flowchart");
  const collection = db.collection("nodes");
  const body = await req.json();

  body.forEach((node: { _id: any }) => {
    if (!node._id) {
      node._id = new ObjectId().toString();
    }
  });

  const replaceOps = body.map((node: { _id: any }) => {
    return {
      replaceOne: {
        filter: { _id: node._id },
        replacement: node,
        upsert: true,
      },
    };
  });

  await collection.bulkWrite(replaceOps);

  return NextResponse.json({ message: "Documents replaced" });
}
