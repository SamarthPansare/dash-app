export interface Terminal {
  location: string;
  capacityKL: number;
  msReceived: {
    road: number;
    rail: number;
    pipeline: number;
  };
  hsdReceived: {
    road: number;
    rail: number;
    pipeline: number;
  };
  totalVolumeKL: number;
  annualCapacityTurnover: number;
  transportationCost: number;
  unitCost: number;
}

export type Product = 'MS' | 'HSD';
export type TransportMode = 'road' | 'rail' | 'pipeline';