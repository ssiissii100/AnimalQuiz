import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Start({nameSetter, timeSetter}) {
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");

    function enableBtn() {
        let inputName = document.getElementById("inputName").value
        if(inputName !== ""){
            setUserName(inputName);
            document.getElementById("startBtn").disabled = false
        } else {
            document.getElementById("startBtn").disabled = true
        }
    }

    function getStartTime() {
        if(userName !== ""){
            navigate('/test')
            //useNavigate() zu Auswahl
        }
    }


    useEffect(() => {
        nameSetter(userName);
        timeSetter(Date.now)
    }, [nameSetter, userName])

   

    return(
        <>
            <button onClick={getStartTime} id="startBtn">Start the Quiz</button>
            <br/>
            <input onBlur={enableBtn} id="inputName"></input>
        </>
    )
}