import Campus from "@/components/Campus";
import Breadcrumb from "@/components/Common/Breadcrumb";
import MissionCarousel from "@/components/Mission";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos | INBTP",
  description: "Découvrez l'Institut National du Bâtiment et des Travaux Publics, une institution d'excellence en RDC",
  openGraph: {
    title: "À Propos | INBTP",
    description: "Centre d'excellence pour la formation en bâtiment et travaux publics",
    images: [
      {
        url: "/images/logo/logo-inbtp.svg",
        width: 1200,
        height: 630,
        alt: "INBTP Campus",
      },
    ],
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="À Propos"
        description="Découvrez l'INBTP, votre partenaire de confiance dans le domaine du bâtiment et des travaux publics. Notre engagement envers l'excellence et l'innovation façonne l'avenir de la construction au Congo."
    
      />
      <MissionCarousel />
      <Timeline />
      <Campus />
      <Testimonials />
    </>
  );
};

export default AboutPage;
