import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";

const EstateDetails = () => {

    const estate = useLoaderData();
    const { image, estate_title, description, facilities, location, status, price, area } = estate;

    return (
        <div>
            <section className='container mx-auto my-16'>
                <div className="bg-green-600 rounded-xl">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900 space-y-4">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl  text-white">{estate_title}</h1>
                        <p className="mt-6 mb-8 text-xl text-white sm:mb-12 xl:max-w-3xl ">{description}</p>
                        <div className="flex flex-wrap justify-center  space-x-4">
                            <p className='text-2xl text-white'>Price:             {price}</p>
                            <p className='badge badge-warning'>{status}</p>
                        </div>
                        <div className="flex flex-wraps space-x-4">
                            <p className='text-2xl text-white'>Area:       {area}</p>
                            <p className='badge badge-info'>Residential</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className='text-white'><IoLocationOutline /></span>
                            <p className="text-2xl text-white ">{location}</p>
                        </div>
                        <div className=''>
                            <p className='font-bold text-2xl text-white'>Facilities</p>
                            {
                                facilities.map(item => (
                                    <li  key={item} className='text-xl text-white'>{item}</li>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <img src={image} alt="" className="w-5/6 mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
            </section>
        </div>
    );
};

EstateDetails.propTypes = {
    estate: PropTypes.shape({
        image: PropTypes.string.isRequired,
        estate_title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        facilities: PropTypes.array.isRequired,
        location: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        area: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};

export default EstateDetails;
