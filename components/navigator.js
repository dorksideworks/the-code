


export default function navigator() {

    return(
        <div className="z-50 relative">  
            <div className="container xl:py-10 mx-auto flex flex-row align-center items-center justify-around ">
                <img src="./code-logo.png" className="w-16" />

                <ul className="text-white flex flex-row gap-10 font-bold text-sm hidden xl:flex">
                    <li className=" hover:text-code duration-500 cursor-pointer"> HOME </li>
                    <li className=" hover:text-code duration-500 cursor-pointer">ABOUT</li>
                    <li className=" hover:text-code duration-500 cursor-pointer">PRODUCTS</li>
                    <li className=" hover:text-code duration-500 cursor-pointer">CONTACT</li>
                </ul>

                <div className="hidden xl:flex  rounded-full bg-code py-1 px-1 flex flex-row gap-3"> 
                    <span className="ml-5 flex flex-col justify-center items-center align-center "> LOGIN </span> 
                    <div className="rounded-full bg-black p-4"> </div>
                </div>

                <div className="h-20 relative flex items-center justify-center align-center sm:flex xl:hidden lg:hidden md:flex ">
                    <svg className="fill-white" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-white"  clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#000000"/>
                    </svg>
                </div>

            </div>

            
        </div>
    )
}