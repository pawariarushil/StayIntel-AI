import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="main-content page-content">
        <h1>About StayIntel AI</h1>

        <p>
          StayIntel AI is an AI-powered platform built for homestay businesses
          to efficiently analyze guest feedback. The application classifies
          reviews, detects key themes, and generates professional response
          suggestions to help improve guest satisfaction.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default About;