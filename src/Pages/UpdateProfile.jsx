import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
    return (
        <div className="mt-16">
             <Helmet>
                <title>Update profile</title>
            </Helmet>
            <section className="p-6 bg-base-200 container mx-auto rounded-lg shadow-lg">
                <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-lg ">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="text-3xl font-semibold">Profile</p>
                            <p className="text-xl">Update Your Profile!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="username" className="text-sm">Username</label>
                                <input id="username" type="text" placeholder="    Username" className="w-full rounded-full p-3" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="text-sm">Image URL</label>
                                <input id="website" type="text" placeholder="  image url" className="w-full rounded-full p-3" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm">Bio</label>
                                <textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-9 py-6"></textarea>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm">Photo</label>
                                <div className="flex items-center space-x-2">
                                    <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 bg-gray-500 rounded-full" />
                                    <button className="btn bg-green-400 px-4 py-2 border rounded-xl w-28 text-white">Change</button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default UpdateProfile;