import { useEffect } from "react"

export default function Finish({timeSetter, time, name}) {

    //create DB entrie for user and time
    //get DB entries for top 3 times

    useEffect(()=> {
        timeSetter(Date.now);
    }, [timeSetter])

    let time2 = time.toString();

    return(
        <div className="finishContainer">
            <div className="yourResults">
                <h2>The result of {name}:</h2>
                <br/>
                <span>Time: </span>
                <span>{time2.substr(0, time2.length - 3)}.{time2.slice(-3)} sec</span>
                <br/>
                <span>Points: </span>
                <span>1</span>
            </div>
            <div className="bestResults">
                <h3>Best results:</h3>
                <ul>
                    <p>1. {name}: x Points in {time} </p>
                    <p>2. Peter: x Points in {time} </p>
                    <p>3. Hans: x Points in {time} </p>
                </ul>
            </div>
        </div>
    )
}