"use client";
import { PageProps } from "@/types/blog";
import Image from "next/image";
import { use } from "react";


type Course = {
  id: number;
  title: string;
  teacherName: string;
  teacherImage: string;
  teachingUnit: string; // Unité d'enseignement
  semester: "Premier" | "Second";
  credits: number;
  description: string;
  objectives: string[];
};


const mockCourses: Course[] = [
    {
      id: 1,
      title: "Résistance des Matériaux",
      teacherName: "Dr. Robert Smith",
      teacherImage: "/images/blog/author-02.png",
      teachingUnit: "UE1: Sciences Fondamentales",
      semester: "Premier",
      credits: 6,
      description: "Étude approfondie des propriétés mécaniques des matériaux de construction.",
      objectives: [
        "Comprendre les principes de la résistance des matériaux",
        "Maîtriser les calculs de déformation",
        "Analyser les contraintes dans les structures"
      ]
    },
    {
      id: 2,
      title: "Mécanique des Sols",
      teacherName: "Prof. Marie Durant",
      teacherImage: "/images/blog/author-02.png",
      teachingUnit: "UE2: Géotechnique",
      semester: "Second",
      credits: 4,
      description: "Analyse du comportement des sols et des fondations.",
      objectives: [
        "Caractériser les sols",
        "Dimensionner les fondations",
        "Évaluer la stabilité des terrains"
      ]
    },
    // ... plus de cours
  ];

const BlogContent = ({ params} : PageProps) => {
    // Récupération de l'ID depuis l'URL
    const { id } = use(params);
  return (
    <div className="w-full px-4 lg:w-8/12">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockCourses.map((course) => (
            <div key={course.id} className="bg-white dark:bg-gray-dark rounded-xl shadow-md overflow-hidden">
              {/* Header with teacher info */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={course.teacherImage}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-black dark:text-white">
                      Prof. {course.teacherName}
                    </h3>
                    <span className="text-sm text-body-color">Titulaire</span>
                  </div>
                </div>

                {/* Course info */}
                <h2 className="text-xl font-bold text-black dark:text-white mb-2">
                  {course.title}
                </h2>
                
                <span className="inline-block mb-3 rounded-full bg-primary/10 px-4 py-1 text-sm text-primary">
                  {course.teachingUnit}
                </span>

                <p className="text-body-color mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Footer with metadata */}
                <div className="flex items-center justify-between border-t border-body-color/10 pt-4">
                  <div className="flex space-x-4 text-sm text-body-color">
                    <span>Semestre {course.semester}</span>
                    <span>{course.credits} Crédits</span>
                  </div>
                  
                  <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80">
                    Voir les détails
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;