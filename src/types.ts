export type DataSource =
  | 'verified'
  | 'estimated'
  | 'ai'
  | 'user'
  | 'review';

export interface DataField {
  label: string;
  value: string;
  source?: DataSource;
}

export interface Assessment {
  id: string;
  project: string;
  location: string;
  type: string;
  siteArea: string;
  potentialGfa: string;
  estCost: string;
  potentialGdv: string;
  score: number;
  status: 'Conditional Go' | 'Go' | 'No Go' | 'Under Review';
}

export interface MapPoint {
  id: string;
  x: number;
  y: number;
  level: 'feasible' | 'conditional' | 'constrained';
  label: string;
}
