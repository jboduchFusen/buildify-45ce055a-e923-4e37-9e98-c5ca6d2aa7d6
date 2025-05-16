
import { Achievement } from '../types'

type PlayerAchievements = {
  [key: string]: Achievement[]
}

export const playerAchievements: PlayerAchievements = {
  "scottie-scheffler": [
    {
      year: 2024,
      title: "Masters Tournament Champion",
      description: "Won his second Masters Tournament with a dominant performance, finishing three strokes ahead of the field.",
      isMajor: true
    },
    {
      year: 2024,
      title: "The Players Championship Winner",
      description: "Captured The Players Championship for the first time in his career with a record-setting performance.",
      isMajor: false
    },
    {
      year: 2023,
      title: "PGA Tour Player of the Year",
      description: "Named PGA Tour Player of the Year after a season with multiple wins and consistent top finishes.",
      isMajor: false
    },
    {
      year: 2022,
      title: "Masters Tournament Champion",
      description: "Won his first major championship at Augusta National, donning the green jacket after a three-stroke victory.",
      isMajor: true
    },
    {
      year: 2022,
      title: "World #1 Ranking",
      description: "Reached world #1 ranking for the first time in his career after winning the WGC-Dell Technologies Match Play.",
      isMajor: false
    },
    {
      year: 2020,
      title: "PGA Tour Rookie of the Year",
      description: "Named PGA Tour Rookie of the Year after an impressive debut season on tour.",
      isMajor: false
    }
  ],
  "rory-mcilroy": [
    {
      year: 2024,
      title: "Wells Fargo Championship Winner",
      description: "Won the Wells Fargo Championship for a record fourth time, demonstrating his dominance at Quail Hollow.",
      isMajor: false
    },
    {
      year: 2023,
      title: "DP World Tour Championship Winner",
      description: "Captured the season-ending DP World Tour Championship and secured the Race to Dubai title.",
      isMajor: false
    },
    {
      year: 2022,
      title: "Tour Championship Winner",
      description: "Won the Tour Championship and his third FedEx Cup title, securing the largest prize in golf history.",
      isMajor: false
    },
    {
      year: 2019,
      title: "The Players Championship Winner",
      description: "Won The Players Championship for the first time in his career at TPC Sawgrass.",
      isMajor: false
    },
    {
      year: 2014,
      title: "PGA Championship Winner",
      description: "Won his second PGA Championship and fourth major title overall at Valhalla Golf Club.",
      isMajor: true
    },
    {
      year: 2014,
      title: "The Open Championship Winner",
      description: "Captured the Claret Jug at Royal Liverpool for his third major championship victory.",
      isMajor: true
    },
    {
      year: 2012,
      title: "PGA Championship Winner",
      description: "Won the PGA Championship at Kiawah Island by a record eight strokes.",
      isMajor: true
    },
    {
      year: 2011,
      title: "U.S. Open Champion",
      description: "Won his first major championship at Congressional Country Club with a record score of 16-under par.",
      isMajor: true
    }
  ],
  "xander-schauffele": [
    {
      year: 2024,
      title: "PGA Championship Winner",
      description: "Won his first major championship at the PGA Championship after several close calls in previous majors.",
      isMajor: true
    },
    {
      year: 2024,
      title: "Genesis Invitational Winner",
      description: "Captured the Genesis Invitational at Riviera Country Club against a strong field.",
      isMajor: false
    },
    {
      year: 2023,
      title: "Scottish Open Champion",
      description: "Won the Scottish Open for the second time in his career, demonstrating his links golf prowess.",
      isMajor: false
    },
    {
      year: 2022,
      title: "Travelers Championship Winner",
      description: "Won the Travelers Championship with a clutch performance in the final round.",
      isMajor: false
    },
    {
      year: 2021,
      title: "Olympic Gold Medalist",
      description: "Won the gold medal in men's golf at the Tokyo Olympics, representing the United States.",
      isMajor: false
    },
    {
      year: 2019,
      title: "Sentry Tournament of Champions Winner",
      description: "Started the year with a victory at the Sentry Tournament of Champions in Hawaii.",
      isMajor: false
    },
    {
      year: 2017,
      title: "Tour Championship Winner",
      description: "Won the Tour Championship in his rookie season on the PGA Tour.",
      isMajor: false
    },
    {
      year: 2017,
      title: "PGA Tour Rookie of the Year",
      description: "Named PGA Tour Rookie of the Year after an impressive debut season that included a Tour Championship victory.",
      isMajor: false
    }
  ]
}