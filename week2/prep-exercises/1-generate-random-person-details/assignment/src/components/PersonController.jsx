import { useState, useEffect } from "react";
import Person from "./Person";

const PersonController = () => {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api");
      const data = await response.json();

      const personData = {
        firstName: data.results[0].name.first,
        lastName: data.results[0].name.last,
        email: data.results[0].email,
      };

      setPerson(personData);
    } catch (error) {
      console.error("Failed to fetch person:", error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  return person ? <Person person={person} /> : <p>Loading...</p>;
};

export default PersonController;
