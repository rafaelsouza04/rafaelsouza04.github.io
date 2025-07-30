import plants from '../data/plantas.json';

const Discover = () => {
  
  const filteredPlants = plants.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className="container mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-600">🌿 Descubra Plantas</h1>
        <p className="text-lg text-gray-700 mt-2">Aqui estão algumas plantas aleatórias para você explorar!</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPlants.map((plant) => (
          <div key={plant.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={plant.image}
              alt={plant.nome || plant.nome_cientifico}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-600">{plant.nome || 'Sem nome popular'}</h3>
              <p className="text-sm text-gray-500">{plant.nome_cientifico}</p>
              <p className="mt-2 text-gray-700">{plant.description}</p>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default Discover;
