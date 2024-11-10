'use client'
import AOS from 'aos';
import CardStack from './CardStack';
import React, {useEffect, useState} from 'react';
export default function PersonalityCards() {
    
    const [cardHover,setCardHover] = useState(false);

    useEffect(()=> {
        AOS.init({
            duration : 1000
        });
    })

    return(
        <section className='flex flex-col justify-center content-center align-center'>
            <div className="container mx-auto flex flex-col xl:flex-row justify-center content-center align-center">

                <div 
                    className='w-full xl:w-1/2 relative flex justiy-center align-center items-center'
                    data-aos="fade-right"
                    // onMouseEnter={()=>{setCardHover(true)}}
                    // onMouseLeave={()=>{setCardHover(false)}}
                    // className="personality-card w-1/2 relative flex justify-center align-center items-center"
                >
                   {/* <img className={`card duration-500 absolute  z-50 origin-bottom-left ${cardHover? "card-action" : ""} ` } src="./cards/bank-action.png"/>
                   <img className={`card duration-500 absolute  z-40 origin-bottom-left ${cardHover? "card-nurturing" : ""} ` } src="./cards/bank-nurturing.png"/>
                   <img className={`card duration-500 absolute  z-30 origin-bottom-left ${cardHover? "card-blueprint" : ""} ` } src="./cards/bank-blueprint.png"/>
                   <img className={`card duration-500 absolute  z-20 origin-bottom-left ${cardHover? "card-knowledge" : ""} ` } src="./cards/bank-knowledge.png"/>
                    */}

                    <CardStack/>
                </div>

                <div className="w-full xl:w-1/2 mt-20 xl:mt-5 flex flex-col justify-center align-center ">
                    <div className="flex flex-row">

                        <div className="bg-code py-2 px-5 font-bold text-sm" data-aos="fade-down">
                            THE PRODUCTS
                        </div>
                    </div>
                    <h3 className="text-5xl font-bold mt-5" data-aos="fade-left">
                        The B.A.N.K. System <span className="text-code">Personality Cards</span> 
                    </h3>

                    <p className="mt-3" data-aos="fade-left">
                        The B.A.N.K. System Personality Cards are at the heart of the methodology by Cheri Tree. These cards allow both salespeople and prospects to easily identify personality types, helping customize communication and increase the chances of closing deals. Here’s how they work:
                    </p>

                    <h4 className="mt-4 font-bold" data-aos="fade-left">
                        Overview of the B.A.N.K. Cards
                    </h4>
                    <p className='mt-2 ' data-aos="fade-left">
                        There are four personality types, each represented by a specific card. Prospects are asked to rank the cards in order of preference, which reveals their dominant and secondary personality traits.
                    </p>
                </div>
            </div>
        </section>
    )
}