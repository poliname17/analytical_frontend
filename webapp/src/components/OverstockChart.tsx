import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { overstockData } from '../data/sustainabilityData'
import { ChartCard } from './ChartCard'

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="custom-tooltip">
      <div className="custom-tooltip__label">{label}</div>
      <div className="custom-tooltip__value">{payload[0].value}%</div>
      {payload[1] && (
        <div className="custom-tooltip__change" style={{ fontWeight: 400, color: '#7C7A9C' }}>
          Capacity: {payload[1].value}%
        </div>
      )}
    </div>
  )
}

export const OverstockChart = () => (
  <ChartCard
    title="Overstock Rate"
    subtitle="(Excess Inventory / Total Inventory) × 100"
    badge="-18.6% YoY"
  >
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={overstockData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }} barGap={4} barCategoryGap="20%">
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" axisLine={false} tickLine={false} dy={8} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => `${v}%`}
          dx={-4}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#FFFBEB' }} />
        <Legend
          iconType="circle"
          iconSize={8}
          wrapperStyle={{ paddingTop: 12 }}
        />
        <Bar
          dataKey="overstock"
          name="Overstock Rate"
          radius={[6, 6, 0, 0]}
          fill="#D97706"
          maxBarSize={32}
        />
        <Bar
          dataKey="capacity"
          name="Capacity Threshold"
          radius={[6, 6, 0, 0]}
          fill="#FDE68A"
          maxBarSize={32}
        />
      </BarChart>
    </ResponsiveContainer>
  </ChartCard>
)
