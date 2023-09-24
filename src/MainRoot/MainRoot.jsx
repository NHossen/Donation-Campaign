import { Outlet } from "react-router-dom";


const MainRoot = () => {
    return (
        <div>
            <div className='text-center font-bold'>Header</div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoot;