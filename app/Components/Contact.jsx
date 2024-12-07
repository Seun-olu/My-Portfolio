const Contact = () => {
  return (
    <div className="flex flex-col items-center text-md px-6 sm:px-12 lg:px-[250px] pt-20 lg:pt-[200px] gap-6 text-[#7f89a7] w-full">
      {/* Section Header */}
      <p className="font-Mono text-[#64feda] text-sm sm:text-base">04. Contact</p>

      {/* Section Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-[#b7c2e1] font-sans text-center">
        Get In Touch
      </h1>

      {/* Section Description */}
      <p className="text-center max-w-lg text-sm sm:text-base">
        I’m currently looking for any new opportunities; my inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </p>

      {/* Contact Button */}
      <a
        href="mailto:tomiwaolugbewesa@gmail.com"
        className="font-sanss text-sm sm:text-base tracking-wide px-6 py-4 border border-[#64feda] text-[#64feda] rounded-md transition-all duration-300 ease-in-out hover:bg-[#112240] hover:outline hover:outline-2 hover:outline-[#64feda]"
      >
        Say Hello
      </a>
    </div>
  );
};

export default Contact;
