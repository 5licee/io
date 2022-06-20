import Typewriter from "typewriter-effect"

function ScrollTo() {
    const element = document.getElementById('about')
    element.scrollIntoView({ behavior: "smooth", block: "start" })
}

export default function Pilot() {
    return (
        <div className="pilot">
            <div className="top">
                <h1>Heyy! I am Kedarr</h1>
            </div>
            <div className="down">
                <Typewriter options={{
                    strings: ["python", "frontend javascript", "minecraft", "coffee", "student"],
                    autoStart: true,
                    loop: true,
                }} />
                <div className="explore-button">
                    <span className="material-symbols-rounded" onClick={ScrollTo}>arrow_drop_down</span>
                </div>
            </div>
        </div>
)}