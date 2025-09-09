import { GameProps } from "@/utils/types/games";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";
interface GameCardProps {
    data: GameProps;
}
export function GameCard({data} : GameCardProps)  {
    return (
        <Link href={`/game/${data.id}`}>
            <section className="w-full bg-slate-200 rounded-lg p-4 mb-5">
                <div className="relative w-full h-56  hover:scale-105 transition-all duration-300 ease-in-out">
                    <Image src={data.image_url} 
                        alt={data.title}
                        priority= {true}
                        quality={100}
                       // width={100}
                        //height={100}
                        fill={true}
                        className=" object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px)  44vw"
                        />
                </div>
                <div className="flex justify-between items-center mt-4">
                    <p className="font-bold text-sm px-2 text-black text-ellipsis truncate whitespace-nowrap overflow-hidden ">{data.title}</p>
                    <BsArrowRightSquare size={24} color="#000" />
                </div>
            </section>
        </Link>
    )
}