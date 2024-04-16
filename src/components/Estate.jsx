import PropTypes from 'prop-types';

import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Estate = ({ property }) => {
    const { image, estate_title, location, status, price, area, id } = property;

    return (
        <div className="mt-10 mb-16">
            <div className="lg:w-[430px] rounded-lg shadow-md border-2 dark:bg-gray-50 dark:text-gray-800">
                <img src={image} alt="" className="object-cover object-center p-4 w-full rounded-t-md h-72 dark:bg-gray-800" />
                <div className="flex flex-col justify-between p-6 space-y-4">
                    <div className="flex justify-between">
                        <p className="text-xl font-semibold">{price}</p>
                        <p className="badge badge-warning p-2">{status}</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold tracking-wide">{estate_title}</h2>
                        <div className="flex justify-between">
                            <p>Area: <span className="font-bold">{area}</span></p>
                            <p className="badge badge-info p-3 text-white">Residential</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span><IoLocationOutline /></span>
                            <p className="dark:text-gray-800 ">{location}</p>
                        </div>
                    </div>
                    <Link to={`estate/${id}`}>
    <button className='flex btn items-center bg-green-400 text-white justify-center w-full p-3 font-semibold tracking-wide rounded-md'>Details</button>
</Link>
                </div>
            </div>
        </div >
    );
};

// Prop types validation
Estate.propTypes = {
    property: PropTypes.shape({
        image: PropTypes.string.isRequired,
        estate_title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        area: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired
};

export default Estate;
