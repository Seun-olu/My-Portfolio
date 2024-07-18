import Image from "next/image";
import Pro from "../../public/Pro.png"


const About = () => {
  return (
    <div className=" grid grid-cols-2 px-[180px] justify-center items-center gap-[250px]">
      <div className="flex flex-col  items-start gap-2 pt-[150px] text-[#b7c2e1] w-[500px]">
        <div className=" flex flex-row gap-4 items-center justify-center pb-10">
          <h2 className=" cursor-pointer font-sanss font-semibold text-[25px]">
            <span className=" text-[#64feda] font-Mono text-[20px]">01.</span>{" "}
            About Me
          </h2>
          <div className=" w-60 h-[1.5px] bg-[#243550]"></div>
        </div>
        <div className="flex flex-col text-md gap-4 items-start text-[#7f89a7]">
          {" "}
          <p>
            Hello! My name is Seun and I am a tech euthuastic and i am all about
            creating web applications that enhance user experiences. My journey
            in web development began during my university days when I decided to
            explore front-end technologies — and through this, I realized how
            much I enjoyed working with HTML, CSS, and JavaScript!
          </p>
          <p>
            Fast-forward to today, I work on various projects, focusing on
            frontend development. I build user-friendly, responsive, and
            efficient web applications using Javascript with it&#39;s libraries and frameworks.
          </p>
          <p>
            I have 2 years of working experience on frontend developement and I&#39;m
            continuously learning and improving my skills.
          </p>
        </div>
        <div className=" flex flex-col gap-5 pt-2 text-[#7f89a7]">
          <p>
            Here are a few technologies I&#39;ve been working with recently:
          </p>
          <ul className=" grid grid-cols-2 gap-2 ">
            <li className=" text-sm font-Mono">
              <span className="text-[#64feda]">▹</span> JavaScript{" "}
            </li>
            <li className=" text-sm font-Mono">
              <span className="text-[#64feda]">▹</span> TypeScript
            </li>
            <li className=" text-sm font-Mono">
              <span className="text-[#64feda]">▹</span> Tailwind CSS
            </li>
            <li className=" text-sm font-Mono">
              <span className="text-[#64feda]">▹</span> Node.js
            </li>
            <li className=" text-sm font-Mono">
              <span className="text-[#64feda]">▹</span> React
            </li>
            <li className=" text-sm font-Mono">
              <span className="text-[#64feda]">▹</span> Next.Js
            </li>
          </ul>
        </div>
      </div>
      <div className=" pt-[50px]">
        <Image src={Pro} width={300} height={300} alt="Profile Picture"/>
      </div>
    </div>
  );
};

export default About;
