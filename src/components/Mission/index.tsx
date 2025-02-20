'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const missions = [
    {
      id: 1,
      image: '/images/sections/1.jpg',
      title: 'Formation d\'Excellence',
      description: 'Former les ingénieurs de demain aux technologies les plus avancées'
    },
    {
      id: 2,
      image: '/images/sections/2.jpg',
      title: 'Innovation',
      description: 'Encourager l\'innovation et la recherche appliquée'
    },
    {
      id: 3,
      image: '/images/sections/3.jpg',
      title: 'Partenariats Industriels',
      description: 'Développer des partenariats solides avec le secteur industriel'
    },
    {
      id: 4,
      image: '/images/sections/4.jpg',
      title: 'Impact Social',
      description: 'Contribuer au développement socio-économique de la RDC'
    }
];

const Mission = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Défilement automatique
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % missions.length);
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[400px]">
      {/* Slides */}
      {missions && missions.map((mission, index) => (
        <div
          key={mission.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Image de fond */}
          <div className="relative w-full h-full ">
            <Image
              src={mission.image}
              alt={mission.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          </div>

          {/* Contenu */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-1">
                  {mission.title}
                </h2>
                <p className="text-xl md:text-2xl">
                  {mission.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicateurs de navigation */}
      <div className="absolute bottom-10 left-0 right-0">
        <div className="flex justify-center gap-3">
          {missions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'}`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;