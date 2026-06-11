export const revenueData = [
  { month: 'Jan', revenue: 42800, target: 40000 },
  { month: 'Feb', revenue: 45600, target: 42000 },
  { month: 'Mar', revenue: 51200, target: 45000 },
  { month: 'Apr', revenue: 47800, target: 48000 },
  { month: 'May', revenue: 54300, target: 50000 },
  { month: 'Jun', revenue: 58900, target: 52000 },
  { month: 'Jul', revenue: 61200, target: 55000 },
  { month: 'Aug', revenue: 59800, target: 58000 },
  { month: 'Sep', revenue: 63400, target: 60000 },
  { month: 'Oct', revenue: 67200, target: 62000 },
  { month: 'Nov', revenue: 71500, target: 65000 },
  { month: 'Dec', revenue: 82300, target: 70000 },
]

export const ordersData = [
  { month: 'Jan', orders: 1240, fulfilled: 1120 },
  { month: 'Feb', orders: 1380, fulfilled: 1260 },
  { month: 'Mar', orders: 1520, fulfilled: 1410 },
  { month: 'Apr', orders: 1480, fulfilled: 1360 },
  { month: 'May', orders: 1650, fulfilled: 1520 },
  { month: 'Jun', orders: 1720, fulfilled: 1600 },
  { month: 'Jul', orders: 1840, fulfilled: 1710 },
  { month: 'Aug', orders: 1790, fulfilled: 1650 },
  { month: 'Sep', orders: 1950, fulfilled: 1820 },
  { month: 'Oct', orders: 2080, fulfilled: 1940 },
  { month: 'Nov', orders: 2250, fulfilled: 2100 },
  { month: 'Dec', orders: 2560, fulfilled: 2400 },
]

export const inventoryData = [
  { month: 'Jan', turnover: 2.1, stockLevel: 85 },
  { month: 'Feb', turnover: 2.3, stockLevel: 82 },
  { month: 'Mar', turnover: 2.6, stockLevel: 78 },
  { month: 'Apr', turnover: 2.4, stockLevel: 80 },
  { month: 'May', turnover: 2.8, stockLevel: 76 },
  { month: 'Jun', turnover: 3.0, stockLevel: 72 },
  { month: 'Jul', turnover: 3.2, stockLevel: 70 },
  { month: 'Aug', turnover: 3.1, stockLevel: 73 },
  { month: 'Sep', turnover: 3.4, stockLevel: 68 },
  { month: 'Oct', turnover: 3.6, stockLevel: 65 },
  { month: 'Nov', turnover: 3.8, stockLevel: 62 },
  { month: 'Dec', turnover: 4.2, stockLevel: 58 },
]

export const efficiencyData = [
  { category: 'Order Fulfillment', current: 94, previous: 88, benchmark: 90 },
  { category: 'Inventory Accuracy', current: 97, previous: 93, benchmark: 95 },
  { category: 'Delivery Speed', current: 85, previous: 78, benchmark: 82 },
  { category: 'Cost per Order', current: 90, previous: 84, benchmark: 85 },
  { category: 'Customer Satisfaction', current: 92, previous: 86, benchmark: 88 },
  { category: 'Warehouse Efficiency', current: 88, previous: 82, benchmark: 85 },
]

export const kpiData = {
  revenue: {
    value: 698600,
    prefix: '$',
    change: 16.8,
    isUp: true,
    period: 'vs last year',
    icon: '💰',
    iconType: 'indigo' as const,
  },
  orders: {
    value: 20510,
    change: 12.4,
    isUp: true,
    period: 'vs last year',
    icon: '📦',
    iconType: 'green' as const,
  },
  inventory: {
    value: 3.04,
    change: 8.2,
    isUp: true,
    period: 'vs last year',
    icon: '📊',
    iconType: 'amber' as const,
    suffix: 'x',
  },
  efficiency: {
    value: 91.0,
    change: 5.4,
    isUp: true,
    period: 'vs last year',
    icon: '⚡',
    iconType: 'purple' as const,
    suffix: '%',
  },
}
