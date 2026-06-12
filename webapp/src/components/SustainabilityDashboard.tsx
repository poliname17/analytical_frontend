import { KpiCard } from './KpiCard'
import { WasteChart } from './WasteChart'
import { OverstockChart } from './OverstockChart'
import { StockoutChart } from './StockoutChart'
import { CarbonChart } from './CarbonChart'
import { sustainabilityKpi } from '../data/sustainabilityData'

export const SustainabilityDashboard = () => {
  const { waste, overstock, stockout, carbon } = sustainabilityKpi

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Sustainability Metrics</h1>
        <p>Environmental impact tracking and resource efficiency</p>
      </div>

      <div className="kpi-grid">
        <KpiCard label="Waste Percentage" {...waste} />
        <KpiCard label="Overstock Rate" {...overstock} />
        <KpiCard label="Stockout Rate" {...stockout} />
        <KpiCard label="Carbon per Shipment" {...carbon} />
      </div>

      <div className="chart-grid">
        <WasteChart />
        <OverstockChart />
        <StockoutChart />
        <CarbonChart />
      </div>
    </div>
  )
}
