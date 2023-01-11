import { MongoClient } from "mongodb";

async function getAll(req, res) {
    if (req.method === "GET") {
        const client = await MongoClient.connect(
            "mongodb+srv://lucas:admin123@cluster0.g7je4iq.mongodb.net/meetups?retryWrites=true&w=majority"
        );

        const db = client.db();

        const meetupsCollection = db.collection("meetups");
        const response = await meetupsCollection.find().toArray();

        const newMeetups = response.map((meetup) => ({
            title: meetup.title,
            image: meetup.image,
            address: meetup.address,
            id: meetup._id.toString(),
        }));
        client.close();

        res.status(200).json({ response: newMeetups });
    }
}

export async function getMeetups() {
    const client = await MongoClient.connect(
        "mongodb+srv://lucas:admin123@cluster0.g7je4iq.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const response = await meetupsCollection.find().toArray();

    const newMeetups = response.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
    }));
    client.close();

    return newMeetups;
}

export default getAll;
