import React, { useState, useEffect } from 'react';
import { materials } from '../data/states-data';

const RetainingWallCalculator = ({
  location = '',
  showAdvanced = true,
  preselectedMaterial = '',
  title = "Retaining Wall Cost Calculator"
}) => {
  const [dimensions, setDimensions] = useState({
    length: 50,
    height: 4,
    thickness: 6
  });

  const [material, setMaterial] = useState(preselectedMaterial || 'concrete');
  const [locationState, setLocationState] = useState(location);
  const [result, setResult] = useState(null);
  const [calculating, setCalculating] = useState(false);

  // 地区成本倍数
  const locationMultipliers = {
    'california': 1.45,
    'new-york': 1.32,
    'washington': 1.15,
    'oregon': 1.12,
    'florida': 1.02,
    'colorado': 1.05,
    'massachusetts': 1.28,
    'illinois': 1.18,
    'default': 1.0
  };

  const calculateCost = () => {
    setCalculating(true);

    // 模拟计算延迟
    setTimeout(() => {
      const squareFootage = dimensions.length * dimensions.height;
      const baseRate = materials[material]?.basePrice || 45;
      const locationMultiplier = locationMultipliers[locationState] || locationMultipliers.default;
      const thicknessMultiplier = dimensions.thickness === 12 ? 1.5 : dimensions.thickness === 8 ? 1.2 : 1.0;

      // 计算各项成本
      const materialCost = squareFootage * baseRate * thicknessMultiplier;
      const laborCost = materialCost * 0.45; // 45% of material cost
      const equipmentCost = materialCost * 0.15; // 15% of material cost
      const permitCost = 200 + (squareFootage * 0.5); // Permit fees

      const subtotal = materialCost + laborCost + equipmentCost;
      const totalCost = subtotal * locationMultiplier + permitCost;

      setResult({
        squareFootage,
        materialCost: Math.round(materialCost),
        laborCost: Math.round(laborCost),
        equipmentCost: Math.round(equipmentCost),
        permitCost: Math.round(permitCost),
        subtotal: Math.round(subtotal),
        totalCost: Math.round(totalCost),
        costPerSf: Math.round(totalCost / squareFootage),
        location: locationState,
        material: materials[material].name
      });

      setCalculating(false);
    }, 500);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="calculator-section text-white">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 输入区域 */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Wall Length (feet)
            </label>
            <input
              type="number"
              min="10"
              max="500"
              value={dimensions.length}
              onChange={(e) => setDimensions({...dimensions, length: e.target.value})}
              className="w-full px-4 py-2 rounded-lg text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Wall Height (feet)
            </label>
            <input
              type="number"
              min="1"
              max="12"
              value={dimensions.height}
              onChange={(e) => setDimensions({...dimensions, height: e.target.value})}
              className="w-full px-4 py-2 rounded-lg text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Material Type
            </label>
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="w-full px-4 py-2 rounded-lg text-gray-800"
            >
              {Object.entries(materials).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.name} - ${value.basePrice}/sq ft
                </option>
              ))}
            </select>
          </div>

          {showAdvanced && (
            <>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Wall Thickness (inches)
                </label>
                <select
                  value={dimensions.thickness}
                  onChange={(e) => setDimensions({...dimensions, thickness: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg text-gray-800"
                >
                  <option value="6">6 inches (Standard)</option>
                  <option value="8">8 inches (Reinforced)</option>
                  <option value="12">12 inches (Heavy Duty)</option>
                </select>
              </div>

              {locationState && (
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-sm">
                    <strong>Location:</strong> {locationState.replace('-', ' ').toUpperCase()}
                  </p>
                  <p className="text-xs mt-1">
                    Cost multiplier: {locationMultipliers[locationState] || locationMultipliers.default}x
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        {/* 计算按钮 */}
        <div className="flex flex-col justify-center">
          <button
            onClick={calculateCost}
            disabled={calculating}
            className="cta-button text-xl px-8 py-4 disabled:opacity-50"
          >
            {calculating ? 'Calculating...' : 'Calculate Total Cost'}
          </button>

          {!calculating && result && (
            <div className="mt-6 text-center">
              <div className="text-4xl font-bold text-green-300">
                {formatCurrency(result.totalCost)}
              </div>
              <div className="text-sm text-white/80 mt-2">
                Total Estimated Cost ({result.squareFootage} sq ft)
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 计算结果 */}
      {result && (
        <div className="cost-result text-gray-800 mt-6">
          <h3 className="text-2xl font-bold mb-4 text-center text-primary-600">
            Cost Breakdown
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Project Details</h4>
              <ul className="space-y-1 text-sm">
                <li><strong>Dimensions:</strong> {dimensions.length}ft × {dimensions.height}ft = {result.squareFootage} sq ft</li>
                <li><strong>Material:</strong> {result.material}</li>
                <li><strong>Cost per sq ft:</strong> {formatCurrency(result.costPerSf)}</li>
                {locationState && <li><strong>Location:</strong> {locationState.replace('-', ' ').toUpperCase()}</li>}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Cost Breakdown</h4>
              <ul className="space-y-1 text-sm">
                <li><strong>Materials:</strong> {formatCurrency(result.materialCost)}</li>
                <li><strong>Labor:</strong> {formatCurrency(result.laborCost)}</li>
                <li><strong>Equipment:</strong> {formatCurrency(result.equipmentCost)}</li>
                <li><strong>Permits:</strong> {formatCurrency(result.permitCost)}</li>
              </ul>
            </div>
          </div>

          {/* AdSense广告位置 - 计算结果下方 */}
          <div className="ads-container mt-6">
            <span>Advertisement</span>
          </div>

          {/* 材料信息 */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold mb-2 text-primary-700">
              About {materials[material].name}
            </h4>
            <p className="text-sm text-gray-700 mb-2">{materials[material].description}</p>
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div>
                <strong>Lifespan:</strong> {materials[material].lifespan}
              </div>
              <div>
                <strong>Maintenance:</strong> {materials[material].maintenance}
              </div>
              <div>
                <strong>Base Price:</strong> ${materials[material].basePrice}/sq ft
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Schema结构化数据 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Retaining Wall Cost Calculator",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web Browser",
          "description": "Calculate the cost of building a retaining wall with our free online calculator",
          "url": typeof window !== 'undefined' ? window.location.href : '',
          "featureList": [
            "Cost calculation",
            "Material comparison",
            "Location-based pricing",
            "Instant estimates"
          ]
        })
      }} />
    </div>
  );
};

export default RetainingWallCalculator;