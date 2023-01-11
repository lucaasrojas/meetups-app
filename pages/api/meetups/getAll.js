import { connectToDB } from "../../../utils/mongodb";

async function getAll(req, res) {
  if (req.method === "GET") {
    const { client, db } = await connectToDB();

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
  const { client, db } = await connectToDB();


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
