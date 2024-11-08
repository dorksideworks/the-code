
'use client'

import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
export default function Problem() {

    useEffect(()=> {
        AOS.init({
            duration : 1000
        });
    })
    
    return(
        <section className="flex flex-col align-center justify-center content-center">
            <div className="container flex flex-col justify-center items-center align-center mx-auto">
                <div className="flex flex-col items-center justify-center align-center">
                    <div data-aos="fade-down" className="bg-code py-2 px-5">
                        THE PROBLEM
                    </div>
                    <h2 data-aos="fade-up" className="text-5xl text-center mt-5">The Problem in the <span className="text-code font-bold">Sales Process</span></h2>
                    <p data-aos="fade-up" className="text-center w-2/3 mt-3">When interacting with potential clients, it’s crucial to communicate in a way that resonates with them, both in terms of language and context. By grasping their needs and preferences, we can customize our approach.</p>
                </div>

                {/* <div className="mt-10">
                    <div className="flex flex-row gap-10">
                        <div className="p-8 bg-gradient-to-r from-code rounded-md ">
                            <h3 className="font-bold text-2xl"> High Rejection Rates </h3>
                            <p className="text-white mt-3 text-sm">Many sales professionals experience rejection because their approach doesn’t align with the prospect’s personality or decision-making style.</p>
                        </div>
                        <div className="p-8 rounded-md bg-code">
                            <h3 className="font-bold text-2xl"> High Rejection Rates </h3>
                            <p className="text-white mt-3 text-sm">Many sales professionals experience rejection because their approach doesn’t align with the prospect’s personality or decision-making style.</p>
                        </div>
                        <div className="p-8 bg-gradient-to-l from-code rounded-md ">
                            <h3 className="font-bold text-2xl"> High Rejection Rates </h3>
                            <p className="text-white mt-3 text-sm">Many sales professionals experience rejection because their approach doesn’t align with the prospect’s personality or decision-making style.</p>
                        </div>
                    </div>

                </div>
                <div className="mt-10">
                    <div className="flex flex-row gap-10">
                        <div className="p-8 bg-gradient-to-r from-code rounded-md ">
                            <h3 className="font-bold text-2xl"> High Rejection Rates </h3>
                            <p className="text-white mt-3 text-sm">Many sales professionals experience rejection because their approach doesn’t align with the prospect’s personality or decision-making style.</p>
                        </div>
                        <div className="p-8 rounded-md bg-code">
                            <h3 className="font-bold text-2xl"> High Rejection Rates </h3>
                            <p className="text-white mt-3 text-sm">Many sales professionals experience rejection because their approach doesn’t align with the prospect’s personality or decision-making style.</p>
                        </div>
                    </div>

                </div> */}


                <div className="flex flex-row gap-5 mt-10"> 

                    <div className="bg-white rounded-md px-5 py-10 basis-0 grow" data-aos="fade-up" data-aos-delay="0">
                        <div>
                            <div className="circle bg-code rounded-full mb-5">

                            </div>
                        </div>
                        <h3 className="font-bold text-xl text-black"> High Rejection Rates </h3>
                        <p className="text-gray-600 mt-3 text-sm">Many sales professionals experience rejection because their approach doesn’t align with the prospect’s personality or decision-making style.</p>
                    </div>

                    <div className="bg-white rounded-md px-5 py-10 basis-0 grow" data-aos="fade-up" data-aos-delay="200">
                        <div>
                            <div className="circle bg-code rounded-full mb-5">

                            </div>
                        </div>
                        <h3 className="font-bold text-xl text-black"> Lack of Connection with Prospects</h3>
                        <p className="text-gray-600 mt-3 text-sm">
                            Sales teams often struggle to build trust and rapport with prospects quickly, leading to failed conversions.
                        </p>
                    </div>
                    <div className="bg-white rounded-md px-5 py-10 basis-0 grow" data-aos="fade-up" data-aos-delay="400">
                        <div>
                            <div className="circle bg-code rounded-full mb-5">

                            </div>
                        </div>
                        <h3 className="font-bold text-xl text-black"> One-Size-Fits-all Sales Strategies </h3>
                        <p className="text-gray-600 mt-3 text-sm">Traditional sales models push generic pitches, which fail to engage customers with different decision-making triggers.
                        </p>
                    </div>
                    <div className="bg-white rounded-md px-5 py-10 basis-0 grow grow" data-aos="fade-up" data-aos-delay="600">
                        <div>
                            <div className="circle bg-code rounded-full mb-5">

                            </div>
                        </div>
                        <h3 className="font-bold text-xl text-black"> Long and Inefficient Sales Cycles</h3>
                        <p className="text-gray-600 mt-3 text-sm">Many deals get stuck in the pipeline because salespeople don’t know how to address key concerns early in the process.
                        .</p>
                    </div>
                    <div className="bg-white rounded-md px-5 py-10 basis-0 grow" data-aos="fade-up" data-aos-delay="1000">
                        <div>
                            <div className="circle bg-code rounded-full mb-5">

                            </div>
                        </div>
                        <h3 className="font-bold text-xl text-black">Miscommunication Between Teams</h3>
                        <p className="text-gray-600 mt-3 text-sm">Sales and marketing teams often struggle to align messaging and strategies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}