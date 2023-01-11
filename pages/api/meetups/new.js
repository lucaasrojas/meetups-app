// /api/meetups/new
import { connectToDB } from "../../../utils/mongodb";
async function handler(req, res) {
    if (req.method === "POST") {
      const { client, db } = await connectToDB();

        const meetupsCollection = db.collection("meetups");

        const result = await meetupsCollection.insertOne(req.body);

        client.close();
        res.status(201).json(result);
    }
}

export default handler;
