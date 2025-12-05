"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to('#featuresHeading',{
            scrollTrigger: {
                trigger: '#featuresSection',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
            y: '-100vh',
            zIndex: 3,
        })

    }, [])

    return(
        <section id="featuresSection" className="w-full h-full bg-[#080807]">
            <div id="featuresHeading" className=" w-full h-[500px] flex flex-col justify-between rounded-t-4xl px-10 bg-[#080807]">
                <div className="w-full mt-16">
                    <h1 className="font-semibold text-5xl lg:text-8xl font-primary bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text">Kegiatan Kami</h1>
                </div>
                <div className="flex justify-end w-full lg:mb-10">
                    <div className="h-full w-full lg:w-[55%] flex flex-col lg:flex-row gap-5 lg:gap-10 text-gray-400">
                        <h4>(PROGRAM)</h4>
                        <p className="lg:text-[20px] lg:[word-spacing:4px]">
                            Program IoT kami mengajarkan siswa-siswi cara membangun, menggunakan, dan 
                            mengembangkan perangkat keras maupun perangkat lunak terkini. Mulai dari 
                            microcontroller hingga sensor, setiap alat dirancang untuk membuka peluang 
                            inovasi di dunia industri.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}