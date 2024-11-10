'use client'
import AOS from 'aos';
import { useEffect } from 'react';
export default function BankSystem() {

    
    useEffect(()=> {
        AOS.init({
            duration : 1000
        });
    })

    return(
        <section className="flex flex-col justify-center content-center align-center">
            <div className="container mx-auto flex flex-col-reverse xl:flex-row relative">

                <div className="basis-0 grow flex justify-center flex-col">
                    <div className="flex flex-row">

                        <div className="bg-code py-2 px-5 font-bold text-sm" data-aos="fade-down">
                            THE PRODUCTS
                        </div>
                        
                    </div>

                    <h3 className="text-5xl mt-5"  data-aos="fade-right" data-aos-delay="100">The <span className="text-code font-bold"> B.A.N.K. System</span> </h3>
                    <p className="mt-3"  data-aos="fade-right" data-aos-delay="200">
                        B.A.N.K. is a scientifically validated methodology designed to predict buying behavior in nanoseconds. B.A.N.K. was originally created in the early 2000’s by the company’s Founder and Chairman, Cheri Tree. Her original goal was to find a solution to beat the proverbial numbers game in sales and ultimately close more sales in less time. Her system not only revolutionized her income and sales success, but it also rapidly expanded globally to top professionals, companies, and industries worldwide.

                    </p>
                </div>

                <div className="basis-0 grow relative z-50" data-aos="fade-left">
                    <img src="./green-fg.png" className="z-30 absolute -right-72" />
                    <img src="./blue-fg.png" className="z-30 absolute -bottom-12 scale-75 -left-24" />
                    <img src="./red-fg.png" className="z-30 absolute bottom-44 scale-75 -right-52" />
                    <img src="./yellow-bg.png" className="z-10 absolute top-0 scale-75 -left-24" />

                    <img  className="z-20 relative scale-75" src="bank_book_black.png" />
                    <img className="absolute z-10 bank-white" src="bank_book_white.png"/>
                </div>

                <img src="bg-texture-gradient.png " className="absolute z-0 -top-32 opacity-75 scale-150 -right-72 z-0"/>

            </div>
        </section>
    )
}