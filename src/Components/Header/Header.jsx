import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
           <div className="flex lg:flex-row flex-col justify-between lg:px-24 my-4 items-center ">
                <div>
                    <img src="../Logo.png" alt="" />
                </div>
                <ul className="flex gap-4 font-semibold lg:mt-0 mt-8">
                    <li><NavLink className={({ isActive,isPending})=>isPending? "pending" :isActive ? "text-red-600 underline" : ""} to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive,isPending})=>isPending? "pending" :isActive ? "text-red-600 underline" : ""} to='/donation'>Donation</NavLink></li>
                    <li><NavLink className={({ isActive,isPending})=>isPending? "pending" :isActive ? "text-red-600 underline" : ""} to='/statistics'>Statistics</NavLink></li>
                </ul>
          </div>
    
        </div>
    );
};

export default Header;