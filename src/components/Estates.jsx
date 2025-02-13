import { useLoaderData } from 'react-router-dom';
import Estate from './Estate';

const Estates = () => {
    const estates = useLoaderData()

    return (
        <div>
            <div className="text-center mt-16">
                <h2 className="text-3xl lg:text-5xl font-bold">Feature Properties</h2>
                <p className="text-xl mt-5 mb-16 p-2">When providing text about feature properties, its essential to highlight what makes them  significant or <br /> valuable to the user. For instance, instead of just listing technical specifications, you might emphasize how <br /> a particular feature enhances user experience, improves productivity, or solves a common problem</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {estates.map(estate => <Estate key={estate.id} property={estate} />)}
            </div>
        </div>
    );
};

export default Estates;
