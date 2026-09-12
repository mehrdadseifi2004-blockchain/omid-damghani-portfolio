import { ArrowDown, ArrowRight, Instagram, Mail } from "lucide-react";
import LightboxGallery from "../components/LightboxGallery";
import LightboxImage from "../components/LightboxImage";

const albums = {
  jangalAbr: [
    "/images/Jangal Abr/_MG_5664.webp",
    "/images/Jangal Abr/_MG_5667.webp",
    "/images/Jangal Abr/_MG_5671.webp",
    "/images/Jangal Abr/_MG_5678.webp",
    "/images/Jangal Abr/_MG_5686.webp",
    "/images/Jangal Abr/_MG_5717.webp",
    "/images/Jangal Abr/_MG_5720.webp",
    "/images/Jangal Abr/_MG_5721.webp",
    "/images/Jangal Abr/_MG_5794.webp",
  ],

  kordestan: [
    "/images/Kordestan/20231013_161650.webp",
    "/images/Kordestan/20241026_144534.webp",
    "/images/Kordestan/20241031_164313(0) (1).webp",
    "/images/Kordestan/20250402_151619(0) (2).webp",
    "/images/Kordestan/20250502_131101.webp",
    "/images/Kordestan/Cover.webp",
    "/images/Kordestan/IMG_8684.webp",
    "/images/Kordestan/_MG_3142 (1).webp",
    "/images/Kordestan/_MG_5021.webp",
    "/images/Kordestan/_MG_5022 (1).webp",
    "/images/Kordestan/_MG_5024.webp",
    "/images/Kordestan/_MG_5046 (2).webp",
    "/images/Kordestan/_MG_5046 (3).webp",
    "/images/Kordestan/_MG_5134 (1).webp",
    "/images/Kordestan/_MG_6247.webp",
    "/images/Kordestan/_MG_8421 (2).webp",
    "/images/Kordestan/_MG_8609.webp",
    "/images/Kordestan/_MG_8615.webp",
    "/images/Kordestan/_MG_8624.webp",
    "/images/Kordestan/_MG_8701.webp",
    "/images/Kordestan/_MG_8850.webp",
    "/images/Kordestan/_MG_8920.webp",
    "/images/Kordestan/_MG_9087 (1).webp",
  ],

  ashoora: [
    "/images/Ashoora Shahroud/_MG_5923.webp",
    "/images/Ashoora Shahroud/_MG_5940 (1).webp",
    "/images/Ashoora Shahroud/_MG_5948.webp",
    "/images/Ashoora Shahroud/_MG_5984.webp",
    "/images/Ashoora Shahroud/_MG_5986 (1).webp",
    "/images/Ashoora Shahroud/_MG_5988.webp",
    "/images/Ashoora Shahroud/_MG_6158.webp",
    "/images/Ashoora Shahroud/_MG_6174.webp",
  ],

  bastam: ["/images/Bastam/_MG_4308.webp", "/images/Bastam/_MG_4337.webp"],

  mankanKordestan: [
    "/images/Mankan Kordestan/Cover2.webp",
    "/images/Mankan Kordestan/_MG_3131 (1).webp",
    "/images/Mankan Kordestan/_MG_3141 (1).webp",
    "/images/Mankan Kordestan/_MG_3266.webp",
    "/images/Mankan Kordestan/_MG_3277 (1).webp",
    "/images/Mankan Kordestan/_MG_7747 (2).webp",
    "/images/Mankan Kordestan/_MG_7751.webp",
  ],
};

const works = [
  {
    number: "01",
    title: "Jangal Abr",
    category: "Nature",
    year: "2025",
    image: "/images/Jangal Abr/_MG_5664.webp",
    gallery: albums.jangalAbr,
    className: "work-large",
  },
  {
    number: "02",
    title: "Kordestan",
    category: "Travel",
    year: "2025",
    image: "/images/Kordestan/_MG_8421 (2).webp",
    gallery: albums.kordestan,
    className: "work-tall",
  },
  {
    number: "03",
    title: "Ashoora Shahroud",
    category: "Documentary",
    year: "2025",
    image: "/images/Ashoora Shahroud/_MG_5923.webp",
    gallery: albums.ashoora,
    className: "work-wide",
  },
  {
    number: "04",
    title: "Bastam",
    category: "Landscape",
    year: "2025",
    image: "/images/Bastam/_MG_4308.webp",
    gallery: albums.bastam,
    className: "work-small",
  },
  {
    number: "05",
    title: "Mankan Kordestan",
    category: "Nature",
    year: "2025",
    image: "/images/Mankan Kordestan/_MG_3131 (1).webp",
    gallery: albums.mankanKordestan,
    className: "work-small",
  },
];
export default function Home() {
  return (
    <main>
      {/* <header className="nav">
        <a href="#" className="brand-mark" aria-label="Omid Damghani home">
          <span>O</span>
          <span>D</span>
        </a>

        <div className="brand-name">OMID DAMGHANI</div>

        <nav className="nav-links">
          <a href="#work" className="active">WORK</a>
          <a href="#projects">PROJECTS</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <div className="language">
          <span className="selected">FA</span>
          <span>/</span>
          <span>EN</span>
        </div>
      </header> */}

      <section className="hero">
        <div className="hero-copy">
          <div className="corner-mark" />
          <h1>
            OMID
            <br />
            DAMGHANI
          </h1>

          <p className="role">
            PHOTOGRAPHER
            <br />
            &amp; VISUAL
            <br />
            STORYTELLER
          </p>

          <div className="hero-line" />

          <p className="intro">
            Capturing moments,
            <br />
            telling stories, creating
            <br />
            visual memories.
          </p>

          <a href="#work" className="explore">
            EXPLORE MY WORK <ArrowRight size={20} strokeWidth={1.5} />
          </a>
        </div>

        <div className="hero-media">
          <div className="hero-glow" />
          <LightboxImage
            src="/images/Kordestan/Cover.webp"
            alt="Omid Damghani photography"
            gallery={albums.kordestan}
          />
          <div className="image-grain" />
        </div>

        <a className="scroll" href="#work">
          <span>SCROLL</span>
          <ArrowDown size={18} strokeWidth={1.2} />
        </a>
      </section>

      <section className="selected" id="work">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SELECTED WORKS</span>
            <h2>
              VISUAL STORIES
              <br />
              BEYOND WORDS
            </h2>
          </div>
          <a href="/projects" className="view-all">
            VIEW ALL PROJECTS <ArrowRight size={20} strokeWidth={1.3} />
          </a>
        </div>

        <div className="works-grid">
          <div className="work-index">
            {works.map((work, i) => (
              <a
                href={`#${work.number}`}
                className={i === 0 ? "current" : ""}
                key={work.number}
              >
                {work.number}
              </a>
            ))}
          </div>

          <div className="gallery">
            {works.map((work) => (
              <article
                className={`work ${work.className}`}
                id={work.number}
                key={work.number}
              >
                <LightboxImage
                  src={work.image}
                  alt={work.title}
                  gallery={work.gallery}
                />

                <div className="work-overlay">
                  <div>
                    <span>
                      {work.number} / {work.category}
                    </span>

                    <h3>{work.title}</h3>
                  </div>

                  <span>{work.year}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto" id="about">
        <span className="eyebrow">ABOUT THE WORK</span>
        <p>
          Photography is not only about what is seen.
          <em> It is about what remains.</em>
        </p>
      </section>

      <section className="contact" id="contact">
        <div>
          <span className="eyebrow">LET&apos;S CREATE SOMETHING</span>
          <h2>
            HAVE A STORY
            <br />
            IN MIND?
          </h2>
        </div>
        <a href="mailto:hello@omiddamghani.ir" className="contact-link">
          GET IN TOUCH <Mail size={20} strokeWidth={1.4} />
        </a>
      </section>

      {/* <footer>
        <span>© 2026 OMID DAMGHANI</span>
        <div className="socials">
          <a href="#" aria-label="Instagram"><Instagram size={17} strokeWidth={1.4} /> INSTAGRAM</a>
          <a href="#">BEHANCE</a>
          <a href="#">500PX</a>
        </div>
        <span>IRAN</span>
      </footer> */}
    </main>
  );
}
