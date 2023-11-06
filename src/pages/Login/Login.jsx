import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page', location);

    const Auth = getAuth();
    const Provider = new GoogleAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(Auth, Provider)
        .then(result => {
            console.log(result.user);
            Swal.fire({
                title: 'Success!',
                text: 'Logged in Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              });
            // Navigate after login
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.error(error);
          
        });
    }

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // Password validation regular expression
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!password.match(passwordRegex)) {
            Swal("Password Error", "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number.", "error");
            return;
        }

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                
                Swal.fire({
                    title: 'Success!',
                    text: 'Logged in Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  });
                // Navigate after login
                
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                
            });
    }

    return (
        <div>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Login</h2>
                <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div onClick={googleSignIn} className="form-control mt-6 md:w-3/4 lg:w-1/2 mx-auto">
                    <button  className="btn btn-primary">Login with Google</button>
                </div>
                <p className="text-center mt-4">Do not have an account <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;
