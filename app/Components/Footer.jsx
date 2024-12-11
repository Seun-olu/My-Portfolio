import Github from "../Assets/Icon components/Github";
import Gram from "../Assets/Icon components/Gram";
import Linkedin from "../Assets/Icon components/Linkedin";
import X from "../Assets/Icon components/X";

const Footer = () => {
  return (
    <footer className="w-full px-6 sm:px-12 lg:px-[250px] flex flex-col justify-center items-center pt-16 lg:pt-[200px] pb-16 text-[#b7c2e1] font-Mono">
      {/* Social Links for smaller screens */}
      <div className="lg:hidden flex flex-col items-center justify-center gap-2 ">
        <div className="flex gap-5 items-center justify-center">
          <a
            href="https://github.com/Seun-olu"
            target="_blank"
            className="text-[#b7c2e1] hover:text-[#64feda] duration-300 ease-in-out hover:translate-y-[-2px]"
          >
            <Github />
          </a>
          <a
            href="https://www.instagram.com/iamseunn_/"
            target="_blank"
            className="text-[#b7c2e1] hover:text-[#64feda] duration-300 ease-in-out hover:translate-y-[-2px]"
          >
            <Gram />
          </a>
          <a
            href="https://x.com/iamseunnn"
            target="_blank"
            className="text-[#b7c2e1] hover:text-[#64feda] duration-300 ease-in-out hover:translate-y-[-2px]"
          >
            <X />
          </a>
          <a
            href="https://www.linkedin.com/in/seun-olugbewesa-13b795218/"
            target="_blank"
            className="text-[#b7c2e1] hover:text-[#64feda] duration-300 ease-in-out hover:translate-y-[-2px]"
          >
            <Linkedin />
          </a>
        </div>
        {/* Email for smaller screens */}
        <div className="pt-4">
          <a
            href="mailto:tomiwaolugbewesa@gmail.com"
            className="text-[#A8B2D1] font-sanss text-[12px] font-extralight tracking-[0.15em] hover:text-[#64feda] hover:translate-y-[-2px]"
          >
            tomiwaolugbewesa@gmail.com
          </a>
        </div>
      </div>
      <p className="md:text-base text-xs">
        Designed & Built by Oluwaseun Olugbewesa
      </p>
    </footer>
  );
};

export default Footer;
