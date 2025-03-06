// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "./useAxiosPublic";

// const useCards = () => {
//     const axiosPublic = useAxiosPublic();

//     const { data: offer = [], isLoading: loading, refetch } = useQuery({
//         queryKey: ['offer'],
//         queryFn: async () => {
//             const res = await axiosPublic.get('/offer');
//             return res.data;
//         }
//     });

//     return [offer, loading, refetch];
// };

// export default useCards;


import { useState, useEffect } from "react";

const useCards = () => {
    const [offer, setOffer] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOffer = async () => {
            try {
                const response = await fetch('/offer.json');
                const data = await response.json();
                setOffer(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOffer();
    }, []);

    return [offer, loading];
};

export default useCards;
