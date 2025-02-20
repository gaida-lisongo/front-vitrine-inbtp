import Link from 'next/link';

const categories = [
  {
    title: "Génie Civil",
    count: 45,
    description: "Construction, structures et matériaux",
    slug: "GENIE CIVIL",
    image: "/images/scientifique/genie-civil.jpg"
  },
  {
    title: "Environnement",
    count: 32,
    description: "Développement durable et impact environnemental",
    slug: "ENVIRONNEMENT",
    image: "/images/scientifique/environnement.jpg"
  },
  {
    title: "Innovation",
    count: 28,
    description: "Nouvelles technologies et méthodes",
    slug: "INNOVATION",
    image: "/images/scientifique/innovation.jpg"
  },
];

const ScientificJournal = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Revue Scientifique</h2>
          <p className="text-xl text-body-color">
            Découvrez nos publications de recherche
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              href={`/articles/${category.slug}`} 
              key={index}
              className="group transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                {/* Image d'arrière-plan */}
                <div className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                     style={{ backgroundImage: `url(${category.image})` }} 
                />
                
                <div className="relative p-8 z-10">
                  {/* Compteur avec cercle animé */}
                  <div className="relative w-20 h-20 mb-6 mx-auto">
                    <div className="absolute inset-0 rounded-full border-4 border-primary/30" />
                    <div className="absolute inset-0 rounded-full border-4 border-primary border-r-transparent rotate-0 group-hover:rotate-180 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{category.count}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-body-color text-center mb-6">
                    {category.description}
                  </p>

                  {/* Bouton "Voir les articles" */}
                  <div className="text-center">
                    <span className="inline-flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                      Voir les articles
                      <svg 
                        className="w-5 h-5 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" 
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScientificJournal;