import React, { useState } from 'react';
import { Button, Modal, Box, Typography, CircularProgress } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import { LuPlane } from 'react-icons/lu';
import dayjs from 'dayjs';
import InputNumber from '../Tuktak/InputNumber';
import Options from '../Tuktak/Options';
import Results from '../Results/Results';
import InputDate from '../Tuktak/InputDate'; // Adjust the path if necessary

const SearchPage = () => {
    const [carrier, setCarrier] = useState("");
    const [date, setDate] = useState(null);
    const [flightNum, setFlightNum] = useState("");
    const [data, setData] = useState({});
    const [open, setOpen] = useState(false);
    const [showStatusButton, setShowStatusButton] = useState(false);
    const [loading, setLoading] = useState(false); // Loading state

    const onAirlineChange = (selectedOption) => {
        console.log(`selected ${selectedOption.code}`);
        setCarrier(selectedOption.code);
    };

    const onFlightNumChange = (value) => {
        console.log(value);
        setFlightNum(value);
    };

    const onChangeDate = (newDate) => {
        console.log(newDate);
        setDate(newDate); // Set the date directly as a Day.js object
    };

    const onSearch = () => {
        if (!carrier || !flightNum || !date) {
            alert('Carrier, Flight Number, and Date are required');
            return;
        }

        const formattedDate = date.format('YYYY/MM/DD'); // Format the date

        console.log(carrier, flightNum, formattedDate);

        setLoading(true); // Show the spinner

        fetch(
            `https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${carrier}/${flightNum}/dep/${formattedDate}`,
            {
                method: "GET",
                headers: {
                    appId: "5e9f7ce1",
                    appKey: "a7636ee9e90eaeed3fd5f9343cf073be"
                }
            }
        )
            .then(response => response.json())
            .then(finalData => {
                console.log(finalData);
                setData(finalData);
                setLoading(false); // Hide the spinner
                setOpen(true); // Open the modal with search results
                setShowStatusButton(false); // Hide the status button when search is clicked
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); // Hide the spinner
                alert(`Failed to fetch data: ${error.message}`);
            });
    };

    const handleClose = () => {
        setOpen(false);
        setShowStatusButton(true); // Show the status button when the modal is closed
    };

    return (
        <div className="relative mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
            <div className="relative w-full md:w-[700px] lg:w-[800px] shadow-2xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 bg-white shadow-md rounded-2xl px-4 py-2 z-10">
                    <h2 className="flex items-center gap-2 text-xl font-bold text-center"><LuPlane />Flight</h2>
                </div>
                <div className="bg-white shadow-md rounded-2xl mx-auto px-6 md:px-8 pt-16 pb-16">
                    <div className="flex flex-col md:flex-row mx-auto items-start justify-around gap-6">
                        <div className="w-full">
                            <h2 className="font-bold mb-2">Airline</h2>
                            <Options value={carrier} onChange={onAirlineChange} />
                        </div>
                        <div className="w-full">
                            <h2 className="font-bold mb-2">Flight No.</h2>
                            <InputNumber value={flightNum} onChange={onFlightNumChange} />
                        </div>
                        <div className="w-full">
                            <h2 className="font-bold mb-2">Select Date</h2>
                            <InputDate value={date} onChangeDate={onChangeDate} />
                        </div>
                    </div>
                </div>
                <div className="absolute bg-[#0851A7] rounded-md bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 z-10 mb-4">
                    <Button
                        onClick={onSearch}
                        className="hover:font-bold rounded-md shadow-lg transition duration-300 ease-in-out transform hover:bg-[#151ca2] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#151ca2] focus:ring-opacity-50"
                        disabled={loading} // Disable the button when loading
                    >
                        <div className='flex items-center justify-center gap-2 px-2 py-1 '>
                            {loading ? <CircularProgress size={24} style={{ color: 'white' }} /> : <FaSearch className='text-white' />}
                            <p className='text-white'>{loading ? 'Loading...' : 'Search'}</p>
                        </div>
                    </Button>
                </div>
                {showStatusButton && (
                    <div className="absolute bg-success rounded-md bottom-0 left-1/2 transform -translate-x-1/2 translate-y-20 z-10">
                        <Button
                            onClick={() => setOpen(true)}
                            className="flex items-center justify-center gap-2 hover:font-bold p-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:bg-success hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FDCC02] focus:ring-opacity-50"
                        >
                            <p className='text-white px-2'>See Status</p>
                        </Button>
                    </div>
                )}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="search-results-modal"
                aria-describedby="search-results-description"
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, px: 4, pt: 2, pb: 1, borderRadius: 2, maxWidth: 500 }}>
                    <div id="search-results-modal" className='text-xl text-center mb-4'>
                        Search Results
                    </div>
                    {data.flightStatuses && (
                        <>
                            <Results
                                status={data.flightStatuses[0].status}
                                flightData={data.flightStatuses[0]}
                                airportInfo={data.appendix.airports}
                            />
                            <div className="text-center mt-4">
                                <Button onClick={handleClose} className="bg-[#0851A7] text-white px-4 py-2 rounded-md">Close</Button>
                            </div>
                        </>
                    )}
                    {data.flightStatuses && data.flightStatuses.length === 0 && (
                        <Typography variant="body1">Sorry, no info available</Typography>
                    )}
                </Box>
            </Modal>
        </div>
    );
};

export default SearchPage;
