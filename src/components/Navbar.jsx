import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-green-400 font-bold border-2 border-green-400' : 'font-normal'}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/updateProfile' className={({ isActive }) => isActive ? 'text-green-400 font-bold border-2 border-green-400' : 'font-normal'}>Update Profile</NavLink>
        </li>
        <li>
            <NavLink to='/userProfile' className={({ isActive }) => isActive ? 'text-green-400 font-bold border-2 border-green-400' : 'font-normal'}> User Profile</NavLink>
        </li>
        <li>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-green-400 font-bold border-2 border-green-400' : 'font-normal'}>Contact</NavLink>
        </li>
    </>


    return (
        <div className="bg-neutral-100 fixed z-10 w-full shadow-md">
            <div className="navbar flex justify-between lg:mx-16 ">
                <div className="navbar">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl gap-0 font-bold">Home<span className="text-green-400">Heaven</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[18px] font-bold">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar hidden lg:flex space-x-4 lg:ml-72">
                    <div className="dropdown dropdown-end justify-center items-center ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img  alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Logout</a></li>
                        </ul>
                        <button className="btn bg-green-500 text-white ">Log In</button>
                    </div>
                </div>
               
            </div>
        </div>
    );
}
export default Navbar;