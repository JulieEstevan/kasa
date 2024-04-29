import logo from "../assets/LogoWhite.png"

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="Kasa" className="logo"/>
            <p>
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}

export default Footer