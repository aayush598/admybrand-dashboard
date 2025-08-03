export interface MetricCard {
  id: string;
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: string;
  trend: number[];
}

export interface ChartData {
  name: string;
  value: number;
  revenue?: number;
  users?: number;
  conversions?: number;
  date?: string;
}

export interface TableRow {
  id: string;
  campaign: string;
  impressions: number;
  clicks: number;
  ctr: number;
  cost: number;
  conversions: number;
  revenue: number;
  roas: number;
  status: 'active' | 'paused' | 'completed';
  date: string;
}

export interface DateRange {
  from: Date;
  to: Date;
}

export type ThemeMode = 'light' | 'dark';