
import { Container } from "@/components/container";
import { GameCard } from "@/components/gameCard";
import { Input } from "@/components/input";
import { GameProps } from "@/utils/types/games";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";
async function getDalygame(): Promise<GameProps> {
  try {
    const res = await fetch(`${ process.env.NEXT_API_URL}/next-api/?api=game_day`, {
      next: {
        revalidate: 320, // faz a busca a casa 320 segundos
      },
    });
    return res.json();
  } catch (error) {
      throw new Error("Failed to fetch data")
  }
}


async function getGamesDate() : Promise<GameProps[]> {
    try {
      const res = await fetch(`${ process.env.NEXT_API_URL}/next-api/?api=games`, {
        next: {
          revalidate: 320, // faz a busca a casa 320 segundos
        },
      });
      return res.json();
    } catch (error) {
        throw new Error("Failed to fetch data")
    }
}
export default  async function Home() {
  const dalygame : GameProps = await getDalygame();
  const data: GameProps[]    = await getGamesDate();
  console.log(dalygame);
  return (
    <main className="w-full">
     <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">Separamos um jogo Excluxivo para voce</h1>
        <Link href={`/game/${dalygame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="relative w-full h-96 max-h-96">
              <div className="absolute z-20 bottom-0 flex justify-center, items-center gap-2">
                <p className="font-bold text-xl text-white"> {dalygame.title}</p>
                <BsArrowRightSquare size={24} color="#fff" />
              </div>
              
              <Image src={dalygame.image_url} 
              alt={dalygame.title}
              priority= {true}
              //quality={100}
              fill={true}
              className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px)  33vw"
              />
            </div>
          </section>
        </Link>

        <Input />

        <h2>Jogos para  conhecer</h2>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-7">
            { data.map( (game) => (
              <GameCard key={game.id} data={game}/>
              ))
          } 
        </section>
     </Container>
    </main>
  );
}
