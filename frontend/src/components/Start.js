import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Start({ nameSetter, timeSetter }) {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");

/**
 * The function enables the start button if the input field is not empty.
 */
  function enableBtn() {
    let inputName = document.getElementById("inputName").value;
    if (inputName !== "") {
      setUserName(inputName);
      document.getElementById("startBtn").disabled = false;
    } else {
      document.getElementById("startBtn").disabled = true;
    }
  }

  function getStartTime() {
    if (userName !== "") {
      navigate("/quiz");
      //useNavigate() zu Auswahl
    }
  }

/* Setting the name and the time. */
  useEffect(() => {
    nameSetter(userName);
    timeSetter(Date.now);
  }, [nameSetter, userName]);

  return (
    <div className="startContainer">
      <h1 className="startHeader">Animal Quiz</h1>
      <button onClick={getStartTime} id="startBtn">
        Start the Quiz
      </button>
      <br />
      <input onBlur={enableBtn} id="inputName" placeholder="name..."></input>
    </div>
  );
}
