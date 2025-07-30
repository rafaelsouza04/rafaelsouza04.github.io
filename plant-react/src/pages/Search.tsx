import { useState } from "react";
import plants from "../data/plantas.json";
import type { Plant } from "@/types/interface";
import { Heart, HeartOff } from "lucide-react";
import { Autocomplete } from "@/components/autoComplete";
import { useFavoritos } from "../context/FavoritosContext";
import { useHorta } from "@/context/HortaContext";

export default function Search() {
  const [selecionada, setSelecionada] = useState<Plant | null>(null);
  const { favoritos, toggleFavorito } = useFavoritos();
  const { adicionarPlanta, horta } = useHorta();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Autocomplete
        items={plants}
        getLabel={(p) => `${p.nome} (${p.nome_cientifico})`}
        onSelect={(p) => setSelecionada(p)}
        placeholder="Digite o nome da planta..."
      />

      {selecionada && (
        <div className="mt-8 p-6 bg-green-50 rounded-2xl shadow-lg relative">
          <button
            onClick={() => toggleFavorito(selecionada.id)}
            className="absolute right-4 top-4 text-red-500 hover:scale-110 transition"
          >
            {favoritos.includes(selecionada.id) ? (
              <Heart fill="red" />
            ) : (
              <HeartOff />
            )}
          </button>

          <h2 className="text-2xl font-bold mb-2">{selecionada.nome}</h2>
          <img
            src={selecionada.image}
            alt={selecionada.nome}
            className="w-full max-w-md rounded-xl mb-4"
          />
          <p><strong>Nome Científico:</strong> {selecionada.nome_cientifico}</p>
          <p><strong>Clima ideal:</strong> {selecionada.epoca_plantio_sul}</p>
          <p><strong>Tempo até colheita:</strong> {selecionada.colheita_dias} dias</p>
          <p className="mt-3 italic text-gray-700">{selecionada.description}</p>
          <button
            onClick={() => adicionarPlanta(selecionada)}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
          >
            🌱 Adicionar à Minha Horta
          </button>
        </div>
      )}
    </div>
  );
}
