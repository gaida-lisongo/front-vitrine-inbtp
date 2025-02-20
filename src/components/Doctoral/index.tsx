const DoctoralSchool = () => {
    return (
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div className="text-white">
              <h2 className="mb-6 text-3xl font-bold">École Doctorale INBTP</h2>
              <p className="mb-8 text-lg">
                Notre école doctorale forme les futurs leaders en génie civil et construction durable.
                Un programme d'excellence pour façonner l'avenir de l'ingénierie en Afrique.
              </p>
              <p>L&apos;école doctorale est le centre d&apos;excellence pour l&apos;innovation.</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  Programme international
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  Bourses disponibles
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  Encadrement personnalisé
                </li>
              </ul>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/your-video-id"
                title="INBTP École Doctorale"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  
  export default DoctoralSchool;