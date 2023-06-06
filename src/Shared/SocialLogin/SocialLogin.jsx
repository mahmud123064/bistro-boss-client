import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            const saveUsers = { name: loggedUser.displayName, email: loggedUser.email}
            fetch('http://localhost:5000/users', {
                method: "POST",
                headers: {
                    "content-type": " application/json"
                },
                body: JSON.stringify(saveUsers)
            })
                // .then(res => res.json())
                .then(() => {
                        navigate(from, { replace: true })
                        // navigate('/')
                })
        })
    }

    return (
        <div className="text-center">
            <div className="divider">OR</div>
            <div className="my-5">
            <button onClick={handleGoogleSignIn} className="btn  btn-secondary">
               <FaGoogle></FaGoogle>
               OOGLE
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;