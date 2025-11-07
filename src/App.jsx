import React, { useState, useEffect } from "react";

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Cris Adrian
          </div>
          <div className="hidden md:flex space-x-8">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">
        <div className={`transform transition-all duration-1000 ${
          mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Animated gradient orb */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Cris Adrian
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Tandog
            </span>
          </h1>
          
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-75"></div>
            <h2 className="relative text-xl md:text-2xl font-semibold bg-gray-900 px-6 py-3 rounded-lg">
              Web Designer & Full-Stack Developer
            </h2>
          </div>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            I craft <span className="text-blue-400 font-semibold">digital experiences</span> that blend 
            innovative design with cutting-edge technology. Specializing in modern web development 
            and user-centric design principles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25"
            >
              View My Work
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></div>
            </a>
            <a
              href="#contact"
              className="border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Hi! I'm <span className="text-blue-400 font-semibold">Cris</span>, a 17-year-old self-taught 
                  web designer and developer from the Philippines. I'm passionate about creating digital 
                  experiences that not only look beautiful but also solve real problems.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in modern web technologies including <span className="text-cyan-400">React</span>, 
                  <span className="text-cyan-400"> TypeScript</span>, and <span className="text-cyan-400">Tailwind CSS</span>. 
                  I believe in continuous learning and staying updated with the latest industry trends 
                  and best practices.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'UI/UX Design', icon: '🎨', color: 'from-purple-500 to-pink-500' },
                { name: 'Frontend Dev', icon: '⚡', color: 'from-blue-500 to-cyan-500' },
                { name: 'Responsive Design', icon: '📱', color: 'from-green-500 to-emerald-500' },
                { name: 'Modern Tools', icon: '🛠️', color: 'from-orange-500 to-red-500' }
              ].map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-${skill.color.split('-')[1]}-500/10`}
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <h3 className="font-semibold text-gray-200">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 px-6 py-20 bg-gradient-to-b from-gray-900/50 to-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A collection of my recent work showcasing modern design and development practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Portfolio",
                description: "A cutting-edge portfolio website with glass morphism and smooth animations",
                tech: ["React", "Tailwind", "Framer Motion"],
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop"
              },
              {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce solution with modern UI and seamless UX",
                tech: ["Next.js", "TypeScript", "Stripe"],
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
              },
              {
                title: "Dashboard UI",
                description: "Analytics dashboard with real-time data visualization",
                tech: ["React", "D3.js", "Chart.js"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
              }
            ].map((project, index) => (
              <div 
                key={project.title}
                className="group relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 group/link"
                  >
                    View Project
                    <span className="ml-2 transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your next project to life? I'm always open to discussing new opportunities 
            and creative ideas.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: '📧', label: 'Email', value: 'crisadriantandog4@gmail.com', href: 'mailto:crisadriantandog4@gmail.com' },
              { icon: '📍', label: 'Location', value: 'Hagonoy, Davao del Sur' },
              { icon: '💼', label: 'Status', value: 'Available for projects' }
            ].map((item) => (
              <div 
                key={item.label}
                className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:border-blue-500/50 hover:transform hover:-translate-y-2"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-200 mb-2">{item.label}</h3>
                {item.href ? (
                  <a 
                    href={item.href}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-400">{item.value}</p>
                )}
              </div>
            ))}
          </div>
          
          <a
            href="mailto:crisadriantandog4@gmail.com"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25 text-lg"
          >
            Start a Conversation
            <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Cris Adrian Tandog
            </div>
            <div className="text-gray-500">
              © {new Date().getFullYear()} All rights reserved. Crafted with passion and precision.
            </div>
            <div className="flex space-x-4">
              {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;