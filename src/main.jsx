import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import Error from "./Components/Error.jsx";
import "./styles/eventStyles.css"; 

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Pages/Body.jsx";

import EventContainer from "./Pages/EventContainer.jsx";



import Circuit from "./Pages/Circuit.jsx";

import NonCircuit from "./Pages/NonCircuit.jsx";
import NewAbout from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";

import TeamCarousel from "./Pages/TeamCarousel.jsx";
import Cinephilia from "./Pages/EventDesc/Track1/Cinephilia.jsx";
import CueBattle from "./Pages/EventDesc/Track1/CueBattle.jsx";
import EscapeRoom from "./Pages/EventDesc/Track1/EscapeRoom.jsx";
import Flipster from "./Pages/EventDesc/Track1/Flipster.jsx";
import Gigzup from "./Pages/EventDesc/Track1/Gigzup.jsx";
import SynaptiQ from "./Pages/EventDesc/Track1/SynaptiQ.jsx";
import TriSpark from "./Pages/EventDesc/Track1/TriSpark.jsx";
import VizYourWay from "./Pages/EventDesc/Track1/VizYourWay.jsx";
import AmpItUpArena from "./Pages/EventDesc/track2/Ampituparena.jsx";
import BioMystic from "./Pages/EventDesc/track2/BioMystic.jsx";
import Deadlydeeds from "./Pages/EventDesc/track2/Deadlydeeds.jsx";
import Potpurri from "./Pages/EventDesc/track2/Potpurri.jsx";
import Thinktank from "./Pages/EventDesc/track2/Thinktank.jsx";
import Nexus from "./Pages/EventDesc/track2/Nexus.jsx";
import Tracktron from "./Pages/EventDesc/track2/TrackOTron.jsx";
import Site2Sync from "./Pages/EventDesc/Track1/Site2Sync.jsx";
import Oratio from "./Pages/EventDesc/Track1/Oratio.jsx";
import Obstackle from "./Pages/EventDesc/Track1/Obstackle.jsx";
import TeamPage from "./Pages/team.jsx";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/events",
        element: <EventContainer />,
      },
      
      {
        path: "/circuit",
        element: <Circuit />,
      },
      
      {
        path: "/track2",
        element: <Circuit />,
      },
     
      {
        path: "/track1",
        element: <NonCircuit />,
      },
    

      {
        path: "/about",
        element: <NewAbout />,
      },
     {
        path: "/teams",
        element: <TeamPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      
      {
        path: "/team",
        element: <TeamCarousel/>,
      },
      {
        path: "/gigzup",
        element: <Gigzup />,
      },
      {
        path: "/synaptiq",
        element: <SynaptiQ />,
      },
      {
        path: "/flipster",
        element: <Flipster />,
      },
      {
        path: "/escaperoom",
        element: <EscapeRoom />,
      },
      {
        path: "/cuebattle",
        element: <CueBattle />,
      },
      {
        path: "/triSpark",
        element: <TriSpark />,
      },
      {
        path: "/flipster",
        element: <Flipster />,
      },
      {
        path: "/vizyourway",
        element: <VizYourWay />,
      },
      {
        path: "/cinephilia",
        element: <Cinephilia />,
      },
      {
        path: "/cinephilia",
        element: <Cinephilia />,
      },
      {
        path: "/ampItUpArena",
        element: <AmpItUpArena />,
      },
      {
      path: "/bioMystic",
      element: <BioMystic/>,
      },
      {
      path: "/deadlydeeds",
      element: <Deadlydeeds/>,
      },
      {
      path: "/nexus",
      element: <Nexus/>,
      },
      {
      path: "/potpurri",
      element: <Potpurri/>,
      },
      {
      path: "/thinktank",
      element: <Thinktank/>,
      },

      {
      path: "/tracktron",
      element: <Tracktron />,
      },
{
      path: "/site2Sync",
      element: <Site2Sync />,
      },
      {
        path: "/oratio",
        element: <Oratio />,
        },
        {
          path: "/obstackle",
          element: <Obstackle />,
          },


    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={appRouter} />
  </>
);
