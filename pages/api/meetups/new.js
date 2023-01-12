// /api/meetups/new
import { connectToDB } from "../../../utils/mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const { client, db } = await connectToDB();

    const meetupsCollection = db.collection("meetups");
    try {
      const result = await meetupsCollection.insertOne(req.body);
      client.close();
      res.status(201).json(result);
    } catch (error) {
      throw new Error(result)
    }

  }
}

export default handler;
