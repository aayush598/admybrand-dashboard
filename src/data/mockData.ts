import { MetricCard, ChartData, TableRow } from '../types/analytics';

export const generateMetricCards = (): MetricCard[] => [
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: '$847,329',
    change: 23.4,
    changeType: 'increase',
    icon: 'DollarSign',
    trend: [420, 445, 432, 468, 489, 512, 534, 567, 589, 612, 645, 678]
  },
  {
    id: 'users',
    title: 'Active Users',
    value: '124,891',
    change: 12.8,
    changeType: 'increase',
    icon: 'Users',
    trend: [89, 94, 98, 103, 108, 115, 119, 125, 132, 138, 144, 149]
  },
  {
    id: 'conversions',
    title: 'Conversions',
    value: '8,394',
    change: -5.2,
    changeType: 'decrease',
    icon: 'Target',
    trend: [95, 92, 88, 85, 89, 91, 88, 84, 82, 79, 76, 74]
  },
  {
    id: 'growth',
    title: 'Growth Rate',
    value: '18.7%',
    change: 8.9,
    changeType: 'increase',
    icon: 'TrendingUp',
    trend: [12, 14, 15, 16, 17, 18, 19, 18, 17, 18, 19, 21]
  }
];

export const generateRevenueData = (): ChartData[] => [
  { name: 'Jan', revenue: 65400, users: 12400, conversions: 890 },
  { name: 'Feb', revenue: 71200, users: 13100, conversions: 920 },
  { name: 'Mar', revenue: 68900, users: 12800, conversions: 875 },
  { name: 'Apr', revenue: 75600, users: 14200, conversions: 1020 },
  { name: 'May', revenue: 82300, users: 15600, conversions: 1150 },
  { name: 'Jun', revenue: 89100, users: 16800, conversions: 1280 },
  { name: 'Jul', revenue: 94700, users: 17900, conversions: 1340 },
  { name: 'Aug', revenue: 101200, users: 19200, conversions: 1450 },
  { name: 'Sep', revenue: 97800, users: 18600, conversions: 1380 },
  { name: 'Oct', revenue: 103500, users: 19800, conversions: 1520 },
  { name: 'Nov', revenue: 108900, users: 20500, conversions: 1680 },
  { name: 'Dec', revenue: 115600, users: 21300, conversions: 1740 }
];

export const generateChannelData = (): ChartData[] => [
  { name: 'Google Ads', value: 45.2 },
  { name: 'Facebook Ads', value: 28.7 },
  { name: 'LinkedIn Ads', value: 15.3 },
  { name: 'Twitter Ads', value: 6.8 },
  { name: 'Other', value: 4.0 }
];

export const generateCampaignData = (): TableRow[] => [
  {
    id: '1',
    campaign: 'Holiday Sale 2024',
    impressions: 125000,
    clicks: 3250,
    ctr: 2.6,
    cost: 8900,
    conversions: 184,
    revenue: 45600,
    roas: 5.12,
    status: 'active',
    date: '2024-01-15'
  },
  {
    id: '2',
    campaign: 'Spring Collection Launch',
    impressions: 98000,
    clicks: 2890,
    ctr: 2.95,
    cost: 7200,
    conversions: 156,
    revenue: 38200,
    roas: 5.31,
    status: 'active',
    date: '2024-01-14'
  },
  {
    id: '3',
    campaign: 'Brand Awareness Q1',
    impressions: 156000,
    clicks: 4100,
    ctr: 2.63,
    cost: 12300,
    conversions: 198,
    revenue: 52800,
    roas: 4.29,
    status: 'active',
    date: '2024-01-13'
  },
  {
    id: '4',
    campaign: 'Retargeting Campaign',
    impressions: 67000,
    clicks: 2200,
    ctr: 3.28,
    cost: 5400,
    conversions: 142,
    revenue: 28900,
    roas: 5.35,
    status: 'paused',
    date: '2024-01-12'
  },
  {
    id: '5',
    campaign: 'Video Marketing Push',
    impressions: 89000,
    clicks: 1890,
    ctr: 2.12,
    cost: 6700,
    conversions: 98,
    revenue: 19800,
    roas: 2.95,
    status: 'completed',
    date: '2024-01-11'
  },
  {
    id: '6',
    campaign: 'Influencer Partnership',
    impressions: 234000,
    clicks: 6800,
    ctr: 2.91,
    cost: 15600,
    conversions: 289,
    revenue: 67400,
    roas: 4.32,
    status: 'active',
    date: '2024-01-10'
  },
  {
    id: '7',
    campaign: 'Mobile App Promotion',
    impressions: 178000,
    clicks: 5200,
    ctr: 2.92,
    cost: 11800,
    conversions: 245,
    revenue: 58900,
    roas: 4.99,
    status: 'active',
    date: '2024-01-09'
  },
  {
    id: '8',
    campaign: 'Email Marketing Boost',
    impressions: 45000,
    clicks: 1200,
    ctr: 2.67,
    cost: 3200,
    conversions: 89,
    revenue: 18900,
    roas: 5.91,
    status: 'completed',
    date: '2024-01-08'
  }
];