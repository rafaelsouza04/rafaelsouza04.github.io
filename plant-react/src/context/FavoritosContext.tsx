// src/context/FavoritosContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type FavoritosContextType = {
  favoritos: number[];
  toggleFavorito: (id: number) => void;
};

const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);

export const FavoritosProvider = ({ children }: { children: ReactNode }) => {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  useEffect(() => {
    try {
      const favs = JSON.parse(localStorage.getItem("favoritos") || "[]");
      setFavoritos(Array.isArray(favs) ? favs : []);
    } catch {
      setFavoritos([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (id: number) => {
    setFavoritos(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => {
  const context = useContext(FavoritosContext);
  if (!context) throw new Error("useFavoritos deve ser usado dentro de FavoritosProvider");
  return context;
};
