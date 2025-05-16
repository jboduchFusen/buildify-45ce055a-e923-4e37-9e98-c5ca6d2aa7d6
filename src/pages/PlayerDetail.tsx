
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Trophy, Calendar, Flag, Star, Award, Dumbbell } from 'lucide-react'
import StatCard from '../components/StatCard'
import AchievementTimeline from '../components/AchievementTimeline'
import { topPlayers } from '../data/players'
import { playerAchievements } from '../data/achievements'

const PlayerDetail = () => {
  const { id } = useParams<{ id: string }>()
  const player = topPlayers.find(p => p.id === id)
  
  if (!player) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Player not found</h2>
        <Link to="/" className="text-primary hover:underline">
          Return to home
        </Link>
      </div>
    )
  }
  
  const achievements = playerAchievements[id] || []

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back button */}
      <Link to="/" className="inline-flex items-center text-primary hover:underline mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to all players
      </Link>
      
      {/* Player header */}
      <div className="md:flex md:items-center mb-12">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img 
            src={player.image} 
            alt={player.name} 
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <div className="flex items-center mb-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{player.name}</h1>
            <span className="ml-4 px-3 py-1 text-sm font-medium bg-primary text-primary-foreground rounded-full">
              Rank #{player.worldRanking}
            </span>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{player.country}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <StatCard title="Major Wins" value={player.majorWins} icon={<Trophy className="h-5 w-5" />} />
            <StatCard title="Pro Since" value={player.proSince} icon={<Calendar className="h-5 w-5" />} />
            <StatCard title="Career Wins" value={player.careerWins} icon={<Award className="h-5 w-5" />} />
            <StatCard title="Avg. Drive" value={`${player.avgDrive} yards`} icon={<Dumbbell className="h-5 w-5" />} />
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>{player.bio}</p>
          </div>
        </div>
      </div>
      
      {/* Career highlights */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Career Highlights</h2>
        <AchievementTimeline achievements={achievements} />
      </div>
      
      {/* Player stats */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Player Statistics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Trophy className="h-5 w-5 text-primary mr-2" />
              Tournament Performance
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Wins (2024):</span>
                <span className="font-medium">{player.stats.wins2024}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Top 10 Finishes:</span>
                <span className="font-medium">{player.stats.top10}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Cuts Made:</span>
                <span className="font-medium">{player.stats.cutsMade}%</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Flag className="h-5 w-5 text-primary mr-2" />
              Scoring
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Scoring Average:</span>
                <span className="font-medium">{player.stats.scoringAvg}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Greens in Regulation:</span>
                <span className="font-medium">{player.stats.greensInReg}%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Putts per Round:</span>
                <span className="font-medium">{player.stats.puttsPerRound}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Star className="h-5 w-5 text-primary mr-2" />
              Driving
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Driving Distance:</span>
                <span className="font-medium">{player.stats.drivingDistance} yards</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Driving Accuracy:</span>
                <span className="font-medium">{player.stats.drivingAccuracy}%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Sand Save Percentage:</span>
                <span className="font-medium">{player.stats.sandSaves}%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerDetail