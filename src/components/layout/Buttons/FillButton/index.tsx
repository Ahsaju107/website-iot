type ButtonProps = {
    label: string
}

const FillButton = ({label}: ButtonProps) => {
    return(
        <>
            <button className="relative overflow-hidden flex items-center justify-center cursor-pointer w-auto py-2 px-4 rounded-full text-white/80 focus:text-slate-950 hover:text-black border border-white/40 group">
                <p className="z-10  text-base transition-colors duration-500"> {label} </p>
                <span className="absolute w-full h-full -translate-x-full group-hover:translate-x-0 group-focus:translate-x-0 bg-linear-to-r from-primary to-secondary transition-transform ease-in-out duration-500"></span>
            </button>
        </>
    )
}

export default FillButton;

