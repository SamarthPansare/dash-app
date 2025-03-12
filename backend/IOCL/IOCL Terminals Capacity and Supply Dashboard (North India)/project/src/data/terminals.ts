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
}

export const terminalsData: Terminal[] = [
  {
    location: "Jalandhar",
    capacityKL: 179731,
    msReceived: {
      road: 9.2,
      rail: 0.0,
      pipeline: 427.3
    },
    hsdReceived: {
      road: 89.1,
      rail: 0.0,
      pipeline: 972.9
    },
    totalVolumeKL: 1498536,
    annualCapacityTurnover: 8.34
  },
  {
    location: "Sangrur",
    capacityKL: 95703,
    msReceived: {
      road: 0.0,
      rail: 0.0,
      pipeline: 257.1
    },
    hsdReceived: {
      road: 0.0,
      rail: 0.0,
      pipeline: 726.1
    },
    totalVolumeKL: 983216.7,
    annualCapacityTurnover: 10.27
  },
  {
    location: "Bhatinda",
    capacityKL: 156890,
    msReceived: {
      road: 12.5,
      rail: 15.8,
      pipeline: 385.6
    },
    hsdReceived: {
      road: 95.3,
      rail: 125.7,
      pipeline: 856.2
    },
    totalVolumeKL: 1491100,
    annualCapacityTurnover: 9.50
  },
  {
    location: "Una",
    capacityKL: 84520,
    msReceived: {
      road: 5.8,
      rail: 0.0,
      pipeline: 198.4
    },
    hsdReceived: {
      road: 45.2,
      rail: 0.0,
      pipeline: 567.3
    },
    totalVolumeKL: 816730,
    annualCapacityTurnover: 9.66
  },
  {
    location: "Jammu",
    capacityKL: 112450,
    msReceived: {
      road: 15.3,
      rail: 8.9,
      pipeline: 287.6
    },
    hsdReceived: {
      road: 78.9,
      rail: 95.4,
      pipeline: 645.8
    },
    totalVolumeKL: 1131900,
    annualCapacityTurnover: 10.07
  },
  {
    location: "Srinagar",
    capacityKL: 68940,
    msReceived: {
      road: 25.7,
      rail: 0.0,
      pipeline: 156.8
    },
    hsdReceived: {
      road: 112.3,
      rail: 0.0,
      pipeline: 389.5
    },
    totalVolumeKL: 684300,
    annualCapacityTurnover: 9.93
  },
  {
    location: "Leh",
    capacityKL: 42360,
    msReceived: {
      road: 35.2,
      rail: 0.0,
      pipeline: 0.0
    },
    hsdReceived: {
      road: 156.8,
      rail: 0.0,
      pipeline: 0.0
    },
    totalVolumeKL: 192000,
    annualCapacityTurnover: 4.53
  },
  {
    location: "Kargil",
    capacityKL: 28740,
    msReceived: {
      road: 18.9,
      rail: 0.0,
      pipeline: 0.0
    },
    hsdReceived: {
      road: 87.4,
      rail: 0.0,
      pipeline: 0.0
    },
    totalVolumeKL: 106400,
    annualCapacityTurnover: 3.70
  },
  {
    location: "Ambala",
    capacityKL: 143560,
    msReceived: {
      road: 8.7,
      rail: 12.4,
      pipeline: 345.2
    },
    hsdReceived: {
      road: 67.8,
      rail: 145.6,
      pipeline: 789.3
    },
    totalVolumeKL: 1369000,
    annualCapacityTurnover: 9.54
  },
  {
    location: "PMC (Panipat)",
    capacityKL: 198670,
    msReceived: {
      road: 14.5,
      rail: 25.8,
      pipeline: 567.3
    },
    hsdReceived: {
      road: 123.4,
      rail: 234.5,
      pipeline: 1234.5
    },
    totalVolumeKL: 2200000,
    annualCapacityTurnover: 11.07
  },
  {
    location: "Tikrikalan",
    capacityKL: 167890,
    msReceived: {
      road: 18.9,
      rail: 15.6,
      pipeline: 478.9
    },
    hsdReceived: {
      road: 145.6,
      rail: 178.9,
      pipeline: 956.7
    },
    totalVolumeKL: 1794600,
    annualCapacityTurnover: 10.69
  },
  {
    location: "Bijwasan",
    capacityKL: 189450,
    msReceived: {
      road: 23.4,
      rail: 18.9,
      pipeline: 523.4
    },
    hsdReceived: {
      road: 167.8,
      rail: 198.4,
      pipeline: 1123.4
    },
    totalVolumeKL: 2055300,
    annualCapacityTurnover: 10.85
  },
  {
    location: "Rewari",
    capacityKL: 134560,
    msReceived: {
      road: 12.3,
      rail: 14.5,
      pipeline: 345.6
    },
    hsdReceived: {
      road: 89.7,
      rail: 156.7,
      pipeline: 845.6
    },
    totalVolumeKL: 1464400,
    annualCapacityTurnover: 10.88
  },
  {
    location: "Roorkee",
    capacityKL: 112340,
    msReceived: {
      road: 7.8,
      rail: 9.4,
      pipeline: 289.5
    },
    hsdReceived: {
      road: 56.7,
      rail: 87.8,
      pipeline: 678.9
    },
    totalVolumeKL: 1130100,
    annualCapacityTurnover: 10.06
  }
];