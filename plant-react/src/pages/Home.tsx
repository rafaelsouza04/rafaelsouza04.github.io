import { Leaf, Flower2, Globe, ArrowDown } from 'lucide-react'
import { useEffect } from "react"

const Home = () => {
  // Esconde a barra de rolagem mas mantém a funcionalidade
  useEffect(() => {
    // Adiciona a classe ao body quando o componente monta
    document.body.classList.add("hide-scrollbar")
    
    // Remove a classe quando o componente desmonta
    return () => {
      document.body.classList.remove("hide-scrollbar")
    }
  }, [])

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] relative flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-4xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-700 mb-6 leading-tight">
            Bem-vindo ao Mundoo das Plantas 🌱
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Aprenda sobre a diversidade das plantas, descubra suas características e contribua para um futuro mais verde!
          </p>
          
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-md">
            Explorar Plantas
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ArrowDown className="h-6 w-6 text-green-600" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-green-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-green-200 rounded-full opacity-30 blur-3xl"></div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Por que este projeto é importante?</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              A educação sobre plantas e a biodiversidade são cruciais para o entendimento do nosso ecossistema. Este projeto visa fornecer uma plataforma interativa e acessível, onde estudantes, pesquisadores e qualquer pessoa interessada possa aprender mais sobre o mundo das plantas.
            </p>
            <p className="text-gray-700">
              O estudo das plantas não só ajuda a melhorar o conhecimento científico, mas também tem um impacto direto na preservação ambiental. Ao entender as diversas espécies, seus habitats e necessidades, podemos contribuir para a conservação e sustentabilidade do nosso planeta.
            </p>
            <p className="text-gray-700">
              Este projeto foi criado com o objetivo de tornar a aprendizagem mais acessível, divertida e dinâmica, permitindo aos usuários explorar as plantas de diferentes maneiras: por características, localizações, ou até mesmo por curiosidades.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">Descubra o Mundo Natural</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Benefícios das Plantas */}
            <FeatureCard 
              icon={<Leaf className="h-8 w-8" />}
              title="Benefícios das Plantas"
              description="As plantas têm muitos benefícios para a saúde, desde purificar o ar até melhorar o bem-estar mental. Elas são essenciais para a nossa sobrevivência e qualidade de vida."
            />

            {/* Card 2: Diversidade de Espécies */}
            <FeatureCard 
              icon={<Flower2 className="h-8 w-8" />}
              title="Diversidade de Espécies"
              description="O mundo das plantas é incrivelmente diverso. Existem milhões de espécies, cada uma com suas próprias características, adaptações e usos."
            />

            {/* Card 3: Conservação e Sustentabilidade */}
            <FeatureCard 
              icon={<Globe className="h-8 w-8" />}
              title="Conservação e Sustentabilidade"
              description="As plantas desempenham um papel fundamental na sustentabilidade e conservação do meio ambiente. Elas ajudam a combater as mudanças climáticas e a proteger os ecossistemas."
            />
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar sua jornada?</h2>
          <p className="text-lg mb-8">Explore nossa coleção de plantas e aprenda mais sobre o mundo natural.</p>
          <button className="bg-white text-green-600 hover:bg-green-50 font-medium px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-md">
            Começar Agora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white/70 backdrop-blur-sm text-center">
        <p className="text-sm text-gray-600">
          🌱 Criado para inspirar e educar sobre o mundo das plantas. | &copy; 2025
        </p>
      </footer>
    </div>
  )
}

// Componente de Card para features
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:translate-y-[-5px]">
    <div className="text-green-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-green-700 mb-3">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
)

export default Home
