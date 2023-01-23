import { useRef } from "react";
import Card from "../ui/Card";
import "./newMeetupForm.css";
import Category from "./Category.json";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef([]);
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    console.log(enteredImage);
    const meetupData = {
      // title: enteredTitle,
      // image: enteredImage,
      // address: enteredAddress,
      // description: enteredDescription,
      ProductName: enteredTitle,
      Category: enteredImage,
      UnitPrice: enteredAddress,
      UnitsInStock: enteredDescription,
    };
    console.log(meetupData);
    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      {/* <form className="form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="title"> Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
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
      </form> */}
      <form className="form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="ProductName"> ProductName</label>
          <input type="string" required id="ProductName" ref={titleInputRef} />
        </div>
        <div className="control">
          <label htmlFor="CategoryName">CategoryName</label>
          {/* <input type="string" required id="CategoryName" ref={imageInputRef} /> */}
          <select ref={imageInputRef}>
            {Category.map((Category) => {
              return (
                <option key={Category.CategoryID} value={Category.CategoryName}>
                  {Category.CategoryName}
                </option>
              );
            })}
          </select>
        </div>
        <div className="control">
          <label htmlFor="UnitPrice"> UnitPrice</label>
          <input type="number" required id="UnitPrice" ref={addressInputRef} />
        </div>
        <div className="control">
          <label htmlFor="UnitsInStock"> UnitsInStock</label>
          <input
            type="number"
            required
            id="UnitsInStock"
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
