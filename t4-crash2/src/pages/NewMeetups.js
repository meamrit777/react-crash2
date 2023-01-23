import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
const NewMeetups = () => {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    // fetch("https://react-crash2-default-rtdb.firebaseio.com/meetups.json", {
    fetch("https://kendogridcrud-default-rtdb.firebaseio.com/form.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "conten-type": "application/json",
      },
    }).then(() => {
      navigate("/");
      // console.log(meetupData);
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetups;
