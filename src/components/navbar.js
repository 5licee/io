
function NavbarItems (props) {
    function ScrollTo() {
        if (props.id === "home") {
            // scroll to top
            window.scrollTo({ top: 0, behavior: "smooth"})
        }
        else {
            const element = document.getElementById(props.id)
            element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }
    return (
        <div className="navbar-item" onClick={ScrollTo}>
            <p>{props.name}</p>
            <span></span>
        </div>
    )
}


export default function Navbar() {

    const items = ["home", "about", "projects", "contact"];

    return (
        <nav>
            <div className="menu">
                {
                    items.map((item, index) => {
                        return <NavbarItems key={index} id={item} name={item} />
                    })
                }
            </div>
        </nav>
    )
}
