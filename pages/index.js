import CustomHead from "../components/head";
import MeetupList from "../components/meetups/MeetupList";
import { connectToDB } from "../utils/mongodb";

function HomePage(props) {

  return <>
    <CustomHead description="All my meetups" />
    <MeetupList meetups={props.meetups} />
  </>;
}

export async function getServerSideProps() {
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
  return {
    props: {
      meetups: newMeetups,
    },
  };
}

export default HomePage;
