import Image from 'next/image';

const Campus = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/about/baptiment.png"
              alt="Campus ENIBTP"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">
              Notre Campus
            </h2>
            
            <div className="space-y-4">
              <p className="text-body-color dark:text-gray-400">
                Situé au cœur de Kinshasa, notre campus moderne offre un environnement d&apos;apprentissage idéal pour nos étudiants.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Infrastructures</h3>
                  <ul className="list-disc list-inside text-body-color">
                    <li>Laboratoires modernes</li>
                    <li>Bibliothèque</li>
                    <li>Salles multimédia</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Services</h3>
                  <ul className="list-disc list-inside text-body-color">
                    <li>Cafétéria</li>
                    <li>Espaces d&apos;études</li>
                    <li>Zones sportives</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;