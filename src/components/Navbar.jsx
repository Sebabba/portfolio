import Link from "next/link";

const Navbar = () => {
    return(
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Sebastiano's Porfolio
                </Link>
            </div>
            <a href="/CV_Definitivo.pdf"
                download="Resume_PDF"
                target="_blank"
                rel="noreferrer" 
                className="cta-btn">Resume
            </a>
        </div>
    )
}

export default Navbar;