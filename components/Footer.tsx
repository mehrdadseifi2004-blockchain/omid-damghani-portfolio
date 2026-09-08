import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <span>
        © 2026 OMID DAMGHANI
      </span>

      <div className="footer-credit">
  <span>Design &amp; Development by:</span>

  <a
    href="https://mehrdadseif.ir"
    target="_blank"
    rel="noopener noreferrer"
  >
    MehrdadSeif.ir
  </a>
</div>

      <div className="socials">
        <a href="#" aria-label="Instagram">
          <Instagram size={17} strokeWidth={1.4} />
          INSTAGRAM
        </a>

        <a href="#">
          BEHANCE
        </a>

        <a href="#">
          500PX
        </a>
      </div>

      <span>
        IRAN
      </span>
    </footer>
  );
}
