import { Container } from "@/components/container";
import { GameCard } from "@/components/gameCard";
import { GameProps } from "@/utils/types/games";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Label } from './components/label';

interface PropsParams {
    params: {
        id: string
    }
}

export async function generateMetadata( { params  }: PropsParams ): Promise<Metadata> {
    try {
      const { id } =  params;
      const response : GameProps = await fetch(`${ process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, { cache: 'no-store', })
      .then((res) => res.json())
      
      .catch(() =>  {
            return {
                title: `Daly Games - Descubra Jogos incriveis para se divertir`,
            }
      });
      console.log(response);
       return {
        title: response.title,
        description: `${response.description.slice(0, 100)}...`,
        keywords: ['Games', 'jogos', 'steam'],
        openGraph: {
          title: response.title,
          images: [response.image_url],
        },
        robots: {
          index: true,
          follow: true,
          nocache: true,
          googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
          },
        }, 
    }
      
    } catch (error) {
        return {
            title: `Daly Games - Descubra Jogos incriveis para se divertir`,
        }   
    }  
}
async function getData(id: string ) : Promise<GameProps> {
  try {
    
      const res = await fetch(`${ process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, { cache: 'no-store', });
      return res.json();
  } catch (error) {
        throw new Error("Failed to fetch data")
  }  
}

async function getGameSorted( ) : Promise<GameProps> {
  try {
      const res = await fetch(`${ process.env.NEXT_API_URL}/next-api/?api=game_day`, {cache: 'no-store', });
      return res.json();
  } catch (error) {
        throw new Error("Failed to fetch data")
  }  
}

export default async function Game({ params}: PropsParams ) {
    
    const data: GameProps = await getData(params.id);
    const gameSorted: GameProps = await getGameSorted();


    if(!data) {
     redirect('/');
    }   
    return (
        <main className='w-full text-black '>
           { /*<h1 className=" font-bold text-xl mt-8 mb-5">Veja os Jogos encontrados{ params.id } </h1>*/} 
            <div className="bg-black h-80 sm:h-96 w-full relative">
                <Image src={data.image_url} 
                alt={data.title}
                priority= {true}
                quality={100}
                fill={true}
                className="h-80 sm:h-96 object-cover  opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px)  33vw" 
                />
            </div>
            <Container>
                <h1 className=" font-bold text-xl my-4">{data.title}</h1>
                <p>{data.description}</p>

                <h2 className=" font-bold text-xl mt-7 mb-2">Plataformas</h2>
                <div className="flex gap-2 flex-wrap">
                    {
                        data.platforms.map((platform) => (
                            <Label key={platform} name ={platform}/>
                        ))
                    }


                </div>
                <h2 className=" font-bold text-xl mt-7 mb-2">Categorias</h2>
                <div className="flex gap-2 flex-wrap">
                    {
                        data.categories.map((category) => (
                            <Label key={category} name ={category}/>
                        ))
                    }
                </div>

                <p className="mt-7 mb-2"><strong> Data de Lançamento: </strong>{data.release}</p>

                <h2 className=" font-bold text-xl mt-7 mb-2">Jogo do Dia</h2> 
                <div className="flex">
                    <div className="flex-grow">
                        <GameCard data={gameSorted} />
                    </div>
                </div>
            </Container>
            
        </main>
    )
    
}