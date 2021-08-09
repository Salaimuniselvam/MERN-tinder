import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "../css/TinderCards.css";
import axios from "axios";

function TinderCards() {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://localhost:7001/tinder");
      setPerson(req.data);
    }
    fetchData();
  }, []);
  console.log(person);

  return (
    <div className="tenderCard">
      <div className="container">
        {person.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${person.imgUrl} ) ` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
