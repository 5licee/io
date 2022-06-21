import Typewriter from "typewriter-effect"

function scrollTo() {
    const element = document.getElementById('about')
    element.scrollIntoView({ behavior: "smooth", block: "start" })
}

export default function Pilot() {
    return (
        <div className="pilot" id="home">
            <div className="top">
                <h1>नमस्ते! I am Kedarr</h1>
            </div>
            <div className="down">
                <Typewriter options={{
                    strings: ["python", "javascript", "minecraft", "coffee", "student", "the weeknd", "pizza"],
                    autoStart: true,
                    loop: true,
                }} />
                <div className="explore-button">
                    <span className="material-symbols-rounded" onClick={scrollTo}>arrow_drop_down</span>
                </div>
            </div>
        </div>
    )
}