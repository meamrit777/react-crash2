import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-crash2-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>laoding...</p>
      </section>
    );
  }
  return (
    <section>
      <div>AllMeetups</div>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetups;
