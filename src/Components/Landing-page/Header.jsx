import Logo from '../../Images/landing-page/site-logo.png'

export default function Header() {
    return (
        <>
            <nav>
                <img src={Logo} alt="site logo"/>
                <div className="nav-links">
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Courses</a></li>
                        <li><a href='#'>Careers</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>About Us</a></li>
                    </ul>
                    <div className="nav-buttons">
                        <a href="#"><button className='login'>Login</button></a>
                        <a href="#"><button className='sign-up'>Sign Up</button></a>
                    </div>
                </div>
            </nav>
        </>
    )
}