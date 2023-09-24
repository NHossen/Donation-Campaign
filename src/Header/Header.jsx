import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
           <div className="flex justify-between px-24 my-4 ">
                <div>
                    <h1>Logo</h1>
                </div>
                <ul className="flex gap-4">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/donation'>Donation</Link></li>
                    <li><Link to='/statistics'>Statistics</Link></li>
                </ul>
          </div>
        </div>
    );
};

export default Header;