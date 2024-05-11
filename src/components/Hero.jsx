import Image from "next/image";
import avatar from '../images/avatar.jpg';

const Hero = () => {
    return (
        <>
        <div className="hero-container">
            
            <Image src={avatar} className="profile-img" width={300} height={300} alt="Sebastiano's profile picture" />
            <div className="hero-text">
                <h1>Hi, I'm Sebastiano 👋</h1>
                <p>
                    I'm a software developer and engineer based in Italy. I am primarily specialized in front-end development, 
                    with experience in building websites and applications using React JS and Magnolia CMS. 
                    I also have experience in back-end development, including database management and AWS implementation.
                </p>
                <div className="social-icons">
                    <a
                        href="https://github.com/Sebabba"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sebastiano-silipo-5abb96239"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;