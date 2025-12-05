import { FaWifi } from "react-icons/fa6";
import { SiArduino } from "react-icons/si";

export default function HeaderHeroSection(){
    return(
        <div id="headerHeroSection" className="relative w-full h-screen">
             <div
                 className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]"
             ></div>
             <div className="flex flex-col lg:flex-row gap-4 w-full h-full font-primary font-bold text-6xl lg:text-8xl justify-center items-center">
                <span className="bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text">Internet</span>
                of
                <span className="bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text">Things</span>
             </div>
                <div className="hidden md:block absolute bottom-1/6 left-10 -rotate-20 text-primary -z-10 text-7xl"><SiArduino /></div>
                <div className="hidden md:block absolute top-1/5 right-10 rotate-20 text-shadow-primary text-primary -z-10 text-7xl"><FaWifi /></div>
        </div>
    )
}