import type { ReactNode } from 'react'

interface ChartCardProps {
  title: string
  subtitle?: string
  badge?: string
  children: ReactNode
  fullWidth?: boolean
}

export const ChartCard = ({ title, subtitle, badge, children, fullWidth }: ChartCardProps) => (
  <div className={`chart-card ${fullWidth ? 'chart-card--full' : ''}`}>
    <div className="chart-card__header">
      <div>
        <div className="chart-card__title">{title}</div>
        {subtitle && <div className="chart-card__subtitle">{subtitle}</div>}
      </div>
      {badge && <span className="chart-card__badge">{badge}</span>}
    </div>
    <div className="chart-card__body">
      {children}
    </div>
  </div>
)
