import { KpiCard } from './KpiCard'
import { RevenueChart } from './RevenueChart'
import { OrdersChart } from './OrdersChart'
import { InventoryChart } from './InventoryChart'
import { EfficiencyChart } from './EfficiencyChart'
import { kpiData } from '../data/mockData'

export const Dashboard = () => {
  const { revenue, orders, inventory, efficiency } = kpiData

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Analytics Dashboard</h1>
        <p>Store performance overview and key metrics</p>
      </div>

      <div className="kpi-grid">
        <KpiCard label="Total Revenue" {...revenue} />
        <KpiCard label="Orders Processed" {...orders} />
        <KpiCard label="Inventory Turnover" {...inventory} />
        <KpiCard label="Operational Efficiency" {...efficiency} />
      </div>

      <div className="chart-grid">
        <RevenueChart />
        <OrdersChart />
        <InventoryChart />
        <EfficiencyChart />
      </div>
    </div>
  )
}
