
import { Trophy, Calendar, Award, GolfBall } from 'lucide-react'
import { Link } from 'react-router-dom'
import { topPlayers } from '../data/players'

const Home = () => {
  return (
    <div className="augusta-pattern">
      {/* Hero Section */}
      <section className="hero-section text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <GolfBall className="h-10 w-10 mr-2" />
            <h1 className="text-4xl md:text-6xl font-bold">Masters Golf</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Celebrating the world's top golf players and their extraordinary achievements
          </p>
          <Link
            to={`/player/${topPlayers[0].id}`}
            className="inline-flex items-center justify-center masters-badge py-3 px-6 rounded-lg transition-colors"
          >
            <Trophy className="mr-2 h-5 w-5" />
            <span>Explore Top Players</span>
          </Link>
        </div>
      </section>

      {/* Top Players Section */}
      <section className="py-16 bg-[#f5f8f5] dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Top 3 Players in the World</h2>
            <div className="augusta-divider w-20 mx-auto my-4"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Meet the elite golfers who are dominating the sport with their exceptional skill and dedication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topPlayers.map(player => (
              <Link
                key={player.id}
                to={`/player/${player.id}`}
                className="player-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-[#006400]/20 dark:border-[#006400]/40"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                    #{player.worldRanking}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{player.name}</h3>
                  <p className="text-muted-foreground mb-4">{player.country}</p>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center p-2 bg-[#f5f8f5] dark:bg-gray-700 rounded-md">
                      <p className="font-medium text-gray-500 dark:text-gray-400">Majors</p>
                      <p className="text-lg font-bold text-primary">{player.majorWins}</p>
                    </div>
                    <div className="text-center p-2 bg-[#f5f8f5] dark:bg-gray-700 rounded-md">
                      <p className="font-medium text-gray-500 dark:text-gray-400">Wins</p>
                      <p className="text-lg font-bold text-primary">{player.careerWins}</p>
                    </div>
                    <div className="text-center p-2 bg-[#f5f8f5] dark:bg-gray-700 rounded-md">
                      <p className="font-medium text-gray-500 dark:text-gray-400">Drive</p>
                      <p className="text-lg font-bold text-primary">{player.avgDrive}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Golf News</h2>
            <div className="augusta-divider w-20 mx-auto my-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-[#006400]/20 dark:border-[#006400]/40">
              <img
                src="/images/news-1.jpg"
                alt="Scheffler wins Masters"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-primary mr-2" />
                  <p className="text-sm text-muted-foreground">May 14, 2025</p>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Scheffler Dominates at The Masters for Second Green Jacket
                </h3>
                <p className="text-muted-foreground mb-4">
                  Scottie Scheffler continues his impressive form with another major victory at Augusta National.
                </p>
                <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">
                  Read More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-[#006400]/20 dark:border-[#006400]/40">
              <img
                src="/images/news-2.jpg"
                alt="McIlroy putting"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-primary mr-2" />
                  <p className="text-sm text-muted-foreground">May 10, 2025</p>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  McIlroy's New Putting Strategy Pays Off at Wells Fargo
                </h3>
                <p className="text-muted-foreground mb-4">
                  After months of work with his coach, Rory McIlroy's revamped putting technique leads to victory.
                </p>
                <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">
                  Read More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-[#006400]/20 dark:border-[#006400]/40">
              <img
                src="/images/news-3.jpg"
                alt="Schauffele preparing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-primary mr-2" />
                  <p className="text-sm text-muted-foreground">May 5, 2025</p>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Schauffele Sets Sights on PGA Championship After Strong Showing
                </h3>
                <p className="text-muted-foreground mb-4">
                  Xander Schauffele feels confident heading into the year's second major after recent performances.
                </p>
                <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">
                  Read More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-16 bg-[#f5f8f5] dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Upcoming Tournaments</h2>
            <div className="augusta-divider w-20 mx-auto my-4"></div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-[#006400]/20 dark:border-[#006400]/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="font-bold text-xl">PGA Championship</h3>
                <div className="flex items-center mt-1">
                  <Calendar className="h-4 w-4 text-primary mr-2" />
                  <p className="text-muted-foreground">May 20-23, 2025</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">Valhalla Golf Club</p>
                <p className="text-muted-foreground">Louisville, Kentucky</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-[#006400]/20 dark:border-[#006400]/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="font-bold text-xl">Memorial Tournament</h3>
                <div className="flex items-center mt-1">
                  <Calendar className="h-4 w-4 text-primary mr-2" />
                  <p className="text-muted-foreground">June 3-6, 2025</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">Muirfield Village Golf Club</p>
                <p className="text-muted-foreground">Dublin, Ohio</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-[#006400]/20 dark:border-[#006400]/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="font-bold text-xl">U.S. Open</h3>
                <div className="flex items-center mt-1">
                  <Calendar className="h-4 w-4 text-primary mr-2" />
                  <p className="text-muted-foreground">June 17-20, 2025</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">Oakmont Country Club</p>
                <p className="text-muted-foreground">Oakmont, Pennsylvania</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                to="/schedule" 
                className="inline-flex items-center justify-center bg-white dark:bg-gray-800 hover:bg-[#f5f8f5] dark:hover:bg-gray-700 text-primary font-medium py-2 px-4 border border-primary rounded-lg transition-colors"
              >
                View Full Schedule
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="masters-gradient-light dark:bg-gray-800 rounded-lg p-8 md:p-12 border border-[#006400]/20 dark:border-[#006400]/40 shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <div className="augusta-divider w-16 mx-auto mb-4"></div>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Subscribe to our newsletter for the latest golf news, player updates, and tournament coverage.
              </p>
            </div>
            
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button
                type="submit"
                className="h-12 masters-badge px-6 py-2 rounded-md font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home