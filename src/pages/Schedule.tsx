
import { useState } from 'react'
import { Calendar, Filter, Trophy } from 'lucide-react'
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
    <div className="augusta-pattern max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">Tournament Schedule</h1>
        <div className="augusta-divider w-20 mx-auto my-4"></div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Stay updated with the latest golf tournaments around the world featuring the top players
        </p>
      </div>
      
      {/* Filter controls */}
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-[#006400]/20 dark:border-[#006400]/40">
        <div className="flex items-center mb-4 sm:mb-0">
          <Calendar className="h-5 w-5 text-primary mr-2" />
          <h2 className="text-xl font-semibold">2025 Season</h2>
        </div>
        
        <div className="flex items-center">
          <Filter className="h-5 w-5 text-primary mr-2" />
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                filter === 'all' 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white text-gray-700 hover:bg-[#f5f8f5] border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:border-gray-600'
              }`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium border-t border-b ${
                filter === 'upcoming' 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white text-gray-700 hover:bg-[#f5f8f5] border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:border-gray-600'
              }`}
              onClick={() => setFilter('upcoming')}
            >
              Upcoming
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                filter === 'completed' 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white text-gray-700 hover:bg-[#f5f8f5] border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:border-gray-600'
              }`}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>
        </div>
      </div>
      
      {/* Tournament list */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden border border-[#006400]/20 dark:border-[#006400]/40">
        {filteredTournaments.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-[#f5f8f5] dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Tournament
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Prize Pool
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {filteredTournaments.map((tournament) => (
                  <tr key={tournament.id} className="tournament-row hover:bg-[#f5f8f5] dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                      {tournament.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {tournament.name.includes("Masters") && (
                          <Trophy className="h-4 w-4 text-primary mr-2" />
                        )}
                        {tournament.name.includes("Major") && (
                          <Trophy className="h-4 w-4 text-primary mr-2" />
                        )}
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-200">
                          {tournament.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {tournament.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {tournament.prizeMoney}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${tournament.status === 'Upcoming' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 
                          tournament.status === 'Ongoing' ? 'bg-primary/20 text-primary dark:bg-primary/30 dark:text-primary-foreground' : 
                          'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                        {tournament.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">No tournaments found matching your filter.</p>
          </div>
        )}
      </div>
      
      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-6 justify-center">
        <div className="flex items-center">
          <span className="w-3 h-3 inline-block rounded-full bg-blue-100 dark:bg-blue-900 mr-2"></span>
          <span className="text-sm text-gray-600 dark:text-gray-400">Upcoming</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 inline-block rounded-full bg-primary/20 dark:bg-primary/30 mr-2"></span>
          <span className="text-sm text-gray-600 dark:text-gray-400">Ongoing</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 inline-block rounded-full bg-gray-100 dark:bg-gray-700 mr-2"></span>
          <span className="text-sm text-gray-600 dark:text-gray-400">Completed</span>
        </div>
        <div className="flex items-center">
          <Trophy className="h-4 w-4 text-primary mr-2" />
          <span className="text-sm text-gray-600 dark:text-gray-400">Major Championship</span>
        </div>
      </div>
    </div>
  )
}

export default Schedule