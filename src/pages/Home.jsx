import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home({ darkMode, setDarkMode }) {
  const features = [
    {
      title: "Sentiment Analysis",
      description:
        "Automatically classify guest reviews as positive, neutral, or negative.",
    },
    {
      title: "Theme Detection",
      description:
        "Identify key topics such as cleanliness, food, location, host experience, and value.",
    },
    {
      title: "AI Response Generator",
      description:
        "Generate professional responses to guest feedback in seconds.",
    },
  ];

  return (
    <div className="page-wrapper">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="main-content">
        <Hero />

        <section className="card-grid">
          {features.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;