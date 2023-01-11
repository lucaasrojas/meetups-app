import { MongoClient, ObjectId as MObjectId } from "mongodb";

export async function connectToDB() {

  const client = await MongoClient.connect(
          `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g7je4iq.mongodb.net/meetups?retryWrites=true&w=majority`
    );

    const db = client.db();

    return { client, db };
}

export const ObjectId = MObjectId
