const Hero = () => {
  return (
    <div className="flex flex-col px-[140px] items-start gap-4 pt-[30px]">
      <p className=" text-[#64feda] font-Kode">Hi, my name is</p>
      <div className="flex flex-col items-start ">
        <h2 className="text-[#ccd7f7] clamp-font-size font-[650] font-sanss ">
          Oluwaseun Olugbewesa.
        </h2>
        <h3 className="text-[#8992b1] text-7xl font-[650] font-sanss">
          I solve problems.
        </h3>
      </div>
      <p className=" text-[#8992b1] w-[600px]">
        I&#39;m a Frontend Web Developer, My passion lies in creating
        sleek and interactive user interfaces. I&#39;m all about making websites
        not just functional but also user-friendly and aesthetically pleasing.
      </p>
      <div className="pt-10">
        <button className=" px-4 py-4 border-[1px] font-sanss tracking-widest border-[#64feda] text-[#64feda] rounded-md transition-all duration-200 ease-in-out hover:outline hover:outline-3">
          <a href="/Oluwaseun Resume.pdf" download="Oluwaseun_Resume.pdf">
            Download my Resume &gt;
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
