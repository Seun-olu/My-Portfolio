import Github from "../Assets/Icon components/Github";
import Gram from "../Assets/Icon components/Gram";
import Linkedin from "../Assets/Icon components/Linkedin";
import X from "../Assets/Icon components/X";

const Socials = () => {
  return (
    <div className="hidden lg:fixed lg:bottom-0 lg:left-12 lg:flex lg:flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-7 hover:text-[#64feda]">
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
          className="text-[#b7c2e1] hover:text-[#64feda] duration-300 ease-in-out hover:translate-y-[-4px]"
        >
          <Linkedin />
        </a>
      </div>
      <div className="w-px h-24 bg-[#b7c2e1]"></div>
    </div>
  );
};

export default Socials;
