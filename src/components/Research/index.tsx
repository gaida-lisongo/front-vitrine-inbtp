import Image from "next/image";

const cards = [
  {
    title: "Corps Professoral",
    description: "Une équipe d'experts reconnus dans leur domaine",
    icon: "/images/recherche/salumu.jpg",
    stats: "25+ Professeurs",
  },
  {
    title: "Unités de Recherche",
    description: "Des laboratoires à la pointe de la technologie",
    icon: "/images/recherche/infra.jpeg",
    stats: "8 Laboratoires",
  },
  {
    title: "Services à la Recherche",
    description: "Un accompagnement complet des chercheurs",
    icon: "/images/recherche/search.png",
    stats: "Support 24/7",
  },
];

const ResearchCards = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={card.icon}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              </div>

              {/* Content Container */}
              <div className="p-6 relative">
                {/* Stats Badge */}
                <div className="absolute -top-5 right-6 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {card.stats}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {card.description}
                </p>

                {/* Optional: Add a subtle line decoration */}
                <div className="mt-4 h-1 w-16 bg-primary rounded-full transform origin-left group-hover:scale-x-150 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchCards;