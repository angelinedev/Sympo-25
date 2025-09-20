import { i } from "framer-motion/client";

export const events = [
  {
    id: 1,
    name: "Technical",
    description: "This is technical event",
    image:
      "https://as1.ftcdn.net/v2/jpg/02/79/53/82/1000_F_279538277_XtP0y39Djzxx796KNKnUBgBSgnp7RQwo.jpg",
  },
  {
    id: 2,
    name: "Non-Technical",
    description: "This is cultural event",
    image:
      "https://hacktales.com.ng/wp-content/uploads/2022/05/non-tech-jobs.jpg",
  },
];
export const nonCircuit = [
  {
    id: 11,
    name: "Technical",
    description: "This is technical event",
    image:
      "https://as1.ftcdn.net/v2/jpg/02/79/53/82/1000_F_279538277_XtP0y39Djzxx796KNKnUBgBSgnp7RQwo.jpg",
  },
  {
    id: 12,
    name: "Non-Technical",
    description: "This is cultural event",
    image:
      "https://hacktales.com.ng/wp-content/uploads/2022/05/non-tech-jobs.jpg",
  },
];

export const circuittechnicalEvents = [
  {
    id: 1,
    label: "Energia Nova",
    onClick: () => alert("Energia Nova clicked"),
  },
  { id: 2, label: "Casse-dete", onClick: () => alert("Casse-dete clicked") },
  {
    id: 3,
    label: "Batallia de Robots",
    onClick: () => alert("Batallia de Robots clicked"),
  },
  { id: 4, label: "Tescaflow", onClick: () => alert("Tescaflow clicked") },
];

export const circuitnonTechnicalEvents = [
  { label: "Cinephilia", onClick: () => alert("Cinephilia clicked") },
  { label: "Mystery Vault", onClick: () => alert("Mystery Vault clicked") },
  { label: "Deadly Deeds", onClick: () => alert("Deadly Deeds clicked") },
  { label: "IPL Auction", onClick: () => alert("IPL Auction clicked") },
  { label: "BGMI", onClick: () => alert("BGMI clicked") },
  { label: "FREE FIRE ", onClick: () => alert("FREE FIRE clicked") },
];
