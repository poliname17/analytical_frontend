import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { wasteData } from '../data/sustainabilityData'
import { ChartCard } from './ChartCard'

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="custom-tooltip">
      <div className="custom-tooltip__label">{label}</div>
      <div className="custom-tooltip__value">{payload[0].value}%</div>
      {payload[1] && (
        <div className="custom-tooltip__change custom-tooltip__change--up" style={{ fontWeight: 400 }}>
          Target: {payload[1].value}%
        </div>
      )}
    </div>
  )
}

export const WasteChart = () => (
  <ChartCard
    title="Waste Percentage"
    subtitle="(Waste Material / Total Material) × 100"
    badge="-12.3% YoY"
  >
    <ResponsiveContainer width="100%" height={320}>
      <AreaChart data={wasteData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="wasteGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#059669" stopOpacity={0.25} />
            <stop offset="95%" stopColor="#059669" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" axisLine={false} tickLine={false} dy={8} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => `${v}%`}
          domain={[0, 8]}
          dx={-4}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#059669', strokeWidth: 1, strokeDasharray: '4 4' }} />
        <Area
          type="monotone"
          dataKey="waste"
          stroke="#059669"
          strokeWidth={3}
          fill="url(#wasteGradient)"
          dot={false}
          activeDot={{ r: 5, fill: '#059669', stroke: '#fff', strokeWidth: 2 }}
        />
        <Area
          type="monotone"
          dataKey="target"
          stroke="#A7F3D0"
          strokeWidth={2}
          strokeDasharray="6 3"
          fill="none"
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  </ChartCard>
)
