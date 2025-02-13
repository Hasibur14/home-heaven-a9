import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from "react-router-dom";
AOS.init();

const EstateDetails = () => {

    const estate = useLoaderData();
    const { image, estate_title, description, facilities, location, status, price, area } = estate;

    return (
        <div>
            <Helmet>
                <title> Estate Details</title>
            </Helmet>
            <div className=" mx-auto p-4 container">
                <div className="flex flex-col  mx-auto overflow-hidden rounded">
                    <img src={image} alt="" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" className="w-full lg:h-[750px] rounded-xl dark:bg-gray-500" />
                    <div className="p-20 pb-12 m-4 mx-auto -mt-24 space-y-3 lg:max-w-9xl sm:px-10 sm:mx-12 rounded-xl  border-2 border-green-400 bg-neutral-500">
                        <div className="max-w-3xl px-6 py-28 mx-auto space-y-12" data-aos="fade-up"
                            data-aos-duration="3000">
                            <article className="space-y-4 dark:bg-gray-100 dark:text-gray-900 text-xl text-white">
                                <div className="space-y-6">
                                    <h1 className="text-3xl font-bold md:tracking-tight md:text-5xl lg:text-5xl text-green-400" data-aos="fade-up">{estate_title}</h1>
                                </div>
                                <div className="dark:text-gray-800" data-aos="fade-up">
                                    <p>{description}</p>
                                </div>
                                <div data-aos="fade-up">
                                    <p><span className='font-bold'>Location:</span> {location}</p>
                                    <p><span className='font-bold'>Price:</span> {price}</p>
                                    <p> <span className='font-bold'>Area:</span> {area}</p>
                                </div>
                            </article>
                            <div className='text-xl text-white'>
                                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                                    <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-green-500 text-white " data-aos="zoom-in-up">{status}</a>
                                    <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded- hover:underline bg-green-500 text-white"  data-aos="zoom-in-up">#Residential</a>
                                    <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 bg-green-500 text-white dark:text-gray-50"  data-aos="zoom-in-up">#Property</a>
                                </div>
                                <div className="space-y-2" data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom">
                                    <h4 className="text-xl font-bold">Facilities</h4>
                                    <ul className="ml-4 space-y-1 list-disc"data-aos="zoom-in-up" >
                                        {
                                            facilities.map(item => (
                                                <li key={item}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
