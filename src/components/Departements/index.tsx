"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { homeService } from "@/api/home";
import Image from 'next/image';

type Section = {
  id: string | number;
  title: string;
  href: string;
  description?: string; // full HTML from API
  presentationArray?: React.ReactNode[]; // parsed description as an array (only <p> content)
};

// Use the native DOMParser to extract only the content of <p> tags from the HTML string
const parseDescriptionToArray = (html: string): React.ReactNode[] => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const paragraphs = Array.from(doc.querySelectorAll("p"));
  return paragraphs.map((p, i) => (
    <p key={i} dangerouslySetInnerHTML={{ __html: p.innerHTML }} />
  ));
};

const Departements: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    homeService
      .section()
      .then((api) => {
        const data: Section[] = api.data.map((section: any) => {
          const fullDescription = section.description || "";
          return {
            id: section.id,
            title: section.designation,
            href: section.url,
            description: fullDescription,
            presentationArray: parseDescriptionToArray(fullDescription),
          };
        });
        setSections(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Auto slide transition every 3 seconds
  useEffect(() => {
    if (!sections.length) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
    }, 25000);
    return () => clearInterval(interval);
  }, [sections]);

  if (!sections.length)
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-4 border-t-primary border-gray-200"></div>
      </div>
    );

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {sections.map((section, index) => (
        <div key={section.id} className="absolute top-0 left-0 w-full h-full">
          <Image
            src={`/images/sections/${index + 1}.jpg`}
            alt={section.title}
            width={300}
            height={200}
            className="w-full h-auto"
          />
          {/* Film overlay to dim the background image */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {index === current && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="bg-white bg-opacity-80 p-8 mt-20 rounded text-center space-y-4 max-w-[600px]">
                <h2 className="text-4xl font-bold text-gray-900">
                  {section.title}
                </h2>
                {/* Display only the parsed content of <p> tags */}
                <div className="text-lg text-gray-700">
                  {section.presentationArray?.map((node, i) => (
                    <div key={i}>{node}</div>
                  ))}
                </div>
                <Link
                  href={
                    section.href.startsWith("http")
                      ? section.href
                      : `https://${section.href}`
                  }
                  target="_blank"
                  className="inline-block px-6 py-3 bg-primary text-white rounded-md font-semibold"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          )}
        </div>
      ))}
      {/* Dot indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center space-x-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Departements;