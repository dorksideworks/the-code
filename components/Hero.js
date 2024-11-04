

export default function Hero() {
    return(
        <div className="container mx-auto">
        <div className="flex flex-row gap-5">
            <div className="text-white w-1/2 px-10 flex flex-col justify-center content-center">
                <div className="flex flex-row mb-5">
                    <div className="py-1 px-5 bg-code text-black font-bold"> THE CODE </div>
                </div>
                <h1 className="text-white text-5xl"> 
                    <span className="text-code font-bold">Empower your sales process</span> with the latest advancements in human psychology and AI
                </h1>
                <p className="mt-5">When interacting with potential clients, it’s crucial to communicate in a way that resonates with them, both in terms of language and context. By grasping their needs and preferences, we can customize our approach.
                </p>
                <br/>

                <div className="flex flex-row align-center gap-5">

                <div className="border-code border-2 px-5 py-2"> GET STARTED </div>

                <div className="flex flex-row align-center content-center justify-center justify-items-center gap-3">

                    <div className="flex flex-col justify-center align-center"> 
                    <div className="rounded-full bg-code p-4"></div>
                    </div>

                    <div className="flex flex-col justify-center algin-center">
                    <h3 className="">See How It Works</h3>
                    </div>

                </div>
                </div>
            </div>

            <div className="w-1/2 relative ">
              <img src="./bank_book_white.png" className="z-20 -left-24 w-12/12 scale-75 relative"/>
              <img src="./bank_book_black.png" className="absolute top-0 w-10/12 scale-75 rotate-45 z-10 -right-24"/>
              <img src="./code-phone-01.png" className="absolute top-72 -right-52 z-10 w-7/12"/>
              <img src="./code-phone-02.png" className="absolute top-0 -left-32 z-10 w-6/12"/>
              

            </div>

            <img src="./bg-texture-gradient.png" className="z-0 -top-72 opacity-75 absolute "/>

        </div>
      </div>

    )
}

