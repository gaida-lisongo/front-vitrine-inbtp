const Timeline = () => {
  const events = [
    {
      year: '1948',
      title: 'Fondation',
      description: 'Création de l\'ENIBTP'
    },
    {
      year: '1960',
      title: 'Indépendance',
      description: 'Adaptation des programmes post-indépendance'
    },
    {
      year: '1990',
      title: 'Modernisation',
      description: 'Rénovation des infrastructures et équipements'
    },
    {
      year: '2020',
      title: 'Innovation',
      description: 'Lancement des nouveaux programmes'
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-10 text-3xl font-bold text-center text-black dark:text-white">
          Notre Histoire
        </h2>
        
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2" />
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={event.year} className="relative flex items-center justify-center">
                {/* Contenu gauche */}
                <div className="w-1/2 pr-16 text-right">
                  {index % 2 === 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-primary">{event.year}</h3>
                      <h4 className="text-lg font-semibold">{event.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                    </div>
                  )}
                </div>

                {/* Point central */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10">
                  <div className="absolute w-8 h-8 bg-primary/30 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
                </div>

                {/* Contenu droite */}
                <div className="w-1/2 pl-16">
                  {index % 2 === 1 && (
                    <div>
                      <h3 className="text-xl font-bold text-primary">{event.year}</h3>
                      <h4 className="text-lg font-semibold">{event.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;