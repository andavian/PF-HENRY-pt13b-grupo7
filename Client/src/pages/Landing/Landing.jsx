import React from "react";
import style from "./Landing.module.css";

const contacts = [
  {
    name: "Gus Rodríguez",
    git: "gusrodzu",
    telefono: "81-11-85-8519",
    image: "https://avatars.githubusercontent.com/u/43864523?v=4"
  },
  {
    name: "Gus Rodríguez",
    git: "gusrodzu",
    telefono: "81-11-85-8519",
    image: "https://avatars.githubusercontent.com/u/43864523?v=4"
  },

  {
    name: "Gus Rodríguez",
    git: "gusrodzu",
    telefono: "81-11-85-8519",
    image: "https://avatars.githubusercontent.com/u/43864523?v=4"
  },

  {
    name: "Gus Rodríguez",
    git: "gusrodzu",
    telefono: "81-11-85-8519",
    image: "https://avatars.githubusercontent.com/u/43864523?v=4"
  },

  {
    name: "Gus Rodríguez",
    git: "gusrodzu",
    telefono: "81-11-85-8519",
    image: "https://avatars.githubusercontent.com/u/43864523?v=4"
  },

  // ... Añade más contactos según sea necesario
];

const Landing = () => {
  return (
    <div className={style.container}>
      <div className={style.containertext}>
        {contacts.map((contact, index) => (
          <div className={style.card} key={index}>
            <img
              src={contact.image}
              alt={`${contact.name}'s profile`}
              className={style.profileImage}
            />
            <h2>{contact.name}</h2>
            <p>GitHub: <a href={`https://github.com/${contact.git}`}>{contact.git}</a></p>
            <p>Teléfono: {contact.telefono}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
