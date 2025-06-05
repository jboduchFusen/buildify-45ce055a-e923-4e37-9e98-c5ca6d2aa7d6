
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Trophy, Calendar, Flag, Star, Award, Dumbbell, GolfBall, ChevronLeft, ChevronRight } from 'lucide-react'
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
  
  // Find player index for navigation
  const currentIndex = topPlayers.findIndex(p => p.id === id)
  const prevPlayer = currentIndex > 0 ? topPlayers[currentIndex - 1] : null
  const nextPlayer = currentIndex < topPlayers.length - 1 ? topPlayers[currentIndex + 1] : null

  return (
    <div className="augusta-pattern">
      {/* Player Hero */}
      <section className="bg-[#f5f8f5] dark:bg-gray-900 py-12 border-b border-[#006400]/20 dark:border-[#006400]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to all players
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <img
                  src={player.image}
                  alt={player.name}
                  className="rounded-lg shadow-md w-full max-w-md mx-auto border-4 border-white dark:border-gray-800"
                />
                <div className="absolute top-4 right-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                  World #{player.worldRanking}
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold">{player.name}</h1>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-primary" />
                  <span>{player.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Pro Since: {player.proSince}</span>
                </div>
              </div>
              
              <p className="text-lg mb-6">{player.bio}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-[#006400]/20 dark:border-[#006400]/40">
                  <div className="flex justify-center mb-2">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">Career Wins</p>
                  <p className="text-2xl font-bold">{player.careerWins}</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-[#006400]/20 dark:border-[#006400]/40">
                  <div className="flex justify-center mb-2">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">Major Wins</p>
                  <p className="text-2xl font-bold">{player.majorWins}</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-[#006400]/20 dark:border-[#006400]/40">
                  <div className="flex justify-center mb-2">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">2024 Wins</p>
                  <p className="text-2xl font-bold">{player.stats.wins2024}</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-[#006400]/20 dark:border-[#006400]/40">
                  <div className="flex justify-center mb-2">
                    <Dumbbell className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">Driving Dist.</p>
                  <p className="text-2xl font-bold">{player.avgDrive} <span className="text-sm font-normal">yds</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Career Highlights</h2>
            <div className="augusta-divider w-20 mx-auto my-4"></div>
          </div>
          
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-[#006400]/20 dark:border-[#006400]/40 hover:border-primary transition-colors"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.year}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {achievement.isMajor && (
                      <div className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium flex items-center gap-1">
                        <Trophy className="h-4 w-4" />
                        Major Championship
                      </div>
                    )}
                  </div>
                </div>
                {achievement.description && (
                  <p className="mt-4 text-muted-foreground">{achievement.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Player Statistics */}
      <section className="py-12 bg-[#f5f8f5] dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Player Statistics</h2>
            <div className="augusta-divider w-20 mx-auto my-4"></div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-[#006400]/20 dark:border-[#006400]/40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <Trophy className="h-5 w-5 text-primary mr-2" />
                  Tournament Performance
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center p-2 bg-[#f5f8f5] dark:bg-gray-700 rounded-md">
                    <span className="text-gray-600 dark:text-gray-300">Wins (2024):</span>
                    <span className="font-medium text-primary">{player.stats.wins2024}</span>
                  </li>
                  <li className="flex justify-between items-center p-2 bg-[#f5f8f5] dark:bg-gray-700 rounded-md">
                    <span className="text-gray-600 dark:text-gray-300">Top 10 Finishes:</span>
                    <span className="font-medium text-primary">{player.stats.top10}</span>
                  </li>
                  <li className="flex justify-between items-center p-2 bg-[#f5f8f5] dark:bg-gray-700 rounded-md">
                    <span className="text-gray-600 dark:text-gray-300">Cuts Made:</span>
                    <span className="font-medium text-primary">{player.stats.cutsMade}%</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <Flag className="h-5 w-5 text-primary mr-2" />
                  Scoring
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center p-2 bg-[#f5f8f5] dark:bg-gray-700 rounded-md">
                    <span className="text-gray-600 dark:text-gray-300">Scoring Average:</span>
                    <span className="font-medium text-primary">{player.stats.scoringAvg}</span>
                  </li>
                  <li className="flex justify-between items-center p-2 bg-[#f5f8f5] dark:bg-gray-700 rounded-md">
                    <span className="text-gray-600 dark:text-gray-300">Greens in Regulation:</span>
                    <span className="font-medium text-primary">{player.stats.greensInReg}%</span>
                  </li>
                  <li className="flex justify-between items-center p-2 bg-[#f5f8f5] dark:bg-gray-700 rounded-md">
                    <span className="text-gray-600 dark:text-gray-300">Putts per Round:</span>
                    <span className="font-medium text-primary">{player.stats.puttsPerRound}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <GolfBall className="h-5 w-5 text-primary mr-2" />
                  Driving
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center p-2 bg-[#f5f8f5] dark:bg-gray-700 rounded-md">
                    <span className="text-gray-600 dark:text-gray-300">Driving Distance:</span>
                    <span className="font-medium text-primary">{player.stats.drivingDistance} yards</span>
                  </li>
                  <li className="flex justify-between items-center p-2 bg-[#f5f8f5] dark:bg-gray-700 rounded-md">
                    <span className="text-gray-600 dark:text-gray-300">Driving Accuracy:</span>
                    <span className="font-medium text-primary">{player.stats.drivingAccuracy}%</span>
                  </li>
                  <li className="flex justify-between items-center p-2 bg-[#f5f8f5] dark:bg-gray-700 rounded-md">
                    <span className="text-gray-600 dark:text-gray-300">Sand Save Percentage:</span>
                    <span className="font-medium text-primary">{player.stats.sandSaves}%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Player Navigation */}
      <section className="py-8 border-t border-[#006400]/20 dark:border-[#006400]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {prevPlayer ? (
              <Link
                to={`/player/${prevPlayer.id}`}
                className="flex items-center gap-2 text-primary hover:underline group"
              >
                <ChevronLeft className="h-5 w-5 group-hover:transform group-hover:-translate-x-1 transition-transform" />
                <div>
                  <span className="block text-sm text-gray-500">Previous Player</span>
                  <span className="font-medium">{prevPlayer.name}</span>
                </div>
              </Link>
            ) : (
              <div></div>
            )}
            
            <Link
              to="/"
              className="bg-white dark:bg-gray-800 hover:bg-[#f5f8f5] dark:hover:bg-gray-700 text-primary px-4 py-2 rounded-md font-medium border border-primary"
            >
              All Players
            </Link>
            
            {nextPlayer ? (
              <Link
                to={`/player/${nextPlayer.id}`}
                className="flex items-center gap-2 text-primary hover:underline group text-right"
              >
                <div>
                  <span className="block text-sm text-gray-500">Next Player</span>
                  <span className="font-medium">{nextPlayer.name}</span>
                </div>
                <ChevronRight className="h-5 w-5 group-hover:transform group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PlayerDetail
