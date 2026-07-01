import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="hero">
        <div className="hero-text">
          <h3>👋 Привет, меня зовут</h3>
          <h1>Нурислам</h1>

          <h2 className="title">Full-Stack Developer</h2>

          <p>
            Превращаю идеи в быстрые, удобные и визуально чистые веб-продукты. Люблю чистый код, UX и адаптивность.
          </p>

          <div className="contacts">
            <a
              href="https://github.com/s1-cyber"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              💻 GitHub
            </a>

            <a
              href="https://t.me/q1nlan"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              💬 Telegram
            </a>

            <a
              href="omorovnuris1@gmail.com"
              className="contact-link"
            >
              ✉️ nuris.dev@example.com
            </a>

            <a href="tel:+996700000000" className="contact-link">
              📞 +996 600 003 351
            </a>
          </div>
        </div>
      </header>

      <section className="skills">
        <h2>🚀 Мои навыки</h2>

        <div className="cards">
          <div className="card">
            <h3>Frontend</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>

          <div className="card">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST API</li>
            </ul>
          </div>

          <div className="card">
            <h3>Языки</h3>
            <ul>
              <li>🇷🇺 Русский — свободно</li>
              <li>🇰🇬 Кыргызский — родной</li>
              <li>🇬🇧 Английский — средний (B1/B2)</li>
            </ul>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Нурислам | Full-Stack Developer</p>
      </footer>
    </div>
  );
}

export default App;