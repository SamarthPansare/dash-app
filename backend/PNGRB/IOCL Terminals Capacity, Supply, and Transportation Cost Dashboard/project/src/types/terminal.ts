export interface TerminalData {
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