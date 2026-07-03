import "./App.css";
import {
  FaGithub,
  FaTelegram,
  FaWhatsapp,
  FaDiscord,
  FaCode,
  FaBrain,
  FaLaptopCode,
  FaGlobe,
  FaUserTie,
} from "react-icons/fa";

function App() {
  const socials = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      link: "https://github.com/s1-cyber",
    },
    {
      icon: <FaTelegram />,
      name: "Telegram",
      link: "https://t.me/+cPH4iTbWrCgzYWEy",
    },
    {
      icon: <FaWhatsapp />,
      name: "WhatsApp",
      link: "https://wa.me/996550033650",
    },
    {
      icon: <FaDiscord />,
      name: "Discord",
      link: "https://discord.com/users/1028179050524581928",
    },
  ];

  const facts = [
    {
      icon: <FaCode />,
      title: "IT",
      text: "Первый веб-сайт был опубликован в 1991 году.",
    },
    {
      icon: <FaCode />,
      title: "IT",
      text: "Каждую минуту в интернете передаются терабайты данных.",
    },
    {
      icon: <FaCode />,
      title: "IT",
      text: "Более половины мирового интернет-трафика создают боты.",
    },
    {
      icon: <FaBrain />,
      title: "AI",
      text: "На создание одной большой AI-модели уходят миллионы строк кода и терабайты данных.",
    },
    {
      icon: <FaBrain />,
      title: "AI",
      text: "Современные AI-модели помогают разработчикам писать код, находить ошибки и ускорять разработку.",
    }
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Git",
    "REST API",
    "AI",
    "Prompt Engineering",
  ];

  const languages = [
    {
      name: "Русский",
      level: "Свободный",
    },
    {
      name: "Кыргызский",
      level: "Родной",
    },
    {
      name: "English",
      level: "Intermediate (B1–B2)",
    },
  ];

  const profile = [
    "⚡ Быстро учусь",
    "💻 Пишу чистый код",
    "📈 1 год обучения",
    "🤝 Open to Work",
  ];

  return (
    <div className="page">
      <div className="bg"></div>

      <header className="hero">
        <div className="online"></div>

        <h3>CODE • DESIGN • PERFORMANCE</h3>

        <h1>
          Full-Stack
          <br />
          Developer
        </h1>

        <p>
          Создаю современные веб-приложения, интерфейсы и backend-решения.
          Постоянно изучаю новые технологии, включая AI и автоматизацию.
        </p>

        <div className="socials">
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </header>

      <section className="content">
        {/* LEFT */}
        <div className="column">
          <div className="block-title">
            <FaLaptopCode />
            <span>Факты</span>
          </div>

          {facts.map((fact, index) => (
            <div className="card" key={index}>
              <h4>
                {fact.icon}
                {fact.title}
              </h4>

              <p>{fact.text}</p>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="column">
          <div className="block-title">
            <FaUserTie />
            <span>Профиль</span>
          </div>

          <div className="card">
            <h4>Обо мне</h4>

            {profile.map((item, index) => (
              <div className="profile-item" key={index}>
                {item}
              </div>
            ))}
          </div>

          <div className="card">
            <h4>⚡ Навыки</h4>

            <div className="skills">
              {skills.map((skill, index) => (
                <span className="skill" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card">
            <h4>
              <FaGlobe />
              {" "}
              Языки
            </h4>

            {languages.map((lang, index) => (
              <div className="language" key={index}>
                <span>{lang.name}</span>
                <strong>{lang.level}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="projects">
 <footer class="footer">
  <p>© 2026 — Built with React, focus & discipline.</p>
</footer>
</section>
    </div>
  );
}

export default App;