
const getStoredDonations=()=>{
    const storedDonationDetails=localStorage.getItem('donations-details');
    if(storedDonationDetails){
        return JSON.parse(storedDonationDetails);
    }
    return[]
}
const saveDonationDetails=id=>{
   
  const storedDonationDetail=getStoredDonations();
  const exists=storedDonationDetail.find(donationId=> donationId===id);
  if(!exists){
    storedDonationDetail.push(id);
    localStorage.setItem('donations-details',JSON.stringify(storedDonationDetail));
  }

  
}
export {saveDonationDetails,getStoredDonations}