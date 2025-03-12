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

export const terminalsData: Terminal[] = [
  {
    location: "Rewari, Haryana",
    capacityKL: 22464,
    msReceived: {
      road: 0.0,
      rail: 0.0,
      pipeline: 7.4
    },
    hsdReceived: {
      road: 0.0,
      rail: 0.0,
      pipeline: 28.8
    },
    totalVolumeKL: 36115.8,
    annualCapacityTurnover: 1.6,
    transportationCost: 3.46,
    unitCost: 958.50
  },
  {
    location: "Panipat, Haryana",
    capacityKL: 39011,
    msReceived: {
      road: 0.0,
      rail: 5.9,
      pipeline: 81.6
    },
    hsdReceived: {
      road: 2.6,
      rail: 0.6,
      pipeline: 245.9
    },
    totalVolumeKL: 336646.3,
    annualCapacityTurnover: 8.6,
    transportationCost: 52.15,
    unitCost: 1549.04
  },
  {
    location: "Faridabad, Haryana",
    capacityKL: 31250,
    msReceived: {
      road: 1.2,
      rail: 3.8,
      pipeline: 65.4
    },
    hsdReceived: {
      road: 3.1,
      rail: 2.9,
      pipeline: 198.7
    },
    totalVolumeKL: 275100.0,
    annualCapacityTurnover: 8.8,
    transportationCost: 42.83,
    unitCost: 1557.25
  },
  {
    location: "Delhi",
    capacityKL: 45680,
    msReceived: {
      road: 2.5,
      rail: 8.7,
      pipeline: 98.6
    },
    hsdReceived: {
      road: 5.8,
      rail: 4.2,
      pipeline: 287.4
    },
    totalVolumeKL: 407200.0,
    annualCapacityTurnover: 8.9,
    transportationCost: 63.52,
    unitCost: 1559.92
  },
  {
    location: "Jalandhar, Punjab",
    capacityKL: 28750,
    msReceived: {
      road: 3.1,
      rail: 42.5,
      pipeline: 0.0
    },
    hsdReceived: {
      road: 8.4,
      rail: 156.8,
      pipeline: 0.0
    },
    totalVolumeKL: 210800.0,
    annualCapacityTurnover: 7.3,
    transportationCost: 48.95,
    unitCost: 2322.58
  },
  {
    location: "Bhatinda, Punjab",
    capacityKL: 35620,
    msReceived: {
      road: 1.8,
      rail: 38.9,
      pipeline: 12.5
    },
    hsdReceived: {
      road: 4.2,
      rail: 142.6,
      pipeline: 45.8
    },
    totalVolumeKL: 245800.0,
    annualCapacityTurnover: 6.9,
    transportationCost: 52.84,
    unitCost: 2149.71
  },
  {
    location: "Sangrur, Punjab",
    capacityKL: 26840,
    msReceived: {
      road: 2.4,
      rail: 35.6,
      pipeline: 0.0
    },
    hsdReceived: {
      road: 6.8,
      rail: 128.4,
      pipeline: 0.0
    },
    totalVolumeKL: 173200.0,
    annualCapacityTurnover: 6.5,
    transportationCost: 40.12,
    unitCost: 2316.40
  },
  {
    location: "SAS Nagar, Punjab",
    capacityKL: 32150,
    msReceived: {
      road: 2.8,
      rail: 45.2,
      pipeline: 0.0
    },
    hsdReceived: {
      road: 7.5,
      rail: 165.8,
      pipeline: 0.0
    },
    totalVolumeKL: 221300.0,
    annualCapacityTurnover: 6.9,
    transportationCost: 51.74,
    unitCost: 2337.55
  },
  {
    location: "Nainital, Uttarakhand",
    capacityKL: 18650,
    msReceived: {
      road: 15.8,
      rail: 12.4,
      pipeline: 0.0
    },
    hsdReceived: {
      road: 58.6,
      rail: 45.2,
      pipeline: 0.0
    },
    totalVolumeKL: 132000.0,
    annualCapacityTurnover: 7.1,
    transportationCost: 42.68,
    unitCost: 3233.33
  },
  {
    location: "Haridwar, Uttarakhand",
    capacityKL: 24580,
    msReceived: {
      road: 18.5,
      rail: 15.8,
      pipeline: 0.0
    },
    hsdReceived: {
      road: 68.4,
      rail: 58.2,
      pipeline: 0.0
    },
    totalVolumeKL: 160900.0,
    annualCapacityTurnover: 6.5,
    transportationCost: 52.45,
    unitCost: 3259.79
  },
  {
    location: "Jammu, J&K",
    capacityKL: 21450,
    msReceived: {
      road: 22.4,
      rail: 18.6,
      pipeline: 0.0
    },
    hsdReceived: {
      road: 82.5,
      rail: 68.4,
      pipeline: 0.0
    },
    totalVolumeKL: 191900.0,
    annualCapacityTurnover: 8.9,
    transportationCost: 68.88,
    unitCost: 3589.37
  },
  {
    location: "Srinagar, J&K",
    capacityKL: 16850,
    msReceived: {
      road: 25.6,
      rail: 0.0,
      pipeline: 0.0
    },
    hsdReceived: {
      road: 94.8,
      rail: 0.0,
      pipeline: 0.0
    },
    totalVolumeKL: 120400.0,
    annualCapacityTurnover: 7.1,
    transportationCost: 48.16,
    unitCost: 4000.00
  },
  {
    location: "Leh, Ladakh",
    capacityKL: 8450,
    msReceived: {
      road: 12.4,
      rail: 0.0,
      pipeline: 0.0
    },
    hsdReceived: {
      road: 45.8,
      rail: 0.0,
      pipeline: 0.0
    },
    totalVolumeKL: 58200.0,
    annualCapacityTurnover: 6.9,
    transportationCost: 29.10,
    unitCost: 5000.00
  },
  {
    location: "Solan, Himachal Pradesh",
    capacityKL: 19850,
    msReceived: {
      road: 20.5,
      rail: 15.4,
      pipeline: 0.0
    },
    hsdReceived: {
      road: 75.6,
      rail: 56.8,
      pipeline: 0.0
    },
    totalVolumeKL: 168300.0,
    annualCapacityTurnover: 8.5,
    transportationCost: 58.91,
    unitCost: 3500.00
  }
];