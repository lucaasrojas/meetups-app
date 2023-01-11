import { MongoClient } from "mongodb";

export async function connectToDB() {
    const client = await MongoClient.connect(
        "mongodb+srv://lucas:admin123@cluster0.g7je4iq.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    return { client, db };
}
