


export default function navigator() {

    return(
        <div className="z-50 relative">  
            <div className=" container py-10 mx-auto w-80 flex flex-row align-center items-center justify-between ">
                <img src="./code-logo.png" className="w-16" />
                <ul className="text-white flex flex-row gap-10 font-bold text-sm">
                    <li className=" hover:text-code duration-500 cursor-pointer"> HOME </li>
                    <li className=" hover:text-code duration-500 cursor-pointer">ABOUT</li>
                    <li className=" hover:text-code duration-500 cursor-pointer">PRODUCTS</li>
                    <li className=" hover:text-code duration-500 cursor-pointer">CONTACT</li>
                </ul>
                <div className="rounded-full bg-code py-1 px-1 flex flex-row gap-3"> 
                    <span className="ml-5 flex flex-col justify-center items-center align-center "> LOGIN </span> 
                    <div className="rounded-full bg-black p-4"> </div>
                </div>
            </div>

            
        </div>
    )
}