"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AdminSteps from "@/components/Process";

// Update the type definition
type Programme = {
  id: number;
  title: string;
  description: string;
  facultyCode: string; // e.g. "FST", "FSEG", etc.
  cycle: "Licence" | "Master" | "Doctorat" | "Préparatoire";
  level: number; // 1,2,3 for Licence, 1,2 for Master etc
  orientation: string;
  subjectCount: number;
  image: string;
};

// Update mock data
const allProgrammes: Programme[] = [
  {
    id: 1,
    title: "Génie Civil",
    description: "Formation en conception et réalisation d'ouvrages.",
    facultyCode: "FST",
    cycle: "Licence",
    level: 1,
    orientation: "Construction",
    subjectCount: 12,
    image: "/images/about/baptiment.png",
  },
  {
    id: 2,
    title: "Management de Projet",
    description: "Formation en gestion de projets de construction.",
    facultyCode: "FSEG",
    cycle: "Master",
    level: 1,
    orientation: "Gestion",
    subjectCount: 15,
    image: "/images/about/baptiment.png",
  },
  {
    id: 3,
    title: "Architecture",
    description: "Formation en conception architecturale et urbanisme.",
    facultyCode: "FST",
    cycle: "Licence",
    level: 2,
    orientation: "Design",
    subjectCount: 18,
    image: "/images/about/baptiment.png",
  },
  {
    id: 4,
    title: "Géotechnique",
    description: "Étude des sols et fondations.",
    facultyCode: "FST",
    cycle: "Master",
    level: 2,
    orientation: "Sol",
    subjectCount: 20,
    image: "/images/about/baptiment.png",
  },
  {
    id: 5,
    title: "BTP Management",
    description: "Gestion des entreprises de construction.",
    facultyCode: "FSEG",
    cycle: "Licence",
    level: 3,
    orientation: "Management",
    subjectCount: 14,
    image: "/images/about/baptiment.png",
  },
  {
    id: 6,
    title: "Structures Avancées",
    description: "Conception de structures complexes.",
    facultyCode: "FST",
    cycle: "Master",
    level: 2,
    orientation: "Structure",
    subjectCount: 16,
    image: "/images/about/baptiment.png",
  },
  {
    id: 7,
    title: "Hydraulique",
    description: "Étude des systèmes hydrauliques.",
    facultyCode: "FST",
    cycle: "Licence",
    level: 2,
    orientation: "Eau",
    subjectCount: 13,
    image: "/images/about/baptiment.png",
  },
  {
    id: 8,
    title: "Urbanisme",
    description: "Planification et développement urbain.",
    facultyCode: "FST",
    cycle: "Master",
    level: 1,
    orientation: "Urban",
    subjectCount: 17,
    image: "/images/about/baptiment.png",
  },
  {
    id: 9,
    title: "Matériaux Innovants",
    description: "Recherche sur les nouveaux matériaux.",
    facultyCode: "FST",
    cycle: "Doctorat",
    level: 1,
    orientation: "Recherche",
    subjectCount: 22,
    image: "/images/about/baptiment.png",
  },
  {
    id: 10,
    title: "Génie Environnemental",
    description: "Impact environnemental des constructions.",
    facultyCode: "FST",
    cycle: "Licence",
    level: 3,
    orientation: "Environnement",
    subjectCount: 15,
    image: "/images/about/baptiment.png",
  },
  {
    id: 11,
    title: "BIM Management",
    description: "Gestion de la modélisation des informations du bâtiment.",
    facultyCode: "FSEG",
    cycle: "Master",
    level: 2,
    orientation: "Digital",
    subjectCount: 19,
    image: "/images/about/baptiment.png",
  },
  {
    id: 12,
    title: "Prépa Intégrée",
    description: "Cycle préparatoire aux études d'ingénieur.",
    facultyCode: "FST",
    cycle: "Préparatoire",
    level: 1,
    orientation: "Sciences",
    subjectCount: 10,
    image: "/images/about/baptiment.png",
  },
  {
    id: 13,
    title: "Génie Électrique BTP",
    description: "Installation et maintenance électrique dans le bâtiment.",
    facultyCode: "FST",
    cycle: "Licence",
    level: 2,
    orientation: "Électricité",
    subjectCount: 14,
    image: "/images/about/baptiment.png",
  },
  {
    id: 14,
    title: "Efficacité Énergétique",
    description: "Optimisation énergétique des bâtiments.",
    facultyCode: "FST",
    cycle: "Master",
    level: 1,
    orientation: "Énergie",
    subjectCount: 18,
    image: "/images/about/baptiment.png",
  },
  {
    id: 15,
    title: "Finance Construction",
    description: "Gestion financière des projets de construction.",
    facultyCode: "FSEG",
    cycle: "Master",
    level: 2,
    orientation: "Finance",
    subjectCount: 16,
    image: "/images/about/baptiment.png",
  },
  {
    id: 16,
    title: "Génie Climatique",
    description: "Systèmes de climatisation et ventilation.",
    facultyCode: "FST",
    cycle: "Licence",
    level: 3,
    orientation: "Climat",
    subjectCount: 15,
    image: "/images/about/baptiment.png",
  },
  {
    id: 17,
    title: "Recherche Matériaux",
    description: "Innovation dans les matériaux de construction.",
    facultyCode: "FST",
    cycle: "Doctorat",
    level: 1,
    orientation: "Recherche",
    subjectCount: 24,
    image: "/images/about/baptiment.png",
  },
  {
    id: 18,
    title: "Marketing Immobilier",
    description: "Stratégies marketing dans l'immobilier.",
    facultyCode: "FSEG",
    cycle: "Licence",
    level: 3,
    orientation: "Marketing",
    subjectCount: 13,
    image: "/images/about/baptiment.png",
  },
  {
    id: 19,
    title: "Géométrie Architecture",
    description: "Mathématiques appliquées à l'architecture.",
    facultyCode: "FST",
    cycle: "Préparatoire",
    level: 1,
    orientation: "Maths",
    subjectCount: 9,
    image: "/images/about/baptiment.png",
  },
  {
    id: 20,
    title: "Smart Building",
    description: "Technologies intelligentes pour les bâtiments.",
    facultyCode: "FST",
    cycle: "Master",
    level: 2,
    orientation: "Digital",
    subjectCount: 21,
    image: "/images/about/baptiment.png",
  }
];

// Categories and corresponding filter options
const categories = ["Facultés", "Cycles", "Niveaux", "Matières"];
const filterOptions: Record<string, string[]> = {
  Facultés: ["FST", "FSEG"],
  Cycles: ["Licence", "Master", "Doctorat", "Préparatoire"],
  Niveaux: ["Niveau 1", "Niveau 2", "Niveau 3"],
  Matières: ["Matières ≥ 8", "Matières ≥ 12", "Matières ≥ 20"],
};

const itemsPerPage = 6;

const ProgrammesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCheckboxChange = (option: string, checked: boolean) => {
    if (checked) {
      setSelectedFilters((prev) => [...prev, option]);
    } else {
      setSelectedFilters((prev) => prev.filter((item) => item !== option));
    }
    setCurrentPage(1);
  };

  // Update the filtering logic in the useMemo hook
  const filteredProgrammes = useMemo(() => {
    let filtered = allProgrammes;

    // Apply search filter
    if (searchTerm.trim()) {
      filtered = filtered.filter(programme =>
        programme.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filters
    if (selectedCategory && selectedFilters.length) {
      filtered = filtered.filter(programme => {
        switch (selectedCategory) {
          case "Facultés":
            return selectedFilters.includes(programme.facultyCode);
          case "Cycles":
            return selectedFilters.includes(programme.cycle);
          case "Niveaux":
            return selectedFilters.some(filter => 
              filter === `Niveau ${programme.level}`
            );
          case "Matières":
            const thresholds = selectedFilters.map(filter =>
              parseInt(filter.replace(/\D/g, ""), 10)
            );
            return thresholds.some(t => programme.subjectCount >= t);
          default:
            return true;
        }
      });
    }

    return filtered;
  }, [selectedCategory, selectedFilters, searchTerm]);

  const totalPages = Math.ceil(filteredProgrammes.length / itemsPerPage);
  const displayedProgrammes = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProgrammes.slice(start, start + itemsPerPage);
  }, [filteredProgrammes, currentPage]);

  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Programmes"
        description="Trouvez la classe ou le cours qui correspond à vos ambitions."
      />

      {/* Recherche Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher une classe ou un cours..."
              className="w-full p-3 pl-10 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 12.15z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Phases */}
      <section className="py-10">
        <AdminSteps />
      </section>

      {/* Sidebar with Categories and Filters */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4">
            {/* Catégories */}
            <div className="shadow bg-white rounded p-4 mb-10">
              <h3 className="border-b border-gray-200 px-2 pb-2 text-lg font-semibold text-black">
                Catégories
              </h3>
              <ul className="px-2 py-4 space-y-3">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => {
                        setSelectedCategory(cat);
                        setSelectedFilters([]);
                        setCurrentPage(1);
                      }}
                      className={`w-full text-left text-base font-medium ${
                        selectedCategory === cat
                          ? "text-primary font-bold"
                          : "text-gray-700"
                      } hover:underline`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Filtres */}
            {selectedCategory && (
              <div className="shadow bg-white rounded p-4">
                <h3 className="border-b border-gray-200 px-2 pb-2 text-lg font-semibold text-black">
                  Filtrer par {selectedCategory}
                </h3>
                <ul className="px-2 py-4 space-y-3">
                  {filterOptions[selectedCategory]?.map((option) => (
                    <li key={option} className="flex items-center">
                      <input
                        id={option}
                        type="checkbox"
                        checked={selectedFilters.includes(option)}
                        onChange={(e) =>
                          handleCheckboxChange(option, e.target.checked)
                        }
                        className="w-4 h-4 text-primary border-gray-300 rounded"
                      />
                      <label htmlFor={option} className="ml-2 text-gray-700">
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>

          {/* Main Content: Filtered Programmes */}
          <div className="w-full md:w-3/4">
            {displayedProgrammes.length ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayedProgrammes.map((programme) => (
                  // Update the card display
                  <div key={programme.id} 
                    className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="relative">
                      <img
                        src={programme.image}
                        alt={programme.title}
                        className="w-full h-40 object-cover rounded-t-md"
                      />
                      <span className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-sm">
                        {programme.facultyCode}
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{programme.title}</h3>
                        <span className="text-sm text-gray-500">Niveau {programme.level}</span>
                      </div>
                      <div className="flex gap-2 mb-2">
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                          {programme.cycle}
                        </span>
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                          {programme.orientation}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{programme.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {programme.subjectCount} matières
                        </span>
                        <Link href={`/programme/${programme.id}`}>
                          <button className="px-4 py-2 bg-primary text-white rounded transition-colors duration-300 hover:bg-primary-dark">
                            En savoir plus
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">Aucun élément trouvé.</p>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded ${
                      currentPage === page ? "bg-primary text-white" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>    
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgrammesPage;