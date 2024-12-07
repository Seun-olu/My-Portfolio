import Github from "./Icon components/Github";
import Gram from "./Icon components/Gram";
import Linkedin from "./Icon components/Linkedin";
import X from "./Icon components/X";

const Footer = () => {
  return (
    <footer className="w-full px-6 sm:px-12 lg:px-[250px] flex flex-col justify-center items-center text-sm pt-16 lg:pt-[200px] pb-16 text-[#b7c2e1] font-Mono">
      {/* Social Links for smaller screens */}
      <div className="lg:hidden flex flex-col items-center gap-3 pb-3">
        <div className="flex gap-6">
          <a
            href="https://github.com/Seun-olu"
            target="_blank"
            className="text-[#b7c2e1] hover:text-[#64feda] duration-300 ease-in-out"
          >
            <Github />
          </a>
          <a
            href="https://www.instagram.com/iamseunn_/"
            target="_blank"
            className="text-[#b7c2e1] hover:text-[#64feda] duration-300 ease-in-out"
          >
            <Gram />
          </a>
          <a
            href="https://x.com/iamseunnn"
            target="_blank"
            className="text-[#b7c2e1] hover:text-[#64feda] duration-300 ease-in-out"
          >
            <X />
          </a>
          <a
            href="https://www.linkedin.com/in/seun-olugbewesa-13b795218/"
            target="_blank"
            className="text-[#b7c2e1] hover:text-[#64feda] duration-300 ease-in-out"
          >
            <Linkedin />
          </a>
        </div>
        {/* Email for smaller screens */}
        <div className="pt-4">
          <a
            href="mailto:tomiwaolugbewesa@gmail.com"
            className="text-[#A8B2D1] font-sanss text-[12px] font-extralight tracking-[0.15em] hover:text-[#64feda]"
          >
            tomiwaolugbewesa@gmail.com
          </a>
        </div>
      </div>

      {/* Footer Text */}
      <p>Designed & Built by Oluwaseun Olugbewesa</p>
    </footer>
  );
};

export default Footer;
