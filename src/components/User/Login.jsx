import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {

    // const { signIn } = useContext(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        // const form = new FormData(e.currentTarget);
        // const email = form.get('email');
        // const password = form.get('password');
        // console.log(email, password)
        // signIn(email, password)
        //     .then(result => {
        //         console.log(result)

        //         //navigate after login
        //         navigate(location?.state ? location.state : '/')
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })
    }
    return (
        <div>
            <div className="hero mt-10">
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-300">
                    <div>
                        <h2 className="text-2xl font-bold text-center mt-10">Login your account</h2>
                    </div>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-green-400 text-white">Login</button>
                        </div>
                    </form>
                    <div className="text-center">
                        <h4>Login with</h4>
                        <div className="flex space-x-5 items-center justify-center">
                            <span><FcGoogle /></span>
                            <span><FaGithub /></span>
                        </div>
                    </div>
                    <p className="text-center mb-6"> Do not have an account? <Link to='/register' className="text-red-500 font-semibold">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;