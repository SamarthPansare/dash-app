import { ProductionData, RefineryData, PipelineData, TankageData } from '../types/data';

export const productionData: ProductionData[] = [
  {
    product: 'LPG',
    'year2017-18': 12380,
    'year2018-19': 12786,
    'year2019-20': 12823,
    'year2020-21': 12072,
    'year2021-22': 12238,
    'year2022-23': 12832,
    shareIn2022: 4.8
  },
  {
    product: 'Motor Spirit',
    'year2017-18': 37784,
    'year2018-19': 38039,
    'year2019-20': 38616,
    'year2020-21': 20006,
    'year2021-22': 19786,
    'year2022-23': 20679,
    shareIn2022: 16.1
  }
];

export const refineryData: RefineryData[] = [
  {
    refinery: 'IOCL, Guwahati',
    'year2020-21': 1008,
    'year2021-22': 905,
    'year2022-23': 1310
  },
  {
    refinery: 'IOCL, Barauni',
    'year2020-21': 5166,
    'year2021-22': 5082,
    'year2022-23': 6275
  }
];

export const pipelineData: PipelineData[] = [
  {
    pipeline: 'Jamnagar-Loni Pipeline',
    owner: 'GAIL',
    length: 1414,
    capacity: 2.5,
    throughput2021: 1.3,
    throughput2022: 1.3,
    utilization2022: 97.5
  }
];

export const tankageData: TankageData[] = [
  {
    location: 'Jalandhar, Punjab',
    HPCL: 18220,
    BPCL: 26402,
    IOCL: 179731,
    total: 224353
  }
];