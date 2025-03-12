export interface ProductionData {
  product: string;
  'year2017-18': number;
  'year2018-19': number;
  'year2019-20': number;
  'year2020-21': number;
  'year2021-22': number;
  'year2022-23': number;
  shareIn2022: number;
}

export interface RefineryData {
  refinery: string;
  'year2020-21': number;
  'year2021-22': number;
  'year2022-23': number;
}

export interface PipelineData {
  pipeline: string;
  owner: string;
  length: number;
  capacity: number;
  throughput2021: number;
  throughput2022: number;
  utilization2022: number;
}

export interface TankageData {
  location: string;
  HPCL: number;
  BPCL: number;
  IOCL: number;
  total: number;
}