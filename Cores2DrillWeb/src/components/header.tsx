import "../App.css"

function Header() {
    return (
        <div className="header">
            <div className="header-left">Cores2Drill</div>
            <div className="header-center">
                +353 89 232 3315&nbsp;|&nbsp;
                <a
                    href="mailto:cores2drill@gmail.com"
                    style={{ color: "white", fontWeight: "normal", textDecoration: "underline" }}
                >
                    cores2drill@gmail.com
                </a>
                &nbsp;|&nbsp;Galway
            </div>
            <div className="header-right"></div>
        </div>
    )
}
export default Header