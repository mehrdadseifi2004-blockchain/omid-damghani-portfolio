import { ArrowRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "JANGAL ABR",
    category: "Nature",
    year: "2025",
    image: "/images/Jangal Abr/_MG_5664.jpg",
    slug: "jangal-abr",
    className: "work-large",
  },
  {
    number: "02",
    title: "KORDESTAN",
    category: "Travel",
    year: "2025",
    image: "/images/Kordestan/Cover.jpg",
    slug: "kordestan",
    className: "work-tall",
  },
  {
    number: "03",
    title: "ASHOORA SHAHROUD",
    category: "Documentary",
    year: "2025",
    image: "/images/Ashoora Shahroud/_MG_5923.jpg",
    slug: "ashoora-shahroud",
    className: "work-wide",
  },
  {
    number: "04",
    title: "BASTAM",
    category: "Landscape",
    year: "2025",
    image: "/images/Bastam/_MG_4308.jpg",
    slug: "bastam",
    className: "work-small",
  },
  {
    number: "05",
    title: "MANKAN KORDESTAN",
    category: "Nature",
    year: "2025",
    image: "/images/Mankan Kordestan/Cover2.jpg",
    slug: "mankan-kordestan",
    className: "work-small",
  },
  {
    number: "06",
    title: "IRAN",
    category: "Documentary",
    year: "2025",
    image: "/images/Iran/_MG_5209.jpg",
    slug: "iran",
    className: "work-small",
  },
  {
    number: "07",
    title: "TAK AKS",
    category: "Photography",
    year: "2025",
    image: "/images/Tak Aks/20241121_003109.jpg",
    slug: "tak-aks",
    className: "work-small",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <section className="selected">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ALL PROJECTS</span>

            <h2>
              VISUAL STORIES
              <br />
              BEYOND WORDS
            </h2>
          </div>
        </div>

        <div className="works-grid">
          <div className="work-index">
            {projects.map((project) => (
              <a href={`#${project.number}`} key={project.number}>
                {project.number}
              </a>
            ))}
          </div>

          <div className="gallery">
            {projects.map((project) => (
              <article
                className={`work ${project.className}`}
                id={project.number}
                key={project.number}
              >
                <a href={`/projects/${project.slug}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />

                  <div className="work-overlay">
                    <div>
                      <span>
                        {project.number} / {project.category}
                      </span>

                      <h3>{project.title}</h3>
                    </div>

                    <span>{project.year}</span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}