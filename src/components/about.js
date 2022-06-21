function Navbar() {
    function NavbarItems(props) {
        return (
            <div className="navbar-item" data-aos="zoom-in-up" data-aos-delay={props.delay}>
                <a className={props.name} href={props.href}>{props.name}</a>
            </div>
        )
    }
    const items = [["github", "https://github.com/kedarr12", "0"],
    ["twitter", "https://twitter.com/kedarr5", "100"],
    ["🔴", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "200"]];
    return (
        <nav>
            <div className="menu">
                {
                    items.map((item, index) => {
                        return <NavbarItems key={index} name={item[0]} href={item[1]} delay={item[2]} />
                    })
                }
            </div>
        </nav>
    )
}

export default function About() {
    return (
        <div className="about" id="about" >
            <div className="content">
                <h1>About me: </h1>
                <p data-aos="zoom-in-up" data-aos-delay="0">
                    I am Kedarr, a self taught developer 💻. To me, coding is an Art. I believe in creating artwork that is simple, optimised and connects the user with their computer.
                </p>
                <p data-aos="zoom-in-up" data-aos-delay="100">
                    Apart from spending my time coding, I also play minecraft, watch anime 👺 and listen to music 🎧.
                </p>
                <p data-aos="zoom-in-up" data-aos-delay="200">
                    I love coffee. ☕
                </p>
                <p data-aos="zoom-in-up" data-aos-delay="400">
                |\---/|<br/>| o_o |<br />&nbsp;\_^_/  & a cat person
                </p>
            </div>
            <div className="links">
                <p>links:</p>
                <Navbar />
            </div>
        </div>
    )
}