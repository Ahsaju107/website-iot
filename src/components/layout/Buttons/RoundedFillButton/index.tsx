type ButtonProps = {
    label: string
}

const RoundedButtonComponent = ({label}: ButtonProps) => {
    return(
        <>
            <button className="relative overflow-hidden flex items-center justify-center cursor-pointer w-auto py-2 px-4 rounded-full text-black bg-linear-to-r from-primary to-secondary  text-[14px] focus:text-black hover:text-black  group">
                <p className="z-2 text-base transition-colors duration-500"> {label} </p>
                <span className="z-1 absolute w-0 h-full group-hover:w-full group-focus:w-full bg-gray-200 transition-all duration-500"></span>
            </button>
        </>
    )
}

export default RoundedButtonComponent;

