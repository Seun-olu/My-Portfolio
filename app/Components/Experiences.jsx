"use client";

import { useState } from "react";

const experiences = [
  {
    company: "NXT Tech",
    role: "Junior Frontend Developer & QA Tester",
    companyLink: 'https://nxt.ng/',
    duration: "May 2022 – October 2022",
    responsibilities: [
      "Completed research, compiled data, updated spreadsheets, and produced timely reports. Also analyzed problems and worked with teams to develop solutions.",
      "Interacted with customers by phone, email, or inperson to provide information, Sorted and organized files, spreadsheets and reports.",
      "Tested web-based product functionality and delivered iterations to customer",
      "I also performed user experience quality assurance testing to identify and remedy shortcomings",
    ],
  },
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <div className="flex flex-col h-[650px] px-[250px] pt-[200px] items-start justify-center">
      <div className=" flex gap-4 items-center justify-center pb-10 text-[#b7c2e1]">
        <h2 className=" cursor-pointer font-sanss font-semibold text-[25px]">
          <span className=" text-[#64feda] font-Mono text-[20px]">02.</span>{" "}
          Where I&#39;ve Worked
        </h2>
        <div className=" w-60 h-[1.5px] bg-[#243550]"></div>
      </div>
      <div className=" flex">
        <div className="w-[15%] border-l-2 border-l-[#64feda] border-gray-700 justify-center items-center overflow-y-auto h-10 hover:bg-[#112240] flex">
          <ul>
            {experiences.map((experience, index) => (
              <li
                key={index}
                className={`cursor-pointer px-2  font-Mono text-[16px] ${
                  selectedExperience.company === experience.company
                    ? "text-teal-300"
                    : "text-gray-300"
                }`}
                onClick={() => setSelectedExperience(experience)}
              >
                {experience.company}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[80%] px-8 pt-3 overflow-y-auto flex flex-col gap-2">
          <h3 className="text-[20px] text-[#64feda] font-sanss"><span className="text-[#b7c2e1]">{selectedExperience.role}</span> @<a href={selectedExperience.companyLink} className=" text-[#64feda] transition-all duration-400 ease-in-out hover:border-b hover:border-b-[#64feda]" target="_blank" rel="noopener noreferrer">{selectedExperience.company}</a></h3>
          <p className="text-[#7f89a7] font-Mono">{selectedExperience.duration}</p>
          <ul className=" flex flex-col list-inside gap-4 text-gray-300">
            {selectedExperience.responsibilities.map(
              (responsibility, index) => (
                <li key={index} className=" text-[14px] text-[#7f89a7] flex gap-3 font-sanss">
                  <span className="text-[#64feda]">▹</span>
                  {responsibility}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
