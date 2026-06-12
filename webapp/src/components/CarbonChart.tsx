import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { carbonData } from '../data/sustainabilityData'
import { ChartCard } from './ChartCard'

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="custom-tooltip">
      <div className="custom-tooltip__label">{label}</div>
      <div className="custom-tooltip__value">{payload[0].value} kg CO₂</div>
      {payload[1] && (
        <div className="custom-tooltip__change" style={{ fontWeight: 400, color: '#7C7A9C' }}>
          Distance: {payload[1].value.toLocaleString()} km
        </div>
      )}
    </div>
  )
}

export const CarbonChart = () => (
  <ChartCard
    title="Carbon Emissions per Shipment"
    subtitle="Distance × Weight × Emission Factor"
    badge="-14.8% YoY"
  >
    <ResponsiveContainer width="100%" height={320}>
      <ComposedChart data={carbonData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="carbonBarGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" axisLine={false} tickLine={false} dy={8} />
        <YAxis
          yAxisId="left"
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => `${v} kg`}
          dx={-4}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : String(v)}
          dx={4}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#7C3AED', strokeWidth: 1, strokeDasharray: '4 4' }} />
        <Legend
          iconType="circle"
          iconSize={8}
          wrapperStyle={{ paddingTop: 12 }}
        />
        <Bar
          yAxisId="left"
          dataKey="emissions"
          name="CO₂ Emissions"
          fill="url(#carbonBarGradient)"
          stroke="#7C3AED"
          strokeWidth={1}
          radius={[4, 4, 0, 0]}
          maxBarSize={28}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="distance"
          name="Distance"
          stroke="#059669"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: '#059669', stroke: '#fff', strokeWidth: 2 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  </ChartCard>
)
