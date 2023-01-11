import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const router = useRouter();
    async function addMeetupHandler(newMeetup) {
        console.log(newMeetup);
        const response = await fetch("/api/meetups/new", {
            method: "POST",
            body: JSON.stringify(newMeetup),
            headers: {
                "Content-Type": "application/json",
            },
        });
        router.push("/");
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
