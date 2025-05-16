
import { Achievement } from '../types'

interface AchievementTimelineProps {
  achievements: Achievement[]
}

const AchievementTimeline = ({ achievements }: AchievementTimelineProps) => {
  // Sort achievements by year in descending order
  const sortedAchievements = [...achievements].sort((a, b) => b.year - a.year)

  return (
    <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
      {sortedAchievements.map((achievement, index) => (
        <div key={index} className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-white dark:ring-gray-900">
            <span className="sr-only">Achievement year</span>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {achievement.title}
            {achievement.isMajor && (
              <span className="bg-primary text-primary-foreground text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                Major
              </span>
            )}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {achievement.year}
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {achievement.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default AchievementTimeline