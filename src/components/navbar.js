window.onload = function() {
    if (window.pageYOffset === 0) {
        document.getElementById("home-nav").classList.add("nav-active")
    }
}

window.onscroll = function() {
    var y = window.pageYOffset;
    const main = document.getElementById("main").children
    switch (true) {
        case 0 <= y && y < main[1].offsetTop - 1:
            document.getElementById("home-nav").classList.add("nav-active")
            document.getElementById("about-nav").classList.remove("nav-active")
            document.getElementById("projects-nav").classList.remove("nav-active")
            break;
        case main[1].offsetTop - 1 <= y && y < main[2].offsetTop - 1:
            document.getElementById("home-nav").classList.remove("nav-active")
            document.getElementById("about-nav").classList.add("nav-active")
            document.getElementById("projects-nav").classList.remove("nav-active")
            break;
        case main[2].offsetTop - 1 <= y:
            document.getElementById("home-nav").classList.remove("nav-active")
            document.getElementById("about-nav").classList.remove("nav-active")
            document.getElementById("projects-nav").classList.add("nav-active")
            break;
        default:
            break;
    }
}

function NavbarItems (props) {
    function ScrollTo() {
        if (props.name === "home") {
            window.scrollTo({ top: 0, behavior: "smooth"})
        }
        else {
            const element = document.getElementById(props.name)
            element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return (
        <li id={props.name+"-nav"} onClick={ScrollTo}>
            <p>{props.name}</p>
            <span></span>
        </li>
    )
}


export default function Navbar() {

    const items = ["home", "about", "projects"];

    return (
        <nav className="top">
            <ul>
                {
                    items.map((item, index) => {
                        return <NavbarItems key={index} name={item} />
                    })
                }
            </ul>
        </nav>
    )
}
