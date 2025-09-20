import React from "react";
import "../text.css"; // Ensure this file contains any other necessary styling
import Card from "./Card";
import Image from "../utils/Img/TechLogo.jpg";
import bgmi from "../assets/symposium/Old/BGMI_FINAL.jpg";
import ff from "../assets/symposium/Old/NewFreeFire.jpg";
import cini from "../assets/symposium/Sympo'25/Track1/Cinephilia.jpg";
import GIGZUP from "../assets/symposium/Sympo'25/Track1/GIGZUP.jpg";
import CUEBATTLE from "../assets/symposium/Sympo'25/Track1/CUEBATTLE.png"
import dEADLYDEEDS from "../assets/symposium/Sympo'25/Track2/dEADLYDEEDS.jpeg"
import randomColor from "randomcolor";
import POTPURRI from "../assets/symposium/Sympo'25/Track2/POTPURRI.png"
import OBSSTACKLE from "../assets/symposium/Sympo'25/Track1/OBS-TACKLE RACE.jpg"

import { Link } from "react-router-dom";
import { Import } from "lucide-react";
// import "./NonCircuitnTech.css";

const NonCircuitnTech = () => {
  const color = randomColor();
  const circuittechnicalEvents = [
    {
      id: 1,
      imageSrc: cini,
      altText: "Cinephilia",
      path: "/cinephilia",
    },
    {
          id: 2,
          imageSrc: GIGZUP,
          altText: "GIGZUP",
          label: "GIGZUP",
          path: "/gigzup",
          
    },
    {
          id: 5,
          imageSrc: CUEBATTLE,
          altText: "CUEBATTLE",
          label: "CUEBATTLE",
          path: "/cuebattle",
         
        },
   {
         id: 3,
         imageSrc: dEADLYDEEDS, 
         altText: "Deadly Deeds",
         label: "Deadly Deeds",
         path: "/deadlydeeds",
       },
   {
         id:4 ,
         imageSrc: POTPURRI, 
         altText: "POTPURRI",
         label: "POTPURRI",
         path: "/potpurri",
       }, 
       {
        id:5 ,
        imageSrc: OBSSTACKLE, 
        altText: "POTPURRI",
        label: "POTPURRI",
        path: "/obstackle",
      },     
    
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h3
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-white uppercase event-text tracking-widest"
        style={{
          textShadow: `2px 2px 15px ${color}`,
        }}
      >
        Non Technical Events
      </h3>

      <div>
        <main className="card-container gap-10 flex flex-wrap justify-center w-full">
          {/* Loop through each event and render a Card */}
          {circuittechnicalEvents.map((card) => (
            <Link to={card.path} key={card.id}>
              <Card imageSrc={card.imageSrc} altText={card.altText} />
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
};

export default NonCircuitnTech;
