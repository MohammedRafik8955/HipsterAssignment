export const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
      <p>
        I'd love to connect with you! Feel free to reach out through any of the platforms below.
      </p>

      <div className="space-y-2 text-lg">
        <p>
          📧 Email:{" "}
          <a href="mailto:rafikansari88888@gmail.com" className="text-blue-600 underline">
            rafikansari88888@gmail.com
          </a>
        </p>
        <p>📞 Phone: +91 9081204480</p>
        <p>
          🌐 Portfolio:{" "}
          <a
            href="https://mohammedrafik-portfolio.netlify.app/"
            className="text-blue-600 underline"
            target="_blank"
          >
            mohammedrafik-portfolio.netlify.app
          </a>
        </p>
        <p>
          💼 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/rafik-ansari-b0a4721b4/"
            className="text-blue-600 underline"
            target="_blank"
          >
            linkedin.com/in/rafik-ansari-b0a4721b4
          </a>
        </p>
        <p>
          🐱 GitHub:{" "}
          <a
            href="https://github.com/MohammedRafik8955"
            className="text-blue-600 underline"
            target="_blank"
          >
            github.com/MohammedRafik8955
          </a>
        </p>
      </div>
    </div>
  );
};
