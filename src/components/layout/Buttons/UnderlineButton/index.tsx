import Link from "next/link";

type ButtonProps = {
    link: string,
    label: string,
}

const UnderlineButton = ({link, label} : ButtonProps) => {
    return(
        <li 
         className="relative flex 
           hover:text-transparent focus-within:text-transparent active:text-transparent 
           font-secondary 
           hover:bg-linear-to-r focus-within:bg-linear-to-r active:bg-linear-to-r 
           hover:from-primary focus-within:from-primary active:from-primary 
           hover:to-secondary focus-within:to-secondary active:to-secondary 
           hover:bg-clip-text focus-within:bg-clip-text active:bg-clip-text 
           group">
            <Link href={link} className="mb-2">{label} 
            <span 
             className="absolute bottom-0 left-0 w-0 
                 group-hover:w-full group-focus-within:w-full group-active:w-full 
                 h-[3px] rounded-full bg-linear-to-r from-primary to-secondary 
                 transition-all duration-500">
            </span>
            </Link>
            
        </li>
    )
}

export default UnderlineButton;