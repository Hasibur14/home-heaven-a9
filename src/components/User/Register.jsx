import { Link } from "react-router-dom";


const Register = () => {

    // const {createUser}  = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        // const form = new FormData(e.currentTarget);
        // const name = form.get('name')
        // const photo = form.get('photo')
        // const email = form.get('email');
        // const password = form.get('password');
        // console.log(name, photo , email, password)

        // //create user
        // createUser(email, password)
        // .then(result => {
        //     console.log(result)
        // })
        // .catch(error=> {
        //     console.error(error)
        // })
    }

    return (
        <div>
            <div className="hero my-10">
                    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-300">
                        <div>
                            <h2 className="text-2xl font-bold text-center mt-10">Please Register</h2>
                        </div>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo URl" className="input input-bordered" required />
                            </div>
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
                                <button className="btn bg-green-400 text-white">Register</button>
                            </div>
                        </form>
                        <p className="text-center mb-6">Already have an account? <Link to='/login' className="text-blue-500 font-semibold">Login</Link></p>
                    </div>
                </div>
            </div>
    );
};

export default Register;