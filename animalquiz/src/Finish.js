import { useEffect } from "react"

export default function Finish({timeSetter, time, name}) {

    //create DB entrie for user and time
    //get DB entries for top 3 times

    useEffect(()=> {
        timeSetter(Date.now);
    }, [timeSetter])

    return(
        <>
            {name}
            <br/>
            Time:
            {time}
        </>
    )
}