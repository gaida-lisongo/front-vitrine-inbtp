import React from "react";
import Link from "next/link";

const steps = [
  { step: 1, title: "Trouvez votre programme", icon: "🔍", route: "/programme" },
  { step: 2, title: "Préparer vos dossier", icon: "📁", route: "/dossier" },
  { step: 3, title: "Remplir le formulaire", icon: "📝", route: "/formulaire" },
  { step: 4, title: "Suivre le dossier", icon: "🔔", route: "/suivi-dossier" },
  { step: 5, title: "FAQ", icon: "❓", route: "/faq" },
];

const AdminSteps: React.FC = () => {
  return (
    <div className="bg-primary text-white py-6">
      <div className="container mx-auto text-center mb-6">
        <h2 className="text-3xl font-bold">Admission Simplifiée</h2>
        <p className="text-lg mt-2">
          Démarrez votre parcours en toute simplicité avec nos étapes claires et rapides.
        </p>
      </div>
      <div className="container mx-auto flex justify-between items-center">
        {steps.map((item, index) => (
          <Link key={index} href={item.route} className="flex-1">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminSteps;