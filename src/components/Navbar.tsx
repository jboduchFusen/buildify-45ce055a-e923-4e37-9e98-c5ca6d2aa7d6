
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M12 18v-6" />
            <path d="M8 10V4" />
            <path d="M16 10V4" />
            <path d="M9 9h6" />
            <path d="M15 5v8h.01" />
            <path d="M9 5v8" />
            <path d="M6 8h12" />
            <path d="M2 22l10-10" />
            <path d="M17 22l-5-5" />
          </svg>
          <span className="font-bold">Golf Elite</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link to="/player/1" className="text-sm font-medium hover:text-primary">
            Scottie Scheffler
          </Link>
          <Link to="/player/2" className="text-sm font-medium hover:text-primary">
            Rory McIlroy
          </Link>
          <Link to="/player/3" className="text-sm font-medium hover:text-primary">
            Xander Schauffele
          </Link>
        </nav>
        <div className="md:hidden">
          <button className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;