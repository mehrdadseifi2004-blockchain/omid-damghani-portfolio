import LightboxImage from "./LightboxImage";

type Props = {
  images: string[];
  folder: string;
  title: string;
};

export default function LightboxGallery({
  images,
  folder,
  title,
}: Props) {
  const galleryImages = images.map(
    (image) => `/images/${folder}/${image}`
  );

  return (
    <div className="gallery">
      {galleryImages.map((image, index) => (
        <article
          className={`work ${
            index === 0
              ? "work-large"
              : index === 1
              ? "work-tall"
              : index === 2
              ? "work-wide"
              : "work-small"
          }`}
          key={image}
        >
          <LightboxImage
            src={image}
            alt={`${title} - ${index + 1}`}
            gallery={galleryImages}
          />

          <div className="work-overlay">
            <div>
              <span>
                {String(index + 1).padStart(2, "0")} / {title}
              </span>

              <h3>{title}</h3>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}