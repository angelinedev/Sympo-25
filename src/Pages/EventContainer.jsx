import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import eventPoster from "../assets/symposium/overAll.jpg";
import VoltageButton from "../Components/VoltageButton"; 

const EventContainer = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 3, 
        speed: 10, 
        glare: false, 
      });
    }
  }, []);

  return (
    <div className="px-5 min-h-screen flex flex-col justify-start items-center"> 
      <div className="flex justify-center mt-11 mb-10">
        <div className="tilt-container overflow-hidden shadow-md">
          <img
            src={eventPoster}
            className="w-full h-auto sm:max-w-[360px] md:max-w-[480px] lg:max-w-[600px] xl:max-w-[700px]"
            alt="Event Poster"
          />
        </div>
      </div>
      
      {/* Container with a unique class for styling overrides */}
      <div className="event-buttons-container flex flex-col sm:flex-row justify-center items-center gap-8 mt-5">
        {/* Track I */}
        <div className="flex flex-col items-center">
          <Link to="/track1">
            <VoltageButton
              label={
                <span style={{
                  fontFamily: 'collegefont',
                  fontWeight: 'bold',
                  letterSpacing: '0.07em',
                  fontSize: '25px',
                }}>Track I</span>
              }
            />
          </Link>
          <p className="text-white text-center mt-2" style={{ 
              fontFamily: 'collegefont', 
              fontSize: '15px', 
              lineHeight: '1.2'
            }}>
              <br />
              <br />
            (AIDS, AIML, CSE, CS, CSBS, IT)
          </p>
        </div>

        {/* Track II */}
        <div className="flex flex-col items-center">
          <Link to="/track2">
            <VoltageButton
              label={
                <span style={{
                  fontFamily: 'collegefont',
                  fontWeight: 'bold',
                  letterSpacing: '0.07em',
                  fontSize: '25px',
                }}>Track II</span>
              }
            />
          </Link>
          <p className="text-white text-center mt-2" style={{ 
              fontFamily: 'collegefont', 
              fontSize: '15px', 
              lineHeight: '1.2'
            }}>
              <br />
              <br />
            (BME, ECE, EEE, MBA)
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventContainer;