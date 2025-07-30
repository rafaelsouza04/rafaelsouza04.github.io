import { useState } from "react";
import { Autocomplete } from "../components/autoComplete"; // ajuste o caminho conforme sua pasta
import plants from "../data/plantas.json";
import type { Plant } from "@/types/interface";

export default function SimuladorCultivo() {
  const [selecionada, setSelecionada] = useState<Plant | null>(null);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Autocomplete
        items={plants}
        getLabel={(p) => `${p.nome} (${p.nome_cientifico})`}
        onSelect={(p) => setSelecionada(p)}
        placeholder="Digite o nome da planta..."
      />

      {selecionada && (
        <div className="mt-8 p-6 bg-green-50 rounded-2xl shadow-lg">
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
        </div>
      )}
    </div>
  );
}
