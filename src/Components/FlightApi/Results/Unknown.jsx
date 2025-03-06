import React from 'react';

const Unknown = () => {
    return (
        <div className="mt-4">
            <div className="flex items-center justify-center">
                <h3>
                    Status : <span className="text-gray-600">Unknown</span>
                </h3>
            </div>
            <div className="flex items-center justify-center mt-4">
                <p>No data available for this flight.</p>
            </div>
        </div>
    );
};

export default Unknown;