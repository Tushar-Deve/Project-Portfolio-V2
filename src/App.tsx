import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import PageBackground from "./components/PageBackground/PageBackground";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import CertificateModal from "./components/Modal/CertificateModal";
import { internshipCertificate } from "./data/experience";

function App() {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  const handleOpenCertificate = () => setIsCertificateOpen(true);
  const handleCloseCertificate = () => setIsCertificateOpen(false);

  return (
    <ThemeProvider>
      <PageBackground>
        <Navbar />
        <main>
          <Home onViewCertificate={handleOpenCertificate} />
          <About />
          <Experience onViewCertificate={handleOpenCertificate} />
          <Projects />
          <Contact />
          {/* <Footer /> */}
        </main>
        <CertificateModal
          isOpen={isCertificateOpen}
          onClose={handleCloseCertificate}
          certificate={internshipCertificate}
        />
      </PageBackground>
    </ThemeProvider>
  );
}

export default App;
