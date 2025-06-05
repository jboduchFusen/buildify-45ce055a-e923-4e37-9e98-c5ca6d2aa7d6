
import { useParams, Link } from "react-router-dom";
import { topPlayers } from "../data/players";

const PlayerProfile = () => {
  const { id } = useParams<{ id: string }>();
  const player = topPlayers.find((p) => p.id === id);

  if (!player) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Player Not Found</h2>
        <p className="mb-8">The player you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Player Hero */}
      <section className="bg-secondary/30 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <img
                src={player.image}
                alt={player.name}
                className="rounded-lg shadow-md w-full max-w-md mx-auto"
              />
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold">{player.name}</h1>
                <div className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                  World #{player.worldRanking}
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted-foreground"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{player.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted-foreground"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  <span>Pro Since: {player.proSince}</span>
                </div>
              </div>
              <p className="text-lg mb-6">{player.bio}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-background p-4 rounded-lg shadow-sm border">
                  <p className="text-muted-foreground text-sm">Career Wins</p>
                  <p className="text-2xl font-bold">{player.careerWins}</p>
                </div>
                <div className="bg-background p-4 rounded-lg shadow-sm border">
                  <p className="text-muted-foreground text-sm">Major Wins</p>
                  <p className="text-2xl font-bold">{player.majorWins}</p>
                </div>
                <div className="bg-background p-4 rounded-lg shadow-sm border">
                  <p className="text-muted-foreground text-sm">Avg. Score</p>
                  <p className="text-2xl font-bold">{player.stats.scoringAvg}</p>
                </div>
                <div className="bg-background p-4 rounded-lg shadow-sm border">
                  <p className="text-muted-foreground text-sm">Driving Dist.</p>
                  <p className="text-2xl font-bold">{player.avgDrive} yds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Career Highlights</h2>
          <div className="space-y-6">
            {player.stats.wins2024 > 0 && (
              <div className="bg-background p-6 rounded-lg shadow-sm border">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold">2024 Season Wins</h3>
                    <p className="text-muted-foreground">Current Season</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                        <path d="M4 22h16" />
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                      </svg>
                      {player.stats.wins2024} Victories
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  {player.name} has secured {player.stats.wins2024} tournament wins in the 2024 season so far.
                </p>
              </div>
            )}
            
            {player.majorWins > 0 && (
              <div className="bg-background p-6 rounded-lg shadow-sm border">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold">Major Championship Success</h3>
                    <p className="text-muted-foreground">Career Achievements</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {player.majorWins} Major Titles
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Throughout {player.name}'s illustrious career, they have captured {player.majorWins} major championship titles.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Player Statistics</h2>
          <div className="stats-grid">
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium mb-2">Driving Accuracy</h3>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold">{player.stats.drivingAccuracy}%</span>
                <span className="text-sm text-muted-foreground mb-1">Fairways Hit</span>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium mb-2">Greens in Regulation</h3>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold">{player.stats.greensInReg}%</span>
                <span className="text-sm text-muted-foreground mb-1">GIR</span>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium mb-2">Putting Average</h3>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold">{player.stats.puttsPerRound}</span>
                <span className="text-sm text-muted-foreground mb-1">Putts per Round</span>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium mb-2">Sand Save Percentage</h3>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold">{player.stats.sandSaves}%</span>
                <span className="text-sm text-muted-foreground mb-1">Sand Saves</span>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium mb-2">Scoring Average</h3>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold">{player.stats.scoringAvg}</span>
                <span className="text-sm text-muted-foreground mb-1">Strokes per Round</span>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium mb-2">Top 10 Finishes</h3>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold">{player.stats.top10}</span>
                <span className="text-sm text-muted-foreground mb-1">This Season</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {player.id !== topPlayers[0].id ? (
              <Link
                to={`/player/${topPlayers.findIndex(p => p.id === player.id) - 1}`}
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Previous Player
              </Link>
            ) : (
              <div></div>
            )}
            <Link
              to="/"
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md font-medium"
            >
              Back to Home
            </Link>
            {player.id !== topPlayers[topPlayers.length - 1].id ? (
              <Link
                to={`/player/${topPlayers.findIndex(p => p.id === player.id) + 1}`}
                className="flex items-center gap-2 text-primary hover:underline"
              >
                Next Player
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerProfile;
