export const About = () => {
  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold">About Mohammed Rafik Ansari</h2>
      
      <p>
        I'm a passionate and result-oriented Full Stack Developer with a strong focus on building scalable,
        user-centric web applications using modern technologies like <strong>React.js, Node.js, MongoDB</strong>, and more.
        I specialize in creating clean, efficient, and secure code while delivering excellent user experiences.
      </p>

      <h3 className="text-xl font-semibold">Professional Experience</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>React JS Developer – SNM Techcraft (Jan 2024 – Feb 2025):</strong> Built responsive React interfaces, integrated RESTful APIs, and collaborated with cross-functional teams for bug resolution and optimization.
        </li>
        <li>
          <strong>React JS Developer – Munif Enterprise Consulting (July 2023 – Dec 2023):</strong> Enhanced UI responsiveness, implemented reusable components, and integrated APIs with Java/Spring Boot backends.
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Skills</h3>
      <ul className="list-disc list-inside columns-2 gap-8">
        <li>React.js / React Native</li>
        <li>Redux, Tailwind CSS, MUI</li>
        <li>Node.js, Express.js, Spring Boot</li>
        <li>MongoDB, MySQL</li>
        <li>JWT & OAuth Authentication</li>
        <li>REST APIs, WebSocket</li>
        <li>Git, Docker, Postman</li>
        <li>API Integration & Microservices</li>
      </ul>

      <h3 className="text-xl font-semibold">Education</h3>
      <p>
        <strong>Master of Computer Application</strong> – Gujarat Technological University (2023–2025)  
        <br />
        <strong>Bachelor of Computer Application</strong> – Gujarat Technological University (2020–2023)
      </p>

      <h3 className="text-xl font-semibold">Key Projects</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Service Booking System</strong> – Full-stack app with user auth, dynamic scheduling, admin panel, and calendar view.</li>
        <li><strong>Neon Beast</strong> – Custom e-commerce for neon signs with live preview, reporting, and payment gateway.</li>
        <li><strong>Nico Web Admin Dashboard</strong> – Admin panel with dynamic CRUD modules and optimized UI/UX.</li>
        <li><strong>Auction Reports</strong> – Real-time auction reporting with data visualization and bid tracking.</li>
        <li><strong>Marketplace Web App</strong> – React-based e-commerce marketplace with payment integration and reporting.</li>
      </ul>

      <h3 className="text-xl font-semibold">Links</h3>
      <ul className="list-disc list-inside">
        <li>
          <a href="https://github.com/MohammedRafik8955" target="_blank" className="text-blue-600 underline">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rafik-ansari-b0a4721b4/" target="_blank" className="text-blue-600 underline">LinkedIn</a>
        </li>
        <li>
          <a href="https://mohammedrafik-portfolio.netlify.app/" target="_blank" className="text-blue-600 underline">Portfolio</a>
        </li>
      </ul>
    </div>
  );
};
