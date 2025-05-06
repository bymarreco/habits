import { getGame, getGames } from "../../_lib/data-service";
import { PuzzlePieceIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const {
    habit: { name },
  } = await getGame(params.habitId);
  return { title: `${name}` };
}

export default async function Page({ params }) {
  const game = await getGame(params.habitId);

  const {
    habitId,
    platform,
    habit: { id, name, habitTypeId, cover, habitType },
  } = game;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border">
        <div className="relative scale-[1-15] -translate-x-3">
          <Image
            src={cover}
            fill
            className="object-cover"
            alt={`Game ${name}`}
          />
        </div>
        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            {name}
          </h3>
          <p className="text-lg text-primary-300 mb-10">
            Uncharted: Drake's Fortune é um jogo eletrônico de ação-aventura
            desenvolvido pela Naughty Dog e publicado pela Sony Computer
            Entertainment. É o primeiro título da série Uncharted e foi lançado
            exclusivamente para PlayStation 3 em novembro de 2007 na América do
            Norte e no mês seguinte na Europa. Na história, os jogadores
            controlam Nathan Drake, um caçador de tesouros e suposto descendente
            do explorador sir Francis Drake que parte à procura do tesouro
            perdido de Eldorado, contando com a ajuda de seu mentor Victor
            Sullivan e da jornalista Elena Fisher. Drake's Fortune é jogado a
            partir de uma perspectiva em terceira pessoa e incorpora diversos
            elementos de plataforma na navegação pelos diferentes ambientes. Os
            jogadores usam armas de fogo e combate corpo a corpo a fim de
            combaterem inimigos, solucionarem quebra-cabeças e progredirem pela
            narrativa.
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <PuzzlePieceIcon className="h-6 w-6 text-primary-600" />
              <span className="text-lg">{platform}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
