// components
import Navbar from "./components/navbar";
import Pilot from "./components/pilot";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function App() {
    return (
        <div className="App">
            <Navbar />
            <main id="main">
                <Pilot />
                <About />
                <Projects />
                <Footer />
            </main>
        </div>
    );
}

export default App;
