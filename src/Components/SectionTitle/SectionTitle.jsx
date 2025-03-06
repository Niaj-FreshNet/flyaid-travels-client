
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-2/3 md:w-1/3 mb-12 mx-auto text-center">
            <p className="text-yellow-600 italic mb-2">--- {subHeading} ---</p>
            <h3 className="text-2xl md:text-3xl uppercase border-y-4 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;