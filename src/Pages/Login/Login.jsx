import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';


const Login = () => {

    const [disable, setDisable] = useState(true)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    ///// 
    const { signIn } = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You Have Successfully Logged In',
                    showConfirmButton: false,
                    timer: 1500
                })

                navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = (event) => {

        const user_captcha_value = event.target.value;
        console.log(user_captcha_value);

        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false)
            alert('captcha Matched')
        }
        else {
            setDisable(false)
            alert('captcha does not matched')
        }

    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login </title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type above the text" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                {/* Make button disabled for captcha */}
                                <input disabled={disable} type="submit" value="Login" className="btn btn-primary" />
                            </div>
                        </form>
                        <p className='text-center'><span>New Here? <Link to='/signup'>Create an account</Link></span></p>
                        <SocialLogin></SocialLogin>
                    </div>
                 
                </div>
                
            </div>
        </>


    );
};

export default Login;