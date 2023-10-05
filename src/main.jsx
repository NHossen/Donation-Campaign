import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainRoot from './Components/MainRoot/MainRoot';
import Home from './Components/Home/Home';
import DonationDetails from './Components/DonationDetails/DonationDetails';
import DonationsAdd from './Components/DonationsAdd/DonationsAdd';
import Statistic from './Statistic/Statistic';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRoot></MainRoot>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/donation',
        element: <DonationsAdd></DonationsAdd>,
        loader: () => fetch('../data.json'),
      },
      {
        path: '/donation/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('../data.json'),
      },
      {
        path: '/statistics',
        element: <Statistic donationData={donationDetails}></Statistic>,
      },
    ],
  },
]);

const App = () => {
  // Initialize the donation data
  const initialDonationData = [
    {
      id: 1,
      price: 0, // Initialize the price to 0
    },
    {
      id: 2,
      price: 0,
    },
    // Add more donation items with initialized prices here
  ];

  // State to manage the donation data
  const [donationDetails, setDonationDetails] = useState(initialDonationData);

  // Function to update the donation price when a donation is applied
  const updateDonationPrice = (id, updatedPrice) => {
    setDonationDetails((prevDonationDetails) =>
      prevDonationDetails.map((item) =>
        item.id === id ? { ...item, price: updatedPrice } : item
      )
    );
  };

  return (
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
