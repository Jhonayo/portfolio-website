export const About = () => {

    const frontendSkills = ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"];
    const backendSkills = ["Java", "Spring Boot", "Node.js", "Express", "MongoDB", "MySQL"];
    //const otherSkills = ["Git", "Docker"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Acerca de Mi
                </h2>
                <div className="round-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-400 text-lg mb-6">
                        Soy un apasionado desarrollador de software con experiencia en Java y tecnologías web. Me encanta crear soluciones innovadoras y eficientes que resuelvan problemas reales.
                    </p>
                    <p className="text-gray-400 text-lg mb-6">
                        Actualmente estoy trabajando en proyectos que me desafían y me permiten aprender nuevas habilidades. Siempre estoy buscando oportunidades para crecer y mejorar como profesional.
                    </p>
                    <p className="text-gray-400 text-lg mb-6ß">
                        Fuera del trabajo, disfruto de la lectura, la música y explorar nuevas tecnologías. Estoy emocionado por lo que el futuro tiene reservado y espero contribuir a proyectos emocionantes.
                    </p>

                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((skill, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadown-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((skill, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadown-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}