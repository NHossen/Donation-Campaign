import { Link, useLoaderData, useParams,useRouteData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonationDetails } from "../../utility/localstorage";
const DonationDetails = () => {
    const donations=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);
    const donationDetails=donations.find(donation=>donation.id===idInt)

    const handelApplyDonate =()=>{
        saveDonationDetails(idInt);
        toast('You are Donate Succsesfully')
    }
    const updatedDonationDetails = {
        ...donationDetails,
        price: donationDetails.price, // Replace with the correct price value
      };
      
    return (
        <div>
            <div>
                <div className="lg:w-[1000px] mx-auto">
                    <div>
                        <img className="lg:w-[1000px] mx-auto rounded-xl my-12 " src={updatedDonationDetails.image} alt="" />
                        
                        <div className="bg-[#000000] bg-opacity-50 w-[312px] lg:w-[1000px] rounded-xl absolute -mt-[145px] lg:ml-0 ml-[58px] h-24 ">
                            <div className=" relative mt-[35px]  ml-5">
                                <Link onClick={handelApplyDonate}  className="py-2 px-3 rounded-lg" style={{backgroundColor:updatedDonationDetails.detailsBtnBg,color:updatedDonationDetails.detailsBtnText}}>Donate: $${updatedDonationDetails.price}</Link>
                            </div>
                           <ToastContainer/>
                        </div>
                    </div>
                    <h2 className="text-4xl font-semibold my-5 p-6">{donationDetails.title}</h2>
                    <h2 className="mb-12 p-6">{donationDetails.description}</h2>
                </div>
            </div>
            
        </div>
    );
};

export default DonationDetails;