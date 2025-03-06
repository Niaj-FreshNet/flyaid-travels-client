import Active from './Active';
import Landed from './Landed';
import Scheduled from './Scheduled';

const Results = (props) => {
    const { status, flightData, airportInfo } = props;

    const renderBasedOnStatus = (status) => {
        switch (status) {
            case "U":
                return <h1>Unknown</h1>;
            case "A":
                return <Active flightData={flightData} airportInfo={airportInfo}/> ;
            case "L":
                return <Landed flightData={flightData} airportInfo={airportInfo}/>;
            case "S":
                return <Scheduled flightData={flightData} airportInfo={airportInfo}/>;
            default:
                return <h1>Unavailable</h1>;
        }
    }
    return renderBasedOnStatus(status);
};

export default Results;