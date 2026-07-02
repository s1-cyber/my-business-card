import "./App.css";
import {
  FaGithub,
  FaTelegram,
  FaWhatsapp,
  FaDiscord,
  FaCode,
  FaRocket,
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
      link: "https://t.me/q1nlan",
    },
    {
      icon: <FaWhatsapp />,
      name: "WhatsApp",
      link: "https://wa.me/996600003351",
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
      title: "IT Факт",
      text: "Первый веб-сайт был опубликован в 1991 году.",
    },
    {
      icon: <FaRocket />,
      title: "Кодинг",
      text: "Автоматизация помогает экономить время и уменьшать количество ошибок.",
    },
    {
      icon: <FaBrain />,
      title: "AI",
      text: "Около 90% мировых данных было создано за последние 2 года — объём информации растёт экспоненциально из-за интернета, соцсетей и IoT-устройств.",
    },
    {
      icon: <FaBrain />,
      title: "AI факт",
      text: "Первый компьютерный «баг» был насекомым: в 1947 году мотылёк застрял в реле компьютера Harvard Mark II, и с тех пор слово “bug” стало означать ошибку в коде.",
    },
    {
      icon: <FaBrain />,
      title: "AI факт",
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
    "AI / Neural Networks",
    "Prompt Engineering",
  ];

  const languages = [
    {
      name: "Русский",
      level: "Родной",
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

        <h3>BUILDING MODERN WEB & AI SYSTEMS</h3>

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
        <h2>🚀 Проекты</h2>

        <div className="project-card">
          <h3>Скоро здесь появятся мои проекты</h3>

          <p>
            React, Node.js и AI.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;