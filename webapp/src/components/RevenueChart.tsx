import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { revenueData } from '../data/mockData'
import { ChartCard } from './ChartCard'

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="custom-tooltip">
      <div className="custom-tooltip__label">{label}</div>
      <div className="custom-tooltip__value">${payload[0].value.toLocaleString()}</div>
      <div className="custom-tooltip__change custom-tooltip__change--up">
        Target: ${payload[1]?.value.toLocaleString()}
      </div>
    </div>
  )
}

export const RevenueChart = () => (
  <ChartCard
    title="Total Revenue"
    subtitle="Monthly revenue vs targets"
    badge="+16.8% YoY"
  >
    <ResponsiveContainer width="100%" height={320}>
      <AreaChart data={revenueData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="targetStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C7D2FE" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" axisLine={false} tickLine={false} dy={8} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}k`}
          dx={-4}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#C7D2FE', strokeWidth: 1, strokeDasharray: '4 4' }} />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#4F46E5"
          strokeWidth={3}
          fill="url(#revenueGradient)"
          dot={false}
          activeDot={{ r: 5, fill: '#4F46E5', stroke: '#fff', strokeWidth: 2 }}
        />
        <Area
          type="monotone"
          dataKey="target"
          stroke="#C7D2FE"
          strokeWidth={2}
          strokeDasharray="6 3"
          fill="none"
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  </ChartCard>
)
