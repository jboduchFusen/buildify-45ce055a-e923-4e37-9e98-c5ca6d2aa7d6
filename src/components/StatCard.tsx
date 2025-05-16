
interface StatCardProps {
  title: string
  value: string | number
  icon?: React.ReactNode
}

const StatCard = ({ title, value, icon }: StatCardProps) => {
  return (
    <div className="stat-card bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        {icon && <div className="text-primary">{icon}</div>}
      </div>
    </div>
  )
}

export default StatCard