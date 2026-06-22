import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login({ darkMode, setDarkMode }) {
  return (
    <div className="page-wrapper">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="main-content page-content">
        <h1>Login</h1>

        <p>
          Sign in to access your review dashboard, analyze guest feedback, and
          generate AI-powered insights.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default Login;