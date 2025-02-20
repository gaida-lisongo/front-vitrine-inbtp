import Image from "next/image";

const ContactResearch = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/recherche/ecole.jpeg"
              alt="Contact École Doctorale"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Contactez l'École Doctorale
              </h2>
              <p className="text-body-color">
                Intéressé par nos programmes doctoraux ? N'hésitez pas à nous contacter.
              </p>
            </div>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nom complet"
                className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:border-primary outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:border-primary outline-none"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:border-primary outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full px-8 py-4 text-white bg-primary rounded-lg hover:bg-opacity-90 transition"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactResearch;