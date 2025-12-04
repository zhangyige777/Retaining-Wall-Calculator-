// 美国各州数据和优先级
export const statesData = {
  // Tier 1 - 首要目标
  'california': {
    name: 'California',
    abbreviation: 'CA',
    tier: 1,
    priority: 1,
    majorCities: [
      { name: 'Los Angeles', population: 3971883 },
      { name: 'San Diego', population: 1423851 },
      { name: 'San Jose', population: 1021795 },
      { name: 'San Francisco', population: 873965 },
      { name: 'Sacramento', population: 525041 },
      { name: 'Fresno', population: 542052 }
    ],
    specialFeatures: ['Seismic requirements', 'Drainage systems', 'High labor costs'],
    avgCostMultiplier: 1.45,
    keywords: ['seismic retaining wall', 'earthquake proof wall', 'california retaining wall permits']
  },

  // Tier 1 - Pacific Northwest
  'washington': {
    name: 'Washington',
    abbreviation: 'WA',
    tier: 1,
    priority: 2,
    majorCities: [
      { name: 'Seattle', population: 753675 },
      { name: 'Spokane', population: 228989 },
      { name: 'Tacoma', population: 219891 },
      { name: 'Vancouver', population: 186192 }
    ],
    specialFeatures: ['Rain protection', 'Rot resistance', 'Steep slopes'],
    avgCostMultiplier: 1.15,
    keywords: ['waterproof retaining wall', 'rot resistant materials', 'pacific northwest retaining wall']
  },

  'oregon': {
    name: 'Oregon',
    abbreviation: 'OR',
    tier: 1,
    priority: 3,
    majorCities: [
      { name: 'Portland', population: 652503 },
      { name: 'Eugene', population: 176654 },
      { name: 'Salem', population: 177723 },
      { name: 'Gresham', population: 114247 }
    ],
    specialFeatures: ['Heavy rainfall', 'Forest fire regulations', 'Environmental permits'],
    avgCostMultiplier: 1.12,
    keywords: ['rain drainage retaining wall', 'oregon retaining wall permits', 'fire resistant walls']
  },

  // Tier 2 - Northeast & Midwest (维修需求高)
  'new-york': {
    name: 'New York',
    abbreviation: 'NY',
    tier: 2,
    priority: 4,
    majorCities: [
      { name: 'New York City', population: 8399000 },
      { name: 'Buffalo', population: 255284 },
      { name: 'Rochester', population: 205467 },
      { name: 'Yonkers', population: 201116 }
    ],
    specialFeatures: ['Freeze/thaw cycles', 'Strict building codes', 'High permits costs'],
    avgCostMultiplier: 1.32,
    keywords: ['freeze thaw retaining wall repair', 'ny retaining wall permits', 'brick retaining wall']
  },

  'pennsylvania': {
    name: 'Pennsylvania',
    abbreviation: 'PA',
    tier: 2,
    priority: 5,
    majorCities: [
      { name: 'Philadelphia', population: 1585400 },
      { name: 'Pittsburgh', population: 296793 },
      { name: 'Allentown', population: 125828 }
    ],
    specialFeatures: ['Seasonal frost', 'Limestone soil', 'Historical restrictions'],
    avgCostMultiplier: 1.08,
    keywords: ['retaining wall repair pa', 'stone retaining wall', 'frost damage repair']
  },

  'ohio': {
    name: 'Ohio',
    abbreviation: 'OH',
    tier: 2,
    priority: 6,
    majorCities: [
      { name: 'Columbus', population: 905748 },
      { name: 'Cleveland', population: 381009 },
      { name: 'Cincinnati', population: 309647 },
      { name: 'Toledo', population: 270871 }
    ],
    specialFeatures: ['Clay soil', 'Winter snow load', 'Spring thaw issues'],
    avgCostMultiplier: 0.95,
    keywords: ['retaining wall collapse ohio', 'drainage solutions', 'repair costs']
  },

  'michigan': {
    name: 'Michigan',
    abbreviation: 'MI',
    tier: 2,
    priority: 7,
    majorCities: [
      { name: 'Detroit', population: 670031 },
      { name: 'Grand Rapids', population: 201093 },
      { name: 'Warren', population: 134056 }
    ],
    specialFeatures: ['Deep freeze', 'Snow load', 'Spring thaw damage'],
    avgCostMultiplier: 0.98,
    keywords: ['retaining wall repair michigan', 'winter damage', 'frost heave']
  },

  // Tier 3 - 其他重要州
  'texas': {
    name: 'Texas',
    abbreviation: 'TX',
    tier: 3,
    priority: 8,
    majorCities: [
      { name: 'Houston', population: 2320026 },
      { name: 'San Antonio', population: 1547253 },
      { name: 'Dallas', population: 1343573 },
      { name: 'Austin', population: 978908 },
      { name: 'Fort Worth', population: 956709 }
    ],
    specialFeatures: ['Expansive clay soil', 'High winds', 'Flooding zones'],
    avgCostMultiplier: 0.92,
    keywords: ['hill country retaining wall', 'houston retaining wall', 'flood control']
  },

  'colorado': {
    name: 'Colorado',
    abbreviation: 'CO',
    tier: 3,
    priority: 9,
    majorCities: [
      { name: 'Denver', population: 727211 },
      { name: 'Colorado Springs', population: 478961 },
      { name: 'Aurora', population: 387348 }
    ],
    specialFeatures: ['Mountain slopes', 'Rocky soil', 'High elevation'],
    avgCostMultiplier: 1.05,
    keywords: ['colorado retaining wall', 'mountain retaining wall', 'rock retaining wall']
  },

  // 其他州的数据
  'florida': {
    name: 'Florida',
    abbreviation: 'FL',
    tier: 2,
    priority: 10,
    majorCities: [
      { name: 'Jacksonville', population: 949611 },
      { name: 'Miami', population: 467963 },
      { name: 'Tampa', population: 399700 },
      { name: 'Orlando', population: 307573 }
    ],
    specialFeatures: ['Hurricane protection', 'Sandy soil', 'High water table'],
    avgCostMultiplier: 1.02,
    keywords: ['hurricane retaining wall', 'florida retaining wall permits']
  }
};

// 所有州的完整列表（50个州）
export const allStates = [
  'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
  'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa',
  'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan',
  'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire',
  'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio',
  'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
  'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia',
  'wisconsin', 'wyoming'
];

// 材料类型数据
export const materials = {
  'concrete': {
    name: 'Concrete',
    basePrice: 45,
    lifespan: '50+ years',
    maintenance: 'Low',
    popularStates: ['california', 'new-york', 'texas'],
    description: 'Durable and versatile, concrete walls are ideal for both residential and commercial projects.'
  },

  'stone': {
    name: 'Natural Stone',
    basePrice: 55,
    lifespan: '100+ years',
    maintenance: 'Very Low',
    popularStates: ['oregon', 'washington', 'colorado'],
    description: 'Beautiful and natural, stone walls provide excellent aesthetic appeal and longevity.'
  },

  'timber': {
    name: 'Pressure Treated Timber',
    basePrice: 25,
    lifespan: '15-20 years',
    maintenance: 'High',
    popularStates: ['pennsylvania', 'michigan', 'ohio'],
    description: 'Affordable and natural, timber walls are great for garden and landscape applications.'
  },

  'block': {
    name: 'Concrete Blocks',
    basePrice: 35,
    lifespan: '30-50 years',
    maintenance: 'Medium',
    popularStates: ['florida', 'arizona', 'nevada'],
    description: 'Cost-effective and sturdy, block walls offer great value for many applications.'
  },

  'railroad-tie': {
    name: 'Railroad Ties',
    basePrice: 20,
    lifespan: '10-15 years',
    maintenance: 'Very High',
    popularStates: ['texas', 'oklahoma', 'arkansas'],
    description: 'Budget-friendly option with rustic appeal, but requires frequent maintenance.'
  },

  'boulder': {
    name: 'Natural Boulder',
    basePrice: 70,
    lifespan: '100+ years',
    maintenance: 'None',
    popularStates: ['colorado', 'montana', 'wyoming'],
    description: 'Premium natural look, boulder walls create stunning landscape features.'
  },

  'segmental': {
    name: 'Segmental Blocks',
    basePrice: 50,
    lifespan: '50+ years',
    maintenance: 'Low',
    popularStates: ['california', 'washington', 'oregon'],
    description: 'Modern interlocking system, perfect for DIY projects and curved designs.'
  },

  'corten-steel': {
    name: 'Corten Steel',
    basePrice: 85,
    lifespan: '50+ years',
    maintenance: 'None',
    popularStates: ['new-york', 'california', 'washington'],
    description: 'Modern industrial look with weathering properties that develop protective rust patina.'
  }
};