"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  src: string;
  alt: string;
  gallery?: string[];
};

export default function LightboxImage({
  src,
  alt,
  gallery = [src],
}: Props) {
  const initialIndex = Math.max(0, gallery.indexOf(src));

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const total = gallery.length;
  const currentImage = gallery[currentIndex] ?? src;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }

      if (event.key === "ArrowLeft" && total > 1) {
        setCurrentIndex((index) =>
          index === 0 ? total - 1 : index - 1
        );
      }

      if (event.key === "ArrowRight" && total > 1) {
        setCurrentIndex((index) =>
          index === total - 1 ? 0 : index + 1
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, total]);

  const handleOpen = () => {
    const index = gallery.indexOf(src);
    setCurrentIndex(index >= 0 ? index : 0);
    setOpen(true);
  };

  const handlePrevious = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    setCurrentIndex((index) =>
      index === 0 ? total - 1 : index - 1
    );
  };

  const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    setCurrentIndex((index) =>
      index === total - 1 ? 0 : index + 1
    );
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={handleOpen}
        style={{ cursor: "zoom-in" }}
      />

      {mounted &&
        open &&
        createPortal(
          <div
            className="lightbox"
            onClick={() => setOpen(false)}
          >
            <div
              className="lightbox-content"
              onClick={(event) => event.stopPropagation()}
            >
              {total > 1 && (
                <button
                  className="gallery-btn gallery-prev"
                  onClick={handlePrevious}
                  aria-label="Previous image"
                >
                  <ArrowLeft size={20} strokeWidth={1.2} />
                  <span>PREV</span>
                </button>
              )}

              <img
                className="lightbox-image"
                src={currentImage}
                alt={`${alt} - ${currentIndex + 1}`}
              />

              {total > 1 && (
                <button
                  className="gallery-btn gallery-next"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  <span>NEXT</span>
                  <ArrowRight size={20} strokeWidth={1.2} />
                </button>
              )}
            </div>

            {total > 1 && (
              <div className="gallery-counter">
                <span>
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>

                <i>/</i>

                <span>
                  {String(total).padStart(2, "0")}
                </span>
              </div>
            )}

            <button
              className="lightbox-close"
              onClick={() => setOpen(false)}
              aria-label="Close image"
            >
              ×
            </button>
          </div>,
          document.body
        )}
    </>
  );
}