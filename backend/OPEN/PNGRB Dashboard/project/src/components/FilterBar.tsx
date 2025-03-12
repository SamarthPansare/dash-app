import React from 'react';
import { Filter } from 'lucide-react';

interface FilterBarProps {
  selectedRound: string;
  selectedYear: string;
  selectedEntity: string;
  onRoundChange: (round: string) => void;
  onYearChange: (year: string) => void;
  onEntityChange: (entity: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  selectedRound,
  selectedYear,
  selectedEntity,
  onRoundChange,
  onYearChange,
  onEntityChange,
}) => {
  const rounds = ['all', 'Round 1-3', 'Round 4-8', 'Round 9-11A'];
  const years = ['2022', '2023', '2024', '2025', '2026', '2027'];
  const entities = ['all', 'IGL', 'Gujarat Gas Ltd', 'BPCL', 'Adani Gas', 'GAIL Gas', 'Megha City Gas'];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center text-gray-600">
          <Filter className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium">Filters:</span>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <select
            value={selectedRound}
            onChange={(e) => onRoundChange(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          >
            {rounds.map((round) => (
              <option key={round} value={round}>
                {round === 'all' ? 'All Rounds' : round}
              </option>
            ))}
          </select>

          <select
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select
            value={selectedEntity}
            onChange={(e) => onEntityChange(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          >
            {entities.map((entity) => (
              <option key={entity} value={entity}>
                {entity === 'all' ? 'All Entities' : entity}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;