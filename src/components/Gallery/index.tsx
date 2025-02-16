"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";

type GalleryImage = {
  src: string;
  alt: string;
  colSpan: number;
  rowSpan: number;
};

const PhotoGallery: React.FC = () => {
  // Generate 15 images with random span value for columns and rows
  const images: GalleryImage[] = useMemo(() => {
    return Array.from({ length: 19 }, (_, i) => ({
      src: `/images/gallery/image-${i + 1}.jpg`,
      alt: `Image ${i + 1}`,
      colSpan: Math.random() < 0.3 ? 2 : 1, // 30% chance to span 2 columns
      rowSpan: Math.random() < 0.3 ? 2 : 1, // 30% chance to span 2 rows
    }));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <section id="gallery" className="py-6 md:py-8 lg:py-10">
        <div className="container">
          <SectionTitle
            title="Institut National du Baptiment et des Travaux Publics"
            paragraph="Bienvenue à l'Institut National du Bâtiment et des Travaux Publics, un établissement de référence dédié à la formation, la recherche et l'innovation dans les domaines du bâtiment et des travaux publics. Nous nous engageons à fournir une éducation de qualité supérieure et à promouvoir l'excellence professionnelle pour répondre aux besoins croissants de l'industrie."
            center
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gridAutoRows: "250px",
              gap: "0.5rem",
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                  gridColumnEnd: `span ${image.colSpan}`,
                  gridRowEnd: `span ${image.rowSpan}`,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoGallery;