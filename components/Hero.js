'use client'
import AOS from 'aos';
import {useEffect} from 'react';
import "aos/dist/aos.css";

import {motion ,easeIn, easeOut, easeInOut, cubicBezier} from 'framer-motion';

export default function Hero() {

    useEffect(()=> {
        AOS.init({
            duration : 1000
        });
    })

    return(
        <div className="container mx-auto relative">

        <div className="flex flex-col-reverse gap-5 xs:flex-col sm:flex-col-reverse xl:flex-row">

            <div className="text-white w-full xl:w-1/2 px-10 flex flex-col justify-center content-center">
                <div className="flex flex-row mb-5">
                    <div className="py-1 px-5 bg-code text-black font-bold" data-aos="fade-down"> THE CODE </div>
                </div>
                <h1 className="text-white text-5xl" data-aos="fade-right"> 
                    <span className="text-code font-bold">Empower your sales process</span> with the latest advancements in human psychology and AI
                </h1>
                <p className="mt-5" data-aos="fade-right">When interacting with potential clients, it’s crucial to communicate in a way that resonates with them, both in terms of language and context. By grasping their needs and preferences, we can customize our approach.
                </p>
                <br/>

                <div className="flex flex-row align-center gap-5">

                <div className="border-code border-2 px-5 py-2" data-aos="fade-up"> GET STARTED </div>

                <div className="flex flex-row align-center content-center justify-center justify-items-center gap-3" data-aos="fade-up">

                    <div className="flex flex-col justify-center align-center"> 
                    <div className="rounded-full bg-code p-4"></div>
                    </div>

                    <div className="flex flex-col justify-center algin-center">
                    <h3 className="">See How It Works</h3>
                    </div>

                </div>
                </div>
            </div>

            <div className="w-full xl:w-1/2 relative">
                <motion.img 
                    initial={{rotate:"25deg", scale:".65", x:"0px", opacity:0}}
                    animate={{rotate:"-5deg", scale: ".65", x:"-50px", opacity:1}}
                    transition={{ease:[0.075, 0.82, 0.4, 1], duration:2, delay:.5}}
                    
                    src="./bank_book_white.png" className="z-20 -left-10 w-12/12 relative"
                />
                <motion.img 

                    initial={{rotate:"20deg", scale:".50", x:"-200px", opacity:0}}
                    animate={{rotate:"30deg", scale: ".75", x:"20px", opacity:1}}
                    transition={{ease:[0.075, 0.82, 0.4, 1], duration:2, delay:.5}}
                    src="./bank_book_black.png" className="absolute top-0 w-10/12 scale-75 rotate-45 z-10 -right-24"
                    />
                <motion.img 
                    src="./code-phone-01.png" className="absolute top-72 -right-52 z-10 w-7/12"

                    initial={{ scale:"1", x:"-200px", y:"500px", opacity:0}}
                    animate={{ scale: "1", x:"20px", y:"0px", opacity:1}}
                    transition={{ease:[0.075, 0.82, 0.4, 1], duration:2 , delay: 1}}
                    />
                <motion.img 
                    src="./code-phone-02.png" className="absolute top-0 -left-20 z-10 w-6/12"

                    initial={{ scale:"1", x:"-200px", y:"-500px", opacity:0}}
                    animate={{ scale: "1", x:"-25px", y:"0px", opacity:1}}
                    transition={{ease:[0.075, 0.82, 0.4, 1], duration:2, delay:1}}
                />
              

            </div>

            <img src="./bg-texture-gradient.png" className="z-0 -top-72 opacity-75 absolute "/>

        </div>
      </div>

    )
}

