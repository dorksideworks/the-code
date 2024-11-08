'use client'
import AOS from 'aos';
import { useEffect } from 'react';
export default function CodeBreaker(){
    useEffect(()=> {
        AOS.init({
            duration : 1000
        });
    })
    return(
        <section className="flex">
            <div className="flex flex-row container mx-auto justify-center content-center align-center ">

                <div className="basis-0 grow flex justify-center flex-col">
                    <div className="flex flex-row">

                        <div className="bg-code py-2 px-5 font-bold text-sm" data-aos="fade-down">
                            THE PRODUCTS
                        </div>
                        
                    </div>

                    <h3 className="text-5xl mt-5" data-aos="fade-right">CodeBreaker <span className="text-code font-bold">Artificial Intelligence (AI)</span> </h3>
                    <p className="mt-3" data-aos="fade-right"> 
                        CODEBREAKER AI analyzes anything written by your prospect to immediately and accurately identify their buying personality, coach you on the best way to communicate, negotiate, and close the sale with them, and even tell you whether or not your proposed response is effective!
                    </p>
                </div>
                
                <div className="basis-0 grow flex flex-col justify-center align-center content-center" data-aos="fade-left">
                    <img src="./codebreaker.png" />
                </div>
            
            </div>
        </section>
    )
}