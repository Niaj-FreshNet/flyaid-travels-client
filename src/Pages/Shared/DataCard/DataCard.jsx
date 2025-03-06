import { CiGift } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";

const DataCard = ({ card }) => {
    const { _id, image, title, description, promo_code } = card;

    return (
        <div className="relative rounded-lg border-t-2 border-r-2 border-t-gray-100 border-r-white shadow-md p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <div className="absolute -top-3 -left-3 h-48">
                <img src={image} alt={title} className="w-[140px] h-[100px] object-cover rounded-md" />
            </div>
            <div className="ml-32">
                <h2 className="text-lg text-right text-[#00026E] font-bold text-pretty mb-2">{title}</h2>
                <p className="text-xs text-right mb-2 text-gray-600 text-pretty">{description}</p>
            </div>
            <div className="badge bg-[#ECF3FE] bg-opacity-50 p-2 mb-4">
                <p className="flex gap-2 items-center rounded-md text-base text-[#00026E]">
                    <CiGift />
                    {promo_code}
                </p>
            </div>
            <div className="absolute -bottom-4 right-5">
                <button className="flex gap-2 items-center bg-[#FDCC02] text-[#00026E] px-4 py-2 rounded hover:bg-[#FDCC02] hover:opacity-80 transition">
                    <FaExternalLinkAlt />
                    <p>Learn More</p>
                </button>
            </div>
        </div>
    );
};

export default DataCard;
