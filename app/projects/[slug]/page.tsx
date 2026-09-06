import { notFound } from "next/navigation";

import LightboxGallery from "../../../components/LightboxGallery";

const projects = {
  "jangal-abr": {
    title: "JANGAL ABR",
    folder: "Jangal Abr",
    images: [
      "_MG_5664.webp",
      "_MG_5667.webp",
      "_MG_5671.webp",
      "_MG_5678.webp",
      "_MG_5686.webp",
      "_MG_5717.webp",
      "_MG_5720.webp",
      "_MG_5721.webp",
      "_MG_5794.webp",
    ],
  },

  "kordestan": {
    title: "KORDESTAN",
    folder: "Kordestan",
    images: [
      "Cover.webp",
      "_MG_8421 (2).webp",
      "_MG_8609.webp",
      "_MG_8615.webp",
      "_MG_8624.webp",
      "_MG_8701.webp",
    ],
  },

  "ashoora-shahroud": {
    title: "ASHOORA SHAHROUD",
    folder: "Ashoora Shahroud",
    images: [
      "_MG_5923.webp",
      "_MG_5940 (1).webp",
      "_MG_5948.webp",
      "_MG_5984.webp",
      "_MG_5986 (1).webp",
      "_MG_5988.webp",
      "_MG_6158.webp",
      "_MG_6174.webp",
    ],
  },

  "bastam": {
    title: "BASTAM",
    folder: "Bastam",
    images: [
      "_MG_4308.webp",
      "_MG_4337.webp",
    ],
  },

  "iran": {
    title: "IRAN",
    folder: "Iran",
    images: [
      "_MG_5209.webp",
      "_MG_5326.webp",
      "_MG_5357.webp",
      "_MG_5391(1).webp",
      "_MG_6597.webp",
    ],
  },

  "mankan-kordestan": {
    title: "MANKAN KORDESTAN",
    folder: "Mankan Kordestan",
    images: [
      "Cover2.webp",
      "_MG_3131 (1).webp",
      "_MG_3141 (1).webp",
      "_MG_3266.webp",
      "_MG_3277 (1).webp",
      "_MG_7747 (2).webp",
      "_MG_7751.webp",
    ],
  },

  "tak-aks": {
    title: "TAK AKS",
    folder: "Tak Aks",
    images: [
      "20241121_003109.webp",
    ],
  },
};

export default async function ProjectGallery({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main className="selected">
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            PROJECT GALLERY
          </span>

          <h2>
            {project.title}
          </h2>
        </div>
      </div>

      <LightboxGallery
        images={project.images}
        folder={project.folder}
        title={project.title}
      />
    </main>
  );
}
