import plants from "../data/plantas.json";
import { useFavoritos } from "../context/FavoritosContext";
import { Heart } from "lucide-react";

export default function Favoritos() {
  const { favoritos, toggleFavorito } = useFavoritos();

  const plantasFavoritas = plants.filter((p) => favoritos.includes(p.id));

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🌿 Minhas Plantas Favoritas</h1>

      {plantasFavoritas.length === 0 ? (
        <p className="text-gray-600">Nenhuma planta favorita por enquanto.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plantasFavoritas.map((planta) => (
            <div key={planta.id} className="bg-green-50 p-4 rounded-2xl shadow-md relative">
              <button
                onClick={() => toggleFavorito(planta.id)}
                className="absolute right-4 top-4 text-red-500 hover:scale-110 transition"
              >
                <Heart fill="red" />
              </button>
              <img
                src={planta.image}
                alt={planta.nome}
                className="w-full h-48 object-cover rounded-xl mb-3"
              />
              <h2 className="text-xl font-semibold">{planta.nome}</h2>
              <p className="text-sm text-gray-600 italic">{planta.nome_cientifico}</p>
              <p className="text-sm mt-2">{planta.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
