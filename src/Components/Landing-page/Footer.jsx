// Below is the conteent of the FOOTER section of the website
import SiteLogo from '../../Images/landing-page/site-logo.png'

export default function Footer() {
    return (
        <>
            <div>
                <img src={SiteLogo} alt="site logo" />
                <h3>Virtual Class for Zoom</h3>
            </div>
            <div>
                <p>Subscribe to get our Newsletter</p>
                <form action="">
                    <input type="email" placeholder='Your Email'/>
                    <button>Subscribe</button>
               </form>
            </div>
            <div>
                <div>
                    <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>
                <p>© 2021 Class Technologies Inc.</p>
            </div>
        </>
    )
}