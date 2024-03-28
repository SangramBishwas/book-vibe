import { NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
        <li>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#23BE0A] text-lg border border-[#23BE0A] font-bold' : 'font-bold text-lg'}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/listed&books' className={({ isActive }) => isActive ? 'text-[#23BE0A] text-lg border border-[#23BE0A] font-bold' : 'font-bold text-lg'}>Listed Books</NavLink>
        </li>
        <li>
            <NavLink to='/pages&to&reload' className={({ isActive }) => isActive ? 'text-[#23BE0A] text-lg border border-[#23BE0A] font-bold' : 'font-bold text-lg'}>Pages to read</NavLink>
        </li>
        <li>
            <NavLink to='/faq' className={({ isActive }) => isActive ? 'text-[#23BE0A] text-lg border border-[#23BE0A] font-bold' : 'font-bold text-lg'}>Faq</NavLink>
        </li>
        <li>
            <NavLink to='/about&us' className={({ isActive }) => isActive ? 'text-[#23BE0A] text-lg border border-[#23BE0A] font-bold' : 'font-bold text-lg'}>About Us</NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-64 lg:mr-4">{links}</ul>
                </div>
                <NavLink className="font-extrabold text-xl lg:text-4xl">BookHouse</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-1 lg:gap-4">
                <a className="bg-[#23BE0A] text-sm lg:text-lg font-semibold text-white py-3 px-3 lg:px-5 rounded-md">Sign In</a>
                <a className="bg-[#59C6D2] text-sm lg:text-lg font-semibold text-white py-3 px-3 lg:px-5 rounded-md">Sign Up</a>
            </div>
        </div>
    );
};

Header.propTypes = {

};

export default Header;