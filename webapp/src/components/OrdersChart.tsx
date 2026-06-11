import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { ordersData } from '../data/mockData'
import { ChartCard } from './ChartCard'

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="custom-tooltip">
      <div className="custom-tooltip__label">{label}</div>
      <div className="custom-tooltip__value">{payload[0].value.toLocaleString()}</div>
      {payload[1] && (
        <div className="custom-tooltip__change custom-tooltip__change--up" style={{ fontWeight: 400 }}>
          Fulfilled: {payload[1].value.toLocaleString()}
        </div>
      )}
    </div>
  )
}

export const OrdersChart = () => (
  <ChartCard
    title="Orders Processed"
    subtitle="Monthly orders & fulfillment rate"
    badge="+12.4% YoY"
  >
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={ordersData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }} barGap={4} barCategoryGap="20%">
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" axisLine={false} tickLine={false} dy={8} />
        <YAxis axisLine={false} tickLine={false} tickFormatter={(v: number) => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : String(v)} dx={-4} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#EEF2FF' }} />
        <Legend
          iconType="circle"
          iconSize={8}
          wrapperStyle={{ paddingTop: 12 }}
        />
        <Bar
          dataKey="orders"
          name="Orders"
          radius={[6, 6, 0, 0]}
          fill="#4F46E5"
          maxBarSize={32}
        />
        <Bar
          dataKey="fulfilled"
          name="Fulfilled"
          radius={[6, 6, 0, 0]}
          fill="#C7D2FE"
          maxBarSize={32}
        />
      </BarChart>
    </ResponsiveContainer>
  </ChartCard>
)
