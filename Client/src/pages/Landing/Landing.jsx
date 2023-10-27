import React from "react";
import style from "./Landing.module.css";

const contacts = [
  {
    name: "Anibal Elbaum",
    git: "andavian",
    telefono: "+54 9 351 285-7486",
    image: "https://avatars.githubusercontent.com/u/122112419?v=4",
    flag: "🇦🇷",
  },
  {
    name: "Roger Arrossagaray",
    git: "rogerrodrigoarrossagaray",
    telefono: "+54 9 11 3628-8126",
    image: "https://avatars.githubusercontent.com/u/128270253?v=4",
    flag: "🇦🇷",
  },

  {
    name: "Gus Rodríguez",
    git: "gusrodzu",
    telefono: "+52 1 81 1185 8519",
    image: "https://avatars.githubusercontent.com/u/43864523?v=4",
    flag: "🇲🇽",
  },

  {
    name: "Fernando Aramayo",
    git: "Plushstp",
    telefono: "+54 9 351 670-8820",
    image: "https://avatars.githubusercontent.com/u/116535780?v=4",
    flag: "🇦🇷",
  },

  {
    name: "Tattiana Angulo ",
    git: "MisaBathory05",
    telefono: "+57 316 8709746",
    image:
      "https://i.pinimg.com/236x/2a/2e/7f/2a2e7f0f60b750dfb36c15c268d0118d.jpg",
    flag: "🇨🇴",
  },
];

const Landing = () => {
  return (
    <div className={style.container}>
      <h2>Bienvenidos a Henrystore.com</h2>

      <p className={style.introText}>
        Somos la plataforma de
        comercio electrónico oficial de la comunidad "Soy Henry".<br></br> Este proyecto
        está desarrollado por el Grupo 7 en la cohorte pt13b.
      </p>

      
      <div className={style.containertext}>
        {contacts.map((contact, index) => (
          <div className={style.card} key={index}>
            <img
              src={contact.image}
              alt={`${contact.name}'s profile`}
              className={style.profileImage}
            />
            <h2 className={style.flag}>{contact.flag}</h2>

            <h2 >{contact.name}</h2>
            <p>
              GitHub:{" "}
              <a className={style.link} href={`https://github.com/${contact.git}`}>{contact.git}</a>
            </p>
            <p className={style.link}>Teléfono: {contact.telefono}</p>
          </div>
        ))}
      </div>
      <p className={style.introText}>
        Henrystore.com es una plataforma de comercio electrónico especializada
        en la venta de productos con el branding "Soy Henry". Dirigida tanto a
        nuestra comunidad de estudiantes, instructores y graduados, como al
        público en general. Nuestro objetivo es ofrecer una amplia gama de
        artículos promocionales de alta calidad que incluyen ropa, hardware
        personalizado y una variedad de productos adicionales.
      </p>


    </div>
  );
};

export default Landing;
