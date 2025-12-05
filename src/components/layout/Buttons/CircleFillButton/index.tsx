import { FaArrowRight } from "react-icons/fa";

type TypeProps = {
    buttonName: string,
    buttonColor: string,
    buttonBorder: string,
    textColor: string,
}

const CircleFillButtonComponent = ({buttonName, buttonColor, buttonBorder, textColor}: TypeProps) => {
    return(
        <>
            <button className={`relative overflow-hidden flex items-center justify-center cursor-pointer text-[20px] w-auto py-2 px-4 rounded-full  focus:text-black hover:text-black border ${textColor} ${buttonBorder}  group`}>
                <p className=" text-base transition-colors duration-500"> {buttonName} </p>
                <FaArrowRight className="ml-1 group-hover:ml-2 group-focus:ml-2 group-hover:rotate-20 group-focus:rotate-20 transition-all duration-300"/>
                <span className={`-z-1 absolute w-0 h-full group-hover:w-full group-focus:w-full bg-linear-to-r ${buttonColor} transition-all duration-500`}></span>
            </button>
        </>
    )
}

export default CircleFillButtonComponent;

