import Image from "next/image";

const Custom404 = () => {
    return(
        <div className="w-full h-screen flex flex-col gap-3 items-center justify-center">
            <Image
            src={"/images/error.gif"}
            alt="404"
            width={150}
            height={150}
            />
            <div className="flex gap-3">
                <h1 className="flex  gap-3 items-center bg-linear-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text"><span className="font-bold text-2xl">404 |</span> Halaman Tidak Ditemukan</h1>
            </div>
        </div>
    )
}

export default Custom404;