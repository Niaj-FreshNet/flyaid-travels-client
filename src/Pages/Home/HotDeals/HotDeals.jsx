import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Card from "../../Shared/DataCard/DataCard";
import DataSection from "../../Shared/DataSection/DataSection";

const HotDeals = () => {
    return (
        <div className="px-8 pt-4 pb-8">
            <div>
                <SectionTitle
                    subHeading="Offers"
                    heading="Hot Deals"
                />
            </div>
            <DataSection />
        </div>
    );
};

export default HotDeals;