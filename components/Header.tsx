export default function Header() {
  return (
    <header className="nav">
      <a
        href="/"
        className="brand-mark"
        aria-label="Omid Damghani home"
      >
        <span>O</span>
        <span>D</span>
      </a>

      <div className="brand-name">
        OMID DAMGHANI
      </div>

      <nav className="nav-links">
        <a href="/#work" className="active">
          WORK
        </a>

        <a href="/projects">
          PROJECTS
        </a>

        <a href="/#about">
          ABOUT
        </a>

        <a href="/#contact">
          CONTACT
        </a>
      </nav>

      <div className="language">
        <span className="selected">FA</span>
        <span>/</span>
        <span>EN</span>
      </div>
    </header>
  );
}
