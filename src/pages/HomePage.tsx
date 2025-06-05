
import { Link } from "react-router-dom";
import { topPlayers } from "../data/players";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section relative py-20 md:py-32">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Golf's Elite Players
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Follow the journeys, achievements, and statistics of the world's top golfers
          </p>
          <Link
            to="/player/1"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium"
          >
            Explore Top Players
          </Link>
        </div>
      </section>

      {/* Featured Players */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            World's Top 3 Golfers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topPlayers.map((player) => (
              <Link
                to={`/player/${player.id}`}
                key={player.id}
                className="player-card bg-background rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white text-sm font-bold px-2 py-1 rounded">
                    #{player.worldRanking}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{player.name}</h3>
                  <p className="text-muted-foreground mb-4">{player.country}</p>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium">Career Wins</p>
                      <p className="text-lg font-bold">{player.careerWins}</p>
                    </div>
                    <div>
                      <p className="font-medium">Major Wins</p>
                      <p className="text-lg font-bold">{player.majorWins}</p>
                    </div>
                    <div>
                      <p className="font-medium">Avg. Drive</p>
                      <p className="text-lg font-bold">{player.avgDrive}</p>
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
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Golf News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg shadow-sm overflow-hidden border">
              <img
                src="/images/news-1.jpg"
                alt="Golf news"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">May 14, 2025</p>
                <h3 className="text-xl font-bold mb-2">
                  Scheffler Dominates at The Masters for Second Green Jacket
                </h3>
                <p className="text-muted-foreground mb-4">
                  Scottie Scheffler continues his impressive form with another major victory at Augusta National.
                </p>
                <a href="#" className="text-primary font-medium hover:underline">
                  Read More →
                </a>
              </div>
            </div>
            <div className="bg-background rounded-lg shadow-sm overflow-hidden border">
              <img
                src="/images/news-2.jpg"
                alt="Golf news"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">May 10, 2025</p>
                <h3 className="text-xl font-bold mb-2">
                  McIlroy's New Putting Strategy Pays Off at Wells Fargo
                </h3>
                <p className="text-muted-foreground mb-4">
                  After months of work with his coach, Rory McIlroy's revamped putting technique leads to victory.
                </p>
                <a href="#" className="text-primary font-medium hover:underline">
                  Read More →
                </a>
              </div>
            </div>
            <div className="bg-background rounded-lg shadow-sm overflow-hidden border">
              <img
                src="/images/news-3.jpg"
                alt="Golf news"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">May 5, 2025</p>
                <h3 className="text-xl font-bold mb-2">
                  Schauffele Sets Sights on PGA Championship After Strong Showing
                </h3>
                <p className="text-muted-foreground mb-4">
                  Xander Schauffele feels confident heading into the year's second major after recent performances.
                </p>
                <a href="#" className="text-primary font-medium hover:underline">
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Tournaments</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-background rounded-lg p-6 shadow-sm border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="font-bold text-xl">PGA Championship</h3>
                <p className="text-muted-foreground">May 20-23, 2025</p>
              </div>
              <div className="text-right">
                <p className="font-medium">Valhalla Golf Club</p>
                <p className="text-muted-foreground">Louisville, Kentucky</p>
              </div>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="font-bold text-xl">Memorial Tournament</h3>
                <p className="text-muted-foreground">June 3-6, 2025</p>
              </div>
              <div className="text-right">
                <p className="font-medium">Muirfield Village Golf Club</p>
                <p className="text-muted-foreground">Dublin, Ohio</p>
              </div>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="font-bold text-xl">U.S. Open</h3>
                <p className="text-muted-foreground">June 17-20, 2025</p>
              </div>
              <div className="text-right">
                <p className="font-medium">Oakmont Country Club</p>
                <p className="text-muted-foreground">Oakmont, Pennsylvania</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="bg-primary/10 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4 text-center">Stay Updated</h2>
            <p className="text-center mb-8 text-muted-foreground">
              Subscribe to our newsletter for the latest golf news, player updates, and tournament coverage.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
