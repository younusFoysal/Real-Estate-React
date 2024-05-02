import {useLoaderData, useParams} from "react-router-dom";
import property from "./Property.jsx";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {MdFavorite} from "react-icons/md";
import {saveFavProperties} from "./localstorage.js"
import {Helmet} from "react-helmet-async";


const PropertyDetails = () => {

    const properties = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const property = properties.find(property => property.id === idInt)
    console.log(property)

    const handleAddFavourite = () => {
        saveFavProperties(idInt)
        toast('Property added in Favourite List.')
        toast('Login to View the List.')

    }

    return (
        <div>
            <Helmet>SK Real estate | Property Details </Helmet>
            <div className="bg-gray-100 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                                <img className="w-full h-full object-cover"
                                     src={property.image}
                                     alt="Product Image"/>
                            </div>
                            <div className="flex mx-2 mb-4 justify-center items-center">
                                <div className="w-1/2 px-2 ">



                                    <button onClick={handleAddFavourite}
                                        className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-indigo-600 ">
                                        <MdFavorite></MdFavorite>
                                        Add to Favourite
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <br/>
                            <div className="flex items-center">
                                <h2 className="text-2xl font-bold text-gray-800 mr-4 mb-2">{property.estate_title}</h2>
                                <div className="badge badge-secondary badge-outline">{property.segment_name}</div>
                            </div>

                            <br/>
                            <br/>
                            <div className="flex mb-4">
                            <div className="mr-4">
                                    <span className="font-bold text-gray-700 ">Price:</span>
                                    <span className="text-gray-600 "> {property.price}/year </span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 ">Status:</span>
                                    <span className="text-gray-600 "> {property.status}</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700 ">Area:</span>
                                <div className="flex items-center mt-2">
                                    <span className="text-gray-600 "> {property.area}</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700">Location:</span>
                                <div className="flex items-center mt-2">
                                    <span className="text-gray-600 "> {property.location}</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <span className="font-bold text-gray-700">Facilities:</span>
                                <div className="flex items-center mt-2">
                                    {property.facilities.map(facility => <button
                                        className="btn btn-ghost rounded-full">{facility}</button>)}

                                </div>
                            </div>


                            <br/>
                            <div>
                                <span className="font-bold text-gray-700 ">Product Description:</span>
                                <p className="text-gray-600 text-sm mt-2">
                                    {property.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />


        </div>
    );
};

export default PropertyDetails;