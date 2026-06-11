interface KpiCardProps {
  label: string
  value: number
  prefix?: string
  suffix?: string
  change: number
  isUp: boolean
  period: string
  icon: string
  iconType: 'indigo' | 'green' | 'amber' | 'purple'
}

export const KpiCard = ({ label, value, prefix, suffix, change, isUp, period, icon, iconType }: KpiCardProps) => {
  const formattedValue = value >= 1000
    ? `${prefix ?? ''}${(value / 1000).toFixed(1)}k${suffix ?? ''}`
    : `${prefix ?? ''}${value.toFixed(value % 1 === 0 ? 0 : 2)}${suffix ?? ''}`

  return (
    <div className="kpi-card">
      <div className="kpi-card__header">
        <span className="kpi-card__label">{label}</span>
        <div className={`kpi-card__icon kpi-card__icon--${iconType}`}>
          {icon}
        </div>
      </div>
      <div className="kpi-card__value">{formattedValue}</div>
      <div>
        <span className={`kpi-card__trend kpi-card__trend--${isUp ? 'up' : 'down'}`}>
          {isUp ? '↑' : '↓'} {Math.abs(change)}%
        </span>
        <span className="kpi-card__period">{period}</span>
      </div>
    </div>
  )
}
