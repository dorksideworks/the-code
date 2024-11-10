'use client'
import AOS from 'aos';
import { useEffect } from 'react';

export default function CTAQuote() {
    useEffect(()=> {
        AOS.init({
            duration : 1000
        });
    })
    return(
        <div className="container mx-auto" data-aos="fade-up">
            <div className="cta-quote rounded-2xl flex flex-col-reverse xl:flex-row overflow-hidden">
                <div className="w-full xl:w-1/2 relative flex flex-col justify-center content-center align-center px-5 my-10 xl:px-20 z-50">

                    <h3 className=" text-4xl font-bold z-40 mt-5 xl:mt-0"> 
                        In order to get more Yeses you need more Yeses!
                    </h3>
                    <h4>
                        - Cheri tree
                    </h4>
                    <img className="absolute w-1/3 top-0 xl:top-12" src="./quote.png"/>

                    <div className="flex flex-row mt-5">
                        <div className="bg-code px-5 py-2 rounded-full font-bold text-sm"> LEARN MORE</div>
                    </div>
                
                </div>
                <img className="w-full xl:w-1/2 scale-125" src="./cta-quote-bg.png"/>
            </div>
        </div>
    )
}