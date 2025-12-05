import HeaderHeroSection from "./HeaderHeroSection"
import MainContentHeroSection from "./MainContentHeroSection"

export default function HeroSection(){
    return(
        <section className="w-full h-full overflow-hidden">
            <HeaderHeroSection/>
            <MainContentHeroSection/>
        </section>
    )
}