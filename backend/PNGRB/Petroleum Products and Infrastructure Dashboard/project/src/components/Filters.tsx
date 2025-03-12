import React from 'react';

interface Props {
  years: string[];
  products: string[];
  refineries: string[];
  owners: string[];
  onFilterChange: (filterType: string, value: string) => void;
}

const Filters: React.FC<Props> = ({ years, products, refineries, owners, onFilterChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div>
        <label htmlFor="year" className="block text-sm font-medium text-gray-700">
          Year
        </label>
        <select
          id="year"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          onChange={(e) => onFilterChange('year', e.target.value)}
        >
          <option value="">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="product" className="block text-sm font-medium text-gray-700">
          Product
        </label>
        <select
          id="product"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          onChange={(e) => onFilterChange('product', e.target.value)}
        >
          <option value="">All Products</option>
          {products.map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="refinery" className="block text-sm font-medium text-gray-700">
          Refinery
        </label>
        <select
          id="refinery"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          onChange={(e) => onFilterChange('refinery', e.target.value)}
        >
          <option value="">All Refineries</option>
          {refineries.map((refinery) => (
            <option key={refinery} value={refinery}>
              {refinery}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="owner" className="block text-sm font-medium text-gray-700">
          Pipeline Owner
        </label>
        <select
          id="owner"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          onChange={(e) => onFilterChange('owner', e.target.value)}
        >
          <option value="">All Owners</option>
          {owners.map((owner) => (
            <option key={owner} value={owner}>
              {owner}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;