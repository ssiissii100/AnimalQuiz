import { useEffect, useState } from "react";

export default function Finish({ timeSetter, time, name, points }) {
  //TODO
  //get points -> for points in fetch

  // let points = 0

  const [users, setUsers] = useState(null);
  const [sortedUsers, setSortedUsers] = useState(null);
  const [statusSort, setStatusSort] = useState(false);
  const [statusPost, setStatusPost] = useState(false);

  //Post current User
  if (users != null) {
    if (name != "" && time < 10000000 && time > 0) {
      if (statusPost == false) {
        fetch(`http://localhost:5000/users`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: name,
            time: time,
            points: points,
          }),
        })
          .then((res) => res.json())
          .then((response) => console.log("Success:", JSON.stringify(response)))
          .catch((error) => console.error("Error:", error));
        setStatusPost(true);
      }
    }
  }

  //Sort Users
  if (users != null) {
    if (statusSort == false) {
      setSortedUsers(
        users.sort((p1, p2) =>
          p1.points < p2.points ? 1 : p1.points > p2.points ? -1 : 0
        )
      );
      setStatusSort(true);
    }
  }

  //Get Users
  useEffect(() => {
    timeSetter(Date.now);
    fetch(`http://localhost:5000/user`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => console.error(error));
  }, [timeSetter]);

  let time2 = time.toString();

  return (
    <div className="finishContainer">
      <div className="yourResults">
        <h2>The result of {name}:</h2>
        <br />
        <span>Time: </span>
        <span>
          {time2.substr(0, time2.length - 3)}.{time2.slice(-3)} sec
        </span>
        <br />
        <span>Points: </span>
        <span>{points}</span>
      </div>
      <div className="bestResults">
        <h3>Best results:</h3>
        {sortedUsers != null ? (
          <>
            <p>
              1. {sortedUsers[0].username}: {sortedUsers[0].points} Points in{" "}
              {sortedUsers[0].time} milliseconds
            </p>
            <p>
              2. {sortedUsers[1].username}: {sortedUsers[1].points} Points in{" "}
              {sortedUsers[1].time} milliseconds
            </p>
            <p>
              3. {sortedUsers[2].username}: {sortedUsers[2].points} Points in{" "}
              {sortedUsers[2].time} milliseconds
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
