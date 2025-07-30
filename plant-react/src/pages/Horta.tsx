import { useHorta } from "../context/HortaContext";
import { format, addDays, differenceInDays } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Horta() {
  const { horta, removerPlanta } = useHorta();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🌾 Minha Horta</h1>

      {horta.length === 0 ? (
        <p className="text-gray-600">Você ainda não adicionou nenhuma planta.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {horta.map((planta) => {
            const plantio = new Date(planta.dataPlantio || Date.now());
            const colheita = addDays(plantio, planta.colheita_dias);
            const diasPassados = differenceInDays(new Date(), plantio);
            const progresso = Math.min(
              Math.floor((diasPassados / planta.colheita_dias) * 100),
              100
            );

            return (
              <div
                key={planta.id}
                className="bg-green-50 p-4 rounded-xl shadow-md relative"
              >
                <img
                  src={planta.image}
                  alt={planta.nome}
                  className="w-full h-48 object-cover rounded-xl mb-3"
                />
                <h2 className="text-xl font-semibold">{planta.nome}</h2>
                <p className="text-sm text-gray-600 italic mb-2">
                  Plantada em {format(plantio, "dd 'de' MMMM", { locale: ptBR })}<br />
                  Colheita estimada em {format(colheita, "dd 'de' MMMM", { locale: ptBR })}
                </p>

                <div className="w-full bg-green-100 h-4 rounded-full overflow-hidden mb-2">
                  <div
                    className="bg-green-600 h-4"
                    style={{ width: `${progresso}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-800">
                  Progresso: {progresso}% até a colheita
                </p>

                <button
                  onClick={() => removerPlanta(planta.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  ❌
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
