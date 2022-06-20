// components
import Navbar from "./components/navbar";
import Pilot from "./components/pilot";
import About from "./components/about";
import Hr from "./components/hr";

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                
                <Pilot />
                <Hr id="about"/>
                <About />
            </main>
        </div>
    );
}

export default App;
