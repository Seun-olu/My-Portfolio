const Email = () => {
  return (
    <div className="fixed bottom-0 right-[-45px] flex flex-col items-center gap-[120px] transform ">
      <div className=" transform rotate-90 duration-300 ease-in-out hover:translate-y-[-4px]">
        <a
          href="mailto:tomiwaolugbewesa@gmail.com"
          className="text-[#A8B2D1] font-sanss text-[12px] font-extralight tracking-[0.15em] hover:text-[#64feda] "
        >
          tomiwaolugbewesa@gmail.com
        </a>
      </div>
      <div className="w-px h-24 bg-[#b7c2e1]"></div>
    </div>
  );
};

export default Email;
