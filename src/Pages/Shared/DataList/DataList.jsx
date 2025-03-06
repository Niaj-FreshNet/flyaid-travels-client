import DataCard from "../DataCard/DataCard";

const DataList = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:grid-cols-2">
            {
                cards.map((card, index) =>
                    <DataCard
                        key={card._id}
                        card={card}
                        index={index + 1}
                    />
                )
            }
        </div>
    );
};

export default DataList;
