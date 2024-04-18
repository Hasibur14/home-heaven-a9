import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Provider/AuthProvider";

const UpdateProfile = () => {
    const { updateUserProfile, user } = useContext(AuthContext);
    const [username, setUsername] = useState(user.displayName || "");
    const [imageURL, setImageURL] = useState(user.photoURL || "");
    const [bio, setBio] = useState("");

  
    const handleSubmit = (e) => {
        e.preventDefault();
        updateUserProfile(username, imageURL)
            .then(() => {
                toast.success("Profile updated successfully");

            })
            .catch((error) => {
                toast.error("Error updating profile:", error);
            });
    };

    return (
        <div className="mt-16">
            <Helmet>
                <title>Update profile</title>
            </Helmet>
            <section className="p-4 bg-neutral-100 container mx-auto rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12 bg-base-200">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-lg">
                        <div className="space-y-2 col-span-full lg:col-span-1 lg:ml-16 lg:mt-16">
                            <p className="text-3xl font-semibold">Profile</p>
                            <p className="text-xl">Update Your Profile!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="username" className="text-sm">Username</label>
                                <input
                                    id="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Username"
                                    className="w-full rounded-full p-3"
                                    required
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="imageURL" className="text-sm">Image URL</label>
                                <input
                                    id="imageURL"
                                    type="text"
                                    value={imageURL}
                                    onChange={(e) => setImageURL(e.target.value)}
                                    placeholder="Image URL"
                                    className="w-full rounded-full p-3"
                                />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm">Bio</label>
                                <textarea
                                    id="bio"
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    placeholder="   Bio"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-9 py-6"
                                ></textarea>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="currentPhoto" className="text-sm font-bold">Current Profile</label>
                                <div className="flex items-center space-x-2">
                                    <img src={user?.photoURL} alt="Profile" className="w-10 h-10 bg-gray-500 rounded-full" />
                                    <span>{user?.displayName}</span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-green-400 text-white w-32">Update Profile</button>
                            </div>
                        </div>

                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default UpdateProfile;
