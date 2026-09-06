// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import PageBackground from "./components/PageBackground/PageBackground";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <PageBackground>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
        {/* <Footer /> */}
      </main>
    </PageBackground>
  );
}

export default App;
