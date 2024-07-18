import Image from "next/image";
import Logo from '../../public/Logo1.png'


const Navbar = () => {
    return (
        <div className=" flex justify-between px-10 py-4 text-[#b7c2e1]">
            <Image className=" cursor-pointer" src={Logo} width={50} height={50} alt="Oluwaseun's Logo" priority/>
            <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8">
                <li className=" cursor-pointer font-Mono text-sm hover:text-[#64feda]"><span className=" text-[#64feda] font-Mono">01.</span> About</li>
                <li className=" cursor-pointer font-Mono text-sm hover:text-[#64feda]"><span className=" text-[#64feda] font-Mono">02.</span> Experience</li>
                <li className=" cursor-pointer font-Mono text-sm hover:text-[#64feda]"><span className=" text-[#64feda] font-Mono">03.</span> Work</li>
                <li className=" cursor-pointer font-Mono text-sm hover:text-[#64feda]"><span className=" text-[#64feda] font-Mono">04.</span> Contact</li>
            </ul>
            <button className=" px-4 py-2 border-[1px] font-Mono border-[#64feda] text-[#64feda] rounded-md transition-all duration-200 ease-in-out hover:outline hover:outline-3"><a
            href="/Oluwaseun Resume.pdf" 
            download="Oluwaseun_Resume.pdf"
          >
            Resume
          </a></button>
            </div>
        </div>
    );
}

export default Navbar;