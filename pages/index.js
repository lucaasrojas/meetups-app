import MeetupList from "../components/meetups/MeetupList";
import { connectToDB } from "../utils/mongodb";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A First Meetup",
        image: "https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/257688336_10165917578110652_7403311005702346527_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHsgd2nRawzK02eR_tx6LzgUwSQtlK8UxpTBJC2UrxTGstUjBBWl4f0iiqXSsjNU-PoIpJNP4lIIugg1FOtZ_12&_nc_ohc=SZAltNXrM3QAX9poOBn&_nc_ht=scontent.faep8-1.fna&oh=00_AfAcvTfbyOMYoYs10nIPwuV1lD_uiX-1wp0THQHwyAsnZw&oe=63B1E296",
        address: "Some address 5, 12345 SomeCity",
        description: "Just a meetup",
    },
    {
        id: "m2",
        title: "Antoher Meetup",
        image: "https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/257688336_10165917578110652_7403311005702346527_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHsgd2nRawzK02eR_tx6LzgUwSQtlK8UxpTBJC2UrxTGstUjBBWl4f0iiqXSsjNU-PoIpJNP4lIIugg1FOtZ_12&_nc_ohc=SZAltNXrM3QAX9poOBn&_nc_ht=scontent.faep8-1.fna&oh=00_AfAcvTfbyOMYoYs10nIPwuV1lD_uiX-1wp0THQHwyAsnZw&oe=63B1E296",
        address: "Some address 5, 12345 SomeCity",
        description: "Just a meetup",
    },
    {
        id: "m3",
        title: "Other meetup",
        image: "https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/257688336_10165917578110652_7403311005702346527_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHsgd2nRawzK02eR_tx6LzgUwSQtlK8UxpTBJC2UrxTGstUjBBWl4f0iiqXSsjNU-PoIpJNP4lIIugg1FOtZ_12&_nc_ohc=SZAltNXrM3QAX9poOBn&_nc_ht=scontent.faep8-1.fna&oh=00_AfAcvTfbyOMYoYs10nIPwuV1lD_uiX-1wp0THQHwyAsnZw&oe=63B1E296",
        address: "Some address 5, 12345 SomeCity",
        description: "Just a meetup",
    },
];

function HomePage(props) {
    console.log("HOME", props);
    return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
    const { client, db } = await connectToDB();
    const meetupsCollection = db.collection("meetups");
    const response = await meetupsCollection.find().toArray();
    console.log("GET ALL", response);
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
