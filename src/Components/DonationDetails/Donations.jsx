import { Link } from "react-router-dom";



const Donations = ({donation}) => {
    const {bgColor,textColor,btnText,btnBg,categories,title,image,id,price,detailsBtnBg,detailsBtnText}=donation
    return (
        <div className=" mx-auto">
          
            <h1></h1>
            <div >
                <div style={{backgroundColor:bgColor}} className="lg:flex  mx-auto   lg:w-[600px]   rounded-lg  shadow-md hover:shadow-xl">
                    <div className="  lg:w-[280px]  rounded-lg ">
                        <img className="lg:h-[240px] rounded-lg" src={image} alt="" />
                       
                    </div>
                    <div className="p-5 mt-10">
                        <h1 style={{backgroundColor:btnBg,color:btnText}} className="font-medium w-24 text-center rounded-lg py-[6px]">{categories}</h1>
                        <h2 style={{color:textColor}} className="text-xl font-semibold">{title}</h2>
                        <h2 style={{color:textColor}} className="text-xl font-semibold">${price}</h2>
                        <Link to={`/donation/${id}`}><button style={{backgroundColor:detailsBtnBg,color:detailsBtnText}} className="text-xl font-medium px-3 py-2 rounded-lg">View Details</button></Link>
                    </div>
                    
                </div>
            </div>

        
            
        </div>
    );
};

export default Donations;