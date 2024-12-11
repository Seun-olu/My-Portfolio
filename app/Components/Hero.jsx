const Hero = ({id}) => {
  return (
    <section id={id} className="flex flex-col scroll-mt-16 px-6 mt-32 sm:px-12 lg:px-[140px] items-start gap-4 pt-8 sm:pt-12 lg:pt-[30px]">
      {/* Greeting */}
      <p className="text-[#64feda] font-Kode text-base sm:text-lg">
        Hi, my name is
      </p>

      {/* Headings */}
      <div className="flex flex-col items-start">
        <h2 className="text-[#ccd7f7] font-[650] font-sanss text-4xl sm:text-5xl lg:text-6xl">
          Oluwaseun Olugbewesa.
        </h2>
        <h3 className="text-[#8992b1] font-[650] font-sanss text-2xl sm:text-4xl lg:text-5xl">
          I solve problems.
        </h3>
      </div>

      {/* Description */}
      <p className="text-[#8992b1] text-sm sm:text-base lg:text-lg w-full sm:w-[480px] md:w-[600px]">
        I&#39;m a Frontend Web Developer. My passion lies in creating sleek and
        interactive user interfaces. I&#39;m all about making websites not just
        functional but also user-friendly and aesthetically pleasing.
      </p>

      {/* Button */}
      <div className="pt-6 sm:pt-10">
        <button className="px-4 py-2 sm:px-6 sm:py-3 border-[1px] font-sanss tracking-widest border-[#64feda] text-[#64feda] rounded-md transition-all duration-200 ease-in-out hover:outline hover:outline-3">
          <a href="/MyResume.pdf" download="MyResume.pdf" className="font-base">
            Download my Resume &gt;
          </a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
