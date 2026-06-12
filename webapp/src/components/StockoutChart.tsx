import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import { stockoutData } from '../data/sustainabilityData'
import { ChartCard } from './ChartCard'

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="custom-tooltip">
      <div className="custom-tooltip__label">{label}</div>
      <div className="custom-tooltip__value">{payload[0].value}%</div>
      {payload[1] && (
        <div className="custom-tooltip__change" style={{ fontWeight: 400, color: '#7C7A9C' }}>
          Threshold: {payload[1].value}%
        </div>
      )}
    </div>
  )
}

export const StockoutChart = () => (
  <ChartCard
    title="Stockout Rate"
    subtitle="(Stockout Events / Total Orders) × 100"
    badge="-25.0% YoY"
  >
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={stockoutData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" axisLine={false} tickLine={false} dy={8} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => `${v}%`}
          domain={[0, 6]}
          dx={-4}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#4F46E5', strokeWidth: 1, strokeDasharray: '4 4' }} />
        <ReferenceLine
          y={3.0}
          stroke="#E11D48"
          strokeDasharray="6 3"
          strokeWidth={2}
          label={{ value: 'Threshold 3.0%', position: 'right', fill: '#E11D48', fontSize: 11 }}
        />
        <Line
          type="monotone"
          dataKey="stockouts"
          stroke="#4F46E5"
          strokeWidth={3}
          dot={{ r: 4, fill: '#4F46E5', stroke: '#fff', strokeWidth: 2 }}
          activeDot={{ r: 6, fill: '#4F46E5', stroke: '#fff', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </ChartCard>
)
