import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { inventoryData } from '../data/mockData'
import { ChartCard } from './ChartCard'

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="custom-tooltip">
      <div className="custom-tooltip__label">{label}</div>
      {payload.map((entry: any, i: number) => (
        <div key={i} className="custom-tooltip__value" style={{ fontSize: 14, color: entry.color }}>
          {entry.name}: {entry.value}{entry.name === 'Turnover Rate' ? 'x' : '%'}
        </div>
      ))}
    </div>
  )
}

export const InventoryChart = () => (
  <ChartCard
    title="Inventory Turnover"
    subtitle="Turnover rate & stock levels"
    badge="+8.2% YoY"
  >
    <ResponsiveContainer width="100%" height={320}>
      <ComposedChart data={inventoryData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="invBarGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366F1" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#6366F1" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" axisLine={false} tickLine={false} dy={8} />
        <YAxis
          yAxisId="left"
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => `${v}x`}
          dx={-4}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => `${v}%`}
          dx={4}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#C7D2FE', strokeWidth: 1, strokeDasharray: '4 4' }} />
        <Legend
          iconType="circle"
          iconSize={8}
          wrapperStyle={{ paddingTop: 12 }}
        />
        <Bar
          yAxisId="right"
          dataKey="stockLevel"
          name="Stock Level"
          fill="url(#invBarGradient)"
          stroke="#C7D2FE"
          strokeWidth={1}
          radius={[4, 4, 0, 0]}
          maxBarSize={28}
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="turnover"
          name="Turnover Rate"
          stroke="#4F46E5"
          strokeWidth={3}
          dot={{ r: 4, fill: '#4F46E5', stroke: '#fff', strokeWidth: 2 }}
          activeDot={{ r: 6, fill: '#4F46E5', stroke: '#fff', strokeWidth: 2 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  </ChartCard>
)
