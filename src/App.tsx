import Header from "./component/Header";
import About from "./component/About";
import Connect from "./component/Connect";
import Contact from "./component/Contact";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="min-h-screen bg-[#0a0d16] text-white p-6">
      
      <Header />
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[300px,1fr] gap-8">
        {/* Left column  */}
        <div className="space-y-8">
          <About />
          <Connect />
          <Contact isMobile={false} />
        </div>

        {/* Right column  */}
        <div className="space-y-8">
          <Skills />
          <Projects />
          <Contact isMobile={true} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

