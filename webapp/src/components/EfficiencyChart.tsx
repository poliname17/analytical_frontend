import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { efficiencyData } from '../data/mockData'
import { ChartCard } from './ChartCard'

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null
  const entry = payload[0]
  return (
    <div className="custom-tooltip">
      <div className="custom-tooltip__label">{entry.payload.category}</div>
      <div className="custom-tooltip__value">{entry.value}%</div>
    </div>
  )
}

export const EfficiencyChart = () => (
  <ChartCard
    title="Operational Efficiency"
    subtitle="Performance vs benchmarks across categories"
    badge="+5.4% YoY"
  >
    <ResponsiveContainer width="100%" height={380}>
      <RadarChart data={efficiencyData} margin={{ top: 8, right: 40, left: 40, bottom: 8 }}>
        <defs>
          <linearGradient id="radarCurrent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#6366F1" stopOpacity={0.3} />
          </linearGradient>
          <linearGradient id="radarPrevious" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C7D2FE" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#C7D2FE" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <PolarGrid stroke="#EBEBF5" />
        <PolarAngleAxis
          dataKey="category"
          tick={{ fill: '#7C7A9C', fontSize: 12 }}
          axisLine={{ stroke: '#EBEBF5' }}
        />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          tick={{ fill: '#AEACCC', fontSize: 11 }}
          axisLine={{ stroke: '#EBEBF5' }}
          tickFormatter={(v: number) => `${v}%`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          iconType="circle"
          iconSize={8}
          wrapperStyle={{ paddingTop: 16 }}
        />
        <Radar
          name="Current"
          dataKey="current"
          stroke="#4F46E5"
          strokeWidth={2}
          fill="url(#radarCurrent)"
          fillOpacity={1}
        />
        <Radar
          name="Benchmark"
          dataKey="benchmark"
          stroke="#C7D2FE"
          strokeWidth={2}
          strokeDasharray="5 3"
          fill="url(#radarPrevious)"
          fillOpacity={1}
        />
      </RadarChart>
    </ResponsiveContainer>
  </ChartCard>
)
