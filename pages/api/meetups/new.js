// /api/meetups/new
import { MongoClient } from "mongodb";
async function handler(req, res) {
    if (req.method === "POST") {
        const client = await MongoClient.connect(
            "mongodb+srv://lucas:admin123@cluster0.g7je4iq.mongodb.net/meetups?retryWrites=true&w=majority"
        );

        const db = client.db();

        const meetupsCollection = db.collection("meetups");

        const result = await meetupsCollection.insertOne(req.body);
        console.log(result);

        client.close();
        res.status(201).json(result);
    }
}

export default handler;
