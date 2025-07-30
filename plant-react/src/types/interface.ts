export interface Plant {
  id: number;
  nome: string;
  nome_cientifico: string;
  description: string;
  image?: string;
  epoca_plantio_sul: string;
  colheita_dias: number;
  familia: string;
  dataPlantio?: string;
}