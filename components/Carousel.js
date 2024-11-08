
'use client'

import {motion, useTransform, useScroll} from 'framer-motion';
import {useRef, useEffect} from 'react';
const cards = ["TITLE 1", "TITLE 2", "TITLE 3", "TITLE 4", "TITLE 4", "TITLE 4", "TITLE 4", "TITLE 4", "TITLE 4", "TITLE 4", "TITLE 4", "TITLE 4"]

export default function Carousel() {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef
    })

    const x = useTransform(scrollYProgress, [0,1], ["100%", "-295%"]);

    return(
        <section className='relative bg-red-500 h-[300vh] z-40'>
            
            <div className='sticky h-screen top-0 bg-yellow-500 w-[300vw] z-50 align-center justify-center flex' >
               
                <motion.div className='flex flex-row bg-green-500 w-[300vw] gap-10 items-center' style={{x}}>
                    {cards.map((card, index) => {
                        return(
                            <div className='p-12 w-1/2 bg-blue-500 h-[500px]' key={index}>
                                <h1 className='text-3xl text-white '> {card}</h1>
                            </div>
                        )
                    })}
                </motion.div>
            </div>

        </section>
    )
}

