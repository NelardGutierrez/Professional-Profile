export default function Home() {
  return (
    <main className="min-h-screen bg-bg-dark text-white px-6 py-12 md:px-24">
      
      {/* HEADER / NAVEGACIÓN SUPERIOR */}
      <header className="flex justify-between items-center max-w-5xl mx-auto pb-12 border-b border-zinc-800">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-wine-red overflow-hidden bg-card-dark flex items-center justify-center">
            {/* Asegúrate de poner tu imagen user.png en la carpeta /public de Next.js */}
            <img src="/user.png" alt="Nelard Gutierrez" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Nelard Gutierrez</h1>
            <p className="text-text-muted text-sm">Desarrollador · Estudiante TI</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Disponible
          </span>
          <a
            href="/CV Nelard G.pdf"
            download
            className="bg-wine-red hover:bg-wine-red-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            Descargar CV
          </a>
        </div>
      </header>

      {/* HERO / PRESENTACIÓN */}
      <section className="max-w-5xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <span className="text-wine-red font-semibold text-sm tracking-widest uppercase bg-wine-red/10 px-3 py-1 rounded-md border border-wine-red/20">
            ✨ Sobre mí
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4 mb-4">
            Construyendo el futuro <br />
            <span className="text-wine-red">una línea de código a la vez</span>
          </h2>
          <p className="text-text-muted text-base md:text-lg leading-relaxed">
            Estudiante de <strong>TI</strong> en el <strong>CUC</strong> con pasión por el <strong>desarrollo de software</strong> y el <strong>diseño de bases de datos</strong>. Desde los 14 años explorando la tecnología para crear soluciones que marquen la diferencia.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {["#Software", "#BasesDeDatos", "#IA", "#Innovación"].map((tag) => (
              <span key={tag} className="text-xs text-zinc-400 bg-card-dark border border-zinc-800 px-3 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Estadísticas rápidas */}
        <div className="bg-card-dark border border-zinc-800 rounded-2xl p-6 flex flex-col gap-6">
          <div className="text-center md:text-left">
            <span className="text-3xl font-extrabold text-wine-red">2+</span>
            <p className="text-text-muted text-sm">Años de estudio</p>
          </div>
          <div className="border-t border-zinc-800 pt-4 text-center md:text-left">
            <span className="text-3xl font-extrabold text-white">5+</span>
            <p className="text-text-muted text-sm">Proyectos desarrollados</p>
          </div>
          <div className="border-t border-zinc-800 pt-4 text-center md:text-left">
            <span className="text-3xl font-extrabold text-white">6</span>
            <p className="text-text-muted text-sm">Tecnologías principales</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="max-w-5xl mx-auto py-12 border-t border-zinc-800">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="text-wine-red font-mono text-lg">01.</span> Experiencia
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tarjeta 1: Mantenimiento de Equipos */}
          <div className="bg-card-dark border border-zinc-800 rounded-xl p-6 hover:border-wine-red transition-colors flex flex-col justify-between">
            <div>
              <div className="text-2xl mb-3">🖥️</div>
              <h4 className="text-lg font-bold mb-2">Mantenimiento de Equipos</h4>
              <p className="text-text-muted text-sm leading-relaxed">
                Diagnóstico y reparación de hardware y software. Solución de problemas complejos: drivers, virus, actualizaciones críticas y recuperación de datos.
              </p>
            </div>
          </div>

          {/* Tarjeta 2: Desarrollo de Software */}
          <div className="bg-card-dark border border-zinc-800 rounded-xl p-6 hover:border-wine-red transition-colors flex flex-col justify-between">
            <div>
              <div className="text-2xl mb-3">⚡</div>
              <h4 className="text-lg font-bold mb-2">Desarrollo de Software</h4>
              <p className="text-text-muted text-sm leading-relaxed">
                Creación de aplicaciones funcionales: sistemas de inventario, gestión de tiendas, trackers de actividad y calculadoras[cite: 5]. Proyectos individuales y colaborativos.
              </p>
            </div>
            <blockquote className="mt-4 pt-4 border-t border-zinc-900 text-xs italic text-zinc-400">
              “Si puedes imaginarlo, puedes crearlo”
            </blockquote>
          </div>

          {/* Tarjeta 3: Bases de Datos */}
          <div className="bg-card-dark border border-zinc-800 rounded-xl p-6 hover:border-wine-red transition-colors flex flex-col justify-between">
            <div>
              <div className="text-2xl mb-3">🗄️</div>
              <h4 className="text-lg font-bold mb-2">Bases de Datos</h4>
              <p className="text-text-muted text-sm leading-relaxed">
                Diseño de esquemas relacionales y no relacionales. Modelado de datos, optimización de consultas, normalización e integración con APIs backend (MariaDB, MySQL, Supabase, MongoDB).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍAS & HERRAMIENTAS */}
      <section className="max-w-5xl mx-auto py-12 border-t border-zinc-800">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="text-wine-red font-mono text-lg">02.</span> Tecnologías & Herramientas
        </h3>
        <p className="text-text-muted text-sm mb-8">
          Lenguajes y bases de datos con las que trabajo para transformar ideas en productos digitales.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { name: "C#", icon: "csharp.png" },
            { name: "JavaScript", icon: "js.png" },
            { name: "Python", icon: "piton.png" },
            { name: "HTML", icon: "html.png" },
            { name: "MySQL", icon: "mysql.png" },
            { name: "MongoDB", icon: "MongoDB.png" },
          ].map((tech) => (
            <div key={tech.name} className="bg-card-dark border border-zinc-800 rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:border-wine-red transition-all">
              <span className="font-medium text-sm text-zinc-200">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN DESTACADA DE PROYECTOS */}
      <section className="max-w-5xl mx-auto py-16 border-t border-zinc-800">
        <div className="bg-gradient-to-r from-card-dark via-zinc-900 to-card-dark border border-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left max-w-xl">
            <span className="text-wine-red text-xs font-mono tracking-wider uppercase bg-wine-red/10 px-3 py-1 rounded-full border border-wine-red/20">
               Portafolio de trabajo
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-3">
               Conoce mis proyectos e iniciativas
            </h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              Explora en detalle el código, la arquitectura de base de datos y la implementación de mis aplicaciones web y móviles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="https://github.com/NelardGutierrez"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-wine-red hover:bg-wine-red-hover text-white px-6 py-3 rounded-xl font-medium text-center transition-colors shadow-lg shadow-wine-red/20"
            >
              Ver en GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
        <p>&copy; 2026 Nelard Gutierrez. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="https://github.com/NelardGutierrez" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/nelardg" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:stuartgs13@gmail.com" className="hover:text-white transition-colors">Correo</a>
        </div>
      </footer>

    </main>
  );
}