
import { useState } from 'react'
import { Calendar } from 'lucide-react'
import TournamentList from '../components/TournamentList'
import { tournaments } from '../data/tournaments'

const Schedule = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all')
  
  const filteredTournaments = tournaments.filter(tournament => {
    if (filter === 'all') return true
    if (filter === 'upcoming') return tournament.status === 'Upcoming'
    if (filter === 'completed') return tournament.status === 'Completed'
    return true
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Tournament Schedule</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Stay updated with the latest golf tournaments around the world
        </p>
      </div>
      
      {/* Filter controls */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <Calendar className="h-5 w-5 text-primary mr-2" />
          <h2 className="text-xl font-semibold">2025 Season</h2>
        </div>
        
        <div className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              filter === 'all' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium ${
              filter === 'upcoming' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
            onClick={() => setFilter('upcoming')}
          >
            Upcoming
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              filter === 'completed' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
      </div>
      
      {/* Tournament list */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        {filteredTournaments.length > 0 ? (
          <TournamentList tournaments={filteredTournaments} />
        ) : (
          <div className="p-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">No tournaments found matching your filter.</p>
          </div>
        )}
      </div>
      
      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4">
        <div className="flex items-center">
          <span className="w-3 h-3 inline-block rounded-full bg-blue-100 dark:bg-blue-900 mr-2"></span>
          <span className="text-sm text-gray-600 dark:text-gray-400">Upcoming</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 inline-block rounded-full bg-green-100 dark:bg-green-900 mr-2"></span>
          <span className="text-sm text-gray-600 dark:text-gray-400">Ongoing</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 inline-block rounded-full bg-gray-100 dark:bg-gray-700 mr-2"></span>
          <span className="text-sm text-gray-600 dark:text-gray-400">Completed</span>
        </div>
      </div>
    </div>
  )
}

export default Schedule