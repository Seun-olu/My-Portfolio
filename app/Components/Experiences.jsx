"use client";

import { useState } from "react";

const experiences = [
  {
    company: "Monochrome Technologies",
    role: "Front End Developer",
    companyLink: "#", // Add link if available
    duration: "Feb 2021 – May 2022",
    responsibilities: [
      "Collaborated with back-end developers to ensure smooth integration of front-end designs into the application framework, resulting in a 15% increase in development efficiency.",
      "Utilized source control systems like Github to manage project versions in a collaborative environment, improving version control and reducing code conflicts by 20%.",
      "Worked closely with UI designers to translate mockups into functional websites, enhancing design accuracy and reducing development time by 25%.",
      "Implemented responsive design principles to build websites optimized for mobile devices, improving mobile user engagement by 30%.",
      "Provided ongoing maintenance support for existing projects after deployment, ensuring continued optimal performance and reducing downtime by 20%.",
    ],
  },
  {
    company: "NXT Tech",
    role: "Junior Frontend Developer & QA Tester",
    companyLink: "https://nxt.ng/",
    duration: "May 2022 – October 2022",
    responsibilities: [
      "Completed research, compiled data, updated spreadsheets, and produced timely reports. Also analyzed problems and worked with teams to develop solutions.",
      "Interacted with customers by phone, email, or in-person to provide information, sorted and organized files, spreadsheets, and reports.",
      "Tested web-based product functionality and delivered iterations to customers.",
      "Performed user experience quality assurance testing to identify and remedy shortcomings.",
    ],
  },

  {
    company: "Eathub Enterprise",
    role: "Front End Developer",
    companyLink: "#", // Add link if available
    duration: "Jan 2023 – Nov 2023",
    responsibilities: [
      "Responsible for building and integrating the application's interface with the backend.",
      "Fostering teamwork and ensuring project milestones were met.",
      "Played a hands-on role in bug fixing and troubleshooting to maintain a high standard of code quality and application performance.",
      "Successfully integrated a payment gateway service, enabling secure and efficient online transactions within the application.",
    ],
  },
  {
    company: "Stepris Nig Ltd",
    role: "Youth Corper (NYSC)",
    companyLink: "#", // Add link if available
    duration: "Feb 2024 – Jan 2025",
    responsibilities: [
      "Utilized AutoCAD to design, clean, and edit building and service drawings.",
      "Collaborated with engineers to create accurate and functional architectural layouts.",
      "Conducted quality checks to ensure the consistency and accuracy of design documents.",
      "Diagnosed and resolved technical issues, including hardware and software troubleshooting for staff.",
      "Set up, maintained, and optimized workstations, ensuring seamless operations across teams.",
      "Assisted staff with software training and resolving IT-related challenges to enhance productivity.",
      "Bridged the gap between engineering and IT teams, ensuring smooth workflows.",
      "Provided technical and non-technical support to multiple departments.",
      "Adapted to diverse tasks, handling responsibilities outside the primary job role.",
      "Assisted in streamlining processes through innovative technical solutions.",
      "Demonstrated strong problem-solving skills by taking on challenges across engineering, IT, and development areas.",
      "Built a reputation for versatility, reliability, and a proactive approach to work.",
    ],
  },
];

export default function Experience({id}) {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <section id={id} className="flex flex-col w-full px-6 sm:px-12 lg:px-[250px] pt-10 lg:pt-[200px] items-start">
      {/* Heading */}
      <div className="flex gap-4 items-center justify-start pb-6 lg:pb-10 text-[#b7c2e1]">
        <h2 className="cursor-pointer font-sanss font-semibold text-lg sm:text-xl lg:text-[25px]">
          <span className="text-[#64feda] font-Mono text-base sm:text-lg lg:text-[20px]">
            02.
          </span>{" "}
          Where I&#39;ve Worked
        </h2>
        <div className="w-20 sm:w-40 lg:w-60 h-[1.5px] bg-[#243550]"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-10">
        {/* Sidebar */}
        <div className="lg:w-[30%] flex items-center gap-10 lg:flex-col border-l-2 border-gray-700 overflow-x-auto lg:overflow-y-auto h-20 lg:h-auto">
          <ul className="flex lg:flex-col gap-4 lg:gap-2 px-2">
            {experiences.map((experience, index) => (
              <li
                key={index}
                className={`cursor-pointer px-2 py-1 font-Mono text-sm sm:text-base ${
                  selectedExperience.company === experience.company
                    ? "text-teal-300"
                    : "text-gray-300"
                } hover:bg-[#112240]`}
                onClick={() => setSelectedExperience(experience)}
              >
                {experience.company}
              </li>
            ))}
          </ul>
        </div>

        {/* Details Section */}
        <div className="flex-1 px-4 lg:px-8 pt-3 flex flex-col gap-4">
          <h3 className="text-lg sm:text-xl lg:text-[20px] text-[#64feda] font-sanss">
            <span className="text-[#b7c2e1]">{selectedExperience.role}</span> @{" "}
            <a
              href={selectedExperience.companyLink}
              className="text-[#64feda] transition-all duration-400 ease-in-out hover:border-b hover:border-b-[#64feda]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {selectedExperience.company}
            </a>
          </h3>
          <p className="text-[#7f89a7] font-Mono text-sm sm:text-base">
            {selectedExperience.duration}
          </p>
          <ul className="flex flex-col list-inside gap-3 text-sm sm:text-base text-gray-300">
            {selectedExperience.responsibilities.map(
              (responsibility, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 font-sanss text-[#7f89a7]"
                >
                  <span className="text-[#64feda]">▹</span>
                  {responsibility}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
