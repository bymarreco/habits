import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/" className="hover:text-accent-400 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/games"
            className="hover:text-accent-400 transition-colors"
          >
            Games
          </Link>
        </li>
        <li>
          <Link
            href="/books"
            className="hover:text-accent-400 transition-colors"
          >
            Books
          </Link>
        </li>
        <li>
          <Link
            href="/series"
            className="hover:text-accent-400 transition-colors"
          >
            Series
          </Link>
        </li>
        <li>
          <Link
            href="/movies"
            className="hover:text-accent-400 transition-colors"
          >
            Movies
          </Link>
        </li>
        <li>
          <Link
            href="/musicalbuns"
            className="hover:text-accent-400 transition-colors"
          >
            Music Albuns
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/userhabits"
            className="hover:text-accent-400 transition-colors"
          >
            User Habits
          </Link>
        </li>
      </ul>
    </nav>
  );
}
