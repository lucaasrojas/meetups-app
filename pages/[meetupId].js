// import { MongoClient } from "mongodb";

import CustomHead from "../components/head";
import MeetupDetail from "../components/meetups/MeetupDetail";
import { connectToDB, ObjectId } from "../utils/mongodb";

function MeetupDetailPage(props) {
    const { image, title, description, address } = props.meetupData;
    return (
        <>
        <CustomHead title={title} description={description} />
            <MeetupDetail
                image={image}
                title={title}
                description={description}
                address={address}
            />
        </>
    );
}
export async function getStaticPaths() {
    const { client, db } = await connectToDB();

    const meetupsCollection = db.collection("meetups");
    const response = await meetupsCollection.find({}, { _id: 1 }).toArray();
    client.close();
    return {
        paths: response.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
        })),
        // paths: [],
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { client, db } = await connectToDB();
    const meetupId = context.params.meetupId;
    const meetupsCollection = db.collection("meetups");
    const response = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

    client.close();
    return {
        props: {
            meetupData: response ? {
                id: response._id.toString(),
                title: response.title,
                image: response.image,
                address: response.address,
                description: response.description,
            } : {},
        },
    };
}
export default MeetupDetailPage;
