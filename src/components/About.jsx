import React from 'react';
import {Helmet} from "react-helmet-async";

const About = () => {
    return (
        <div className="divide-x divide-indigo-600">
            <Helmet>SK Real estate | About </Helmet>
            <div id="about" className="relative bg-white overflow-hidden mt-16">
                <div className="max-w-7xl mx-auto">
                    <div
                        className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100"></polygon>
                        </svg>

                        <div className="pt-1"></div>

                        <main
                            className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
                                <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span
                                    className="text-indigo-600">Our Company</span>
                                </h2>
                                <p>
                                    The chronicle of SK Real Estate Ltd. is a glorious history to be told. It is a history of one and half year’s decade of innovation, intelligence and indomitable industrious approach. Since its establishment in 1996 by its Chairman Mr. Shafiul Islam, NREL has been proving its worth, as a proud concern of SK Group. These days, from construction to energy, manufacturing to trading, SK Group is the frontrunner in multi-diversified business operations.</p>
                                    <br/>
                                   <p> In the last 22 years, SK has completed a significant number of projects in all over Dhaka and Chittagong cities. Around more than hundred projects both residential and commercial are now ongoing in Dhaka and Chittagong cities.
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
                         src="https://i.ibb.co/m8yxc71/Modern-Office-Interior-with-Open-Floor-Plan-scaled.jpg" alt=""/>
                </div>
            </div>
            <br/>
            <br/>
            <hr/>
            <hr/>
            <br/>
            <div className="sm:flex items-center max-w-screen-xl">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <img src="https://i.ibb.co/BLQxz9C/modern-office-design-for-a-large-conference-room.jpg"/>
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">

                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">Why <span className="text-indigo-600">Choose us?</span>
                        </h2>
                        <br/>
                        <p className="text-gray-700">
                            SK was established in 2016 by experienced international estate agent Bridgette Ball and her husband Jason Ball. We wanted to establish a brand that we felt best represented our values. Over the years the business has shown a natural growth in the expat property market as we have an understanding of having walked in the shoes of our clients being expats ourselves.</p> <br/>

                            <p>That is why, for a period, the company was renamed Expat Property Brokers and began focusing primarily on expat property. With this success, more expat agencies began targeting the expat market, positioning themselves as expat specialists, and the name “Expat Property Brokers” became diluted, becoming as “an” rather than “the” expat property brokerage. Hence, in 2023 we decided to change our name back to SK.
                        </p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default About;