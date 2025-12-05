"use client"

import { useEffect, useRef } from "react";
import { FaLayerGroup } from "react-icons/fa6";
import { FiCpu, FiUsers } from "react-icons/fi";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MetricsData = [
    {
        label: 25,
        icon: <FiUsers/>,
        description: 'Member'
        
    },
    {
        label: 8,
        icon: <FaLayerGroup/>,
        description: 'Project'
        
    },
    {
        label: 50,
        icon: <FiCpu/>,
        description: 'Hardware'
        
    },
]

const HeroMetricsSection = () => {
    const metricsRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if(!metricsRef.current) return;
        
        const counters = metricsRef.current.querySelectorAll('.counter');
        counters.forEach((counter) => {
            const target = parseInt(counter.getAttribute('data-target') || '0');

            gsap.to(counter, {
                innerText: target,
                duration: 2,
                ease: 'power2.out',
                snap: {innerText: 1},
                scrollTrigger: {
                    trigger: counter,
                    start: 'top 90%',
                    toggleActions: 'play none none reset',
                },
                onUpdate: function(){
                    counter.textContent = Math.ceil(parseFloat(counter.textContent || '0')).toString() + '+';
                }
            })
        })

        return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [])

    return(
        <div ref={metricsRef} className="relative w-full flex justify-evenly md:justify-start gap-9">
            {MetricsData.map((data: any, index) => (
                <div key={index} className="flex flex-col items-center">
                    <h3 className="counter font-extrabold text-3xl bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text" data-target={data.label}>0</h3>
                    <div className="flex gap-2 items-center text-blue-500">
                        {data.icon}
                        <p className="text-sm text-slate-400">{data.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HeroMetricsSection;