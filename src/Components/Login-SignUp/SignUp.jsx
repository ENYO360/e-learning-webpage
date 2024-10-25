import Student1 from '../../Images/signUp-logIn/pupil-raising-hand-1.png';

export default function SignUp() {
    return (
        <>
            <div className="sign-up-wrapper">
                <div>
                    <img src={Student1} alt="pupil raising hand" />
                    <h2>Lorem Ipsum is simply </h2>
                    <p>Lorem Ipsum is simply </p>
                </div>
                <div>
                    <div>
                        <h3>Welcome to lorem..!</h3>
                        <div>
                            <button><a href="#">Login</a></button>
                            <button><a href="#">Register</a></button>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <form action="">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" name='eamil'/>
                    </form>
                </div>
            </div>
        </>
    )
}