import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const Statistic = ({ donationData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Convert the donationData into the format expected by react-minimal-pie-chart
    const pieChartData = donationData.map((donation) => ({
      title: donation.title,
      value: donation.price,
      color: donation.bgColor,
    }));

    setData(pieChartData);
  }, [donationData]);

  // Calculate the total value of the pie chart
  const totalValue = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div>
      <div className='lg:w-[500px] mx-auto p-5'>
        <PieChart
          data={data}
          label={({ dataEntry }) => {
            // Calculate the percentage for each slice
            const percentage = ((dataEntry.value / totalValue) * 100).toFixed(2);
            return `${percentage}%`;
          }}
          labelStyle={{
            fontSize: '0.5rem',
            fill: '#fff',
          }}
        />
      </div>
      <div className='flex justify-center gap-12'>
        <h1>Your Donation</h1>
        <h2>Total Donation: ${totalValue.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Statistic;
