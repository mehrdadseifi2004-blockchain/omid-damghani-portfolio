"use client";

import { useState } from "react";

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
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <div className="gallery">

        {images.map((image, index) => (
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
            onClick={() => setSelected(image)}
          >

            <img
              src={`/images/${folder}/${image}`}
              alt={title}
              loading="lazy"
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


      {selected && (
  <div
    className="lightbox"
    onClick={() => setSelected(null)}
  >

    <button
      className="lightbox-close"
      onClick={() => setSelected(null)}
    >
      ×
    </button>

    <img
      className="lightbox-image"
      src={`/images/${folder}/${selected}`}
      alt={title}
      onClick={(e) => e.stopPropagation()}
    />

  </div>
)}

    </>
  );
}
