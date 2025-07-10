import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { hackathons } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const HackathonsCard = ({ hackathon }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={hackathon.date}
      iconStyle={{ background: hackathon.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={hackathon.icon}
            alt={hackathon.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{hackathon.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {hackathon.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {hackathon.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

      {hackathon.link && (
        <a
          href={hackathon.link}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-400 mt-6 inline-block text-sm'
        >
          🔗 View Project
        </a>
      )}
      {hackathon.submission && (
        <a
          href={hackathon.submission}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-400 mt-4 ml-9 inline-block text-sm'
        >
           View Submission
        </a>
      )}
      {hackathon.demo && (
        <a
          href={hackathon.demo}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-400 mt-4 ml-9 inline-block text-sm'
        >
           View Demo
        </a>
      )}
    </VerticalTimelineElement>
  );
};

const Hackathon = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Hackathons & Bounties.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {hackathons.map((hackathon, index) => (
            <HackathonsCard
              key={`experience-${index}`}
              hackathon={hackathon}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Hackathon, "hackathons");
