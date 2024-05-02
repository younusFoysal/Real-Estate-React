import {useEffect, useState} from "react";
import features from "./Features.jsx";
import Property from "./Property.jsx";
import {Helmet} from "react-helmet-async";


const Properties = () => {

    const [properties, setProperties] = useState([]);

    const [dataLength, setDatatLength] = useState(4)

    useEffect(() => {
        fetch('properties.JSON')
            .then(res => res.json())
            .then(data => setProperties(data))
    }, []);

    return (
        <div>
            <Helmet>SK Real estate | Properties </Helmet>

            <section id="properties" className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20">

                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

                    <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">All Properties
                       </h2>

                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        The property can personalize user experiences by understanding individual preferences and
                        tailoring
                        recommendations or content based on user behavior and historical data.
                    </p>

                </div>

                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:grid-cols-2">

                    {
                        properties.slice(0, dataLength).map(property => <Property key={properties.id}
                                                                                  property={property}></Property>)
                    }

                </div>

                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

                    <div className={dataLength === properties.length ? 'hidden' : ''}>

                        <button onClick={() => setDatatLength(properties.length)}
                                className="btn btn-primary bg-indigo-600 text-center items-center text-white">All
                            Properties
                        </button>

                    </div>
                </div>


            </section>

        </div>
);
};

export default Properties;