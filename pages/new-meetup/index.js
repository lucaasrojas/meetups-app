import { useRouter } from "next/router";
import CustomHead from "../../components/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const router = useRouter();
    async function addMeetupHandler(newMeetup) {

        const response = await fetch("/api/meetups/new", {
            method: "POST",
            body: JSON.stringify(newMeetup),
            headers: {
                "Content-Type": "application/json",
            },
        });
        router.push("/");
    }
    return <>
    <CustomHead title="Add new meetup"/>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>;
}

export default NewMeetupPage;
