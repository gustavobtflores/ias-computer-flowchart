import Flowchart from "@/components/Flowchart";
import clientPromise from "../../config/mongodb";

export default async function Home() {
  const client = await clientPromise;
  const nodesCollection = client.db("flowchart").collection("nodes");
  const nodes = JSON.parse(JSON.stringify(await nodesCollection.find({}).toArray()));

  return <Flowchart initialNodes={nodes} />;
}
