
import { Trophy } from 'lucide-react'
import PlayerCard from '../components/PlayerCard'
import { topPlayers } from '../data/players'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Golf Legends</h1>
          <p className="text-xl md:text-2xl mb-8">Celebrating the world's top golf players</p>
          <div className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            <Trophy className="mr-2 h-5 w-5" />
            <span>Explore Top Players</span>
          </div>
        </div>
      </section>

      {/* Top Players Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Top 3 Players in the World</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Meet the elite golfers who are dominating the sport today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topPlayers.map(player => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Golf Legends</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Golf Legends is dedicated to celebrating the extraordinary talent and achievements of the world's top golf players. 
                Our platform provides comprehensive profiles, statistics, and career highlights of elite golfers who have made 
                significant impacts on the sport.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Stay updated with the latest tournament schedules, player rankings, and golf news. Whether you're a casual fan 
                or a dedicated golf enthusiast, Golf Legends offers valuable insights into the careers of the sport's greatest players.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/golf-about.jpg" 
                alt="Golf course" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home