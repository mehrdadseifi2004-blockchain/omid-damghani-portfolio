import { notFound } from "next/navigation";
import LightboxGallery from "../../../components/LightboxGallery";

const projects = {
  "jangal-abr": {
    title: "JANGAL ABR",
    folder: "Jangal Abr",
    images: [
      "_MG_5664.jpg",
      "_MG_5667.jpg",
      "_MG_5671.jpg",
      "_MG_5678.jpg",
      "_MG_5686.jpg",
      "_MG_5717.jpg",
      "_MG_5720.jpg",
      "_MG_5721.jpg",
      "_MG_5794.jpg",
    ],
  },

  "kordestan": {
    title: "KORDESTAN",
    folder: "Kordestan",
    images: [
      "Cover.jpg",
      "_MG_8421 (2).jpg",
      "_MG_8609.jpg",
      "_MG_8615.jpg",
      "_MG_8624.jpg",
      "_MG_8701.jpg",
    ],
  },

  "ashoora-shahroud": {
    title: "ASHOORA SHAHROUD",
    folder: "Ashoora Shahroud",
    images: [
      "_MG_5923.jpg",
      "_MG_5940 (1).jpg",
      "_MG_5948.jpg",
      "_MG_5984.jpg",
      "_MG_5986 (1).jpg",
      "_MG_5988.jpg",
      "_MG_6158.jpg",
      "_MG_6174.jpg",
    ],
  },

  "bastam": {
    title: "BASTAM",
    folder: "Bastam",
    images: [
      "_MG_4308.jpg",
      "_MG_4337.jpg",
    ],
  },

  "iran": {
    title: "IRAN",
    folder: "Iran",
    images: [
      "_MG_5209.jpg",
      "_MG_5326.jpg",
      "_MG_5357.jpg",
      "_MG_5391(1).jpg",
      "_MG_6597.jpg",
    ],
  },

  "mankan-kordestan": {
    title: "MANKAN KORDESTAN",
    folder: "Mankan Kordestan",
    images: [
      "Cover2.jpg",
      "_MG_3131 (1).jpg",
      "_MG_3141 (1).jpg",
      "_MG_3266.jpg",
      "_MG_3277 (1).jpg",
      "_MG_7747 (2).jpg",
      "_MG_7751.jpg",
    ],
  },

  "tak-aks": {
    title: "TAK AKS",
    folder: "Tak Aks",
    images: [
      "20241121_003109.jpg",
    ],
  },

};


export default function ProjectGallery({
  params,
}: {
  params: { slug: string };
}) {

  const project = projects[params.slug as keyof typeof projects];


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
