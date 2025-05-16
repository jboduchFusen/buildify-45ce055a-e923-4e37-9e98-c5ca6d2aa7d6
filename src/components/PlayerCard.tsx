
import { Link } from 'react-router-dom'
import { Player } from '../types'

interface PlayerCardProps {
  player: Player
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <Link 
      to={`/player/${player.id}`} 
      className="player-card block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <img 
          src={player.image} 
          alt={player.name} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{player.name}</h3>
          <p className="text-sm text-gray-200">World Rank: #{player.worldRanking}</p>
        </div>
      </div>
      <div className="p-4 bg-white dark:bg-gray-800">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Country</span>
          <span className="font-medium">{player.country}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Major Wins</span>
          <span className="font-medium">{player.majorWins}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">Pro Since</span>
          <span className="font-medium">{player.proSince}</span>
        </div>
      </div>
    </Link>
  )
}

export default PlayerCard