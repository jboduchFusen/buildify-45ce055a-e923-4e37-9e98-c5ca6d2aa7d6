
export interface Player {
  id: string
  name: string
  country: string
  worldRanking: number
  image: string
  majorWins: number
  careerWins: number
  proSince: number
  avgDrive: number
  bio: string
  stats: {
    wins2024: number
    top10: number
    cutsMade: number
    scoringAvg: number
    greensInReg: number
    puttsPerRound: number
    drivingDistance: number
    drivingAccuracy: number
    sandSaves: number
  }
}

export interface Tournament {
  id: string
  name: string
  date: string
  location: string
  prizeMoney: string
  status: 'Upcoming' | 'Ongoing' | 'Completed'
}

export interface Achievement {
  year: number
  title: string
  description: string
  isMajor: boolean
}