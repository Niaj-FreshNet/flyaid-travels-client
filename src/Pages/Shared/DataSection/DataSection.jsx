import React, { useState } from "react";
import useCards from "../../../Hooks/useCards";
import DataList from "../DataList/DataList";

const DataSection = () => {
    const [offer, loading] = useCards();
    const [visibleCards, setVisibleCards] = useState(4);

    const handleLoadMore = () => {
        setVisibleCards((prevVisibleCards) => prevVisibleCards + 2);
    };

    const handleCollapse = () => {
        setVisibleCards(4);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-screen-lg mx-auto">
            <DataList cards={offer.slice(0, visibleCards)} />
            <div className="text-center mt-12">
                {visibleCards < offer.length && (
                    <button 
                        onClick={handleLoadMore} 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                        See More
                    </button>
                )}
                {visibleCards > 4 && (
                    <button 
                        onClick={handleCollapse} 
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition ml-2"
                    >
                        See Less
                    </button>
                )}
            </div>
        </div>
    );
};

export default DataSection;
