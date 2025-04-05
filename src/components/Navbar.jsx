import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {

  useEffect(() => {
    document.body.style.overflow =menuOpen ? "hidden" : "";
  },[menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="w-full px-6 md:max-w-5xl md:mx-auto">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="font-mono text-xl font-bold text-white">
            juan <span className="text-blue-500"> test.page </span></a>

            <div 
            className="flex items-center justify-center w-10 h-10 relative cursor-pointer z-40 md:hidden" 
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="text-2xl text-white">&#9776;</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
              {" "} Home {" "}
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              {" "} About {" "}
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
              {" "} Projects {" "}
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              {" "} Contact {" "}
            </a>     
          </div>
        </div>
      </div>
    </nav>
  )

}