import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contactez-nous"
        description="Besoin d'information ? Une question ? N'hésitez pas à nous contacter. Notre équipe est à votre écoute pour vous accompagner dans vos démarches."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
