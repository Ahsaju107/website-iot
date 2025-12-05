import HeaderHeroSection from "./HeaderHeroSection"
import MainContentHeroSection from "./MainContentHeroSection"

export default function HeroSection(){
    return(
        <section className="w-full h-full overflow-hidden">
            <HeaderHeroSection/>
            <MainContentHeroSection/>
            <div className=" block w-full h-[45vh] md:h-[15vh] bg-slate-950"></div>
        </section>
    )
}