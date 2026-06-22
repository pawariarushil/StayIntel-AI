import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="main-content page-content">
        <h1>Dashboard</h1>

        <p>
          This dashboard will display review analytics, sentiment summaries,
          theme breakdowns, and AI-generated recommendations for homestay
          owners.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;