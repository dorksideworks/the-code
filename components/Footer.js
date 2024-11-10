

export default function Footer() {
    return(
        <div className="footer">
            <div className="container mx-auto flex flex-col xl:flex-row gap-10 py-20">
                <div className="basis-0 grow flex flex-col">
                    <img src="code-logo.png" className="w-24"/>
                    <p className="mt-5 text-sm">A company designed to empower your sales process with the latest advancements in human psychology & artificial intelligence. </p>
                </div>
                <div className="basis-0 grow" >
                    <h3 className="font-bold text-xl mb-5"> LINKS </h3>
                    <ul>
                        <li>HOME</li>
                        <li>PROBLEM</li>
                        <li>BANK SYSTEM</li>
                        <li>PERSONALITY CARDS</li>
                        <li>CODEBREAKER AI</li>
                    </ul>
                </div>

                <div className="basis-0 grow" >
                    
                </div>
            </div>
            <div className="text-center pb-5 text-gray-500">
                Copyright © 2024 THE CODE. All rights reserved. 
            </div>
        </div>
    )
}