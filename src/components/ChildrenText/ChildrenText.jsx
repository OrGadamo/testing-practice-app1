import { useState } from "react";
import "./ChildrenText.css";

function ChildrenText() {
  let [userName, setName] = useState("");
  const handleInputChange = (event) => {
    userName = event.target.value;
  };
  const handleSubmitClick = () => {
    setName(userName);
  };
  return (
    <section className="children-text">
      <span className="span-text" data-testid="children_txt">
        Hello Children
      </span>
      <div>
        <button className="button-style" data-testid="children-button">
          Get Children
        </button>
      </div>
      <div>
        <label htmlFor="name_input">Enter First Name</label>
        <input
          type="text"
          id="name_input"
          placeholder="Enter First Name"
          data-testid="name_test_input"
          onChange={handleInputChange}
        />
        <button data-testid="submit_btn_test" onClick={handleSubmitClick}>
          click to submit
        </button>
      </div>
      <div>
        {userName ? (
          <h1 data-testid="h1_welcome_message">Hello {userName}</h1>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default ChildrenText;
