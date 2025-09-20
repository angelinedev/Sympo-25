import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/escaperoom.png";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const EscapeRoom = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        scale: 1.06,
        glare: true,
        "max-glare": 0.28
      });
    }
  }, []);

  const sectionCards = [
    {
      icon: "📜",
      heading: "Event Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          Escape Room 2.O is designed to challenge participants’ technical knowledge, decoding skills, logical reasoning, and problem-solving abilities through a two-stage competition. The event is designed to test quick thinking with technical MCQs and analytical ability in an immersive escape room challenge, where participants must decode puzzles, analyze clues, and apply technical knowledge under pressure. This fosters creativity, critical thinking, and decision-making in a fun yet competitive environment.
        </p>
      ),
      key: "description"
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          Test your technical skills and problem-solving power in this two-stage challenge! Start with rapid-fire MCQs, then enter an immersive escape room where logic, clues, and teamwork are your keys to victory. Decode, analyse, and beat the clock — only the sharpest minds will make it out!
        </p>
      ),
      key: "objective"
    },
    {
      icon: "📋",
      heading: "Event Rounds",
      content: (
        <ul className="list-none space-y-4 text-base md:text-lg">
          <li className="flex flex-col items-start gap-2 p-4 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center gap-2 font-bold text-lg md:text-xl">
              <span className="text-blue-400">📚</span> Round 1: Technical MCQ Round
            </div>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Format: The round will consist of multiple-choice questions on technical topics.</li>
              <li>Shortlisting: Top participants will be shortlisted based on their scores.</li>
            </ul>
          </li>
          <li className="flex flex-col items-start gap-2 p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border-l-4 border-purple-400">
            <div className="flex items-center gap-2 font-bold text-lg md:text-xl">
              <span className="text-purple-400">🔓</span> Round 2: Escape Room Challenge
            </div>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Objective: Participants will be required to solve puzzles and challenges in the escape room to escape within the given time limit.</li>
              <li>Winning Criteria: The participant who escapes the room in the shortest time or solves the highest number of puzzles will be considered the winner.</li>
            </ul>
          </li>
        </ul>
      ),
      key: "rounds"
    },
    {
      icon: "📜",
      heading: "Rules and Regulations",
      content: (
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
          <li><strong>Participation:</strong> Each participant must register individually and participate solo.</li>
          <li><strong>Conduct:</strong> Participants must be respectful and courteous towards other participants, judges, and event staff.</li>
          <li><strong>Decision of Judges:</strong> The decision of the judges will be final and binding.</li>
          <li><strong>No AI:</strong> No use of artificial intelligence or automated tools.</li>
          <li><strong>No Collaboration:</strong> Participants must work individually and not collaborate with others.</li>
          <li><strong>No Damage:</strong> Participants must not damage or attempt to damage the escape room or its contents.</li>
          <li><strong>Disqualification:</strong> Participants found guilty of misconduct will be disqualified.</li>
          <li><strong>Penalties:</strong> Possible penalties include time penalties or other consequences.</li>
        </ul>
      ),
      key: "rules"
    },
    {
      icon: "⚖️",
      heading: "Judging Criteria",
      content: (
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
          <li>Winners will be selected depending upon the number of challenges solved in the shortest period of time.</li>
          <li>The decision of the judges will be final.</li>
          <li>If found guilty of any malpractice, the team will be immediately disqualified, and will not be considered for judging.</li>
        </ul>
      ),
      key: "judging"
    },
    {
      icon: "📞",
      heading: "Contact Information",
      content: (
        <div className="text-base md:text-lg leading-relaxed p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
          <div className="mb-3 font-semibold text-accent">Staff Incharge:</div>
          <div className="space-y-1 mb-4">
            <div>Ms. S. Preethi Parameshwari</div>
            <div>Ms. S. Sandhiyaa</div>
          </div>
          <div className="mb-2 font-semibold text-accent">Student Coordinators:</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Mr. Subadevan C - III CS: </span>
              <a href="tel:+91863760748" className="text-accent hover:underline">863760748</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Ms. Nivethithaa S - II CS: </span>
              <a href="tel:+918925651912" className="text-accent hover:underline">8925651912</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Mr. Rohan S - II CS: </span>
              <a href="tel:+918220849281" className="text-accent hover:underline">8220849281</a>
            </div>
          </div>
        </div>
      ),
      key: "contact"
    },
    {
      icon: "🏛️",
      heading: "Event Footer",
      content: (
        <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
          <p className="text-base md:text-lg leading-relaxed italic">
            Organized under <span className="font-bold text-primary">TECHNOVANZA 2025-26</span>: An Inter Collegiate National Level Technical Symposium at <span className="font-bold text-accent">Jerusalem College of Engineering, Pallikaranai, Chennai</span>.
          </p>
        </div>
      ),
      key: "footer"
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto p-6 gap-10 bg-gradient-to-br from-navy-900 via-blue-900 to-indigo-900 rounded-xl shadow-2xl backdrop-blur min-h-screen">
      <motion.div
        ref={tiltRef}
        className="lg:w-1/2 w-full flex justify-center items-center lg:sticky lg:top-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative">
          <img
            src={EventImage}
            alt="Escape Room 2.0 Event"
            className="w-5/6 md:w-4/5 lg:w-full object-cover rounded-2xl shadow-2xl border-4 border-gradient"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
        </div>
      </motion.div>

      <div className="lg:w-4/6 w-full flex flex-col gap-6 overflow-auto custom-scrollbar pb-3" style={{ maxHeight: "calc(100vh - 60px)" }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold gradient-text drop-shadow-lg mb-2">
            ✨ Escape Room 2.0
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">Event Rules and Guidelines 🎉</p>
        </motion.div>

        {sectionCards.map((card, i) => (
          <motion.div
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            key={card.key}
            className="glass-container px-6 py-5 rounded-xl shadow-glass border border-white/10 bg-black/30 backdrop-blur-md hover:bg-black/40 transition-all duration-300"
          >
            <div className="flex items-center mb-4 gap-3">
              <span className="text-3xl">{card.icon}</span>
              <h2 className="text-2xl md:text-3xl font-bold gradient-text">{card.heading}</h2>
            </div>
            <div className="text-gray-100">{card.content}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EscapeRoom;