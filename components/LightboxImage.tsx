"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  src: string;
  alt: string;
};

export default function LightboxImage({ src, alt }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={() => setOpen(true)}
        style={{ cursor: "zoom-in" }}
      />

      {mounted &&
        open &&
        createPortal(
          <div
            className="lightbox"
            onClick={() => setOpen(false)}
          >
            <button
              className="lightbox-close"
              onClick={() => setOpen(false)}
              aria-label="Close image"
            >
              ×
            </button>

            <img
              className="lightbox-image"
              src={src}
              alt={alt}
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </>
  );
}