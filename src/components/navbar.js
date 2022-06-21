window.onload = function() {
    if (window.pageYOffset === 0) {
        document.getElementById("home-nav").classList.add("nav-active")
    }
}

window.onscroll = function() {
    const main = document.getElementById("main").children
    // y offset
    const y = window.pageYOffset
    if (y === main[0].offsetTop) {
        document.getElementById("home-nav").classList.add("nav-active")
        document.getElementById("about-nav").classList.remove("nav-active")
        document.getElementById("projects-nav").classList.remove("nav-active")
    }
    else if (y === main[1].offsetTop) {
        console.log("about")
        document.getElementById("home-nav").classList.remove("nav-active")
        document.getElementById("about-nav").classList.add("nav-active")
        document.getElementById("projects-nav").classList.remove("nav-active")
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
        <div className="navbar-item" id={props.name+"-nav"} onClick={ScrollTo}>
            <p>{props.name}</p>
            <span></span>
        </div>
    )
}


export default function Navbar() {

    const items = ["home", "about", "projects"];

    return (
        <nav className="top">
            <div className="menu">
                {
                    items.map((item, index) => {
                        return <NavbarItems key={index} name={item} />
                    })
                }
            </div>
        </nav>
    )
}
