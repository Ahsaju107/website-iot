"use client"

import CircleFillButtonComponent from "@/components/layout/Buttons/CircleFillButton";
import RoundedButtonComponent from "@/components/layout/Buttons/RoundedFillButton";
import { BsStars } from "react-icons/bs";
import { FaCode } from 'react-icons/fa6'
import { CgSmartphoneChip } from "react-icons/cg";
import HeroMetricsSection from './HeroMetricsSection';
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);


const MainContentHeroSection = () => {
    const tl = gsap.timeline();

    useEffect(() => {
       tl.fromTo('#logo',
        {
            y: '-55vh',
            x: '-25vw',
            scale: 0.95,
            rotate: 0,
        },
        {
            scrollTrigger: {
                trigger: '#mainHeroContent',
                start: 'top bottom',
                scrub: 2,
                toggleActions: 'play reverse play reverse',
                end: 'center center'
            },
            y: '0',
            scale: 0.85,
            rotate: 360,
            x: '0'
        }
       )
    }, [])


    return(
    <>
    <section id="mainHeroContent" className='relative w-full h-screen'>
        <div className='absolute bottom-8 -translate-x-40 h-[400px] w-[400px] bg-linear-to-br from-primary from-60% to-secondary opacity-40 rounded-full blur-3xl'></div>
        <div className='mt-20 w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-0 p-5'>
            {/* left content */}
            <div className='flex flex-col justify-center md:mr-auto lg:pl-5 gap-4 '>
                <div className='flex gap-2 mb-5 items-center mx-auto w-80 md:w-full py-1 px-2 text-[14px] text-blue-400 ring-1 ring-slate-400/40 rounded-full'>
                    <BsStars/>
                    <p className='text-white'>Ekstrakurikuler SMK Negeri 1 Palasah</p>
                </div>
            <h1 className='text-4xl lg:text-6xl text-center sm:text-left font-extrabold mb-3'>Ekstrakurikuler<br/> 
                <span className='bg-linear-to-r text-3xl md:text-4xl lg:text-6xl from-primary to-secondary text-transparent bg-clip-text'>Internet of Things</span>
            </h1>
            <p className='text-gray-300/70 lg:text-xl text-justify md:text-left mb-2'>
                Temukan potensi minat dan bakat Anda bersama ekskul yang mendukung,
                fasilitas memadai, dan sumber daya berkualitas tinggi.
            </p>
            <div className='flex justify-center md:justify-start gap-4 mb-6'>
                 <RoundedButtonComponent label={'Gabung'}/>
                        <CircleFillButtonComponent 
                                            buttonName={"Lihat Proyek"} 
                                            buttonBorder={'border-white/40'} 
                                            buttonColor={'bg-linear-to-r from-primary to-secondary'} 
                                            textColor={'text-white'}
                                        />
            </div>
            <HeroMetricsSection/>
            </div>
            {/* right content */}
            <div className=' text-blue-400 text-2xl flex justify-center items-center    '>
                <div className='absolute top-0 left-0 md:ml-3 rounded-lg ring-1 ring-blue-400/50 p-3 hover:-translate-y-1 transition-transform duration-500'><FaCode/></div>
                <div className='absolute bottom-0 right-0 rounded-lg ring-1 ring-blue-400/50 p-3 hover:-translate-y-1 transition-transform duration-500'><CgSmartphoneChip/></div>
                <div className="relative flex justify-center items-start overflow-visible">
                    <div className="relative aspect-square w-[360px] md:w-[480px] lg:w-[560px]">
                        <Image
                        id="logo"
                        src="/images/logo.png"
                        alt="logo"
                        fill
                        className="object-contain drop-shadow-xl"
                        priority
                        />
                    </div>
                 </div>
            </div>
        </div>
    </section>
    </>
    )
}

export default MainContentHeroSection;