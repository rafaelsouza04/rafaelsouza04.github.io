// src/context/HortaContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Plant } from "@/types/interface";

interface HortaContextType {
  horta: Plant[];
  adicionarPlanta: (planta: Plant) => void;
  removerPlanta: (id: number) => void;
}

const HortaContext = createContext<HortaContextType | undefined>(undefined);

export const HortaProvider = ({ children }: { children: ReactNode }) => {
  const [horta, setHorta] = useState<Plant[]>([]);

  useEffect(() => {
    const armazenado = localStorage.getItem("horta");
    if (armazenado) setHorta(JSON.parse(armazenado));
  }, []);

  useEffect(() => {
    localStorage.setItem("horta", JSON.stringify(horta));
  }, [horta]);

  const adicionarPlanta = (planta: Plant) => {
    if (!horta.find(p => p.id === planta.id)) {
      setHorta(prev => [...prev, { ...planta, dataPlantio: new Date().toISOString() }]);
    }
  };

  const removerPlanta = (id: number) => {
    setHorta(prev => prev.filter(p => p.id !== id));
  };

  return (
    <HortaContext.Provider value={{ horta, adicionarPlanta, removerPlanta }}>
      {children}
    </HortaContext.Provider>
  );
};

export const useHorta = () => {
  const context = useContext(HortaContext);
  if (!context) throw new Error("useHorta precisa estar dentro de um HortaProvider");
  return context;
};
