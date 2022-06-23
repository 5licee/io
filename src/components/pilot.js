import Typewriter from "typewriter-effect"



function scrollTo() {
    const element = document.getElementById('about')
    element.scrollIntoView({ behavior: "smooth", block: "start" })
}

// typewriter 
function typewriter() {
    return (
        <Typewriter options={{
            strings: ["python", "javascript", "minecraft", "coffee", "student", "the weeknd", "pizza"],
            autoStart: true,
            loop: true,
        }} />
    )
}


export default function Pilot() {
    return (
        <section className="pilot" id="home">
            <div className="top">
                <h1>नमस्ते! This is Kedarr</h1>
            </div>
            <div className="down">
                {typewriter()}
                <div className="explore-button">
                    <span className="material-symbols-rounded" onClick={scrollTo}>arrow_drop_down</span>
                </div>
            </div>
        </section>
    )
}