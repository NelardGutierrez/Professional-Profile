export default function Home() {
  return (
    <main className="min-h-screen bg-bg-dark text-white px-6 py-12 md:px-24">
      
      {/* HEADER / TOP NAVIGATION */}
      <header className="flex justify-between items-center max-w-5xl mx-auto pb-12 border-b border-zinc-800">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-wine-red overflow-hidden bg-card-dark flex items-center justify-center">
            {/* Make sure to place your user.png image in the /public folder of Next.js */}
            <img src="/user.png" alt="Nelard Gutierrez" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Nelard Gutierrez</h1>
            <p className="text-text-muted text-sm">Developer · IT Student</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available
          </span>
          <a
            href="/CV Nelard Gutierrez Updated.pdf"
            download
            className="bg-wine-red hover:bg-wine-red-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            Download CV
          </a>
        </div>
      </header>

      {/* HERO / INTRODUCTION */}
      <section className="max-w-5xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <span className="text-wine-red font-semibold text-sm tracking-widest uppercase bg-wine-red/10 px-3 py-1 rounded-md border border-wine-red/20">
            About me
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4 mb-4">
            Building the future <br />
            <span className="text-wine-red">one line of code at a time</span>
          </h2>
          <p className="text-text-muted text-base md:text-lg leading-relaxed">
            <strong>IT</strong> student at <strong>CUC</strong> with a passion for <strong>software development</strong> and <strong>database design</strong>. Exploring technology since the age of 14 to create solutions that make a difference.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {["#Software", "#Databases", "#AI", "#Innovation"].map((tag) => (
              <span key={tag} className="text-xs text-zinc-400 bg-card-dark border border-zinc-800 px-3 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Quick statistics */}
        <div className="bg-card-dark border border-zinc-800 rounded-2xl p-6 flex flex-col gap-6">
          <div className="text-center md:text-left">
            <span className="text-3xl font-extrabold text-wine-red">2+</span>
            <p className="text-text-muted text-sm">Years of study</p>
          </div>
          <div className="border-t border-zinc-800 pt-4 text-center md:text-left">
            <span className="text-3xl font-extrabold text-white">5+</span>
            <p className="text-text-muted text-sm">Projects developed</p>
          </div>
          <div className="border-t border-zinc-800 pt-4 text-center md:text-left">
            <span className="text-3xl font-extrabold text-white">6</span>
            <p className="text-text-muted text-sm">Core technologies</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-5xl mx-auto py-12 border-t border-zinc-800">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="text-wine-red font-mono text-lg">01.</span> Experience
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Equipment Maintenance */}
          <div className="bg-card-dark border border-zinc-800 rounded-xl p-6 hover:border-wine-red transition-colors flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold mb-2">Equipment Maintenance</h4>
              <p className="text-text-muted text-sm leading-relaxed">
                Hardware and software diagnostics and repair. Troubleshooting complex issues: drivers, viruses, critical updates, and data recovery.
              </p>
            </div>
          </div>

          {/* Card 2: Software Development */}
          <div className="bg-card-dark border border-zinc-800 rounded-xl p-6 hover:border-wine-red transition-colors flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold mb-2">Software Development</h4>
              <p className="text-text-muted text-sm leading-relaxed">
                Creation of functional applications: inventory systems, store management, activity trackers, and calculators. Individual and collaborative projects.
              </p>
            </div>
            <blockquote className="mt-4 pt-4 border-t border-zinc-900 text-xs italic text-zinc-400">
              "If you can imagine it, you can create it"
            </blockquote>
          </div>

          {/* Card 3: Databases */}
          <div className="bg-card-dark border border-zinc-800 rounded-xl p-6 hover:border-wine-red transition-colors flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold mb-2">Databases</h4>
              <p className="text-text-muted text-sm leading-relaxed">
                Relational and non-relational schema design. Data modeling, query optimization, normalization, and backend API integration (MariaDB, MySQL, Supabase, MongoDB).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES & TOOLS */}
      <section className="max-w-5xl mx-auto py-12 border-t border-zinc-800">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="text-wine-red font-mono text-lg">02.</span> Technologies & Tools
        </h3>
        <p className="text-text-muted text-sm mb-8">
          Languages and databases I work with to turn ideas into digital products.
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

      {/* FEATURED PROJECTS SECTION */}
      <section className="max-w-5xl mx-auto py-16 border-t border-zinc-800">
        <div className="bg-linear-to-r from-card-dark via-zinc-900 to-card-dark border border-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left max-w-xl">
            <span className="text-wine-red text-xs font-mono tracking-wider uppercase bg-wine-red/10 px-3 py-1 rounded-full border border-wine-red/20">
               Work portfolio
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-3">
               Check out my projects and initiatives
            </h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              Explore the code, database architecture, and implementation of my web and mobile applications in detail.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="https://github.com/NelardGutierrez"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-wine-red hover:bg-wine-red-hover text-white px-6 py-3 rounded-xl font-medium text-center transition-colors shadow-lg shadow-wine-red/20"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
        <p>&copy; 2026 Nelard Gutierrez. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://github.com/NelardGutierrez" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/nelardg" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:stuartgs13@gmail.com" className="hover:text-white transition-colors">Email</a>
        </div>
      </footer>

    </main>
  );
}