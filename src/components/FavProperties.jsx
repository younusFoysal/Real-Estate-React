
import {useLoaderData} from "react-router-dom";
import {getStoredProperty} from "./localstorage.js";

import {useEffect, useState} from "react";
import property from "./Property.jsx";

const FavProperties = () => {

    const properties = useLoaderData();

    const [favProperties, setFavProperties] = useState([]);
    const [displayProperties, setDisplayProperties] = useState([]);

    //setDisplayProperties(favProperties);



    useEffect(() => {
        const storedPropertyIds = getStoredProperty();
        if (properties.length > 0){
            const favsProperty = [];
            for (const id of storedPropertyIds){
                const property = properties.find(property => property.id === id);
                if (property){
                    favsProperty.push(property)
                }
            }
            setFavProperties(favsProperty);
            setDisplayProperties(favsProperty);

            console.log(favsProperty)
        }
    }, [properties]);


    return (
        <div>

            <div
                className="max-w-md mx-auto mt-16 bg-white rounded-lg overflow-hidden md:max-w-lg border border-gray-400">
                <div className="px-4 py-2 border-b border-gray-200">
                    <h2 className="font-semibold text-gray-800">Favourite Properties: {favProperties.length}</h2>
                </div>

                {
                    displayProperties.map(property => <div key={property.id} className="flex flex-col divide-y divide-gray-200">
                            <div className="flex items-center py-4 px-6">
                                <img className="w-16 h-16 object-cover rounded"
                                     src={property.image} alt="Product Image"/>
                                <div className="ml-3">
                                    <h3 className="text-gray-900 font-semibold">{property.estate_title}</h3>
                                    <p className="text-gray-700 mt-1">{property.price}/year</p>
                                </div>
                                <button className="ml-auto py-2 px-4 bg-indigo-600 hover:bg-blue-600 text-white rounded-lg">
                                    {property.segment_name}
                                </button>
                            </div>

                        </div>
                    )
                }


            </div>


        </div>
    );
};

export default FavProperties;