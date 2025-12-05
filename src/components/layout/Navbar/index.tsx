'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";
import UnderlineButton from "../Buttons/UnderlineButton";
import RoundedFillButtonComponent from "@/components/layout/Buttons/RoundedFillButton";

const LOGO_PATH = '/images/logo.png';
const LOGO_WIDTH = 45;
const LOGO_HEIGHT = 45;

const navLinks = [
    {
        label: 'Beranda',
        link: '/'
    },
    {
        label: 'Tentang',
        link: '/#tentang'
    },
    {
        label: 'Proyek',
        link: '/#proyek'
    },
]

export default function Navbar() {
    const [isOpen,setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    return(
        <>
        <nav className="w-full fixed z-50 top-0 py-4 px-4 sm:px-10">
            {/* desktop */}
            <div className="md:flex hidden justify-between items-center ">
                <div>
                    <Link href={'/'}>
                        <Image src={LOGO_PATH} alt="logo" width={LOGO_WIDTH} height={LOGO_HEIGHT} />
                    </Link>
                </div>
                <div className="flex gap-8">
                    {navLinks.map(({label, link}, index) => (
                        <UnderlineButton key={index} label={label} link={link} />
                    ))}
                </div>
                <div>
                    <RoundedFillButtonComponent label={'Bergabung'} />
                </div>
            </div>
            {/* mobile sidebar */}
            <div className="md:hidden flex w-full justify-between">
                <Image alt="logo" src={LOGO_PATH} width={LOGO_WIDTH} height={LOGO_HEIGHT} />
                <button onClick={toggleMenu} className="text-3xl"><HiBars3BottomRight/></button>
                <aside className={`${isOpen ? 'translate-y-0' : '-translate-y-full'} absolute p-5 top-0 left-0 w-full gap-5 text-3xl flex flex-col justify-center items-center h-screen bg-slate-900 duration-800  rounded-b-lg transition-transform ease-in-out`}>
                    <button onClick={closeMenu} className="text-3xl absolute top-0 right-0 m-4"><FaXmark/></button>
                        {navLinks.map(({label, link}, index) => (
                            <UnderlineButton key={index} label={label} link={link} />
                        ))}
                    <RoundedFillButtonComponent label={'Bergabung'} />
                </aside>
            </div>
        </nav>
        </>
    )
}