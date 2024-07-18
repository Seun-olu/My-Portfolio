const Contact = () => {
  return (
    <div className="flex flex-col text-md px-[250px] pt-[200px] items-center gap-6 text-[#7f89a7] w-full">
      <p className=" font-Mono text-[#64feda] text-md">04. Contact</p>
      <h1 className=" text-[50px] font-bold text-[#b7c2e1] font-sans">
        Get In Touch{" "}
      </h1>
      <p className="text-center w-[500px]">
        I’m currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </p>

      <a
        href="mailto:tomiwaolugbewesa@gmail.com"
        className="font-sanss text-sm font-light tracking-[0.15em] px-6 py-4 border font-sanss tracking-wide border-[#64feda] text-[#64feda] rounded-md transition-all duration-200 ease-in-out hover:outline hover:outline-2"
      >
        Say Hello
      </a>
    </div>
  );
};

export default Contact;
