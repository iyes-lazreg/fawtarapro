"use client";;




const Navbar1 = ({
  logo = {
    url: "https://www.fawtarapro.com/",
    src: "/logo1.png",
    alt: "logo",
    title: "",
  },

  
  
}) => {
  return (
    <section className="">
    <div className="fixed top-0 left-0 w-full z-50 bg-[#E9ECEF] px-4">
  <nav className="hidden lg:flex items-center justify-between min-h-[50px]">
    <a href={logo.url} className="flex items-center gap-2">
      <img
        src={logo.src}
        className="h-[30px] w-auto object-contain dark:invert"
        alt={logo.alt}
      />
     
    </a>
  </nav>
</div>

    </section>
  );
};




 




export { Navbar1 };
