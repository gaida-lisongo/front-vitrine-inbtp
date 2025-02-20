import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactResearch from "@/components/ContactResearch";
import DoctoralSchool from "@/components/Doctoral";
import ResearchCards from "@/components/Research";
import ScientificJournal from "@/components/Scientifique";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recherche | INBTP",
  description: "Découvrez nos activités de recherche et notre école doctorale",
};

const ResearchPage = () => {
  return (
    <>
        {/* Breadcrumb */}
      <Breadcrumb
        pageName="Recherche"
        description="Trouvez la classe ou le cours qui correspond à vos ambitions."
      />
      <ResearchCards />
      <DoctoralSchool />
      <ScientificJournal />
      <ContactResearch />
    </>
  );
};

export default ResearchPage;