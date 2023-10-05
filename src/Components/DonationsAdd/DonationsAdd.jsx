import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../utility/localstorage";
import Donations from "../DonationDetails/Donations";


const DonationsAdd = () => {
    const donations=useLoaderData();

    const [donationsApplied,setDonationsApplied]=useState([])

    const [dataLength,setDataLength]=useState(4)
    useEffect(()=>{
        const storedDonationsIds=getStoredDonations();
        if(donations.length>0){
          const appliedDonations=donations.filter(donation=>storedDonationsIds.includes(donation.id))
          console.log(appliedDonations,donations,storedDonationsIds);


          setDonationsApplied(appliedDonations);
        }

    },[])
    return (
        <div>
             
             <h1 className="text-4xl text-center my-8">Your Donations</h1>

           <div className="grid lg:grid-cols-2 px-24 grid-cols-1  gap-5 mt-20">
            {
                donationsApplied.slice(0,dataLength).map((donation,idx)=><Donations key={idx} donation={donation}></Donations>)
            }
           </div>

           <div className="flex justify-center my-12">
            <button onClick={()=>setDataLength(donationsApplied.length)} className="bg-[#1a7e3b] px-4 py-2 text-white rounded-lg">See All</button>
           </div>
        </div>
    );
};

export default DonationsAdd;