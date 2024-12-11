import Image from "next/image";
import Pro from "../../public/Pro.png";

const About = ({id}) => {
  return (
    <section id={id} className="grid grid-cols-1 lg:grid-cols-2 px-6 sm:px-12 lg:px-[180px] justify-center items-center gap-10 lg:gap-[250px]">
      {/* Text Section */}
      <div className="flex flex-col items-start gap-4 pt-12 lg:pt-[150px] text-[#b7c2e1] w-full lg:w-[500px]">
        {/* Heading */}
        <div className="flex flex-row gap-4 items-center justify-start pb-6 lg:pb-10">
          <h2 className="cursor-pointer font-sanss font-semibold text-lg sm:text-xl lg:text-[25px]">
            <span className="text-[#64feda] font-Mono text-base sm:text-lg lg:text-[20px]">
              01.
            </span>{" "}
            About Me
          </h2>
          <div className="w-20 sm:w-40 lg:w-60 h-[1.5px] bg-[#243550]"></div>
        </div>

        {/* Description */}
        <div className="flex flex-col text-sm sm:text-base gap-4 items-start text-[#7f89a7]">
          <p>
            Hello! My name is Seun, and I am a tech enthusiast from Lagos, Nigeria all about
            creating web applications that enhance user experiences. My journey
            in web development began during my university days when I decided to
            explore front-end technologies — and through this, I realized how
            much I enjoyed working with intuitive websites and apps!
          </p>
          <p>
            Fast-forward to today, I work on various projects, focusing on
            frontend development. I build user-friendly, responsive, and
            efficient web applications using JavaScript and its libraries and
            frameworks.
          </p>
          <p>
            I have 4 years of working experience in frontend development, and
            I&#39;m continuously learning and improving my skills.
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-4 pt-2 text-[#7f89a7]">
          <p>Here are a few technologies I&#39;ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2">
            <li className="text-sm font-Mono">
              <span className="text-[#64feda]">▹</span> JavaScript
            </li>
            <li className="text-sm font-Mono">
              <span className="text-[#64feda]">▹</span> TypeScript
            </li>
            <li className="text-sm font-Mono">
              <span className="text-[#64feda]">▹</span> Tailwind CSS
            </li>
            <li className="text-sm font-Mono">
              <span className="text-[#64feda]">▹</span> Node.js
            </li>
            <li className="text-sm font-Mono">
              <span className="text-[#64feda]">▹</span> React
            </li>
            <li className="text-sm font-Mono">
              <span className="text-[#64feda]">▹</span> Next.js
            </li>
          </ul>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center lg:justify-end pt-6 lg:pt-[50px]">
        <Image
          src={Pro}
          className="rounded-lg"
          width={300}
          height={300}
          alt="Profile Picture"
        />
      </div>
    </section>
  );
};

export default About;
