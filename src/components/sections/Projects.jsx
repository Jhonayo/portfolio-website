export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/60 hover:bg-blue-300/10 hover:shadown-[0_2px_8px_rgba(59,130,246,0.3)] transition">
            <h3 className="text-xl font-bold mb-2"> Ejemplo proyecto 1</h3>
            <p className="text-gray-400 mb-4">
              Breve descripción del proyecto 1. Este proyecto es un ejemplo de cómo se puede utilizar Java y Spring Boot para crear una aplicación web.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
            {["React", "Java", "Spring Boot", "MySQL"].map((skill, index) => (
              <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadown-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                {skill}
              </span>
            ))}
            </div>
            <div className="flex justify-between items-center mt-4">
            <a href="#" className="text-blue-400 hover:text-blue-200 transition">
              {" "} Ver Proyecto {"->"} {" "}
            </a>
          </div>
          </div>
          <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/60 hover:bg-blue-300/10 hover:shadown-[0_2px_8px_rgba(59,130,246,0.3)] transition">
            <h3 className="text-xl font-bold mb-2"> Ejemplo proyecto 2</h3>
            <p className="text-gray-400 mb-4">
              Breve descripción del proyecto 2. Este proyecto es un ejemplo de cómo se puede utilizar Java y Spring Boot para crear una aplicación web.
            </p>
            {["React", "Java", "Spring Boot", "MySQL"].map((skill, index) => (
              <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadown-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                {skill}
              </span>
            ))}
            <div className="flex justify-between items-center mt-4">
            <a href="#" className="text-blue-400 hover:text-blue-200 transition">
              {" "} Ver Proyecto {"->"} {" "}
            </a>
          </div>
          </div>
          <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/60 hover:bg-blue-300/10 hover:shadown-[0_2px_8px_rgba(59,130,246,0.3)] transition">
            <h3 className="text-xl font-bold mb-2"> Ejemplo proyecto 3</h3>
            <p className="text-gray-400 mb-4">
              Breve descripción del proyecto 3. Este proyecto es un ejemplo de cómo se puede utilizar Java y Spring Boot para crear una aplicación web.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
            {["React", "Java", "Spring Boot", "MySQL"].map((skill, index) => (
              <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadown-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                {skill}
              </span>
            ))}
            </div>
            <div className="flex justify-between items-center mt-4">
            <a href="#" className="text-blue-400 hover:text-blue-200 transition">
              {" "} Ver Proyecto {"->"} {" "}
            </a>
          </div>
          </div>
          <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/60 hover:bg-blue-300/10 hover:shadown-[0_2px_8px_rgba(59,130,246,0.3)] transition">
            <h3 className="text-xl font-bold mb-2"> Ejemplo proyecto 4</h3>
            <p className="text-gray-400 mb-4">
              Breve descripción del proyecto 4. Este proyecto es un ejemplo de cómo se puede utilizar Java y Spring Boot para crear una aplicación web.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
            {["React", "Java", "Spring Boot", "MySQL"].map((skill, index) => (
              <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadown-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                {skill}
              </span>
            ))}
            </div>
            <div className="flex justify-between items-center mt-4">
            <a href="#" className="text-blue-400 hover:text-blue-200 transition">
              {" "} Ver Proyecto {"->"} {" "}
            </a>
          </div>
          </div>


        </div>
      </div>

    </section>
  );
};