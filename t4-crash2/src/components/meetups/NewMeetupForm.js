import { useRef } from "react";
import Card from "../ui/Card";
import "./newMeetupForm.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    // console.log(meetupData);
    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className="form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="title"> Meetup Title</label>
          <input type="text" required id="tile" ref={titleInputRef} />
        </div>
        <div className="control">
          <label htmlFor="image"> Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className="control">
          <label htmlFor="address"> Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className="control">
          <label htmlFor="description"> Meetup Description</label>
          <textarea
            type="text"
            required
            rows="5"
            id="description"
            ref={descriptionInputRef}
          />
        </div>
        <div className="actions">
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
