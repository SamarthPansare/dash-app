export interface TransportationData {
  location: string;
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
  distanceKM: number;
  railRate: number;
  transportationCost: {
    rail: number;
    road: number;
    pipeline: number;
  };
  totalCost: number;
}

export type TransportMode = 'rail' | 'road' | 'pipeline';
export type Product = 'MS' | 'HSD';