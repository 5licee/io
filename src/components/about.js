import VibeCat from '../assets/vibe-cat.gif';

function Navbar() {
    function NavbarItems(props) {
        return (
            <li data-aos="zoom-in-up" data-aos-delay={props.delay}>
                <a className={props.name} href={props.href}>{props.name}</a>
            </li>
        )
    }
    const items = [["github", "https://github.com/kedarr12", "500"],
    ["twitter", "https://twitter.com/kedarr5", "600"],
    ["🔴", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "700"]];
    return (
        <nav>
            <ul >
                {
                    items.map((item, index) => {
                        return <NavbarItems key={index} name={item[0]} href={item[1]} delay={item[2]} />
                    })
                }
            </ul>
        </nav>
    )
}

export default function About() {
    return (
        <section className="about" id="about">
            <div className="content">
                <h1>About me: </h1>
                <article>
                    <p data-aos="zoom-in-up" data-aos-delay="0">I am Kedarr, a self taught developer 💻. To me, coding is an Art. I believe in creating artwork that is simple, optimised and connects the user with their computer.</p>
                    <p data-aos="zoom-in-up" data-aos-delay="100">Apart from spending my time coding, I also play minecraft, watch anime 👺 and listen to music 🎧.</p>
                    <p data-aos="zoom-in-up" data-aos-delay="200">I love coffee ☕ & cats 😼.</p>
                </article>
                <div className="links">
                    <p>links:</p>
                    <Navbar />
                </div>
            </div>
            <div className="video-holder" data-aos="zoom-in-up" data-aos-delay="300">
                <a href="https://www.youtube.com/watch?v=NUYvbT6vTPs">
                    <img src={VibeCat} alt="vibe-cat-gif" />
                </a>
            </div>
        </section>
    )
}