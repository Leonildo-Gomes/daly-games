import { Container } from "@/components/container";
import { GameCard } from "@/components/gameCard";
import { Input } from "@/components/input";
import { GameProps } from '@/utils/types/games';

async function getData(title: string) : Promise<GameProps[]> {
  try {
      const decodeTitle = decodeURI(title);
      const res = await fetch(`${ process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`, {
        next: {
          revalidate: 320, // faz a busca a casa 320 segundos
        },
      });
      return res.json();
  } catch (error) {
        throw new Error("Failed to fetch data")
  }
}


export default  async function Search( { params: { title } }: { params: { title: string } } ) {

    const games : GameProps[]= await getData(title);

    return (
        <main className='w-full text-black '>
          <Container>
            <Input />
            <h1 className=" font-bold text-xl mt-8 mb-5">Veja os Jogos encontrados</h1>
            { !games &&(
              <p>Nenhum jogo encontrado...</p>
            ) } 
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-7">
              { games &&  games.map( (game) => (
                <GameCard key={game.id} data={game}/>
                ))
              } 
            </section>
          </Container>
            
        </main>
    )
    
}