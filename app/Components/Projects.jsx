"use client";

import React from "react";

const Projects = ({ id }) => {
  return (
    <section
      id={id}
      className="lg:px-44 px-6 mt-20 md:mt-40 scroll-mt-24 bg-[#0a192f] text-[#b7c2e1] flex flex-col w-full"
    >
      {/* Section Title */}
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-start pb-6 md:pb-10 text-center sm:text-left">
        <h2 className="cursor-pointer font-sanss font-semibold text-lg sm:text-xl lg:text-[25px]">
          <span className="text-[#64feda] font-Mono text-base sm:text-lg lg:text-[20px]">
            03.
          </span>{" "}
          Some personal projects
        </h2>
        <div className="w-20 sm:w-40 lg:w-60 h-[1.5px] bg-[#243550]"></div>
      </div>

      {/* Project Cards */}
      <div className="grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
        {/* Notes App Card */}
        <div className="relative group bg-[#112240] p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#64feda] mb-4">
            Notes Hive
          </h3>
          <p className="text-sm sm:text-base mb-6">
            A simple note-taking app with smooth animations, folder
            organization, and Firebase integration. Built during my free time to
            experiment with UI/UX transitions.
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
            <a
              href="https://note-hive.netlify.app/"
              className="text-[#64feda] border border-[#64feda] px-4 py-2 rounded-lg hover:bg-[#64feda] hover:text-[#0a192f] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Seun-olu/Note-Hive"
              className="text-[#b7c2e1] underline hover:text-[#64feda] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        {/* Task Management App Card */}
        <div className="relative group bg-[#112240] p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#64feda] mb-4">
            Task Management App
          </h3>
          <p className="text-sm sm:text-base mb-6">
            A task management app with task creation and status updates. Created
            to explore state management and React hooks.
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
            <a
              href="https://tasks-hive.netlify.app/"
              className="text-[#64feda] border border-[#64feda] px-4 py-2 rounded-lg hover:bg-[#64feda] hover:text-[#0a192f] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Seun-olu/Task-Hive"
              className="text-[#b7c2e1] underline hover:text-[#64feda] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
