import type { Assessment, DataField, DataSource, MapPoint } from '../types';

export const currentUser = {
  name: 'Sofia Martins',
  company: 'Vanguard Developments',
  initials: 'SM',
};

export const stats = [
  {
    label: 'Active Projects',
    value: '12',
    source: 'verified' as const,
    hint: 'Currently under formal assessment',
  },
  {
    label: 'Opportunities Analysed',
    value: '48',
    source: 'estimated' as const,
    hint: 'Portugal property screenings',
  },
  {
    label: 'Potential Development Value',
    value: '€26.4M',
    source: 'ai' as const,
    hint: 'Estimated combined GDV',
  },
  {
    label: 'Recommended for Study',
    value: '9',
    source: 'verified' as const,
    hint: 'Score above 75/100 benchmark',
  },
];

export const assessments: Assessment[] = [
  {
    id: 'rua-do-arsenal',
    project: 'Rua do Arsenal Redevelopment',
    location: 'Lisbon',
    type: 'Mixed Use',
    siteArea: '2,850 m²',
    potentialGfa: '6,200 m²',
    estCost: '€12.8M',
    potentialGdv: '€18.6M',
    score: 78,
    status: 'Conditional Go',
  },
  {
    id: 'porto-riverside',
    project: 'Porto Riverside Residential',
    location: 'Porto',
    type: 'Residential',
    siteArea: '4,100 m²',
    potentialGfa: '9,500 m²',
    estCost: '€19.2M',
    potentialGdv: '€27.4M',
    score: 84,
    status: 'Go',
  },
  {
    id: 'braga-tech-park',
    project: 'Braga Tech Park Expansion',
    location: 'Braga',
    type: 'Industrial',
    siteArea: '11,200 m²',
    potentialGfa: '15,800 m²',
    estCost: '€9.4M',
    potentialGdv: '€13.1M',
    score: 61,
    status: 'Under Review',
  },
  {
    id: 'faro-marina',
    project: 'Faro Marina Apartments',
    location: 'Faro',
    type: 'Residential',
    siteArea: '3,600 m²',
    potentialGfa: '7,100 m²',
    estCost: '€14.6M',
    potentialGdv: '€20.9M',
    score: 71,
    status: 'Conditional Go',
  },
];

export const mapPoints: MapPoint[] = [
  { id: 'p1', x: 22, y: 14, level: 'feasible', label: 'Viana do Castelo' },
  { id: 'p2', x: 30, y: 20, level: 'constrained', label: 'Braga' },
  { id: 'p3', x: 35, y: 22, level: 'conditional', label: 'Guimarães' },
  { id: 'p4', x: 22, y: 27, level: 'feasible', label: 'Porto' },
  { id: 'p5', x: 40, y: 26, level: 'conditional', label: 'Vila Real' },
  { id: 'p6', x: 52, y: 23, level: 'constrained', label: 'Bragança' },
  { id: 'p7', x: 24, y: 37, level: 'feasible', label: 'Aveiro' },
  { id: 'p8', x: 40, y: 39, level: 'conditional', label: 'Viseu' },
  { id: 'p9', x: 50, y: 41, level: 'constrained', label: 'Guarda' },
  { id: 'p10', x: 24, y: 47, level: 'conditional', label: 'Coimbra' },
  { id: 'p11', x: 48, y: 51, level: 'feasible', label: 'Castelo Branco' },
  { id: 'p12', x: 26, y: 55, level: 'feasible', label: 'Leiria' },
  { id: 'p13', x: 50, y: 59, level: 'constrained', label: 'Portalegre' },
  { id: 'p14', x: 28, y: 65, level: 'feasible', label: 'Lisbon' },
  { id: 'p15', x: 38, y: 61, level: 'conditional', label: 'Santarém' },
  { id: 'p16', x: 44, y: 71, level: 'constrained', label: 'Évora' },
  { id: 'p17', x: 33, y: 75, level: 'conditional', label: 'Setúbal' },
  { id: 'p18', x: 40, y: 81, level: 'feasible', label: 'Beja' },
  { id: 'p19', x: 35, y: 89, level: 'feasible', label: 'Faro' },
  { id: 'p20', x: 48, y: 89, level: 'constrained', label: 'Vila Real de Sto António' },
];

export const coreProperty: DataField[] = [
  { label: 'Cadastral Address', value: 'Rua do Arsenal 14-22, Lisboa', source: 'verified' },
  { label: 'Registered Municipality', value: 'Câmara Municipal de Lisboa', source: 'verified' },
  { label: 'Parcel Area (Land Registry)', value: '2,850 m²', source: 'verified' },
  { label: 'Existing Gross Floor Area', value: '4,100 m²', source: 'verified' },
  { label: 'Current Use Mode', value: 'Office & Retail (Partially Vacant)', source: 'user' },
  { label: 'Approx. Construction Year', value: '1792 (Pombaline Era)', source: 'estimated' },
  { label: 'Max Building Height', value: '18.5 m', source: 'verified' },
  { label: 'Total Floors (Above Ground)', value: '5 Levels', source: 'verified' },
  { label: 'Cadastral Valuation Estimate', value: '€11,200,000', source: 'estimated' },
];

export const evolutionHistory = [
  { year: '1958', tag: 'Major Renovation', text: 'Original building structural alterations; reinforced POMBALINE wooden cage structures noted.' },
  { year: '1987', tag: 'Permit Update', text: 'Ground floor commercial restructuring. Municipal licensing files recorded.' },
  { year: '2004', tag: 'Zoning Change', text: 'Lisbon Municipal Master Plan (PDM) classifies area as Central Historic Core Protection.' },
  { year: '2016', tag: 'Incentive Area', text: 'Baixa-Chiado Regeneration Programme launched; priority tax incentives activated.' },
  { year: '2022', tag: 'Neighbourhood Shift', text: 'Adjacent buildings at Rua do Ouro fully renovated into luxury boutique hotel.' },
  { year: '2026', tag: 'Current Analysis', text: 'Current AI-Assisted feasibility analysis initiated for Mixed-Use redevelopment.', current: true },
];

export const developmentPotential: DataField[] = [
  { label: 'Permitted Uses', value: 'Residential, Hospitality, Commercial Ground Floor', source: 'verified' },
  { label: 'Potential Gross Floor Area', value: 'Up to 6,200 m² (via attic expansion)', source: 'ai' },
  { label: 'Development Density Indicator', value: 'High municipal prioritization zone', source: 'estimated' },
  { label: 'Current Land Use Allocation', value: 'Commercial & Administrative', source: 'verified' },
];

export const planningConditions: DataField[] = [
  { label: 'Maximum Building Height', value: '18.5 m (aligns with immediate rooflines)', source: 'review' },
  { label: 'Maximum Levels', value: '5 + Attics (Sub-roof adaptation potential)', source: 'review' },
  { label: 'Building Coverage Ratio', value: '85% maximum footprint limit', source: 'estimated' },
  { label: 'Parking Space Requirements', value: '1 space per 150m² of residential GFA', source: 'verified' },
];

export const hardConstraints: DataField[] = [
  { label: 'Heritage Restrictions', value: 'Strict Pombaline protection limits structural modifications', source: 'verified' },
  { label: 'Protected Façade Directive', value: 'Façade must be entirely preserved; no external glazing expansions', source: 'verified' },
  { label: 'Infrastructure Constraints', value: 'Historic water main alignment along immediate southern boundary', source: 'estimated' },
  { label: 'Setback Requirements', value: 'Mandatory zero-setback alignment with Rua do Arsenal', source: 'verified' },
];

export interface Scenario {
  id: string;
  key: string;
  name: string;
  subtitle: string;
  massing: string;
  floors: string;
  metrics: Record<string, string>;
  financials: Record<string, string>;
  recommended?: boolean;
}

export const scenarios: Scenario[] = [
  {
    id: 'a',
    key: 'A',
    name: 'Residential',
    subtitle: 'Premium Apartments',
    massing: '5 Floors (Max)',
    floors: 'short',
    metrics: {
      'Site Area': '2,850 m²',
      'Buildable Footprint': '2,422 m² (85%)',
      'Gross Floor Area': '5,800 m²',
      'Net Saleable/Rentable': '4,930 m²',
      'Number of Units': '48 Apts',
      'Average Unit Size': '102 m²',
      'Parking Spaces': '32 Spaces',
      'Construction Period': '18 Months',
    },
    financials: {
      'Acquisition Cost': '€4,000,000',
      'Construction Cost': '€6,800,000',
      'Professional Fees & Admin': '€1,200,000',
      'Taxes & Contingency': '€1,100,000',
      'Total Development Cost': '€13,100,000',
      'Estimated GDV (Revenue)': '€16,500,000',
      'Estimated Profit': '€3,400,000',
      'Profit Margin on Cost': '25.9%',
      'Return on Equity (ROC)': '18.4%',
    },
  },
  {
    id: 'b',
    key: 'B',
    name: 'Student Housing',
    subtitle: 'High-Density Studio',
    massing: '6 Floors (Attic)',
    floors: 'medium',
    metrics: {
      'Site Area': '2,850 m²',
      'Buildable Footprint': '2,422 m² (85%)',
      'Gross Floor Area': '6,500 m²',
      'Net Saleable/Rentable': '5,200 m²',
      'Number of Units': '120 Studios',
      'Average Unit Size': '43 m²',
      'Parking Spaces': '10 Spaces',
      'Construction Period': '14 Months',
    },
    financials: {
      'Acquisition Cost': '€4,000,000',
      'Construction Cost': '€7,200,000',
      'Professional Fees & Admin': '€1,100,000',
      'Taxes & Contingency': '€1,200,000',
      'Total Development Cost': '€13,500,000',
      'Estimated GDV (Revenue)': '€17,100,000',
      'Estimated Profit': '€3,600,000',
      'Profit Margin on Cost': '26.6%',
      'Return on Equity (ROC)': '19.1%',
    },
  },
  {
    id: 'c',
    key: 'C',
    name: 'Mixed Use',
    subtitle: 'Residential & Retail',
    massing: '5 Floors + Active Base',
    floors: 'tall',
    recommended: true,
    metrics: {
      'Site Area': '2,850 m²',
      'Buildable Footprint': '2,422 m² (85%)',
      'Gross Floor Area': '6,200 m²',
      'Net Saleable/Rentable': '5,150 m²',
      'Number of Units': '42 Apts + 4 Shops',
      'Average Unit Size': '85 m² (Apts)',
      'Parking Spaces': '24 Spaces',
      'Construction Period': '20 Months',
    },
    financials: {
      'Acquisition Cost': '€4,000,000',
      'Construction Cost': '€7,800,000',
      'Professional Fees & Admin': '€1,380,000',
      'Taxes & Contingency': '€1,500,000',
      'Total Development Cost': '€14,680,000',
      'Estimated GDV (Revenue)': '€19,400,000',
      'Estimated Profit': '€4,720,000',
      'Profit Margin on Cost': '32.2%',
      'Return on Equity (ROC)': '24.3%',
    },
  },
];

export interface CostLine {
  label: string;
  amount: string;
  pct: number;
}

export const costBreakdown: CostLine[] = [
  { label: 'Property Acquisition', amount: '€4,000,000', pct: 27.2 },
  { label: 'Construction', amount: '€7,800,000', pct: 53.1 },
  { label: 'Professional Fees', amount: '€780,000', pct: 5.3 },
  { label: 'Planning & Licensing', amount: '€180,000', pct: 1.2 },
  { label: 'Taxes & Transaction Costs', amount: '€420,000', pct: 2.9 },
  { label: 'Financing', amount: '€640,000', pct: 4.4 },
  { label: 'Marketing & Sales', amount: '€210,000', pct: 1.4 },
  { label: 'Contingency', amount: '€650,000', pct: 4.4 },
];

export const costSensitivity = [
  { label: '-10% Cost (Optimistic)', value: '€2,130/m²', tone: 'good' as const },
  { label: 'Base Model (Current)', value: '€2,367/m²', tone: 'neutral' as const },
  { label: '+10% Cost (Risk Margin)', value: '€2,604/m²', tone: 'bad' as const },
];

export interface CashFlowQuarter {
  label: string;
  amountLabel: string;
  heightPct: number;
  kind: 'capital' | 'construction' | 'marketing' | 'exit';
}

export const cashFlowForecast: CashFlowQuarter[] = [
  { label: 'Q1: Acq.', amountLabel: '-€4.0M', heightPct: 62, kind: 'capital' },
  { label: 'Q2: Plan', amountLabel: '-€1.1M', heightPct: 22, kind: 'capital' },
  { label: 'Q3: Const.', amountLabel: '-€3.5M', heightPct: 46, kind: 'construction' },
  { label: 'Q4: Const.', amountLabel: '-€4.3M', heightPct: 55, kind: 'construction' },
  { label: 'Q5: Mktg', amountLabel: '-€0.4M', heightPct: 14, kind: 'marketing' },
  { label: 'Q6: Exit', amountLabel: '+€19.4M', heightPct: 100, kind: 'exit' },
];

export const sensitivityDeck = [
  { label: 'Construction Cost Variance', value: '+10% (€7.8M)', tone: 'bad' as const },
  { label: 'Target Sale Price', value: '€3,500/m²', tone: 'good' as const },
  { label: 'Estimated Bank Interest Rate', value: '5.25%', tone: 'neutral' as const },
  { label: 'Expected Project Delay', value: '+3 Months', tone: 'warn' as const },
];

export interface RiskRow {
  id: string;
  label: string;
  severity: 'Low' | 'Medium' | 'High';
  description: string;
  source: DataSource;
}

export const riskMatrix: RiskRow[] = [
  { id: 'planning', label: 'Planning Risk', severity: 'Medium', description: 'Building height permissions within historic Baixa Pombalina core.', source: 'review' },
  { id: 'legal', label: 'Legal Risk', severity: 'Low', description: 'Clear private ownership structure under single corporate entity.', source: 'verified' },
  { id: 'construction', label: 'Construction Risk', severity: 'Medium', description: 'Historic Pombaline structural integrity & wooden cage protection.', source: 'review' },
  { id: 'market', label: 'Market Risk', severity: 'Medium', description: 'Strong high-end demand countered by overall macro interest rates.', source: 'review' },
  { id: 'financial', label: 'Financial Risk', severity: 'Medium', description: 'Sensitivity to initial acquisition and structural renovation margin.', source: 'review' },
  { id: 'environmental', label: 'Environmental Risk', severity: 'Low', description: 'Low direct environmental hazards; core municipal sewer network.', source: 'verified' },
  { id: 'infrastructure', label: 'Infrastructure Risk', severity: 'Low', description: 'Abundant access to electricity, high-capacity water, and telecom.', source: 'verified' },
];

export const criticalRisk = {
  title: 'Critical Planning Risk',
  issue: 'Maximum permitted building height requires municipal confirmation.',
  impact: 'Could reduce development area by approximately 12-18% GFA.',
  mitigation: 'Obtain PIP (Prior Information Request) confirmation before signing the purchase agreement.',
  owner: 'Vanguard Legal Team',
};

export const executiveSummary = {
  label: 'Vanguard Executive Summary',
  title: 'Rua do Arsenal Redevelopment, Lisbon, Portugal',
  status: 'Conditional Go' as const,
  score: 78,
  quote:
    'This opportunity shows attractive redevelopment potential, subject to confirmation of planning capacity and construction-cost assumptions.',
  stats: [
    { label: 'Site Area', value: '2,850 m²' },
    { label: 'Potential GFA', value: '6,200 m²' },
    { label: 'Total Dev. Cost', value: '€14.68M' },
    { label: 'Estimated GDV', value: '€19.4M' },
    { label: 'Potential Profit', value: '€4.72M' },
    { label: 'Estimated Duration', value: '32 Months' },
  ],
  valueDrivers: [
    'Strong residential demand',
    'Attractive site location',
    'Potential density uplift',
    'Existing transport connections',
  ],
  keyRisks: [
    'Planning height requires confirmation',
    'Construction cost assumptions',
    'Financing conditions',
    'Acquisition price sensitivity',
  ],
  nextSteps: [
    'Confirm planning capacity',
    'Obtain architectural massing study',
    'Conduct legal due diligence',
    'Request preliminary construction estimate',
    'Discuss financing',
    'Decide whether to proceed with acquisition',
  ],
};

export const readinessOverview = {
  budget: '€85,000 – €140,000',
  budgetHint: 'Includes structural surveys, licensing and legal fees',
  timeline: '8 – 14 Months',
  timelineHint: 'Heavily dependent on DGPC historic core approval cycle',
};

export interface ChecklistItem {
  label: string;
  state: 'done' | 'warn' | 'pending';
}

export const readinessChecklist: { title: string; items: ChecklistItem[] }[] = [
  {
    title: 'Property & Site',
    items: [
      { label: 'Property records & Certidão collected', state: 'done' },
      { label: 'Ownership title registry details clear', state: 'done' },
      { label: 'Formal acquisition option agreement', state: 'warn' },
    ],
  },
  {
    title: 'Legal & Contracts',
    items: [
      { label: 'Cadastral boundary reconciliation', state: 'done' },
      { label: 'Local planning due diligence checklist', state: 'warn' },
      { label: 'Acquisition contract draft review', state: 'pending' },
    ],
  },
  {
    title: 'Planning & Master Plan',
    items: [
      { label: 'Zoning designation identified (Historic Core)', state: 'done' },
      { label: 'Formal municipal validation (PIP submission)', state: 'warn' },
      { label: 'Dedicated municipal planner appointed', state: 'pending' },
    ],
  },
  {
    title: 'Finance & Capital',
    items: [
      { label: 'Pro-forma financial appraisal complete', state: 'done' },
      { label: 'Equity capital threshold committed', state: 'warn' },
      { label: 'Formal construction financing approval', state: 'pending' },
    ],
  },
  {
    title: 'Design & Architecture',
    items: [
      { label: 'Local heritage architect appointed', state: 'done' },
      { label: 'Preliminary architectural massing complete', state: 'done' },
      { label: 'Detailed CAD/PDF boundary surveys', state: 'warn' },
    ],
  },
  {
    title: 'Technical & Site Assessment',
    items: [
      { label: 'Pombaline structural cage integrity check', state: 'warn' },
      { label: 'Environmental and historic heritage report', state: 'pending' },
      { label: 'Geotechnical foundation survey', state: 'pending' },
    ],
  },
];

export const marketStats = [
  { label: 'Avg. Property Price', value: '€6,450 / m²', hint: '+8.4% YoY · Lisbon Historic Center', source: 'verified' as const },
  { label: 'Avg. Residential Rent', value: '€24.50 / m²', hint: '+12.1% YoY · Baixa/Arsenal District', source: 'verified' as const },
  { label: 'Vacancy Rate', value: '4.2%', hint: 'Highly Constrained · Core Commercial/Resident', source: 'estimated' as const },
  { label: 'Pipeline Projects', value: '18 Active', hint: 'High Premium Demand · Within 500m radius', source: 'ai' as const },
];

export const amenityLayers = [
  'Public Transport',
  'Universities',
  'Schools',
  'Hospitals',
  'Retail',
  'Offices',
  'Tourism',
  'Restaurants',
  'Parks',
  'Development Pipeline',
];

export interface Comparable {
  project: string;
  type: string;
  size: string;
  scope: string;
  priceValue: string;
  completion: string;
}

export const comparables: Comparable[] = [
  { project: 'Rua Augusta Residences', type: 'Residential', size: '3,400 m²', scope: '24 Units', priceValue: '€7,100/m²', completion: 'Q2 2024' },
  { project: 'S. Julião Boutique Hotel', type: 'Hospitality', size: '4,200 m²', scope: '45 Rooms', priceValue: '€18.2M Val.', completion: 'Q4 2023' },
  { project: 'The Gold Corner Offices', type: 'Commercial', size: '2,100 m²', scope: '4 Units', priceValue: '€6,200/m²', completion: 'Q1 2024' },
];

export const systemCapabilities = {
  can: [
    'Rapidly screen development opportunities',
    'Structure planning, zoning, and development and financial questions',
    'Identify potential planning and legal constraints',
    'Compare development scenarios',
    'Estimate preliminary project costs',
    'Highlight important financial drivers',
    'Highlight risks',
    'Support Go / Conditional Go / No-Go internal screening',
  ],
  cannot: [
    'Cannot replace Urban planners, Architects, Lawyers, Quantity surveyors, Engineers, Banks, Investors, Tax advisers, Municipal authorities',
    'Cannot provide Binding planning opinions, Legally valid documents, Guaranteed construction prices, Guaranteed market values, Guaranteed investment returns, Investment-grade financial models without professional validation',
    'Cannot remove Regulatory risk, Market risk, Construction risk, Financing risk, Execution risk',
  ],
};

export const platformLabelsLegend = [
  { source: 'verified' as const, text: 'Official government / cadastral registry source records.' },
  { source: 'estimated' as const, text: 'Interpolated local historical data with high statistical relevance.' },
  { source: 'ai' as const, text: 'AI assumptions based on regional master plans & similar projects.' },
];

export const confidenceLevelsGuide = [
  { label: 'Verified', text: 'Formally validated municipal or public records.', tone: 'good' as const },
  { label: 'High Confidence', text: 'Sourced from reliable SIR Comparable databases.', tone: 'neutral' as const },
  { label: 'Needs Verification', text: 'Requires manual surveyor review before committing.', tone: 'warn' as const },
];
